;(function ($) {
	'use strict';

	$(function () {

		var title = $('h1');
		var menu = $('#menu');
		var svgTitle = $.ajax({
			url: '/images/name.svg'
		});

		var injectTitle = function (data) {
			title.html($(data).children());
		};

		svgTitle.done(injectTitle);

		title.on('click', function () {
			title
				.removeClass('an-rfb')
				.addClass('an-rtt');
			menu
				.removeClass('an-rtt')
				.removeClass('o-n')
				.addClass('an-rfb');
		});
		
		menu.on('click', function () {
			title
				.removeClass('an-rtt')
				.addClass('an-rfb');
			menu
				.removeClass('an-rfb')
				.addClass('an-rtt');
		});

	});

} (jQuery));