<?php

/**
 * Define the internationalization functionality
 *
 * @link       https://example.com
 * @since      1.0.0
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Ai_Seo
 * @subpackage Ai_Seo/includes
 * @author     IoSan <email@example.com>
 */
class Ai_Seo_i18n
{


  /**
   * Load the plugin text domain for translation.
   *
   * @since    1.0.0
   */
  public function load_plugin_textdomain()
  {

    load_plugin_textdomain(
      'ai-seo',
      false,
      dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
    );

  }



}
