using SF365Plugins;
using System;
using System.Collections.Generic;
using System.Linq;
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
            base.ExecuteCrmPlugin(localcontext);
        }
    }
}
