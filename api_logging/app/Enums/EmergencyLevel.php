<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class EmergencyLevel extends Enum
{
    const CRITICAL = 5;
    const ERROR = 4;
    const WARNING = 3;
    const INFO = 2;
    const DEBUG = 0;
    const ACCESS = 1;
}
