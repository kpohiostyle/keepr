using System;
using System.Collections.Generic;
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

        internal Vault GetById(int id)
        {

            Vault v = _vaultsRepo.GetById(id);
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
            Vault vault = GetById(id);

            if (vault.CreatorId != userId)
            {
                throw new Exception("You mustn't be allowed to delete if you have not created it yourself");
            }
            _vaultsRepo.Delete(id);
        }
        // From ProfilesController
        internal List<Vault> GetVaults(string id, bool filter)
        {
            var vaults = _vaultsRepo.GetVaults(id);
            if (filter)
            {
                vaults = vaults.FindAll(vault => !vault.isPrivate);
            }
            return vaults;
        }

        internal Vault Update(Vault vault, string id)
        {
            Vault v = _vaultsRepo.GetById(vault.Id);

            if (v == null)
            {
                throw new Exception("Invalid Id");
            }
            if (v.CreatorId != id)
            {
                throw new Exception("You cannot edit something you didn't create");
            }
            v.Name = vault.Name != null ? vault.Name : v.Name;
            v.Description = vault.Description != null ? vault.Description : v.Description;
            // v.isPrivate = vault.isPrivate != null ? vault.isPrivate : v.isPrivate;
            // TODO add the other changable properties

            return _vaultsRepo.Update(v);
        }
    }
}