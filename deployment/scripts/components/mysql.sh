#!/bin/bash
apt-get install mysql-server -y

# mysql configurations
#echo "create database sa_companies;" | sudo -p=vagrant mysql -u root
#echo "CREATE USER 'sa_companies'@'localhost' IDENTIFIED BY 'sa_companies';" | sudo -p=vagrant mysql -u root
#echo "GRANT ALL PRIVILEGES ON sa_companies.* TO 'sa_companies'@'localhost';" | sudo -p=vagrant mysql -u root

#. /home/vagrant/deployment/scripts/components/phpmyadmin.sh