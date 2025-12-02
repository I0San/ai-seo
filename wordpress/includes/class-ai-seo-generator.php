<?php

/**
 * Core logic for generating content and scores.
 *
 * @link       https://example.com
 * @since      1.0.0
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/includes
 */

/**
 * Core logic for generating content and scores.
 *
 * @package    Ai_Seo
 * @subpackage Ai_Seo/includes
 * @author     IoSan <email@example.com>
 */
class Ai_Seo_Generator
{

  /**
   * Generate the content for llms.txt
   *
   * @since    1.0.0
   * @return   string    The content of llms.txt
   */
  public function generate_llms_txt()
  {
    $site_title = get_bloginfo('name');
    $site_desc = get_bloginfo('description');
    $site_summary = get_option('ai_seo_site_summary', $site_desc);

    $output = "# " . $site_title . "\n\n";
    $output .= "> " . $site_summary . "\n\n";

    $output .= "## Pages\n\n";

    // Get recent posts and pages
    $args = array(
      'post_type' => array('post', 'page'),
      'posts_per_page' => 50,
      'post_status' => 'publish',
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
      while ($query->have_posts()) {
        $query->the_post();
        $title = get_the_title();
        $permalink = get_permalink();
        $ai_summary = get_post_meta(get_the_ID(), '_ai_seo_summary', true);

        if (empty($ai_summary)) {
          $ai_summary = get_the_excerpt();
        }

        $output .= "- [" . $title . "](" . $permalink . "): " . $ai_summary . "\n";
      }
      wp_reset_postdata();
    }

    return $output;
  }

  /**
   * Calculate the LLM Visibility Score for a post.
   *
   * @since    1.0.0
   * @param    int       $post_id    The ID of the post.
   * @return   int                   The calculated score (0-100).
   */
  public function calculate_score($post_id)
  {
    $score = 0;
    $post = get_post($post_id);

    if (!$post) {
      return 0;
    }

    // 1. Has AI Summary? (40 pts)
    $ai_summary = get_post_meta($post_id, '_ai_seo_summary', true);
    if (!empty($ai_summary)) {
      $score += 40;
    }

    // 2. Content Length > 300 words? (30 pts)
    $content = $post->post_content;
    $word_count = str_word_count(strip_tags($content));
    if ($word_count > 300) {
      $score += 30;
    } elseif ($word_count > 100) {
      $score += 15;
    }

    // 3. Has Featured Image? (30 pts)
    if (has_post_thumbnail($post_id)) {
      $score += 30;
    }

    return min(100, $score);
  }

}
