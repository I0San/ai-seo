<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://example.com
 * @since      1.0.0
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/public
 * @author     IoSan <email@example.com>
 */
class Ai_Seo_Public
{

  /**
   * The ID of this plugin.
   *
   * @since    1.0.0
   * @access   private
   * @var      string    $plugin_name    The ID of this plugin.
   */
  private $plugin_name;

  /**
   * The version of this plugin.
   *
   * @since    1.0.0
   * @access   private
   * @var      string    $version    The current version of this plugin.
   */
  private $version;

  /**
   * Initialize the class and set its properties.
   *
   * @since    1.0.0
   * @param    string    $plugin_name       The name of the plugin.
   * @param    string    $version    The version of this plugin.
   */
  public function __construct($plugin_name, $version)
  {

    $this->plugin_name = $plugin_name;
    $this->version = $version;

  }

  /**
   * Register the stylesheets for the public-facing side of the site.
   *
   * @since    1.0.0
   */
  public function enqueue_styles()
  {

    /**
     * This function is provided for demonstration purposes only.
     *
     * An instance of this class should be passed to the run() function
     * defined in Ai_Seo_Loader as all of the hooks are defined
     * in that particular class.
     *
     * The Ai_Seo_Loader will then create the relationship
     * between the defined hooks and the functions defined in this
     * class.
     */

    wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/ai-seo-public.css', array(), $this->version, 'all');

  }

  /**
   * Register the JavaScript for the public-facing side of the site.
   *
   * @since    1.0.0
   */
  public function enqueue_scripts()
  {

    /**
     * This function is provided for demonstration purposes only.
     *
     * An instance of this class should be passed to the run() function
     * defined in Ai_Seo_Loader as all of the hooks are defined
     * in that particular class.
     *
     * The Ai_Seo_Loader will then create the relationship
     * between the defined hooks and the functions defined in this
     * class.
     */

    wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/ai-seo-public.js', array('jquery'), $this->version, false);

  }

  /**
   * Generate llms.txt content.
   *
   * @since    1.0.0
   */
  public function generate_llms_txt()
  {
    if (get_option('ai_seo_enable_llms_txt') !== '1') {
      return;
    }

    $request_uri = $_SERVER['REQUEST_URI'];

    // Handle subdirectories if WP is installed in one
    $home_path = parse_url(home_url(), PHP_URL_PATH);
    if ($home_path && $home_path !== '/') {
      $request_uri = str_replace($home_path, '', $request_uri);
    }

    if ($request_uri === '/llms.txt') {
      require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-ai-seo-generator.php';
      $generator = new Ai_Seo_Generator();
      $content = $generator->generate_llms_txt();

      header('Content-Type: text/plain; charset=utf-8');
      echo $content;
      exit;
    }
  }

}
