using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces
{
    public interface ILibeyUserAggregate
    {
        LibeyUserResponse FindResponse(string documentNumber);
        void Create(UserUpdateOrCreateCommand command);
        void Update(string documentNumber, UserUpdateOrCreateCommand command);
        void Delete(string documentNumber);
        IEnumerable<LibeyUserResponse> GetAll();
        bool Exists(string documentNumber);
    }
}