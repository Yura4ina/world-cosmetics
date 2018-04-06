$(document).ready(function(){
	$('.top-nav-media-b').on('click', function() {		
		if ($('.main-nav').hasClass("main-nav-show")) {
		    $('.main-nav').removeClass( "main-nav-show" );
		}else{
		    $('.main-nav').addClass( "main-nav-show" );			
		}   
	});

	$('.media-bl').on('click', function() {
		if ($(this).hasClass("new")) {
		    $('.sec-main-nav').removeClass( "selected-main-nav" );
		    $(this).removeClass("new");
		}else{
		    $('.sec-main-nav').addClass( "selected-main-nav" );	
		    $(this).addClass("new");		
		} 
	});
	$(document).click(function (event) {
        if ($(event.target).closest($('.media-bl')).length) return;
        if ($(event.target).closest($('.sec-main-nav')).length) return;
        $('.sec-main-nav').removeClass( "selected-main-nav" );
		$('.media-bl').removeClass("new");

    });
    $(document).click(function (event) {
        if ($(event.target).closest($('.top-nav-media-b')).length) return;
        if ($(event.target).closest($('.main-nav')).length) return;
        $('.main-nav').removeClass( "main-nav-show" );
    });
	$('.sec-main-nav ul li').on('click', function () {
		if ($(this).find('ul').hasClass("selected-main-nav")) {
			$( this ).find('ul').removeClass( "selected-main-nav" );
		    $(this).removeClass("new");
		}else{
			$( this ).find('ul').addClass( "selected-main-nav" );
		    $(this).addClass("new");		
		}
	});
	$('.slider-top').owlCarousel({
		center: true,
		items:1,
		nav: true,
		dots: false,
		margin:10,
		responsive:{
		    600:{
		        items:1
		    }
		}
	});
	$(function() {
		$('.galery-grid').masonry({
	 		// options
			itemSelector: '.galery-item',
			columnWidth: 1,
			gutter: 25
		});
	});
	$('.slider-bott').owlCarousel({
		center: true,
		items:3,
		nav: true,
		dots: false,
		margin:10,
		loop:true,
		responsive:{
		    600:{
		        items:3
		    }
		}
	});

});
// Patch for a Bug in v6.3.1
	$(window).on('changed.zf.mediaquery', function() {
	  $('.is-accordion-submenu.invisible').removeClass('invisible');
	});

function myFunction(x) {
    if (x.matches) { 
	    $(function() {
			$('.galery-grid').masonry({
		 		// options
				itemSelector: '.galery-item',
				columnWidth: 1,
				gutter: 20
			});
		});
		$('.slider-bott').owlCarousel({
			center: true,
			items:1,
			nav: true,
			dots: false,
			margin:10,
			loop:true,
			responsive:{
			    600:{
			        items:1
			    }
			}
		});
    }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction)