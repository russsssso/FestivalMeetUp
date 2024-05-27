using FestivalMeetUp;
using Microsoft.AspNetCore.Mvc;

namespace UserMeetUp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        
        [HttpGet("profile")]
        public Profile GetProfile()
        {
            return new Profile
            {
                Username = "Pre2",
                Description = "I am a software engineer",
                Posts = 92,
                Followers = 120,
                Following = 80,
            };
        }
    }
}