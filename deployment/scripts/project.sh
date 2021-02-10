#!/bin/bash
echo "VM running project specific shells from file project.sh"

# install php 7.4
. /home/vagrant/deployment/scripts/components/php.sh

# install mysql
. /home/vagrant/deployment/scripts/components/mysql.sh

# install kubernetes
. /home/vagrant/deployment/scripts/components/kubernetes.sh

echo "VM ended with project specific shells from file project.sh"