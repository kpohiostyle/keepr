using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
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
            INSERT 
            INTO vault_keep
                (vaultId, keepId, creatorId)
            VALUES
                (@VaultId, @KeepId, @CreatorId);
            SELECT LAST_INSERT_ID();";

            vk.Id = _db.ExecuteScalar<int>(sql, vk);
            return vk;
        }

        internal List<VaultKeepViewModel> GetKeepsByVault(int id)
        {
            string sql = @"
            SELECT
                k.*,
                vk.id as VaultKeepId,
                a.*
            FROM vault_keep vk
            JOIN keeps k ON k.id = vk.keepId
            JOIN accounts a ON a.id = k.creatorId
            WHERE vaultId = @id;";
            return _db.Query<VaultKeepViewModel, Account, VaultKeepViewModel>(sql, (vk, a) =>
            {
                vk.Creator = a;
                return vk;
            }, new { id }).ToList();
        }
        public VaultKeep GetVaultKeepById(int id)
        {
            string sql = @"
      SELECT 
        vk.*
      FROM vault_keep vk
      WHERE vk.id = @id;
      ";
            return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
        }

        internal void DeleteVaultKeep(int id)
        {
            string sql = "DELETE FROM vault_keep WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}