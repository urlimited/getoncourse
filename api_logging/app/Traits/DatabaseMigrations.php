<?php

namespace App\Traits;

trait DatabaseMigrations
{
    /**
     * Run the database migrations for the application.
     *
     * @return void
     */
    public function runDatabaseMigrations()
    {
        //putenv('APP_ENV=testing');
        $this->artisan('doctrine:migrations:migrate --env=testing');

        $this->artisan('db:seed --env=testing');

        $this->beforeApplicationDestroyed(function () {
            //putenv('APP_ENV=testing');
            $this->artisan('doctrine:migrations:reset --env=testing');
            //putenv('APP_ENV=local');
        });
        //putenv('APP_ENV=local');
    }
}

