namespace keeprcs.Server.Models
{
    public class VaultKeep
    {
        public int Id { get; set; }
        public int KeepId { get; set; }
        public int VaultId { get; set; }
    }

    public class VaultKeepViewModel : Keep
    {
        public string VaultName { get; set; }
        public string VaultDescription { get; set; }

        public int VaultKeepId { get; set; }
        public int KeepId { get; set; }
        public int VaultId { get; set; }
    }
}