using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Users.Models;

namespace Users.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public ActionResult Post([FromBody] UserData model)
        {
            var fixedApi = "https://api.mlab.com/api/1/";
            var carsCollection = "databases/carsdb/collections/users";
            var apiKey = "?apiKey=89-VnYnBRLf9qpmcnX-as1r24Ab_SA7E";
            var uri = fixedApi + carsCollection + apiKey;

            HttpClient client = new HttpClient();
            var response = client.GetAsync(uri).GetAwaiter().GetResult();

            List<User> users = new List<User>();

            if (response.IsSuccessStatusCode)
            {
                users = response.Content.ReadAsAsync<List<User>>().GetAwaiter().GetResult();
            }

            var user = users.FirstOrDefault(u => u.Username == model.username && u.Password == model.password);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(new {token = user.Id+"-"+user.Username});
        }
    }
}