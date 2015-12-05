/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
		$(document).ready(function(){  
		   $(‘#boton-guardar’).click(function(){      
		/*Captura de datos escrito en los inputs*/      
		var nom = document.getElementById("nombreUsuario").value;
		var pass = document.getElementById("Contraseña").value;
		/*Guardando los datos en el LocalStorage*/
		localStorage.setItem("nombreUsuario", nom);
		localStorage.setItem("Contraseña", pass);
		/*Limpiando los campos o inputs*/
		document.getElementById("nombretxt").value = "";
		document.getElementById("Contraseña").value = "";
		   });  
		});

		/*Funcion Cargar y Mostrar datos*/
		$(document).ready(function(){  
		   $(‘#boton-cargar’).click(function(){                      
		/*Obtener datos almacenados*/
		var nombre = localStorage.getItem("Nombre");
		var apellido = localStorage.getItem("Apellido");
		/*Mostrar datos almacenados*/    
		document.getElementById("nombre").innerHTML = nombre;
		document.getElementById("apellido").innerHTML = apellido;
		   });  
		});

		