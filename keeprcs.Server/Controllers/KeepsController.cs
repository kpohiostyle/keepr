using System.Collections.Generic;
using keeprcs.Server.Models;
using keeprcs.Server.Services;
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
        public ActionResult<List<Keep>> Get()
        {
            try
            {
                List<Keep> keeps = _ks.GetKeeps();
                return Ok(keeps);
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
                Keep newKeep = _ks.Create(k)
                newKeep.Creator = userInfo;
                return Ok(newKeep);
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        [HttpPut]
        [HttpDelete]
    }
}