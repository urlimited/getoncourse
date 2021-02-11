#!/bin/bash
sudo apt-get install nginx -y
sudo cp /home/vagrant/deployment/configs/nginx_vagrant.conf /etc/nginx/sites-available/transfer_ports.conf
ln -s /etc/nginx/sites-available/transfer_ports.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx