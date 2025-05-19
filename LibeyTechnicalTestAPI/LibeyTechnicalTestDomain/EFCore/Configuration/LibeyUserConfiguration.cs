using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace LibeyTechnicalTestDomain.EFCore.Configuration
{
    internal class LibeyUserConfiguration : IEntityTypeConfiguration<LibeyUser>
    {
        public void Configure(EntityTypeBuilder<LibeyUser> builder)
        {
            builder.ToTable("LibeyUser").HasKey(x => x.DocumentNumber);
            // Clave primaria
            builder.HasKey(x => x.DocumentNumber);

            builder.HasOne(u => u.Ubigeo)
                            .WithMany() // porque Ubigeo no tiene colección de LibeyUsers
                            .HasForeignKey(u => u.UbigeoCode)
                            .OnDelete(DeleteBehavior.Restrict); // evita borrado en cascada (opcional)
        }

    }
}
