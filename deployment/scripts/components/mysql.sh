#!/bin/bash
apt-get install mysql-server -y

# mysql configurations
echo "create database users;" | sudo -p=vagrant mysql -u root
echo "CREATE USER 'api_users'@'localhost' IDENTIFIED BY 'J3^6PDLuq5tTPGTw';" | sudo -p=vagrant mysql -u root
echo "GRANT ALL PRIVILEGES ON users.* TO 'api_users'@'localhost';" | sudo -p=vagrant mysql -u root

#. /home/vagrant/deployment/scripts/components/phpmyadmin.sh