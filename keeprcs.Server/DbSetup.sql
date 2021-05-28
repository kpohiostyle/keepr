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
  imgUrl VARCHAR(255) NOT NULL COMMENT 'keep image',
  views INT COMMENT 'how many times a keep is viewed',
  shares INT COMMENT 'how many times a keep is shared',
  keeps INT COMMENT 'review what this field is in charge of'
);
CREATE TABLE IF NOT EXISTS (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT 'PK: keeps',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
)