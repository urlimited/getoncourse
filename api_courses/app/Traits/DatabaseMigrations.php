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
        putenv('APP_ENV=testing');
        $this->artisan('doctrine:migrations:migrate');

        $this->artisan('db:seed');

        $this->beforeApplicationDestroyed(function () {
            putenv('APP_ENV=testing');
            $this->artisan('doctrine:migrations:rollback');
            putenv('APP_ENV=local');
        });
        putenv('APP_ENV=local');
    }
}

