$(document).ready(function(){

	$('.form-popup_trigger').on("click", function(){
		$('.form-overlay').show();
	});

	$('.form-popup__close').on("click", function(){
		$('.form-overlay').hide();
	});

});