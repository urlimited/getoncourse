FROM nginx:latest

COPY ./deployment/configs/nginx_api_gateway.conf /etc/nginx/conf.d/
COPY ./deployment/configs/nginx_api_courses.conf /etc/nginx/conf.d/

#RUN /bin/bash -c 'ln -s /etc/nginx/sites-available/nginx_api_gateway.conf /etc/nginx/sites-enabled'

EXPOSE 80