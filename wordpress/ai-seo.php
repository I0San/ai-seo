<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * administrative area. This file also includes all of the plugin dependencies.
 *
 * @link              https://example.com
 * @since             1.0.0
 * @package           Ai_Seo
 *
 * @wordpress-plugin
 * Plugin Name:       AI SEO
 * Plugin URI:        https://example.com/plugin-name-uri/
 * Description:       Optimize your site for LLMs with /llms.txt generation, AI summaries, and visibility scoring.
 * Version:           1.0.0
 * Author:            IoSan
 * Author URI:        https://example.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ai-seo
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
  die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('AI_SEO_VERSION', '1.0.0');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-ai-seo-activator.php
 */
function activate_ai_seo()
{
  require_once plugin_dir_path(__FILE__) . 'includes/class-ai-seo-activator.php';
  Ai_Seo_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-ai-seo-deactivator.php
 */
function deactivate_ai_seo()
{
  require_once plugin_dir_path(__FILE__) . 'includes/class-ai-seo-deactivator.php';
  Ai_Seo_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_ai_seo');
register_deactivation_hook(__FILE__, 'deactivate_ai_seo');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-ai-seo-core.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_ai_seo()
{

  $plugin = new Ai_Seo_Core();
  $plugin->run();

}
run_ai_seo();
