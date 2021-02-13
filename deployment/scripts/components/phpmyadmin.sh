#!/bin/bash
apt-get install phpmyadmin -y

mkdir /usr/share/phpmyadmin/
cd /usr/share/phpmyadmin/

sudo wget https://files.phpmyadmin.net/phpMyAdmin/5.0.4/phpMyAdmin-5.0.4-all-languages.tar.gz
sudo tar xzf phpMyAdmin-5.0.4-all-languages.tar.gz
sudo mv phpMyAdmin-5.0.4-all-languages/* /usr/share/phpmyadmin

sudo cp /home/vagrant/deployment/scripts/components/phpmyadmin.conf /usr/share/phpmyadmin/libraries/vendor_config.php

sudo rm /usr/share/phpmyadmin/phpMyAdmin-5.0.4-all-languages.tar.gz

sudo rm -rf /usr/share/phpmyadmin/phpMyAdmin-5.0.4-all-languages

sudo ln -s /usr/share/phpmyadmin /home/vagrant/api_users/public/phpmyadmin

#cp /home/vagrant/scripts/mysql/blowfish_secret.conf /var/lib/phpmyadmin/blowfish_secret.inc.php