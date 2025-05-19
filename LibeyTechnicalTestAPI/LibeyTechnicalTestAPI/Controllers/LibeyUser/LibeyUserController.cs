using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
namespace LibeyTechnicalTestAPI.Controllers.LibeyUser
{
    [ApiController]
    [Route("[controller]")]
    public class LibeyUserController : Controller
    {
        private readonly ILibeyUserAggregate _aggregate;
        public LibeyUserController(ILibeyUserAggregate aggregate)
        {
            _aggregate = aggregate;
        }

        [HttpGet("get-user-by-document/{documentNumber}")]
        public ActionResult<LibeyUserResponse> GetByDocumentNumber(string documentNumber)
        {
            var user = _aggregate.FindResponse(documentNumber);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpGet("get-all-users")]
        public ActionResult<IEnumerable<LibeyUserResponse>> GetAll()
        {
            var users = _aggregate.GetAll();
            return Ok(users);
        }
         [HttpPost]
        public IActionResult Create(UserUpdateOrCreateCommand command)
        {
            if (_aggregate.Exists(command.DocumentNumber))
                return Conflict("User already exists.");

            _aggregate.Create(command);
            return CreatedAtAction(nameof(GetByDocumentNumber), new { documentNumber = command.DocumentNumber }, command);
        }

         [HttpPut("{documentNumber}")]
        public IActionResult Update(string documentNumber, UserUpdateOrCreateCommand command)
        {
            if (documentNumber != command.DocumentNumber)
                return BadRequest("Document number mismatch.");

            if (!_aggregate.Exists(documentNumber))
                return NotFound();

            _aggregate.Update(documentNumber, command);
            return NoContent();
        }

         [HttpDelete("{documentNumber}")]
        public IActionResult Delete(string documentNumber)
        {
            if (!_aggregate.Exists(documentNumber))
                return NotFound();

            _aggregate.Delete(documentNumber);
            return NoContent();
        }
    }
}