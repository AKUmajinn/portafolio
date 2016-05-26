
function textLista()
	{
		max = textLista.arguments.length;
		for (i = 0; i < max; i++)
			this[i] = textLista.arguments[i];
	}

	function textEscribe(txt, selector, time)
	{
		$(selector).empty();
		var x = 0; pos = 0;
		var tl = new textLista
		( 
			txt
			);
		var l = tl[0].length;
		textInterval(selector, tl, l, x, pos, time);
	}

	function textInterval(selector, tl, l, x, pos, time)
	{ 
		var intervalo =
		setInterval(function() {
			$(selector).html(tl[x].substring(0,pos));
			if(pos++ == l) 
				clearInterval(intervalo);
		}, time);
	}
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
	       	$(".navbar-brand").addClass("hide");
	        $("header a").addClass("hover-scroll")
	        $("header a").removeClass("hover-inicial")
	    }else{
	    	$(".scroll-back").css("transform","scaleX(1)");
	    	$(".navbar-brand").removeClass("hide");
	        $("header a").addClass("hover-inicial")
	        $("header a").removeClass("hover-scroll")
	    };
	    if (desplazamientoActual>0 && desplazamientoActual<=135) {
	    	$("#logo").css("transform","scale(1)");
	    	$("#logo").css("top","30%");
	    	$("#logo").css("left","17%")
	    }else if(desplazamientoActual>=136 && desplazamientoActual<=171) {
	    	$("#logo").css("transform","scale(0.9)");
	    	$("#logo").css("top","24%");
	    	$("#logo").css("left","17%")
	    }else if (desplazamientoActual>=172 && desplazamientoActual<207) {
	    	$("#logo").css("transform","scale(0.8)");
	    	$("#logo").css("top","18%");
	    	$("#logo").css("left","17%")
	    }else if (desplazamientoActual>=208 && desplazamientoActual<243) {
	    	$("#logo").css("transform","scale(0.7)");
	    	$("#logo").css("top","12%");
	    	$("#logo").css("left","17%")
	    }else if (desplazamientoActual>=244&& desplazamientoActual<287) {
	    	$("#logo").css("transform","scale(0.6)");
	    	$("#logo").css("top","6%");
	    	$("#logo").css("left","17%")
	    }else if (desplazamientoActual>=288 && desplazamientoActual<319) {
	    	$("#logo").css("transform","scale(0.5)");
	    	$("#logo").css("top","0%");
	    	$("#logo").css("left","17%")
	    }else if (desplazamientoActual>320) {
	    	$("#logo").css("transform","scale(0.4)");
	    	$("#logo").css("top","-11%");
	    	$("#logo").css("left","10%");
	    }

	});

	textEscribe("HTML 80%", '#html', 200);
	textEscribe("CSS 70%", '#css', 200);
	textEscribe("JS 30%", '#js', 200);
	textEscribe("SASS 60%", '#sass', 200);
	textEscribe("JADE 50%", '#jade', 200);

	
});

	
