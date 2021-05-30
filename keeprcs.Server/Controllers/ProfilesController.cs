using System.Collections.Generic;
using keeprcs.Server.Models;
using keeprcs.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace keeprcs.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly AccountsService _accountService;

        private readonly VaultsService _vs;
        private readonly KeepsService _ks;

        public ProfilesController(AccountsService accountService, VaultsService vs, KeepsService ks)
        {
            _accountService = accountService;
            _vs = vs;
            _ks = ks;
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

        [HttpGet("{id}/vaults")]
        public ActionResult<List<Vault>> GetVaults(int id)
        {
            try
            {
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
        public ActionResult<List<Keep>> GetKeeps(int id)
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