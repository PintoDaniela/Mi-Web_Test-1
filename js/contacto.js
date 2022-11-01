'use strict'

$(document).ready(function(){/*con esto no necesito poner el addEventLiestener 'load'. */
	console.log("JQuery y documento cargados!");


	//Scroll up:
	$(".subir").click((e)=>{
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	/* La línea: "e.preventDefault();" y la "e" como parámetro podrían no estár. Se agrega como buena práctica para prevenir que se rompa, poniendo un valor por defecto. El return también puede no estar. No se explicó bien para qué se pone.*/



});//Fin document ready







