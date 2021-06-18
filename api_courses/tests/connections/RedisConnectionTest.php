<?php

class RedisConnectionTest extends TestCase
{
    /**
     * Standard scenario of receiving categories from database
     *
     * @return void
     */
    public function testRedisConnection()
    {
        app('redis')->set('asd', 'qwerty');

        $redis = app('redis')->get('asd');

        $this->assertEquals('qwerty', $redis);
    }
}
