=== Post to Mailchimp ===
Contributors: palasthotel, edwardbock
Donate link: http://palasthotel.de/
Tags: mailchimp, newsletter
Requires at least: 5.0
Tested up to: 5.8.1
Stable tag: 2.0.6
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl

Need a way to use posts as content for mailchimp?

== Description ==

Use post content for mailchimp campaigns.

== Installation ==

1. Upload `post-to-mailchimp.zip` to the `/wp-content/plugins/` directory
1. Extract the Plugin to a `post-to-mailchimp` Folder
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Goto settings and setup your mailchimp credentials
1. You now have a meta box on every post edit page to schedule newletters with the content of the post

== Frequently Asked Questions ==

= How can I customize the visualization of my newsletter? =

You can copy one or both templates out of the `wp-content/plugins/post-to-mailchimp/templates` directory into your theme folder in a directory called `plugin-parts` and customize the templates there.


== Screenshots ==


== Changelog ==

= 2.0.6 =
* Added new action when audience was updated
* Bugfix dirty campaignstate error campaign_id == null

= 2.0.5 =
* Added filter for editor audiences list
* Added filter for editor default schedule time

= 2.0.4 =
* Added action when campaign was sent

= 2.0.3 =
* Added support for process-log plugin

= 2.0.2 =
* Added action when campaign was scheduled

= 2.0.1 =
* Added QuickLink to Posts admin table

= 2.0.0 =
* Gutenberg support!
* dropped classic editor support

= 1.0.1 =
* Readme update

= 1.0 =
* First release

== Upgrade Notice ==

With version 2.x we dropped the support for the classic Editor and focus on gutenberg only.

== Arbitrary section ==



