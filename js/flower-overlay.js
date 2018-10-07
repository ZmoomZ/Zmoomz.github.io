$(document).ready(function(){

$('.flower-trigger').on("click", function(){
$('.flower-overlay').show();
});

$('.flower-popup__close').on("click", function(){
$('.flower-overlay').hide();
});

});
