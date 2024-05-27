using Microsoft.AspNetCore.Mvc;

namespace FestivalMeetUp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FestivalController : ControllerBase
    {
        
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return new List<Post>
            {
                new Post
                {
                    Username = "User1",
                    Content = "Hello everyone! We're excited to announce that the festival is happening on " + DateTime.Now.AddDays(30).ToShortDateString() + "! Stay tuned for more updates!",
                    Time = "4 days ago",
                    Likes = 32,
                    Comments = 12,
                    Shares = 5
                },
                new Post
                {
                    Username = "User2",
                    Content = "The festival was a blast! Can't wait for the next one.",
                    Time = "2 days ago",
                    Likes = 45,
                    Comments = 15,
                    Shares = 7
                },
                new Post
                {
                    Username = "User3",
                    Content = "Looking forward to the festival. It's going to be epic!",
                    Time = "1 day ago",
                    Likes = 50,
                    Comments = 20,
                    Shares = 10
                }
            };
        }
        
        [HttpGet("recommendedEvents")]
        public IEnumerable<RecommendedEvent> GetEvents()
        {
            return new List<RecommendedEvent>
            {
                new RecommendedEvent
                {
                    Title = "Untold Festival",
                    Details = "Untold Festival is one of the largest annual electronic music festivals held in Cluj-Napoca, Romania. It's known for its exciting lineup and vibrant atmosphere.",
                },
                new RecommendedEvent
                {
                    Title = "Electric Castle",
                    Details = "Electric Castle is a unique festival experience that takes place on the spectacular Transylvanian domain of the Bánffy Castle, near Cluj-Napoca in Romania.",
                },
                new RecommendedEvent
                {
                    Title = "Summer Well",
                    Details = "Summer Well is a music festival taking place on Stirbey Domain, near Bucharest, Romania. The festival is a unique two-day experience of alternative music, arts and entertainment.",
                },
            };
        }
        
    }
}