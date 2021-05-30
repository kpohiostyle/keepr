CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';
CREATE TABLE IF NOT EXISTS keeps(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT 'PK: keeps',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  creatorId VARCHAR(255) NOT NULL COMMENT 'FK: from profile',
  name VARCHAR(255) NOT NULL COMMENT 'keep name',
  description VARCHAR(255) NOT NULL COMMENT 'keep description',
  img VARCHAR(255) NOT NULL COMMENT 'keep image',
  views INT COMMENT 'how many times a keep is viewed',
  shares INT COMMENT 'how many times a keep is shared',
  keeps INT COMMENT 'review what this field is in charge of',
  FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS vaults (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT 'PK: keeps',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  creatorId VARCHAR(255) NOT NULL COMMENT 'FK: from profile',
  name VARCHAR(255) NOT NULL COMMENT 'keep name',
  description VARCHAR(255) NOT NULL COMMENT 'keep description',
  imgUrl VARCHAR(255) NOT NULL COMMENT 'keep image',
  isPrivate BOOLEAN COMMENT 'will come back to add comment',
  FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT Exists vault_keep(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT 'PK: keeps',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  creatorId VARCHAR(255) NOT NULL COMMENT 'FK: from profile',
  vaultId INT NOT NULL COMMENT 'FK: from vault table',
  keepId INT NOT NULL COMMENT 'FK: from keep table',
  FOREIGN KEY (vaultId) REFERENCES vaults(id) ON DELETE CASCADE,
  FOREIGN KEY (keepId) REFERENCES keeps(id) ON DELETE CASCADE
);
-- SELECT * FROM accounts