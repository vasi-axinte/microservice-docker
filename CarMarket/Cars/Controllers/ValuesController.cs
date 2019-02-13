using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Cars.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cars.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Car>> Get()
        {
            var accessToken = Request.Headers["Authorization"].ToString();

            if (string.IsNullOrEmpty(accessToken))
            {
                return Unauthorized();
            }

            var fixedApi = "https://api.mlab.com/api/1/";
            var carsCollection = "databases/carsdb/collections/cars";
            var apiKey = "?apiKey=89-VnYnBRLf9qpmcnX-as1r24Ab_SA7E";
            var uri = fixedApi + carsCollection + apiKey;

            HttpClient client = new HttpClient();
            var response = client.GetAsync(uri).GetAwaiter().GetResult();

            List<Car> cars = new List<Car>();

            if (response.IsSuccessStatusCode)
            {
                cars = response.Content.ReadAsAsync<List<Car>>().GetAwaiter().GetResult();
            }

            return cars;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
