window.addEventListener('load', function(){

	console.log("js cargado");
	
		var datos = document.querySelector("#datos");
		var suma = document.querySelector("#suma span");
		var total = document.querySelector("#total span");
		var tasa = document.querySelector("#tasa").value;
		// tiene que estar dentro de la funcion, si no no lo toma
		

		datos.addEventListener('submit', function(){
			console.log('suma ejecutada');

			var valor1 = parseInt(document.querySelector("#valor1").value);
				if (isNaN(valor1)) valor1 = 0;
			var valor2 = parseInt(document.querySelector("#valor2").value);
				if (isNaN(valor2)) valor2 = 0;
			var valor3 = parseInt(document.querySelector("#valor3").value);
				if (isNaN(valor3)) valor3 = 0;
		
			console.log(valor2 + valor1 + valor3);
			suma.innerHTML = valor1 + valor2 + valor3;

			return;
		});


		var calculo = document.querySelector("#calculo");

		calculo.addEventListener('submit',function(){
			console.log('calculo ejecutado');
			var tasa = document.querySelector("#tasa").value;
			var tiempo = document.querySelector("#tiempo").value;
			var base = 1 + Number(tasa/100);
			var exponente = (tiempo*12);
			
			var tasaAnual = Math.pow(base, exponente);

			console.log(tasa/100);	
			console.log(base, exponente);
			console.log("tasa anual: " +(tasaAnual).toFixed(2));		

			total.innerHTML = (Number(suma.innerHTML*tasaAnual)).toFixed(2);

			return;
		});

});
