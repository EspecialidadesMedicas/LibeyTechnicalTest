
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;

using LibeyTechnicalTestDomain.LibeyUserAggregate.Application;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LibeyTechnicalTestTest
{
    [TestClass]
    public class LibeyUserAggregateTests
    {
        private LibeyUserAggregate _aggregate;
        private FakeUserRepository _repository;

        [TestInitialize]
        public void Setup()
        {
            _repository = new FakeUserRepository();
            _aggregate = new LibeyUserAggregate(_repository);
        }

        [TestMethod]
        public void Create_ShouldAddUser()
        {
            var command = new UserUpdateOrCreateCommand
            {
                DocumentNumber = "87654321",
                DocumentTypeId = 1,
                Name = "Carlos",
                FathersLastName = "Quispe",
                MothersLastName = "Huamán",
                Address = "Av. Arequipa 1234",
                UbigeoCode = "150101", // Lima
                Phone = "01-2345678",
                Email = "cquispe@correo.pe", // <= 20 chars
                Password = "clave123"
            };

            _aggregate.Create(command);

            Assert.IsTrue(_repository.Exists("12345678"));
        }

        [TestMethod]
        public void FindResponse_ShouldReturnUser_WhenExists()
        {
            var user = new LibeyUser("87654321", 1, "Carlos", "Quispe", "Huamán", "Av. Arequipa 1234", "150101", "01-2345678", "cquispe@correo.pe", "clave123");
            _repository.Create(user);

            var response = _aggregate.FindResponse("12345678");

            Assert.IsNotNull(response);
            Assert.AreEqual("87654321", response.DocumentNumber);
            Assert.AreEqual("Carlos", response.Name);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void Update_ShouldThrow_WhenUserNotFound()
        {
            var command = new UserUpdateOrCreateCommand
            {
                DocumentNumber = "99999999",
                Name = "Ana",
                FathersLastName = "López",
                MothersLastName = "Salazar",
                Address = "Calle Lima 432",
                UbigeoCode = "040101", // Arequipa
                Phone = "054-876543",
                Email = "alop@correo.pe", // <= 20 chars
                Password = "nuevaClave"
            };

            _aggregate.Update("99999999", command);
        }

        [TestMethod]
        public void Update_ShouldModifyUser()
        {
            var user = new LibeyUser("12345678", 1, "John", "Doe", "Smith", "123 Main St", "001", "555-1234", "john@example.com", "password");
            _repository.Create(user);

            var command = new UserUpdateOrCreateCommand
            {
                DocumentNumber = "87654321",
                Name = "Carlos A.",
                FathersLastName = "Quispe",
                MothersLastName = "Huamán",
                Address = "Jr. Cusco 987",
                UbigeoCode = "150102", // Lima - Cercado
                Phone = "01-7654321",
                Email = "carlosa@pe.com", // <= 20 chars
                Password = "claveNueva"
            };

            _aggregate.Update("87654321", command);

            var updatedUser = _repository.Find("87654321");
            Assert.AreEqual("Carlos A.", updatedUser.Name);
            Assert.AreEqual("Jr. Cusco 987", updatedUser.Address);
            Assert.AreEqual("01-7654321", updatedUser.Phone);
        }

        [TestMethod]
        public void Delete_ShouldRemoveUser()
        {
            var user = new LibeyUser("87654321", 1, "Carlos", "Quispe", "Huamán", "Av. Arequipa 1234", "150101", "01-2345678", "cquispe@correo.pe", "clave123");
            _repository.Create(user);

            _aggregate.Delete("87654321");

            Assert.IsFalse(_repository.Exists("87654321"));
        }

        [TestMethod]
        public void GetAll_ShouldReturnAllUsers()
        {
            _repository.Create(new LibeyUser("11111111", 1, "Luis", "Perez", "Rojas", "Av. Brasil 100", "150104", "01-1111111", "lperez@correo.pe", "clave1"));
            _repository.Create(new LibeyUser("22222222", 1, "Rosa", "Garcia", "Flores", "Jr. Ancash 200", "150105", "01-2222222", "rgarcia@correo.pe", "clave2"));

            var allUsers = _aggregate.GetAll();

            Assert.AreEqual(2, allUsers.Count());
        }

        [TestMethod]
        public void Exists_ShouldReturnTrueIfUserExists()
        {
            _repository.Create(new LibeyUser("33333333", 1, "María", "Torres", "Reyes", "Calle Puno 321", "150106", "01-3333333", "mtorres@pe.com", "clave3"));

            Assert.IsTrue(_aggregate.Exists("33333333"));
            Assert.IsFalse(_aggregate.Exists("44444444"));
        }

        // Fake repository to simulate the real one
        private class FakeUserRepository : ILibeyUserRepository
        {
            private readonly Dictionary<string, LibeyUser> _storage = new();

            public void Create(LibeyUser user)
            {
                _storage[user.DocumentNumber] = user;
            }

            public void Delete(string documentNumber)
            {
                _storage.Remove(documentNumber);
            }

            public LibeyUser Find(string documentNumber)
            {
                _storage.TryGetValue(documentNumber, out var user);
                return user;
            }

            public LibeyUserResponse FindResponse(string documentNumber)
            {
                if (_storage.TryGetValue(documentNumber, out var user))
                {
                    return new LibeyUserResponse
                    {
                        DocumentNumber = user.DocumentNumber,
                        DocumentTypeId = user.DocumentTypeId,
                        Name = user.Name,
                        FathersLastName = user.FathersLastName,
                        MothersLastName = user.MothersLastName,
                        Address = user.Address,
                        UbigeoCode = user.UbigeoCode,
                        Phone = user.Phone,
                        Email = user.Email
                    };
                }
                return null;
            }

            public IEnumerable<LibeyUserResponse> GetAll()
            {
                return _storage.Values.Select(user => new LibeyUserResponse
                {
                    DocumentNumber = user.DocumentNumber,
                    DocumentTypeId = user.DocumentTypeId,
                    Name = user.Name,
                    FathersLastName = user.FathersLastName,
                    MothersLastName = user.MothersLastName,
                    Address = user.Address,
                    UbigeoCode = user.UbigeoCode,
                    Phone = user.Phone,
                    Email = user.Email
                });
            }

            public bool Exists(string documentNumber)
            {
                return _storage.ContainsKey(documentNumber);
            }

            public void Update(LibeyUser user)
            {
                _storage[user.DocumentNumber] = user;
            }

        }
    }
}
