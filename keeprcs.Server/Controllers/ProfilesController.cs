using keeprcs.Server.Models;
using keeprcs.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace keeprcs.Server.Controllers
{

    [ApiController]
    [Route("api/[controller")]
    public class ProfilesController : ControllerBase
    {
        private readonly AccountsService _accountService;

        public ProfilesController(AccountsService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("{id}")]
        public ActionResult<Profile> GetProfile(string id)
        {

            try
            {
                Profile profile = _accountService.GetProfileById(id);
                return Ok(profile);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }
    }
}