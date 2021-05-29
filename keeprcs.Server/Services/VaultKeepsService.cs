using System;
using keeprcs.Server.Models;
using keeprcs.Server.Repositories;

namespace keeprcs.Server.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _vkRepo;

        public VaultKeepsService(VaultKeepsRepository vkRepo)
        {
            _vkRepo = vkRepo;
        }

        internal VaultKeep CreateVaultKeep(VaultKeep vk)
        {
            return _vkRepo.Create(vk);
        }

        internal void DeleteVaultKeep(int keepId, string CreatorId)
        {

        }
    }
}