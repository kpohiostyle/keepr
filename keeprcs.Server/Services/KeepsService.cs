using System;
using System.Collections.Generic;
using keeprcs.Server.Models;
using keeprcs.Server.Repositories;

namespace keeprcs.Server.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _keepsRepo;

        public KeepsService(KeepsRepository keepsRepo)
        {
            _keepsRepo = keepsRepo;
        }

        internal List<Keep> GetAllKeeps()
        {
            return _keepsRepo.GetAllKeeps();
        }

        internal Keep GetById(int id)
        {
            var k = _keepsRepo.GetById(id);
            if (k == null)
            {
                throw new Exception("Invalid Id");
            }
            return k;
        }

        internal Keep Create(Keep newKeep)
        {
            return _keepsRepo.Create(newKeep);
        }

        internal void Delete(int id, string userId)
        {
            Keep keep = GetById(id);

            if (keep.CreatorId != userId)
            {
                throw new Exception("You mustn't be allowed to delete if you have not created it yourself");
            }
            _keepsRepo.Delete(id);
        }
        internal Keep Update(Keep k, string id)
        {
            Keep keep = _keepsRepo.GetById(k.Id);

            if (keep == null)
            {
                throw new Exception("Invalid Id");
            }
            if (keep.CreatorId != id)
            {
                throw new Exception("You cannot edit something you didn't create");
            }
            return _keepsRepo.Update(k);
        }

        internal List<Keep> GetKeeps(string profileId)
        {
            return _keepsRepo.GetKeeps(profileId);
        }
    }
}