using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keeprcs.Server.Models;

namespace keeprcs.Server.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal List<Keep> GetAllKeeps()
        {
            string sql = @"
            Select 
            k.*,
            a.*
            FROM keeps k
            JOIN accounts a ON k.CreatorId = a.id;";

            return _db.Query<Keep, Account, Keep>(sql, (k, a) =>
            {
                k.Creator = a;
                return k;
            }).ToList();
        }

        internal Keep Create(Keep newKeep)
        {
            string sql = @"
            INSERT INTO keeps
            (name, description, img, creatorId)
            VALUES
            (@Name, @Description, @Img, @CreatorId);
            SELECT LAST_INSERT_ID();";

            newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
            return newKeep;
        }

        internal Keep GetById(int id)
        {
            string sql = @"
            SELECT
            k.*,
            a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId
            WHERE k.id = @id;";
            return _db.Query<Keep, Account, Keep>(sql, (k, a) =>
            {
                k.Creator = a;
                return k;
            }, new { id }).FirstOrDefault();
        }

        internal void Delete(int id)
        {
            string sql = "DELETE FROM keeps WHERE id = @id LIMIT 1;";
            _db.Execute(sql, new { id });
        }

        internal List<Keep> GetKeeps(string id)
        {
            string sql = @"
            Select 
            k.*,
            a.*
            FROM keeps k
            JOIN accounts a ON k.CreatorId = a.id;";

            return _db.Query<Keep, Account, Keep>(sql, (k, a) =>
            {
                k.Creator = a;
                return k;
            }).ToList();
        }

        internal Keep Update(Keep k)
        {
            string sql = @"
           UPDATE keeps
           SET
            name = @Name,
            description = @Description,
            img = @Img,
            views = @Views,
            shares = @Shares,
            keeps = @Keeps";
            _db.Execute(sql, k);
            return k;
        }
    }
}