using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

namespace SF365.Plugins
{
    public class JsonDictionary<T> : ISerializable
    {
        private Dictionary<string, T> dict = new Dictionary<string, T>();

        public JsonDictionary()
        {
        }

        protected JsonDictionary(SerializationInfo info, StreamingContext context)
        {
            foreach (var entity in info)
            {
                dict.Add(entity.Name, (T)Convert.ChangeType(entity.Value, typeof(T)));
            }
        }

        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            foreach (var key in dict.Keys)
            {
                info.AddValue(key, dict[key]);
            }
        }

        public void Add(string key, T value)
        {
            dict.Add(key, value);
        }

        public string[] Keys
            => dict.Keys.ToArray();
        public T this[string index]
        {
            set { dict[index] = value; }
            get { return dict[index]; }
        }
    }
}
