<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://example.com
 * @since      1.0.0
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/admin/partials
 */
?>

<div class="wrap">

  <h2><?php echo esc_html(get_admin_page_title()); ?></h2>

  <form method="post" action="options.php">
    <?php settings_fields('ai-seo'); ?>
    <?php do_settings_sections('ai-seo'); ?>

    <table class="form-table">
      <tr valign="top">
        <th scope="row"><?php _e('Enable /llms.txt', 'ai-seo'); ?></th>
        <td>
          <input type="checkbox" name="ai_seo_enable_llms_txt" value="1" <?php checked(1, get_option('ai_seo_enable_llms_txt'), true); ?> />
          <p class="description"><?php _e('Automatically generate an /llms.txt file for your site.', 'ai-seo'); ?></p>
        </td>
      </tr>

      <tr valign="top">
        <th scope="row"><?php _e('Site Summary', 'ai-seo'); ?></th>
        <td>
          <textarea name="ai_seo_site_summary" rows="5" cols="50"
            class="large-text code"><?php echo esc_attr(get_option('ai_seo_site_summary')); ?></textarea>
          <p class="description"><?php _e('A concise summary of your website for LLMs.', 'ai-seo'); ?></p>
        </td>
      </tr>
    </table>

    <?php submit_button(); ?>

  </form>

</div>