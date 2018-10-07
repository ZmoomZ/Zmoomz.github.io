$(document).ready(function(){

	$('.popup_trigger').on("click", function(){
		$('.overlay').show();
	});

	$('.popup-close').on("click", function(){
		$('.overlay').hide();
	});

});
