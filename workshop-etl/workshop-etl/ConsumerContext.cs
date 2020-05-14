using Microsoft.EntityFrameworkCore;

using workshop_etl.Models;

namespace mysqlefcore
{
    public class ConsumerContext : DbContext
    {
        public DbSet<Consumer> Consumer { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=host.docker.internal;database=Consumer;user=admin;password=Password11");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
          

            modelBuilder.Entity<Consumer>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.ConsumerId).IsRequired();
                entity.Property(e => e.ConsumerName).IsRequired();
                entity.Property(e => e.ConsumerCredit).IsRequired();
            });
        }
    }
}