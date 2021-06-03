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
            v.name as vName,
            vk.id as vkId,
            vk.vaultId as vId,
            vk.keepId as kId,
            vk.creatorId as creatorId
            FROM
            vault_keep vk
            JOIN vaults v ON v.id = vId
            JOIN keeps k ON k.id = kId
            JOIN accounts a ON a.id = k.creatorId
            WHERE
            vkId = @id;";
            return _db.Query<VaultKeepViewModel, Account, VaultKeepViewModel>(sql, (vk, a) =>
            {
                vk.Creator = a;
                return vk;
            }, new { id }).ToList();
        }
        public VaultKeepViewModel GetVaultKeepById(int id)
        {
            string sql = @"
      SELECT 
      vk.id as vkId,
      vk.vaultId as vId,
      vk.keepId as kId,
      k.*,
      p.*
      FROM vault_keeps vk
      JOIN keeps k ON k.id = kId
      JOIN accounts a ON a.id = vk.creatorId
      WHERE vk.id = @id;
      ";
            return _db.Query<VaultKeepViewModel, Account, VaultKeepViewModel>(sql, (vk, p) =>
           {
               vk.Creator = p;
               return vk;
           }, new { id }).FirstOrDefault();
        }

        internal void DeleteVaultKeep(int id)
        {
            string sql = "DELETE FROM vault_keep WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}