FROM php:7.4-fpm

# Install Xdebug
#RUN pecl install xdebug \
#    && docker-php-ext-enable xdebug

#RUN echo "zend_extension=$(find $(php-config --extension-dir) -name xdebug.so)" \
#             > /usr/local/etc/php/conf.d/xdebug.ini

RUN docker-php-ext-install mysqli pdo pdo_mysql sockets
RUN docker-php-ext-enable pdo_mysql sockets

# Copy composer.lock and composer.json
#COPY ../../composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www/api_gateway

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
#RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
#RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
#RUN docker-php-ext-install gd

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
#COPY . /var/www

# Copy existing application directory permissions
#COPY --chown=www:www . /var/www
COPY --chown=www:www api_gateway /var/www/api_gateway



# Change current user to www
USER www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]