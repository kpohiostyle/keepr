using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keeprcs.Server.Models;
using keeprcs.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keeprcs.Server.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AccountsService _accountsService;
        private readonly KeepsService _ks;
        private readonly VaultsService _vs;

        public AccountController(AccountsService accountsService, KeepsService ks, VaultsService vs)
        {
            _accountsService = accountsService;
            _ks = ks;
            _vs = vs;
        }

        [HttpGet]
        public async Task<ActionResult<Account>> Get()
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                return Ok(_accountsService.GetOrCreateProfile(userInfo));

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("vaults")]
        public async Task<ActionResult<List<Vault>>> GetVaults()
        {
            try
            {//TODO ask about private vaults
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                List<Vault> userVaults = _vs.GetVaults(userInfo.Id, false);
                return Ok(userVaults);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }

        [HttpGet("keeps")]
        public async Task<ActionResult<List<Keep>>> GetKeeps()
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                List<Keep> userKeeps = _ks.GetKeeps(userInfo.Id);
                return Ok(userKeeps);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }
    }
}