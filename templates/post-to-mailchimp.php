<?php

/**
 * you are in the loop with WP_Post
 */

the_title('<h1>','</h1>');

echo "<div class='post-to-mailchimp__content'>";
the_content();
echo "</div>";