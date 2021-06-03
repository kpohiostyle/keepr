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

        // [HttpGet]
        // public

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

        [Authorize]
        [HttpDelete("{id}")]

        public async Task<ActionResult<string>> Delete(int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                _vks.DeleteVaultKeep(id, userInfo.Id);
                return Ok("Deleted");
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}