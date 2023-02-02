(function($) {
	'use strict';
	// Preloader
	// $(window).on('load',function(){
	// 	$(".loader").fadeOut(500);
	// });

	// Burger Menu JS
	$('.burger-menu').on('click', function() {
		$(this).toggleClass('active');
		$('.main-content').toggleClass('hide-sidemenu-area');
		$('.sidebar-menu-area').toggleClass('toggle-sidemenu-area');
		$('.navbar').toggleClass('toggle-navbar-area');
	});
	$('.responsive-burger-menu').on('click', function() {
		$('.responsive-burger-menu').toggleClass('active');
		$('.sidebar-menu-area').toggleClass('active-sidemenu-area');
	});

	// File Upload file input preview JS
	$("input:file").change(function (){
		var fileName = $(this).val();
		if(fileName.length >0){
    $(this).parent().children('span').html(fileName);
		}
		else{
			$(this).parent().children('span').html("Choose file");
		}
	});
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();            
			reader.onload = function (e) {
				$('.logoContainer img').attr('src', e.target.result);
				$('.coverContainer img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("input:file").change(function(){
		readURL(this);
	});
 
})(jQuery);
