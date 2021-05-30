using System;
using keeprcs.Server.Models;
using keeprcs.Server.Repositories;

namespace keeprcs.Server.Services
{
    public class AccountsService
    {
        private readonly AccountsRepository _repo;
        public AccountsService(AccountsRepository repo)
        {
            _repo = repo;
        }

        internal Account GetOrCreateProfile(Account userInfo)
        {
            Account profile = _repo.GetById(userInfo.Id);
            if (profile == null)
            {
                return _repo.Create(userInfo);
            }
            return profile;
        }

        internal Profile GetProfileById(string id)
        {
            return _repo.GetById(id);
        }

    }
}
