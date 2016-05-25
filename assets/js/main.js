$(document).ready(function () {
	//PARA QUE EL DESPLAZAMIENTO DE LAS ANCLAS NO SEA TAN SALVAJE
	$(function(){

	     $('a[href*=#]').click(function() {

	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {

	             var $target = $(this.hash);

	             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

	             if ($target.length) {

	                 var targetOffset = $target.offset().top;

	                 $('html,body').animate({scrollTop: targetOffset}, 1000);

	                 return false;

	            }

	       }

	   });

	});
	$(document).on("scroll", function(){
	    var desplazamientoActual = $(document).scrollTop();
	    if(desplazamientoActual > 37){
	        $(".scroll-back").css("transform","scaleX(50)");

	        $("header a").addClass("hover-scroll")
	        $("header a").removeClass("hover-inicial")


	    }else{
	    	$(".scroll-back").css("transform","scaleX(1)");

	        $("header a").addClass("hover-inicial")
	        $("header a").removeClass("hover-scroll")
	    }
	});
});

	
