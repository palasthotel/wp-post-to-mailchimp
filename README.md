# Post to Mailchimp

Use post content in Mailchimp campaigns.

## Installation

Like always: copy to wp-content/plugins/post-to-mailchimp and activate in backend.

Goto General Options -> Mailchimp and configure the plugin.

## Usage

There is a meta box which allows you to create campaigns with post content and send/schedule them.

## Templates

You can overwrite templates by copying from plugins folder templates to your theme/plugin-parts/*.


## Hooks

### Post types

List of post types that can use the meta box. Empty list will allow all post types. If you want to disable metabox for all post types just invent an post type that is not in system like 'no_post_type_is_enabled'.

```php
add_filter('post_to_mailchimp_post_types', function($post_types){
	/**
	* @var array $post_types
	*/
	return $post_types;
});
```

### Add content

```php
add_action('post_to_mailchimp_the_content', function($post_id){  
	/**
	* @var int $post_id
	*/
	echo "Content for the campaigne";  
});
```

### Change the content

```php
add_filter('post_to_mailchimp_change_content', function($content, $post_id){ 
	/**
	* @var string $content
	* @var int $post_id
	*/ 
	return "other content";  
}, 10, 2);
```

### Add plaintext content

```php
add_action('post_to_mailchimp_the_content_plaintext', function($post_id){  
	/**
	* @var int $post_id
	*/
	echo "Content for the campaigne";  
});
```

### Change the plaintext content

```php
add_filter('post_to_mailchimp_change_content_plaintext', function($content, $post_id){ 
	/**
	* @var string $content
	* @var int $post_id
	*/ 
	return "other content";  
}, 10, 2);
```

### Change arguments for creating a new campaign

```php
add_filter('post_to_mailchimp_add_campaign_args', function($args, $controller){
	/**
	* @var array $args
	* @var \Palasthotel\PostToMailchimp\Controller $controller
	*/
	return $args;
}, 10, 2);
```

### Change arguments for scheduling a campaign

```php
function('post_to_mailchimp_schedule_campaign_args', $args, $controller){
	/**
	* @var array $args
	* @var \Palasthotel\PostToMailchimp\Controller $controller
	*/
	return $args;
}, 10, 2);
```

### Add template path

If you want to use template of your custom plugin for example.

```php
add_filter('post_to_mailchimp_add_template_paths', function($paths){
	/**
	* @var array $paths list of absolute path names to template directories
	*/
	$paths[] = plugin_dir_path(__FILE__)."/my-templates";
	return $paths;
},10,2);
```