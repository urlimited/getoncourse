FROM mysql:8.0.23
RUN echo "CREATE DATABASE IF NOT EXISTS users;" | mysql -u root
RUN echo "CREATE DATABASE IF NOT EXISTS users_testing;" | mysql -u root
RUN echo "CREATE USER 'mysql_users_testing'@'localhost' IDENTIFIED BY 'X7pUBB8GdzXg6fqw';" | mysql -u root
RUN echo "CREATE USER 'mysql_users'@'localhost' IDENTIFIED BY 'J3r6PDLuq5tTPGTw';" | mysql -u root
RUN echo "GRANT ALL PRIVILEGES ON users_testing.* TO 'mysql_users_testing'@'localhost';" | mysql -u root
RUN echo "GRANT ALL PRIVILEGES ON users.* TO 'mysql_users'@'localhost';" | mysql -u root