/*
 * 共通UI処理
 */

$('.c_link-pdf').on ('click', function() {
	var url = $(this).prop ('href');
	window.open (url, 'link-pdf', 'width=800,height=600');
	return false;
});

function initTimepicker (selector, step) {
	$(selector).timepicker();
	$(selector).timepicker('option', 'timeFormat', 'H:i');
//	$(selector).timepicker('option', 'orientation', 'lb');
	if (typeof step != 'undefined') {
		$(selector).timepicker('option', 'step', step);
	}
}

function initDatepicker (selector) {
    $(selector).datepicker();
    $(selector).datepicker("option", "showOn", 'button');
    $(selector).datepicker("option", "buttonImageOnly", true);
    $(selector).datepicker("option", "buttonImage", '../images/common/icon_calendar.png');
}

function dateFormat (date) {
	console.log(date);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	if (m < 10)
		m = "0" + m;
	if (d < 10)
		d = "0" + d;

	var result = y + "/" + m + "/" + d;

	return result;
}
