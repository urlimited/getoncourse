#!/bin/bash
apt-get install php7.4-fpm php7.4-mbstring php7.4-pdo php7.4-dom php7.4-mysqli -y

php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

alias composer="php /home/vagrant/composer.phar"