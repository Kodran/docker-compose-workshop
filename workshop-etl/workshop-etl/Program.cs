using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using mysqlefcore;
using Newtonsoft.Json;
using workshop_etl.Models;

namespace workshop_etl
{
    class Program
    {
        static void Main(string[] args)
        {                      
            Console.WriteLine("Job started");
            Task.Run(async () => await StartTimer()).Wait();
        }

        public static async Task StartTimer()
        {

            await Task.Run(async () =>
            {
                while (true)
                {
                    Console.WriteLine("timer");
                    await GetConsumers();
                    await Task.Delay(10000);                   
                }
            });

        }

        private async static Task GetConsumers()
        {
            try
            {
                using var client = new HttpClient();
                var content = await client.GetStringAsync("http://host.docker.internal:9000/consumer");
                Console.WriteLine(content);
                var consumers = JsonConvert.DeserializeObject<List<ConsumerDTO>>(content);
                if (consumers.Count > 0)
                {
                    await SaveTransformedConsumer(consumers);
                    Console.WriteLine(content);
                }
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
            }
            
        }

        private async static Task SaveTransformedConsumer(IEnumerable<ConsumerDTO> consumer)
        {
            using (var dbContext = new ConsumerContext())
            {
                // Creates the database if not exists
                dbContext.Database.EnsureCreated();
                var comsumers = consumer.Select(c => c.ToConsumerEntity()).ToList();                
                dbContext.Consumer.AddRange(comsumers);
                await dbContext.SaveChangesAsync();
            }
        }
    }
}
