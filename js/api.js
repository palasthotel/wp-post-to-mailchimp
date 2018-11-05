(function($, api){

	/**
	 *
	 * @param list_id String
	 * @param cb Function
	 */
	api.create = function(list_id, cb){
		$.post(ajaxurl,{
			action: api.action_create,
			post_id: api.post_id,
			list_id: list_id,
		}, function(data){

			if(data && typeof data.id !== typeof undefined){
				cb(false, data);
			} else {
				cb(true, data);
			}

		});
	};

	/**
	 *
	 * @param campaign_id String
	 * @param schedule Date
	 * @param cb Function
	 */
	api.schedule = function(campaign_id, schedule, cb){
		$.post(ajaxurl,{
			action: api.action_send,
			campaign_id: campaign_id,
			schedule: (null != schedule)? schedule.toISOString(): null,
		}, function(data){
			if(data === true){
				cb(false, data);
			} else {
				cb(true, data);
			}
		});
	};

	/**
	 *
	 * @param campaign_id String
	 * @param cb Function
	 */
	api.send = function(campaign_id, cb){
		api.schedule(campaign_id, null, cb);
	};

})(jQuery, PostToMailchimpAPI);