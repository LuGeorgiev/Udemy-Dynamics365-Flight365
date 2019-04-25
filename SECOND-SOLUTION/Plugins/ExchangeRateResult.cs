using System.Collections.Generic;
using System.Runtime.Serialization;

namespace SF365.Plugins
{
    [DataContract]
    public class ExchangeRateResult
    {
        //[DataMember]
        //public string @base { get; set; }

        //[DataMember]
        //public string date { get; set; }

        //[DataMember]
        //public JsonDictionary<double> rates { get; set; }

        [DataMember]
        public Dictionary<string, double> rates { get; set; } = new Dictionary<string, double>();
    }
}