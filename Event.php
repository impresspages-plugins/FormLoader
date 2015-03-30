<?php
/**
 * @package   ImpressPages
 */


/**
 * Created by PhpStorm.
 * User: maskas
 * Date: 15.3.30
 * Time: 22.09
 */

namespace Plugin\FormLoader;


class Event
{
    public static function ipBeforeController()
    {
        ipAddJs('assets/formLoader.js');
        ipAddCss('assets/formLoader.css');
    }
}
