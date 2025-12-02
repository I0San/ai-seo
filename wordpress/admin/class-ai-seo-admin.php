<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://example.com
 * @since      1.0.0
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/admin
 * @author     IoSan <email@example.com>
 */
class Ai_Seo_Admin
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
   * @param    string    $plugin_name       The name of this plugin.
   * @param    string    $version    The version of this plugin.
   */
  public function __construct($plugin_name, $version)
  {

    $this->plugin_name = $plugin_name;
    $this->version = $version;

  }

  /**
   * Register the stylesheets for the admin area.
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

    wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/ai-seo-admin.css', array(), $this->version, 'all');

  }

  /**
   * Register the JavaScript for the admin area.
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

    wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/ai-seo-admin.js', array('jquery'), $this->version, false);

  }

  /**
   * Register the administration menu for this plugin into the WordPress Dashboard menu.
   *
   * @since    1.0.0
   */
  public function add_plugin_admin_menu()
  {

    add_menu_page(
      'AI SEO Settings',
      'AI SEO',
      'manage_options',
      $this->plugin_name,
      array($this, 'display_plugin_setup_page'),
      'dashicons-chart-bar',
      110
    );
  }

  /**
   * Render the settings page for this plugin.
   *
   * @since    1.0.0
   */
  public function display_plugin_setup_page()
  {
    include_once 'partials/ai-seo-admin-display.php';
  }

  /**
   * Register settings.
   *
   * @since    1.0.0
   */
  public function register_settings()
  {
    register_setting($this->plugin_name, 'ai_seo_enable_llms_txt');
    register_setting($this->plugin_name, 'ai_seo_site_summary');
  }

  /**
   * Add Meta Box.
   *
   * @since    1.0.0
   */
  public function add_ai_seo_meta_box()
  {
    $screens = ['post', 'page'];
    foreach ($screens as $screen) {
      add_meta_box(
        'ai_seo_meta_box',           // Unique ID
        'AI SEO',                    // Box title
        array($this, 'render_ai_seo_meta_box'),  // Content callback, must be of type callable
        $screen,                     // Post type
        'side'                       // Context
      );
    }
  }

  /**
   * Render Meta Box.
   *
   * @since    1.0.0
   */
  public function render_ai_seo_meta_box($post)
  {
    // Add an nonce field so we can check for it later.
    wp_nonce_field('ai_seo_meta_box_action', 'ai_seo_meta_box_nonce');

    $value = get_post_meta($post->ID, '_ai_seo_summary', true);
    $score = get_post_meta($post->ID, '_ai_seo_score', true);
    if (!$score) {
      $score = 0;
    }

    echo '<label for="ai_seo_summary">';
    _e('AI Summary', 'ai-seo');
    echo '</label> ';
    echo '<textarea id="ai_seo_summary" name="ai_seo_summary" rows="5" style="width:100%;">' . esc_attr($value) . '</textarea>';
    echo '<p class="description">' . __('Enter a concise summary for LLMs.', 'ai-seo') . '</p>';

    echo '<div style="margin-top: 15px; padding: 10px; background: #f0f0f1; border: 1px solid #ccc;">';
    echo '<strong>' . __('LLM Visibility Score™', 'ai-seo') . ': </strong>';
    echo '<span style="font-size: 1.5em; font-weight: bold; color: #2271b1;">' . esc_html($score) . '/100</span>';
    echo '</div>';
  }

  /**
   * Save Meta Box Data.
   *
   * @since    1.0.0
   */
  public function save_ai_seo_meta_box_data($post_id)
  {
    // Check if our nonce is set.
    if (!isset($_POST['ai_seo_meta_box_nonce'])) {
      return;
    }

    // Verify that the nonce is valid.
    if (!wp_verify_nonce($_POST['ai_seo_meta_box_nonce'], 'ai_seo_meta_box_action')) {
      return;
    }

    // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
      return;
    }

    // Check the user's permissions.
    if (isset($_POST['post_type']) && 'page' == $_POST['post_type']) {
      if (!current_user_can('edit_page', $post_id)) {
        return;
      }
    } else {
      if (!current_user_can('edit_post', $post_id)) {
        return;
      }
    }

    /* OK, it's safe for us to save the data now. */

    // Make sure that it is set.
    if (!isset($_POST['ai_seo_summary'])) {
      return;
    }

    // Sanitize user input.
    $my_data = sanitize_textarea_field($_POST['ai_seo_summary']);

    // Update the meta field in the database.
    update_post_meta($post_id, '_ai_seo_summary', $my_data);

    // Calculate and save score
    require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-ai-seo-generator.php';
    $generator = new Ai_Seo_Generator();
    $score = $generator->calculate_score($post_id);
    update_post_meta($post_id, '_ai_seo_score', $score);
  }

}
