$(document).ready(function(){
	$('.box1').click (function(){
		$('.boxes').hide();
		$('.about').show();
		$('.about').css('display','table');
	})
	$('.home').click (function(){
		$('.about').hide();
		$('.boxes').show();
	});
		$('.fa-bars').click (function(){
		$('.menu').toggle();
	})
});