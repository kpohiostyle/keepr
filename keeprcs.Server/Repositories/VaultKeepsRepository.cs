using System;
using System.Data;
using Dapper;
using keeprcs.Server.Models;

namespace keeprcs.Server.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal VaultKeep Create(VaultKeep vk)
        {
            // TODO update keep to increase its keep count by 1
            string sql = @"
            INSERT INTO vault_keep(vaultId, keepId)
            VALUES(@VaultId, @KeepId)
            SELECT LAST_INSERT_ID();";

            vk.Id = _db.ExecuteScalar<int>(sql, vk);
            return vk;
        }
    }
}