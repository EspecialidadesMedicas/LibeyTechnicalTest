using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application
{
    public class LibeyUserAggregate : ILibeyUserAggregate
    {
        private readonly ILibeyUserRepository _repository;
        public LibeyUserAggregate(ILibeyUserRepository repository)
        {
            _repository = repository;
        }
        public void Create(UserUpdateOrCreateCommand command)
        {
            var user = new LibeyUser(
                command.DocumentNumber,
                command.DocumentTypeId,
                command.Name,
                command.FathersLastName,
                command.MothersLastName,
                command.Address,
                command.UbigeoCode,
                command.Phone,
                command.Email,
                command.Password
            );

            _repository.Create(user);
        }

        public LibeyUserResponse FindResponse(string documentNumber)
        {
            return _repository.FindResponse(documentNumber);
        }

        public void Update(string documentNumber, UserUpdateOrCreateCommand command)
        {
            var user = _repository.Find(documentNumber);

            if (user == null)
                throw new Exception("User not found");

            user.UpdateInfo(
               command.Name,
               command.FathersLastName,
               command.MothersLastName,
               command.Address,
               command.UbigeoCode,
               command.Phone,
               command.Email,
               command.Password
           );

            _repository.Update(user);
        }
        public void Delete(string documentNumber)
        {
            _repository.Delete(documentNumber);
        }
        public IEnumerable<LibeyUserResponse> GetAll()
        {
            return _repository.GetAll();
        }
        public bool Exists(string documentNumber)
        {
            return _repository.Exists(documentNumber);
        }
    }
}