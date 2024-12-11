function add_prebid_js() {
    // Use the correct path if you uploaded the file to the 'js' folder in the child theme
    wp_enqueue_script('prebid-js', get_stylesheet_directory_uri() . '/js/prebid.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'add_prebid_js');
