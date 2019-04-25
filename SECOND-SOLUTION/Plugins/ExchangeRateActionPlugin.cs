using Microsoft.Xrm.Sdk;
using sf365;
using SF365Plugins;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;

namespace SF365.Plugins
{
    [CrmPluginRegistration("sf365_updateexchangerates",
        "",
        StageEnum.PostOperation,
        ExecutionModeEnum.Synchronous,
        "name",
        "sf365_updateexchangerates",
        1000,
        IsolationModeEnum.Sandbox)]
    public class ExchangeRateActionPlugin: PluginBase
    {
        public ExchangeRateActionPlugin() 
            : base(typeof(ExchangeRateActionPlugin))
        {
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localcontext)
        {
            var execute = Task.Run(async () => await UpdateExchangeRates(localcontext));
            Task.WaitAll(execute);
        }

        private async Task UpdateExchangeRates(LocalPluginContext localcontext)
        {
            var currencyList = (from c in new XrmSvc(localcontext.OrganizationService)
                                                    .CreateQuery<TransactionCurrency>()
                                select new TransactionCurrency
                                {
                                    CurrencySymbol = c.CurrencySymbol,
                                    TransactionCurrencyId = c.TransactionCurrencyId
                                }).ToArray();

            var baseCurrency = "EUR";
            var currentISOCodes = string.Join(",", currencyList
                                                    .Select(x => x.CurrencySymbol)
                                                    .Where(x=>x != baseCurrency)
                                                    .ToArray());
            using (HttpClient client = new HttpClient())
            {
                var webApiUrl = "http://data.fixer.io/api/latest?access_key=";
                var accessKey = "43eb1b0960d03281d3b0da30693df254&symbols=";
                var suffix = "&format=1";

                var requestUri = new Uri(webApiUrl + accessKey + currentISOCodes + suffix);
                var request = new HttpRequestMessage(HttpMethod.Get, requestUri);
                var response = await client.SendAsync(request);

                if (!response.IsSuccessStatusCode)
                {
                    throw new InvalidPluginExecutionException("Exchangerate service returned: " + response);
                }

                var json = response.Content.ReadAsStringAsync().Result;
                var setting = new DataContractJsonSerializerSettings()
                {
                    UseSimpleDictionaryFormat = true
                };
                ExchangeRateResult result = new ExchangeRateResult();

                using (var ms = new MemoryStream(Encoding.Unicode.GetBytes(json)))
                {
                    var serializer = new DataContractJsonSerializer(typeof(ExchangeRateResult),setting);

                    result = (ExchangeRateResult)serializer.ReadObject(ms);
                }

                foreach (var currency in currencyList.Where(x=>x.CurrencySymbol!= baseCurrency))
                {
                    if (result.rates.Keys.Contains(currency.CurrencySymbol))
                    {
                        var update = new TransactionCurrency
                        {
                            TransactionCurrencyId = currency.TransactionCurrencyId,
                            ExchangeRate = (decimal?)result.rates[currency.CurrencySymbol]
                        };

                        localcontext.OrganizationService.Update(update);
                    }
                }
            }
        }
    }
}
