﻿using Microsoft.Xrm.Sdk;

namespace SF365Plugins
{
    [CrmPluginRegistration(MessageNameEnum.Update,
        "account",
        StageEnum.PreOperation,
        ExecutionModeEnum.Synchronous,
        "name",
        "Pre-Update account",
        1000,
        IsolationModeEnum.Sandbox,
        Image1Name ="PreImage",
        Image1Type =ImageTypeEnum.PreImage,
        Image1Attributes ="name")]
    public class AccountPlugin : PluginBase
    {
        public AccountPlugin() 
            : base(typeof(AccountPlugin))
        {
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localcontext)
        {
            throw new InvalidPluginExecutionException("Under construction..");
        }
    }
}
