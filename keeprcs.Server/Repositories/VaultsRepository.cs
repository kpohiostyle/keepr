using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keeprcs.Server.Models;

namespace keeprcs.Server.Repositories
{
    public class VaultsRepository
    {
        private readonly IDbConnection _db;

        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Vault Create(Vault v)
        {
            string sql = @"
            INSERT INTO vaults
            (name, description, isPrivate, creatorId)
            VALUES
            (@Name, @Description, @IsPrivate, @CreatorId);
            SELECT LAST_INSERT_ID();";

            v.Id = _db.ExecuteScalar<int>(sql, v);
            return v;
        }

        internal Vault GetById(int id)
        {
            string sql = @"
            SELECT
            v.*,
            a.*
            FROM vaults v
            JOIN accounts a ON a.id = v.creatorId
            WHERE v.id = @id";
            return _db.Query<Vault, Account, Vault>(sql, (v, a) =>
            {
                v.Creator = a;
                return v;
            }, new { id }).FirstOrDefault();
        }

        internal void Delete(int id)
        {
            string sql = "DELETE FROM vaults WHERE id = @id LIMIT 1;";
            _db.Execute(sql, new { id });
        }
        internal Vault Update(Vault v)
        {

            string sql = @"
                UPDATE vaults
                SET
                    name = @Name,
                    description = @Description
                WHERE id = @Id";
            _db.Execute(sql, v);
            return v;

        }

        internal List<Vault> GetVaults(string id)
        {
            string sql = @"
            SELECT 
            v.*,
            a.*
            FROM vaults v 
            JOIN accounts a ON v.CreatorId = a.id
            WHERE v.CreatorId = @id";
            return _db.Query<Vault, Account, Vault>(sql, (v, a) =>
            {
                v.Creator = a;
                return v;
            }, new { id }).ToList();

        }

    }
}