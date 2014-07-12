	$(document).ready(function() {

	$("#sortable").sortable();

	$("#instructobutton").click(function () {
	$(this).hide();
	$("#destructobutton").show();
	$(".instructions").fadeIn(1000);
	});

	$("#destructobutton").click(function () {
	$(this).hide();
	$("#instructobutton").show();
	$(".instructions").fadeOut(1000);
	});

	$("#redX").click (function () {
	$("listitem").remove();
	});

	$("#enterbutton").click(function () {
	var addItem = $("#enterbox").val();
	$("#sortable").prepend('<li class="listitem"><button class="movegrid"><span class="glyphicon glyphicon-unchecked"></span></button><p>'  +  addItem + '</p><button class="redX"><span class="glyphicon glyphicon-remove"></span></button></li>')
	});

	$(".movegrid").click(function () {
	$(this).siblings("li").fadeTo(400, "fast")
	});
});