#!/bin/bash
apt-get install phpmyadmin

mkdir /usr/share/phpmyadmin/
cd /usr/share/phpmyadmin/

wget https://files.phpmyadmin.net/phpMyAdmin/5.0.4/phpMyAdmin-5.0.4-all-languages.tar.gz
tar xzf phpMyAdmin-5.0.4-all-languages.tar.gz
mv phpMyAdmin-5.0.4-all-languages/* /usr/share/phpmyadmin

cp /home/vagrant/deployment/scripts/components/phpmyadmin.conf /usr/share/phpmyadmin/libraries/vendor_config.php

rm /usr/share/phpmyadmin/phpMyAdmin-5.0.4-all-languages.tar.gz

rm -rf /usr/share/phpmyadmin/phpMyAdmin-5.0.4-all-languages

ln -s /usr/share/phpmyadmin /home/vagrant/sa_companies/public/phpmyadmin

#cp /home/vagrant/scripts/mysql/blowfish_secret.conf /var/lib/phpmyadmin/blowfish_secret.inc.php