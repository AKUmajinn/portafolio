function animaciones() {
	var desplazamientoActual = $(document).scrollTop();
	if(desplazamientoActual > 37){
		$(".scroll-back").css("transform","scaleX(50)");
		$(".navbar-brand").addClass("hide");
		$("header a").addClass("hover-scroll").removeClass("hover-inicial");
	}else{
		$(".scroll-back").css("transform","scaleX(1)");
		$(".navbar-brand").removeClass("hide");
		$("header a").addClass("hover-inicial").removeClass("hover-scroll");
	};
	logoAnimacion(desplazamientoActual);
	skills (".acerca ",desplazamientoActual, 500,"x");
	skills (".skills ",desplazamientoActual, 1181,"x");
	skills (".portafolio ",desplazamientoActual, 1838,"x");
	items (desplazamientoActual);


}

function logoAnimacion (desplazamientoActual) {

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
	    	$("#logo").css("top","-11.5%");
	    	$("#logo").css("left","10%");
	    }
}
function skills (contenedor,desplazamientoActual,posicionElemento,xy) {
	 if (desplazamientoActual>posicionElemento) {
	 	$(contenedor+".raya1").css("transform","scale"+xy+"(1)");
	 	$(contenedor+".raya2").css("transform","scale"+xy+"(1)");
	 	$(contenedor+"img").css("transform", "translateY(0%)");
	 	
	 }else {
	 	$(contenedor+".raya1").css("transform","scale"+xy+"(0)");
	 	$(contenedor+".raya2").css("transform","scale"+xy+"(0)");
	 	$(contenedor+"img").css("transform", "translateY(70%)")

	 }
}
function items (desplazamientoActual) {
	if (desplazamientoActual>1390) {
		$(".skills .background").css("height", "100%");
	}else {
		$(".skills .background").css("height", "0%");

	}
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

//ocultar la animacion de carga aqui peerrro

	});
	$(document).on("scroll", animaciones);

	
});

	
