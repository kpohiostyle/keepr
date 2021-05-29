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
    [Route("api/[controller]")]
    public class KeepsController : ControllerBase
    {

        private readonly KeepsService _ks;

        public KeepsController(KeepsService ks)
        {
            _ks = ks;
        }

        [HttpGet]
        public ActionResult<List<Keep>> GetAll()
        {
            try
            {
                List<Keep> keeps = _ks.GetAllKeeps();
                return Ok(keeps);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);

            }
        }
        [HttpGet("{id}")]
        public ActionResult<Keep> GetById(int id)
        {
            try
            {
                Keep keep = _ks.GetById(id);
                return Ok(keep);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Keep>> Create([FromBody] Keep k)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                k.CreatorId = userInfo.Id;
                Keep newKeep = _ks.Create(k);
                newKeep.Creator = userInfo;
                return Ok(newKeep);
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
                _ks.Delete(id, userInfo.Id);
                return Ok("Successfully Deleted");
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<Keep>> Update(int id, [FromBody] Keep k)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                k.Id = id;
                Keep newKeep = _ks.Update(k, userInfo.Id);
                newKeep.Creator = userInfo;
                return Ok(newKeep);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}