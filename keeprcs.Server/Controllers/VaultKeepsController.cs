using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keeprcs.Server.Models;
using keeprcs.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keeprcs.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VaultKeepsController : ControllerBase
    {

        private readonly VaultKeepsService _vks;

        public VaultKeepsController(VaultKeepsService vks)
        {
            _vks = vks;
        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<VaultKeep>> CreateAsync([FromBody] VaultKeep vk)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                vk.CreatorId = userInfo.Id;
                var newVk = _vks.CreateVaultKeep(vk);
                return Ok(newVk);

            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}