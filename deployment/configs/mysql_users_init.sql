CREATE DATABASE IF NOT EXISTS users;
CREATE DATABASE IF NOT EXISTS users_testing;
CREATE USER 'mysql_users_testing'@'%' IDENTIFIED BY 'X7pUBB8GdzXg6fqw';
CREATE USER 'mysql_users'@'%' IDENTIFIED BY 'J3r6PDLuq5tTPGTw';
GRANT ALL PRIVILEGES ON users_testing.* TO 'mysql_users_testing'@'%';
GRANT ALL PRIVILEGES ON users.* TO 'mysql_users'@'%';
