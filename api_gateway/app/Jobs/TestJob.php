<?php

namespace ApiGateway\Jobs;

class TestJob extends Job
{

    public function handle()
    {
        echo 'Event has been called' . PHP_EOL;
    }
}
