using System.ComponentModel.DataAnnotations;

namespace keeprcs.Server.Models
{
    public class Vault
    {

        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string CreatorId { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool isPrivate { get; set; }

        public Profile Creator { get; set; }
    }
}