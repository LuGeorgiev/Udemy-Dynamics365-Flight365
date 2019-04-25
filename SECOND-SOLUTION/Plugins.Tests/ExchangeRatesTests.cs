using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Crm.Sdk.Fakes;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using sf365;
using SF365.Plugins;

namespace Plugins.Tests
{
    /// <summary>
    /// Summary description for ExchangeRatesTests
    /// </summary>
    [TestClass]
    public class ExchangeRatesTests
    {

        [TestMethod]
        [TestCategory("Unit Tests")]
        public void ExchangeRateTest()
        {
            using (var pipeline = new PluginPipeline(
               "sf365_updateexchangerates",
               FakeStages.PreOperation,
               new Entity("sf365_updateexchangerates")))
            {
                pipeline.FakeService.ExpectExecute((OrganizationRequest request) =>
                {

                    return new RetrieveMultipleResponse()
                    {
                        ["EntityCollection"] = new Microsoft.Xrm.Sdk.EntityCollection(
                        new Entity[]
                        {
                            new TransactionCurrency()
                            {
                                TransactionCurrencyId = Guid.NewGuid(),
                                CurrencyName = "CAD",
                                CurrencySymbol ="CAD"
                            },
                            new TransactionCurrency()
                            {
                                TransactionCurrencyId=Guid.NewGuid(),
                                CurrencyName ="GBP",
                                CurrencySymbol = "GBP"
                            }
                        })
                    };
                });

                pipeline.FakeService.ExpectUpdate((Entity record) => { });
                pipeline.FakeService.ExpectUpdate((Entity record) => { });

                var plugin = new ExchangeRateActionPlugin();

                pipeline.Execute(plugin);

                pipeline.FakeService.AssertExpectedCalls();
            }
        }
    }
}
