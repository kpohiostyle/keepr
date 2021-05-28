using System;
using keeprcs.Server.Models;
using keeprcs.Server.Repositories;

namespace keeprcs.Server.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _vaultsRepo;

        public VaultsService(VaultsRepository vaultsRepo)
        {
            _vaultsRepo = vaultsRepo;
        }

        internal Vault Get(int id)
        {
            var v = _vaultsRepo.GetById(id);
            if (v == null)
            {
                throw new Exception("Invalid Id");
            }
            return v;
        }

        internal Vault Create(Vault v)
        {
            return _vaultsRepo.Create(v);
        }

        internal void Delete(int id, string userId)
        {
            Vault vault = Get(id);

            if (vault.CreatorId != userId)
            {
                throw new Exception("You mustn't be allowed to delete if you have not created it yourself");
            }
            _vaultsRepo.Delete(id);
        }
    }
}