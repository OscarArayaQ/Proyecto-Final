var modificar = 0;
var eliminar = 0;
var obvervar = 0;
var send = 0;
var usuario = [];
var User = JSON.parse(localStorage.getItem("usuarios"));
var user_actual;
var validar = null;
var da1;
var da2;
var da3;
var da4;
var da5;
var da6;
//funcion para inicio de sesion
function iniciar_Sesion()
{
	
	var nombre_usuario = document.getElementById("Usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	validacion();
	if(validar === null){
		alert("Debe crear un Usuario antes de iniciar sesion");
	}else if(validar === "Entra como particular"){
		user_actual = document.getElementById("Usuario").value;
		localStorage.setItem("Usuario_Actual", user_actual);
		location.href="Bandeja de Salida.html";		
	}

}

// funcion que crea un usuario
function crear_usuario()
{
	
	validacion();	
	if(validar === null){
		usuario = [];
		var contrasenna = document.getElementById("contrasenna").value;
		var contrasenna_repeat = document.getElementById("Rcontrasenna").value;

		if(contrasenna == "" || contrasenna == null){
			alert("No puede dejar el campo de contraseña vacio");
		}else if(contrasenna_repeat == "" || contrasenna_repeat == null){
			alert("No puede dejar el campo de repetir contraseña vacio");
		}else{
			if(contrasenna === contrasenna_repeat){
				var nombreU = document.getElementById("Usuario").value;
				if(nombreU == "" || nombreU == null){
					alert("No puede dejar el campo de nombre de usuario vacio");
				}else{

					usuario.push(document.getElementById("Usuario").value,
						document.getElementById("contrasenna").value, document.getElementById("Rcontrasenna").value);
					User.push(usuario);
					localStorage['usuarios'] = JSON.stringify(User);
					alert("Usuario creado ya puedes iniciar sesion");
					location.href="Login.html"
				}
			}else{
				alert("No puedes crear el usuario porque las contraseñas son diferentes, asegurese que sea las mismas");
			}
		}
	}else if(validar === "Entra como administracion"){
		alert("No puedes crear con ese nombre de usuario porque ya existe");
	}else if(validar === "Entra como particular"){
		alert("No puedes crear con ese nombre de usuario porque ya existe");
	}else if(validar === "No_se_pudo_crear"){
		alert("No se pudo crear el usuario");
		validar = null;
	}
} 

// funcion que valida el login
function validacion()
{
	
	var storedNames =JSON.parse(localStorage.getItem("usuarios"));
	var nombre_usuario = document.getElementById("Usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre_usuario == "" || nombre_usuario == null){
		alert("No puede dejar el espacio del nombre de usuario en blanco.");
		validar = "No_se_pudo_crear";
	}else if(contrasenna == "" || contrasenna == null){
		alert("No puede dejar el espacio de la contraseña en blanco");
		validar = "No_se_pudo_crear";
	}else {
		if(storedNames == null){
			validar = null;
			User = usuario;
		}else{
			validar = null;
			//debugger;
			for(i = 0; i < storedNames.length; i++){
				for (j = 0; j < storedNames[i].length; j++){
					if(storedNames[i][j] === nombre_usuario){
						if(storedNames[i][j+1] === contrasenna){
							validar = "Entra como particular";
							break;
						}
					}
					if(validar === "Entra como particular"){

					}else{
						validar = null;
						break;
					}
				}
			}
		}
	}
}

function usuario(){
	var nombreDelUsuario = document.getElementById("user");
	asignarNombre(nombreDelUsuario);
}

function asignarNombre(nombreUsuario){
	var nombreU = nombreUsuario;
	var elemento = document.getElementById("Hi_user");
	elemento.innerHTML = nombreU;
}

function validarNewUser(){
	
	$("#New_usuario").hide();
	$("#Users").hide();
	$("#Hi_user").append(localStorage.getItem("Usuario_Actual"));
	
}


function agregarEmails(){
	//debugger;
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var arreglo = JSON.parse(localStorage.getItem(usuario_nombre));
	var email = document.getElementById("email").value;
	var asunto = document.getElementById("asunto").value;
	var description = document.getElementById("description").value;
	var hoy = new Date();
	var fecha = hoy.getDate();
	var modify;
	var dilete;
	var send;
	if(email == "" || email == null){
		alert("No puede dejar el campo de cliente vacio");
	}else if(asunto == "" || asunto == null){
		alert("No puede dejar el campo de descripcion vacio");
	}else if(description == "" || description == null){
		alert("No puede dejar el campo de descripcion vacio");
	}else{
		correos = [];
		if(arreglo == null){
			arreglo = [];
			var id=0;
			correos.push(id, document.getElementById("email").value,document.getElementById("asunto").value,document.getElementById("description").value,
				fecha);
			arreglo.push(correos);
			localStorage[usuario_nombre] = JSON.stringify(arreglo);
			$("#mensaje").show();
			alert("Se guardó correctamente");
			location.reload();
		}else{
			arreglo.push(correos);
			if(arreglo.length == 1){
				var id = arreglo.length;
				correos.push(id,document.getElementById("email").value,document.getElementById("asunto").value,document.getElementById("description").value,
					fecha);
				localStorage[usuario_nombre] = JSON.stringify(arreglo);
				alert("Se guardó correctamente");
				location.reload();
			}else{
				var id = arreglo.length-1;
				correos.push(id,document.getElementById("email").value,document.getElementById("asunto").value,document.getElementById("description").value,
					fecha);
				localStorage[usuario_nombre] = JSON.stringify(arreglo);
				alert("Se guardó correctamente");
				location.reload();
			}
		}
	}
}

function cargarTablaSalida(){
	
	var hoy = new Date();
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var lis_usuario =JSON.parse(localStorage.getItem(usuario_nombre));
	var idEdit;
	var idDelete;
	if(lis_usuario == null){
		
	}else{
		for (var i = 0; i < lis_usuario.length; i++) {
			for (var j = 0; j <lis_usuario[i].length; j++) {
				var table = document.getElementById("tablaSalida");
				var row = table.insertRow();
				var emailCell = row.insertCell(0);
				var asuntoCell = row.insertCell(1);
				var modify = row.insertCell(2);
				var dilete = row.insertCell(3);
				var send = row.insertCell(4);

				emailCell.innerHTML = lis_usuario[i][j+1];
				asuntoCell.innerHTML  = lis_usuario[i][j+2];
				modify.innerHTML = "";
				dilete.innerHTML = "";
				send.innerHTML = "";
				idEdit = lis_usuario[i][j];
				idDelete = lis_usuario[i][j];
				idSend = lis_usuario[i][j];

				var link = document.createElement("A");
				link.setAttribute("href", "Editar Correo.html");
				link.setAttribute("id" , idEdit);
				link.setAttribute("onclick", "modif(this)");
				var x = document.createElement("IMG");
				x.setAttribute("src", "imagenes/editar.png");

				link.appendChild(x);
				modify.appendChild(link, x);


				var link2 = document.createElement("A");
				link2.setAttribute("href","EliminarEmail.html");
				link2.setAttribute("id" , idDelete);
				link2.setAttribute("onclick", "elim(this)");

				var x2 = document.createElement("IMG");
				x2.setAttribute("src", "imagenes/basurero.png");

				link2.appendChild(x2);

				dilete.appendChild(link2,x2);

				var link3 = document.createElement("A");
				link3.setAttribute("id" , idSend);
				link3.setAttribute("onclick", "envi(this)");

				var x3 = document.createElement("IMG");
				x3.setAttribute("src", "imagenes/enviar.png");

				link3.appendChild(x3);

				dilete.appendChild(link3,x3);
				break;
			};
		};
	}
}

function cargarTablaEnviado(){
	
	var hoy = new Date();
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "enviado";
	var listUsuario =JSON.parse(localStorage.getItem(usuario_nombre));
	var idVer;
	var idDelete;
	if(listUsuario == null){
		
	}else{
		for (var i = 0; i < listUsuario.length; i++) {
			for (var j = 0; j <listUsuario[i].length; j++) {
				var table = document.getElementById("tablaEnviado");
				var row = table.insertRow();
				var emailCell = row.insertCell(0);
				var asuntoCell = row.insertCell(1);
				var obser = row.insertCell(2);
				var dilete = row.insertCell(3);

				emailCell.innerHTML = listUsuario[i][j+1];
				asuntoCell.innerHTML  = listUsuario[i][j+2];
				obser.innerHTML = "";
				dilete.innerHTML = "";
				idVer = listUsuario[i][j];
				idDelete = listUsuario[i][j];

				var link = document.createElement("A");
				link.setAttribute("href", "Ver correo.html");
				link.setAttribute("id" , idVer);
				link.setAttribute("onclick", "observ(this)");
				var x = document.createElement("IMG");
				x.setAttribute("src", "imagenes/ver.png");

				link.appendChild(x);
				obser.appendChild(link, x);


				var link2 = document.createElement("A");
				link2.setAttribute("href","Eliminar_Enviados.html");
				link2.setAttribute("id" , idDelete);
				link2.setAttribute("onclick", "elim(this)");

				var x2 = document.createElement("IMG");
				x2.setAttribute("src", "imagenes/basurero.png");

				link2.appendChild(x2);

				dilete.appendChild(link2,x2);
				break;
			};
		};
	}
}

function modif(elemento){
	var id = elemento.id;
	modificar = parseInt(id);
	localStorage.setItem("id",modificar);
}

function observ(elemento){
	var id = elemento.id;
	obvervar = parseInt(id);
	localStorage.setItem("id",obvervar);
}

function cargarEditSalida(){
	
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var listmail =JSON.parse(localStorage.getItem(usuario_nombre));
	modificar = JSON.parse(localStorage.getItem("id"));
	for (var i = 0; i < listmail.length; i++) {
		for (var j = 0; j < listmail[i].length; j++) {
			if(modificar == listmail[i][j]){
				da1 =  listmail[i][j+1];
				da2 = listmail[i][j+2];
				da3 = listmail[i][j+3];
				document.getElementById("email").value =  da1;
				document.getElementById("asunto").value = da2;
				document.getElementById("description").value = da3;
				
			}
		};
	};
	
}

// funcion que carga los datos en cada uno de los input 
function ver(){
	
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "enviado";
	var listmail =JSON.parse(localStorage.getItem(usuario_nombre));
	modificar = JSON.parse(localStorage.getItem("id"));
	for (var i = 0; i < listmail.length; i++) {
		for (var j = 0; j < listmail[i].length; j++) {
			if(modificar == listmail[i][j]){
				da1 =  listmail[i][j+1];
				da2 = listmail[i][j+2];
				da3 = listmail[i][j+3];
				document.getElementById("email").value =  da1;
				document.getElementById("asunto").value = da2;
				document.getElementById("description").value = da3;
				
			}
		};
	};
	
}

function editarEmail(){
	
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var listemail =JSON.parse(localStorage.getItem(usuario_nombre));
	modificar = JSON.parse(localStorage.getItem("id"));
	for (var i = 0; i < listemail.length; i++) {
		for (var j = 0; j < listemail[i].length; j++) {
			if(modificar == listemail[i][j]){
				var de = document.getElementById("email").value;
				var as = document.getElementById("asunto").value;
				var d = document.getElementById("description").value;
				if(de == "" || de == null){
					alert("No puede dejar el campo de cliente vacio");
					break;
				}else if(as == "" || as == null){
					alert("No puede dejar el campo de descripcion vacio");
					break;
				}else if(d == "" || d == null){
					alert("No puede dejar el campo de fecha vacio");
					break;
				}else{
					listemail[i][j+1] = de;
					listemail[i][j+2] = as;
					listemail[i][j+3] = d;
					localStorage[usuario_nombre] = JSON.stringify(listemail);
					alert("Se Modificó correctamente");
					location.href = "Bandeja de Salida.html";
					break;
				}
			}
		};
	};
}

function elim(elemento){
	
	var id = elemento.id;
	eliminar = parseInt(id);
	localStorage.setItem("id",eliminar);
}

function envi(elemento){
	
	var id = elemento.id;
	send = parseInt(id);
	localStorage.setItem("id",send);
	enviar();
}

function EliminarEmail(){
	
	var acumulador = localStorage.getItem("Usuario_Actual") + "salida";
	var salida = JSON.parse(localStorage.getItem(acumulador));
	for (i=0; i< salida.length; i++){
		for (j=0; j< salida[i].length; j++){
			eliminar = JSON.parse(localStorage.getItem("id"));
			if(eliminar == salida[i][j]){
				salida.splice(i, 1);
				localStorage[acumulador] = JSON.stringify(salida);
				alert("Se Eliminó correctamente");
				location.href = "Bandeja de Salida.html";
			}
		}
	}
}

function EliminarEmailEnviado(){
	
	var acumulador = localStorage.getItem("Usuario_Actual") + "enviado";
	var enviado = JSON.parse(localStorage.getItem(acumulador));
	for (i=0; i< enviado.length; i++){
		for (j=0; j< enviado[i].length; j++){
			eliminar = JSON.parse(localStorage.getItem("id"));
			if(eliminar == enviado[i][j]){
				enviado.splice(i, 1);
				localStorage[acumulador] = JSON.stringify(enviado);
				alert("Se Eliminó correctamente");
				location.href = "Enviados.html";
			}
		}
	}
}

function enviar(){
	
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var arreglo = JSON.parse(localStorage.getItem(usuario_nombre));
	for (var i = 0; i < arreglo.length; i++) {
		for (var j = 0; j <arreglo[i].length; j++) {

			if(send == arreglo[i][j]){
				var correo = arreglo[i][j+1];
				var asunto = arreglo[i][j+2];
				var descripcion = arreglo[i][j+3];

				var usuario_nom = (localStorage.getItem("Usuario_Actual") + "enviado");
				var arreglo2 = JSON.parse(localStorage.getItem(usuario_nom));
				correos = [];
				if(arreglo2 == null){
					arreglo2 = [];
					var id=0;
					correos.push(id,correo,asunto,descripcion);
					arreglo2.push(correos);
					localStorage[usuario_nom] = JSON.stringify(arreglo2);
					alert("Se envió correctamente");
					EliminarEmail();
					location.reload();
				}else{
					arreglo.push(correos);
					if(arreglo.length == 1){
						var id = arreglo.length;
						correos.push(id,correo,asunto,descripcion);
						arreglo2.push(correos);
						localStorage[usuario_nom] = JSON.stringify(arreglo2);
						alert("Se envió correctamente");
						EliminarEmail();
						location.reload();
					}else{
						var id = arreglo.length-1;
						correos.push(id,correo,asunto,descripcion);
						arreglo2.push(correos);
						localStorage[usuario_nom] = JSON.stringify(arreglo2);
						alert("Se envió correctamente");
						EliminarEmail();
						location.reload();
					}
				}
			}
		};
	};

}