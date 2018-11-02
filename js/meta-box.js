(function($,ptm){

	$(function(){

		const i18n = ptm.i18n;

		// submit button
		const $submit = $("#post_to_mailchimp_schedule");
		// display for when to send the mails
		const $timedisplay = $(".time-display");

		// clone timewrap from wordpress
		const $timewrap = $("#misc-publishing-actions .timestamp-wrap").clone();
		$timewrap
		.addClass("mailchimp-time")
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

		// listen to edit
		const $box = $("#post_to_mailchimp-meta-box");
		$box.on("click", "[href=#mailchimp-schedule]", function(e){
			e.preventDefault();

			const $a = $(this);
			const $time_controls = $a.closest('.campaign-controls--time');

			if(!$time_controls.find(".mailchimp-time").length){
				$timewrap.hide();
				$time_controls.append($timewrap);
				const now = new Date();
				setTimewrap(new Date(now.getTime()+ (1000*60*30)));
				$timewrap.slideDown();
				$a.text(i18n.time_edit_cancel);
				$timedisplay.text(i18n.time_display_schedule);
			} else {
				$timewrap.slideUp({
					done: function(){
						$timewrap.remove();
					}
				});
				$a.text(i18n.time_edit);
				$timedisplay.text(i18n.time_display_schedule);
			}

		});

		// check before submit
		$submit.on("click", function(e){
			const $schedule = $(this).closest(".campaign-list--item").find($timewrap);
			if($schedule.length > 0){
				const schedule = getTimewrapDate();
				const today = new Date();
				if(schedule <= today){
					e.preventDefault();
					alert(i18n.warning_schedule_in_past);
				}
			}
		});


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

		/**
		 * init
		 */
		if(ptm.schedule){
			$box.find('[href=#mailchimp-schedule]').last().trigger("click");
			const date = new Date();
			const schedule = ptm.schedule;
			console.log(schedule);
			date.setFullYear(schedule.year,schedule.month-1, schedule.day);
			date.setHours(schedule.hours, schedule.minutes);

			console.log(date);
			setTimewrap(date);
		}

	});


})(jQuery, PostToMailchimp);