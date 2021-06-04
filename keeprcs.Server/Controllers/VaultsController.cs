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
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _vs;
        private readonly VaultKeepsService _vks;

        public VaultsController(VaultsService vs, VaultKeepsService vks)
        {
            _vs = vs;
            _vks = vks;
        }

        [HttpGet("{id}/keeps")]
        public async Task<ActionResult<VaultKeepViewModel>> GetKeepsById(int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Vault vault = _vs.GetById(id);
                if (vault.isPrivate == true && vault.CreatorId != userInfo?.Id)
                {
                    throw new System.Exception("invalid Request");
                }
                return Ok(_vks.GetKeepsByVaultId(id));
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<Keep>> GetById(int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Vault vault = _vs.GetById(id);
                if (vault.CreatorId != userInfo?.Id && vault.isPrivate == true)
                {
                    throw new System.Exception("invaild access");
                }
                return Ok(vault);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Vault>> Create([FromBody] Vault v)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                v.CreatorId = userInfo.Id;
                Vault newVault = _vs.Create(v);
                newVault.Creator = userInfo;
                return Ok(newVault);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<Vault>> Update(int id, [FromBody] Vault vault)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                vault.Id = id;
                Vault newVault = _vs.Update(vault, userInfo.Id);
                newVault.Creator = userInfo;
                return Ok(newVault);
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
                _vs.Delete(id, userInfo.Id);
                return Ok("Successfully Deleted");
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}