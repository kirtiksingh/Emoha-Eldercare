//BUTTON EFFECT START
 		$(document).ready(function(){
            Waves.init();
		});
//BUTTON EFFECT END

//PLACEHOLDER START
$(function () {
	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
			.attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});
//PLACEHOLDER END