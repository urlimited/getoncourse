until curl service_rabbitmq:15672; do
  sleep 1
done

php-fpm