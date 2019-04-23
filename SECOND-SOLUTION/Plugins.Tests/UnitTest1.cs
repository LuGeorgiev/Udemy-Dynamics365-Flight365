using System;
using Microsoft.Crm.Sdk.Fakes;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using SF365Plugins;

namespace Plugins.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        [TestCategory("Unit Tests")]
        public void TestMethod1()
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
                    Assert.IsTrue(ex.Message.Contains("Under"), "Must throw exception");                    
                }
            }
        }
    }
}
