'use strict'

$(document).ready(function(){/*con esto no necesito poner el addEventLiestener 'load'. */
	console.log("JQuery y documento cargados!");
	

  	//Fecha:
  	var fecha = moment().format("dddd") + ", " + moment().format("DD MMMM YYYY");
  	$('#fecha').html(fecha);

  	//Posts:
  	var posts = [
  		{
  			title: "Sobre mí",
  			content: "Me llamo Daniela Pinto y soy estudiante de programación en búsqueda del primer empleo IT. Actualmente estoy cursando la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional (UTN). Paralelamente, me encuentro realizando cursos de desarrollo web, a fin de complementar y enriquecer mi formación académica. </br> Soy una persona entusiasta, apasionada por el conocimiento y motivada por la curiosidad, que disfruta de los desafíos, del trabajo en equipo y de aprender cosas nuevas."
  		},
  	];

  	posts.forEach((item, index) => {
  		var post = `
  			<article class="post">
  			<h2>${item.title}</h2>
  			
  			<p>
  				${item.content}
  			</p>
  			`;  	
  		$("#posts").append(post);
  	});

	//Scroll up:
	$(".subir").click((e)=>{
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	/* La línea: "e.preventDefault();" y la "e" como parámetro podrían no estár. Se agrega como buena práctica para prevenir que se rompa, poniendo un valor por defecto. El return también puede no estar. No se explicó bien para qué se pone.*/


	//reloj:
	setInterval(()=>{
		var reloj = moment().format('hh:mm:ss a');
		$("#reloj").html(reloj);
	},1000);
  	

});//Fin document ready



