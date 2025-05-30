﻿using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces
{
    public interface ILibeyUserRepository
    {
 
        LibeyUserResponse FindResponse(string documentNumber);
        void Create(LibeyUser libeyUser);
        LibeyUser Find(string documentNumber);
        void Update(LibeyUser libeyUser);
        void Delete(string documentNumber);
        IEnumerable<LibeyUserResponse> GetAll();
         bool Exists(string documentNumber);
    }
}
