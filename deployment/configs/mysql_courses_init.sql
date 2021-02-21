CREATE DATABASE IF NOT EXISTS courses;
CREATE DATABASE IF NOT EXISTS courses_testing;
CREATE USER 'mysql_courses_testing'@'%' IDENTIFIED BY 'pp8UxXePLsVpMjEc';
CREATE USER 'mysql_courses'@'%' IDENTIFIED BY '4MqMQ7MpgC976rKP';
GRANT ALL PRIVILEGES ON localhost.courses_testing TO 'mysql_users_testing'@'%';
GRANT ALL PRIVILEGES ON localhost.courses TO 'mysql_users'@'%';
