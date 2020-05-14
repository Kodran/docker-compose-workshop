using System.Collections.Generic;
using workshop_etl.Models;

namespace workshop_etl
{
    public static class ExtensionMethods
    {
        public static Consumer ToConsumerEntity(this ConsumerDTO consumerToTransform)
        {
            var consumer = new Consumer()
            {
                ConsumerId = consumerToTransform._id,
                ConsumerName = consumerToTransform.name,
                ConsumerCredit = consumerToTransform.credit
            };

            return consumer;
        }
    }
    public class ConsumerComparer : IEqualityComparer<Consumer>
    {
        public bool Equals(Consumer x, Consumer y)
        {
            return x.ConsumerName.Equals(y.ConsumerName) && (x.ConsumerId == y.ConsumerId);
        }

        public int GetHashCode(Consumer obj)
        {
            return string.Format("{0}{1}", obj.ConsumerId, obj.ConsumerName).GetHashCode();
        }
    }
}