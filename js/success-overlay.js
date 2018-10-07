$(document).ready(function(){

	$('.form-popup-form__btn').on("click", function(){
        $('.success-overlay').show();
        $('.form-overlay').hide();
	});

	$('.popup-close').on("click", function(){
		$('.success-overlay').hide();
	});

});