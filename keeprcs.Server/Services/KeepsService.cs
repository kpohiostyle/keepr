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

        internal List<Keep> GetKeeps()
        {
            throw new NotImplementedException();
        }
    }
}