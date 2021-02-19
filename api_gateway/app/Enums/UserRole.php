<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class UserRole extends Enum
{
    const USER_ROLE_ADMIN = 1;
    const USER_ROLE_TEACHER = 2;
    const USER_ROLE_CUSTOMER = 3;
}
