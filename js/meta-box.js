(function($, api, ptm){

	$(function(){

		const $root = $("#"+ptm.root_id);
		const i18n = ptm.i18n;
		const mailchimp = ptm.mailchimp;

		if(false === mailchimp){
			// API not ready yet
			return;
		}

		// -----------------------------------
		// data functions
		// -----------------------------------
		function has_open_campaign(){
			for(let i = 0; i < mailchimp.campaigns.length; i++){
				if('save' === mailchimp.campaigns[i].status){
					return true;
				}
			}
			return false;
		}

		function getListUrl(web_id){
			return "https://admin.mailchimp.com/lists/members/?id="+web_id;
		}

		function getCampaignUrl(web_id){
			return "https://admin.mailchimp.com/campaigns/edit?id="+web_id;
		}

		// -----------------------------------
		// build UI
		// -----------------------------------
		function setMailchimpState(mailchimp) {
			$root.empty();
			buildCampaignsList(mailchimp.campaigns, mailchimp.lists).appendTo($root);

		}

		function buildCampaignsList(campaigns, lists) {
			const $ul = $("<ul></ul>").addClass('campaign-list');
			for(let i = 0; i < campaigns.length; i++){
				$ul.append(buildCampaignItem(campaigns[i], lists));
			}
			return $ul;
		}

		function buildErrorItem(msg){
			return $("<div class='post_to_mailchimp__error'></div>")
			.append($("<div class='post_to_mailchimp__error--title'>Error</div>"))
			.append($("<pre class='post_to_mailchimp__error--details'>"+msg+"</pre>"));
		}

		function buildCampaignItem(item, lists){

			const $li = $("<li></li>").addClass('campaign-list--item').attr("data-campaign-id", item.id);

			if(typeof item.status === typeof undefined || 404 === item.status){
				console.error(item);
				buildErrorItem(item.title).appendTo($li);
			} else {
				$("<div class='title'></div>").append( buildCampaignLink(item.settings.title, item.web_id) ).appendTo($li);
				$li.append(buildCampaignItemContent(item, lists));
			}

			return $li;
		}

		function buildCampaignItemContent(item, lists){
			const list_id = item.recipients.list_id;
			let list = null;
			const $content = $("<div class='content'></div>");
			for(let i = 0; i < lists.length; i++){
				if(lists[i].id === list_id ){
					list = lists[i];
					break;
				}
			}
			if(null !== list){
				$content.append($("<div></div>")
				.append($("<span></span>").text(i18n.list_prefix+": "))
				.append(buildListLink(list.name, list.web_id )));
			} else {
				$content.append($("<div></div>")
				.append($("<span></span>").text(i18n.list_prefix+": "))
				.text(item.recipients.list_name));
			}

			if('' !== item.send_time){
				if ( "schedule" === item.status ) {
					$content.append($("<div></div>").text(i18n.scheduled_to_send));
				} else if('sent' === item.status){
					$content.append($("<div></div>").text(i18n.was_send));
				} else {
					$content.append($("<div></div>").text(item.status));
				}
				$content.append($("<div></div>").text(item.send_time_format));
			} else {
				const $controls = $("<div></div>").addClass('campaign-controls');
				$('<div></div>').addClass('campaign-controls--time')
					.append($("<span></span>").text(i18n.send_it+": "))
					.append($("<strong></strong>").addClass("time-display").text(i18n.now+" "))
					.append($("<a href='#mailchimp-schedule'></a>").addClass('hide-if-no-js').text(i18n.edit))
					.appendTo($controls);

				$('<div></div>').addClass('campaign-controls--send')
					.append($("<button></button>").addClass('button send').text(i18n.btn_send))
					.appendTo($controls);

				$content.append($controls);
			}

			return $content;

		}

		function buildListLink(text, web_id){
			return $("<a></a>")
			.text(text)
			.attr("href", getListUrl(web_id))
			.attr("target", "_blank");
		}

		function buildCampaignLink(text, web_id){
			return $("<a></a>")
			.text(text)
			.attr("href", getCampaignUrl(web_id))
			.attr("target", "_blank");
		}

		setMailchimpState(mailchimp);

		// -----------------------------------
		// dom manipulation
		// -----------------------------------
		const $box = $("#post_to_mailchimp-meta-box");
		const $next_campaign_info = $box.find("#post_to_mailchimp__next-campaign_info");
		const $next_campaign_create = $box.find("#post_to_mailchimp__next-campaign_create");

		// clone timewrap from wordpress
		const $timewrap = $("#misc-publishing-actions .timestamp-wrap").clone();
		$timewrap.addClass("mailchimp-time")
		.find("input, select").each(function(i,el){
			const $el = $(el);
			$el
			.attr("data-id", $el.attr("id"))
			.removeAttr("id")
			.attr("name", "mailchimp_"+$el.attr("name"));
		});

		// fields
		const $day = $timewrap.find("[data-id=jj]");
		const $month = $timewrap.find("[data-id=mm]");
		const $year = $timewrap.find("[data-id=aa]");
		const $hours = $timewrap.find("[data-id=hh]");
		const $minutesOld = $timewrap.find("[data-id=mn]");
		const $minutes = $("<select></select>")
			.attr("name", $minutesOld.attr("name"))
			.attr("data-id", $minutesOld.attr("data-id"))
			.append("<option value='0'>00</option>")
			.append("<option value='15'>15</option>")
			.append("<option value='30'>30</option>")
			.append("<option value='45'>45</option>");
		$minutesOld.replaceWith($minutes);

		/**
		 *
		 * @param date Date
		 */
		function setTimewrap(date){

			// last quarter hour has to be one hour later
			if(date.getMinutes() > 45){
				date = new Date(date.getTime()+1000*60*60);
			}

			$day.val(date.getDate());
			$month.val(date.getMonth()+1);
			$year.val(date.getFullYear());
			$hours.val(date.getHours());
			$minutes.val(date.getMinutes());
			if(date.getMinutes() <= 15){
				$minutes.val(15);
			} else if(date.getMinutes() <= 30){
				$minutes.val(30);
			} else if(date.getMinutes() <= 45){
				$minutes.val(45);
			} else{
				$minutes.val(0);
			}
		}

		function getTimewrapDate(){
			const date = new Date();
			date.setFullYear(parseInt($year.val()), parseInt($month.val())-1, parseInt($day.val()));
			date.setHours(parseInt($hours.val()), parseInt($minutes.val()));
			return date;
		}

		function setLoading($button, text){
			$button.hide();
			let $loading = $button.next(".loading");
			if($loading.length <= 0){
				$loading = $("<p class='loading description'></p>");
				$button.after($loading);
			}
			$loading.text((typeof text === typeof "")? text : i18n.loading);
		}

		function setError($button){
			$button.hide();
			let $loading = $button.next(".loading");
			if($loading.length <= 0){
				$loading = $("<p class='loading description'></p>");
				$button.after($loading);
			}
			$loading.text(i18n.error);
		}

		// -----------------------------------
		// Event handlers
		// -----------------------------------
		$box.on("click", "[href=#mailchimp-schedule]", function(e){
			e.preventDefault();

			const $a = $(this);
			const $time_controls = $a.closest('.campaign-controls--time');
			const $timedisplay = $(".time-display");

			if(!$time_controls.find(".mailchimp-time").length){
				$timewrap.hide();
				$time_controls.append($timewrap);
				const now = new Date();
				setTimewrap(new Date(now.getTime()+ (1000*60*30)));
				$timewrap.slideDown();
				$a.text(" "+i18n.time_edit_cancel);
				$timedisplay.text(i18n.time_display_schedule);
			} else {
				$timewrap.slideUp({
					done: function(){
						$timewrap.remove();
					}
				});
				$a.text(" "+i18n.time_edit);
				$timedisplay.text(i18n.time_display_now);
			}
		});

		let creating = false;
		$box.on("click","[name=post_to_mailchimp_create]", function(e) {
			e.preventDefault();
			if(creating) return;
			creating = true;

			const $button = $(this);
			const list_id = $box.find("[name=post_to_mailchimp_list_id]").val();

			setLoading($button, i18n.loading_create);

			api.create(list_id, function(error, data){
				if(error){
					setError($button);
				} else {
					setTimeout(function(){
						window.location.reload();
					},1000);
				}
			});

		});

		let sending = false;
		$box.on("click", "button.send", function(e){
			e.preventDefault();
			if(sending) return;
			sending = true;

			const $button = $(this);

			const $item = $(this).closest(".campaign-list--item");
			const id = $item.attr("data-campaign-id");
			const $schedule = $item.find($timewrap);
			let schedule = null;
			if($schedule.length > 0){
				schedule = getTimewrapDate();
				const today = new Date();
				if(schedule <= today){
					alert(i18n.warning_schedule_in_past);
					return;
				}
			}

			setLoading($button, i18n.loading_send);

			api.schedule(id, schedule, function(error, data){
				if(error){
					console.error(data);
					setError($button);
				} else {
					setTimeout(function(){
						window.location.reload();
					},1000);
				}
			});


		});



		// -----------------------------------
		// init
		// -----------------------------------
		if(!has_open_campaign()){
			$next_campaign_create.show();
		} else {
			$next_campaign_info.show();
		}

	});


})(jQuery, PostToMailchimpAPI, PostToMailchimpMetaBox);