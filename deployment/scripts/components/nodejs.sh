#!/bin/bash
sudo apt-get update
sudo apt-get install nodejs -y
sudo apt-get install npm -y

cd ./api_gateway
sudo npm install -g npm

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo npm install