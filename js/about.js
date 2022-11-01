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



	//Acordeón:
		$("#acordeon").accordion();


	//reloj:
	setInterval(()=>{
		var reloj = moment().format('hh:mm:ss a');
		$("#reloj").html(reloj);
	},1000);	
  	

});//Fin document ready







