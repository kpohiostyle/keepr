using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keeprcs.Server.Models;
using keeprcs.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace keeprcs.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly AccountsService _accountsService;

        private readonly VaultsService _vs;
        private readonly KeepsService _ks;

        public ProfilesController(AccountsService accountsService, VaultsService vs, KeepsService ks)
        {
            _accountsService = accountsService;
            _vs = vs;
            _ks = ks;
        }

        [HttpGet("{id}")]
        public ActionResult<Profile> GetProfile(string id)
        {

            try
            {
                Profile profile = _accountsService.GetProfileById(id);
                return Ok(profile);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }

        [HttpGet("{id}/vaults")]
        public async Task<ActionResult<List<Vault>>> GetVaults(string id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();

                List<Vault> vaults = _vs.GetVaults(id);
                return Ok(vaults);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }

        [HttpGet("{id}/keeps")]
        public ActionResult<List<Keep>> GetKeeps(string id)
        {
            try
            {
                List<Keep> keeps = _ks.GetKeeps(id);
                return Ok(keeps);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }

    }
}