php-fpm&

until curl service_rabbitmq:15672; do
  sleep 2
done

sleep 5
php artisan amqp:consumer:connect