using LibeyTechnicalTestDomain.EFCore;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
using Microsoft.EntityFrameworkCore;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Infrastructure
{
    public class LibeyUserRepository : ILibeyUserRepository
    {
        private readonly Context _context;
        public LibeyUserRepository(Context context)
        {
            _context = context;
        }
        public void Create(LibeyUser libeyUser)
        {
            _context.LibeyUsers.Add(libeyUser);
            _context.SaveChanges();
        }
 
        public LibeyUserResponse FindResponse(string documentNumber)
        {
            var libeyUser = _context.LibeyUsers
                            .Include(u => u.Ubigeo)
                            .FirstOrDefault(u => u.DocumentNumber == documentNumber);

            if (libeyUser == null)
                return new LibeyUserResponse();

            return new LibeyUserResponse()
            {
                DocumentNumber = libeyUser.DocumentNumber,
                Active = libeyUser.Active,
                Address = libeyUser.Address,
                DocumentTypeId = libeyUser.DocumentTypeId,
                Email = libeyUser.Email,
                FathersLastName = libeyUser.FathersLastName,
                MothersLastName = libeyUser.MothersLastName,
                Name = libeyUser.Name,
                Password = libeyUser.Password,
                Phone = libeyUser.Phone,
                UbigeoCode = libeyUser.UbigeoCode,
                RegionCode = libeyUser.Ubigeo != null ? libeyUser.Ubigeo.RegionCode : null,
                ProvinceCode = libeyUser.Ubigeo != null ? libeyUser.Ubigeo.ProvinceCode : null
            };
        }

        public LibeyUser Find(string documentNumber)
        {
            return _context.LibeyUsers.FirstOrDefault(u => u.DocumentNumber == documentNumber);
        }

        public void Update(LibeyUser libeyUser)
        {
            _context.LibeyUsers.Update(libeyUser);
            _context.SaveChanges();
        }

        public void Delete(string documentNumber)
        {
            var user = _context.LibeyUsers.FirstOrDefault(u => u.DocumentNumber == documentNumber);
            if (user != null)
            {
                _context.LibeyUsers.Remove(user);
                _context.SaveChanges();
            }
        }

        public IEnumerable<LibeyUserResponse> GetAll()
        {
            return _context.LibeyUsers.Select(libeyUser => new LibeyUserResponse()
            {
                DocumentNumber = libeyUser.DocumentNumber,
                Active = libeyUser.Active,
                Address = libeyUser.Address,
                DocumentTypeId = libeyUser.DocumentTypeId,
                Email = libeyUser.Email,
                FathersLastName = libeyUser.FathersLastName,
                MothersLastName = libeyUser.MothersLastName,
                Name = libeyUser.Name,
                Password = libeyUser.Password,
                Phone = libeyUser.Phone
            }).ToList();
        }

 

        public bool Exists(string documentNumber)
        {
            return _context.LibeyUsers.Any(u => u.DocumentNumber == documentNumber);
        }
    }
}