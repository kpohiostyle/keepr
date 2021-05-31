using System.ComponentModel.DataAnnotations;

namespace keeprcs.Server.Models
{
    public class Keep
    {

        public int Id { get; set; }
        [Required]
        public string CreatorId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Img { get; set; }

        public int Views { get; set; } = 0;

        public int Shares { get; set; } = 0;

        public int Keeps { get; set; } = 0;

        public Profile Creator { get; set; }
    }
}