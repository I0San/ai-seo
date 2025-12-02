<?php

/**
 * Fired during plugin activation
 *
 * @link       https://example.com
 * @since      1.0.0
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Ai_Seo
 * @subpackage Ai_Seo/includes
 * @author     IoSan <email@example.com>
 */
class Ai_Seo_Activator
{

  /**
   * Short Description. (use period)
   *
   * Long Description.
   *
   * @since    1.0.0
   */
  public static function activate()
  {
    // Set default options if they don't exist
    if (false === get_option('ai_seo_enable_llms_txt')) {
      add_option('ai_seo_enable_llms_txt', '1');
    }
    if (false === get_option('ai_seo_site_summary')) {
      add_option('ai_seo_site_summary', get_bloginfo('description'));
    }
  }

}
