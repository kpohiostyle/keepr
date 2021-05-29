using System.ComponentModel.DataAnnotations;

namespace keeprcs.Server.Models
{
    public class Keep
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string CreatorId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public int Views { get; set; }
        [Required]
        public int Shares { get; set; }
        [Required]
        public int Keeps { get; set; }
        [Required]
        public Profile Creator { get; set; }
    }
}