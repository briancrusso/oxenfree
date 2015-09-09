$(document).ready(function(){
	$('.home').click (function(){
		$('.about').hide();
		$('.boxes').show();
	});
		$('.fa-bars').click (function(){
		$('.menu').toggle();
	})
});