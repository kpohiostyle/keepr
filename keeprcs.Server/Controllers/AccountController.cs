using System;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keeprcs.Server.Models;
using keeprcs.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keeprcs.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AccountsService _accountsService;

        public AccountController(AccountsService accountsService)
        {
            _accountsService = accountsService;
        }

        [HttpGet]
        [Authorize]
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
    }
}