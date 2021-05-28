using System;
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
            (name, description, isPrivate,)
            VALUES
            (@Name, @Description, @IsPrivate)
            SELECT LAST_INSERT_ID()";

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
            throw new NotImplementedException();
        }
    }
}