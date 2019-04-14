using System;
using Microsoft.Crm.Sdk.Fakes;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using SF365.Plugins;

namespace Plugin.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        [TestCategory("Unit Test")]
        public void TestAccountPlugin()
        {
            using (var pipeline = new PluginPipeline(
                FakeMessageNames.Create,
                FakeStages.PreOperation,
                new Entity("contact")))
            {
                var plugin = new AccountPlugin();

                try
                {
                    pipeline.Execute(plugin);
                    Assert.Fail("Exception not thrown");
                }
                catch (InvalidPluginExecutionException ex)
                {
                    Assert.IsTrue(ex.Message.Contains("Working on it.."), "Must throw exception");
                }
            }
        }
    }
}
