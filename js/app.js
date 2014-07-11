$( document ).ready(function() {
	$('#listul').sortable({ axis : "y"});
	handle: '.movegrid'

	$("#instructobutton").click (function () {
	$(this).hide();
	$("#destructobutton").show();
	$(".instructions").fadeIn(1000);
	});

	$("#destructobutton").click (function () {
	$(this).hide();
	$("#instructobutton").show();
	$(".instructions").fadeOut(10);
	});

	$(".enterbox").keypress(13, (function () {
	$("listul").prepend();
	}))
});