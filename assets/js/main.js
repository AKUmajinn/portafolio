function animaciones() {
	var desplazamientoActual = $(document).scrollTop();
	if(desplazamientoActual > 37){
		$(".scroll-back").addClass("animacionHeader1").removeClass("animacionHeader2");
		$(".navbar-brand").addClass("hide");
		$("header a").addClass("hover-scroll").removeClass("hover-inicial");
	}else{
		$(".scroll-back").addClass("animacionHeader2").removeClass("animacionHeader1");
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
		$("#logo").attr("class","logo1");

	}else if(desplazamientoActual>=136 && desplazamientoActual<=171) {
		$("#logo").attr("class","logo2");
	}else if (desplazamientoActual>=172 && desplazamientoActual<207) {
		$("#logo").attr("class","logo3");
	}else if (desplazamientoActual>=208 && desplazamientoActual<243) {
		$("#logo").attr("class","logo4");
	}else if (desplazamientoActual>=244&& desplazamientoActual<287) {
		$("#logo").attr("class","logo5");
	}else if (desplazamientoActual>=288 && desplazamientoActual<319) {
		$("#logo").attr("class","logo6");
	}else if (desplazamientoActual>320) {
		$("#logo").attr("class","logo7");
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
		$(".skills .background").addClass("active");
		$(".skills .background").removeClass("inactive");
	}else {
		$(".skills .background").addClass("inactive");
		$(".skills .background").removeClass("active");

	}
}
 
$(document).ready(function () {
	var indiceInicial=0;
	//PARA QUE EL DESPLAZAMIENTO DE LAS ANCLAS NO SEA TAN SALVAJE
	var links= [
		{imagen:"images/gridsystem.png",
		url:"http://akumajinn.github.io/Grid-system-boostrap/"
		},
		{imagen:"images/agency.png",
		url:"http://akumajinn.github.io/agency-theme/"
		},
		{imagen:"images/dashboard.png",
		url:"http://akumajinn.github.io/dashboard//"
		},
		{imagen:"images/lovetheme.png",
		url:"http://akumajinn.github.io/Love-theme/"
		}
		];
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
	$(document).on("scroll", animaciones);

	$(".direccionr").click(function (e) {
		e.preventDefault();
		indiceInicial=indiceInicial+1;
		if(!(indiceInicial<links.length)){
			indiceInicial=0;
		}

		$(".desktop a").attr("href", links[indiceInicial].url)
		$(".desktop img").attr("src", links[indiceInicial].imagen)
	})
	$(".direccionl").click(function (e) {
		e.preventDefault();
		indiceInicial=indiceInicial-1;
		if(!(indiceInicial>0)){
			indiceInicial=links.length -1;
		}

		$(".desktop a").attr("href", links[indiceInicial].url)
		$(".desktop img").attr("src", links[indiceInicial].imagen)
	})
		
});

	
