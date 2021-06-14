FROM rabbitmq:3-management-alpine

RUN apt-get update
RUN apt-get install -y curl

# Define environment variables.
ENV RABBITMQ_USER user
ENV RABBITMQ_PASSWORD password
ENV RABBITMQ_PID_FILE /var/lib/rabbitmq/mnesia/rabbitmq

COPY deployment/configs/rabbitmq/definitions.json /etc/rabbitmq/
COPY deployment/configs/rabbitmq/init.sh /init.sh
COPY deployment/configs/rabbitmq/rabbitmq.conf /etc/rabbitmq/

RUN chmod +x /init.sh

#RUN chown rabbitmq:rabbitmq /etc/rabbitmq/rabbitmq.conf /etc/rabbitmq/definitions.json

EXPOSE 15672

# Define default command
CMD ["/init.sh"]