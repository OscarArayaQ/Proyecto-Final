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
	//debugger;
	var nombre_usuario = document.getElementById("Usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	validacion();
	if(validar === null){
		alert("Debe crearlo primero antes de iniciar sesion");
	}else if(validar === "Entra como particular"){
		user_actual = document.getElementById("Usuario").value;
		localStorage.setItem("Usuario_Actual", user_actual);
		location.href="Bandeja de Salida.html";
		alert("BIENVENIDO");
	}

}

// funcion que crea un usuario
function crear_usuario()
{
	//debugger;
	validacion();
	//debugger;
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
	//debugger;
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
	//debugger;
	$("#New_usuario").hide();
	$("#Users").hide();
	$("#Hi_user").append(localStorage.getItem("Usuario_Actual"));
	
}

var chambas = [];
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
	//debugger;
	var hoy = new Date();
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var listcliente =JSON.parse(localStorage.getItem(usuario_nombre));
	var idEdit;
	var idDelete;
	if(listcliente == null){
		
	}else{
		for (var i = 0; i < listcliente.length; i++) {
			for (var j = 0; j <listcliente[i].length; j++) {
				var table = document.getElementById("tablaSalida");
				var row = table.insertRow();
				var emailCell = row.insertCell(0);
				var asuntoCell = row.insertCell(1);
				var modify = row.insertCell(2);
				var dilete = row.insertCell(3);
				var send = row.insertCell(4);

				emailCell.innerHTML = listcliente[i][j+1];
				asuntoCell.innerHTML  = listcliente[i][j+2];
				modify.innerHTML = "";
				dilete.innerHTML = "";
				send.innerHTML = "";
				idEdit = listcliente[i][j];
				idDelete = listcliente[i][j];
				idSend = listcliente[i][j];

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
	//debugger;
	var hoy = new Date();
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "enviado";
	var listcliente =JSON.parse(localStorage.getItem(usuario_nombre));
	var idVer;
	var idDelete;
	if(listcliente == null){
		
	}else{
		for (var i = 0; i < listcliente.length; i++) {
			for (var j = 0; j <listcliente[i].length; j++) {
				var table = document.getElementById("tablaEnviado");
				var row = table.insertRow();
				var emailCell = row.insertCell(0);
				var asuntoCell = row.insertCell(1);
				var obser = row.insertCell(2);
				var dilete = row.insertCell(3);

				emailCell.innerHTML = listcliente[i][j+1];
				asuntoCell.innerHTML  = listcliente[i][j+2];
				obser.innerHTML = "";
				dilete.innerHTML = "";
				idVer = listcliente[i][j];
				idDelete = listcliente[i][j];

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

function cargarNumeroSalida(){
	//debugger;
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "invoices";
	var listInvoices =JSON.parse(localStorage.getItem(usuario_nombre));
	if(listInvoices == null){
		var numeroInv = 0;
		document.getElementById("numero").setAttribute("value", numeroInv);
	}else{
		var numeroInv = listInvoices.length;
		document.getElementById("numero").setAttribute("value", numeroInv);
	}
	
}

function cargarNumeroEntrada(){
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "chambas";
	var listClient =JSON.parse(localStorage.getItem(usuario_nombre));
	if(listClient == null){
		var numeroCha = 0;
		document.getElementById("numero").setAttribute("value", numeroCha);
	}else{
		var numeroCha = listClient.length;
		document.getElementById("numero").setAttribute("value", numeroCha);
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
	//debugger;
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var listChamba =JSON.parse(localStorage.getItem(usuario_nombre));
	modificar = JSON.parse(localStorage.getItem("id"));
	for (var i = 0; i < listChamba.length; i++) {
		for (var j = 0; j < listChamba[i].length; j++) {
			if(modificar == listChamba[i][j]){
				da1 =  listChamba[i][j+1];
				da2 = listChamba[i][j+2];
				da3 = listChamba[i][j+3];
				document.getElementById("email").value =  da1;
				document.getElementById("asunto").value = da2;
				document.getElementById("description").value = da3;
				
			}
		};
	};
	
}

// funcion que carga los datos en cada uno de los input 
function ver(){
	//debugger;
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "enviado";
	var listChamba =JSON.parse(localStorage.getItem(usuario_nombre));
	modificar = JSON.parse(localStorage.getItem("id"));
	for (var i = 0; i < listChamba.length; i++) {
		for (var j = 0; j < listChamba[i].length; j++) {
			if(modificar == listChamba[i][j]){
				da1 =  listChamba[i][j+1];
				da2 = listChamba[i][j+2];
				da3 = listChamba[i][j+3];
				document.getElementById("email").value =  da1;
				document.getElementById("asunto").value = da2;
				document.getElementById("description").value = da3;
				
			}
		};
	};
	
}

function editarEmail(){
	//debugger;
	var usuario_nombre = (localStorage.getItem("Usuario_Actual")) + "salida";
	var listChamba =JSON.parse(localStorage.getItem(usuario_nombre));
	modificar = JSON.parse(localStorage.getItem("id"));
	for (var i = 0; i < listChamba.length; i++) {
		for (var j = 0; j < listChamba[i].length; j++) {
			if(modificar == listChamba[i][j]){
				var nn = document.getElementById("email").value;
				var c = document.getElementById("asunto").value;
				var d = document.getElementById("description").value;
				if(nn == "" || nn == null){
					alert("No puede dejar el campo de cliente vacio");
					break;
				}else if(c == "" || c == null){
					alert("No puede dejar el campo de descripcion vacio");
					break;
				}else if(d == "" || d == null){
					alert("No puede dejar el campo de fecha vacio");
					break;
				}else{
					listChamba[i][j+1] = nn;
					listChamba[i][j+2] = c;
					listChamba[i][j+3] = d;
					localStorage[usuario_nombre] = JSON.stringify(listChamba);
					alert("Se Modificó correctamente");
					location.href = "Bandeja de Salida.html";
					break;
				}
			}
		};
	};
}

function elim(elemento){
	//debugger;
	var id = elemento.id;
	eliminar = parseInt(id);
	localStorage.setItem("id",eliminar);
}

function envi(elemento){
	//debugger;
	var id = elemento.id;
	send = parseInt(id);
	localStorage.setItem("id",send);
	enviar();
}

function EliminarEmail(){
	//debugger;
	var acumulador = localStorage.getItem("Usuario_Actual") + "salida";
	var invoices = JSON.parse(localStorage.getItem(acumulador));
	for (i=0; i< invoices.length; i++){
		for (j=0; j< invoices[i].length; j++){
			eliminar = JSON.parse(localStorage.getItem("id"));
			if(eliminar == invoices[i][j]){
				invoices.splice(i, 1);
				localStorage[acumulador] = JSON.stringify(invoices);
				alert("Se Eliminó correctamente");
				location.href = "Bandeja de Salida.html";
			}
		}
	}
}

function EliminarEmailEnviado(){
	//debugger;
	var acumulador = localStorage.getItem("Usuario_Actual") + "enviado";
	var invoices = JSON.parse(localStorage.getItem(acumulador));
	for (i=0; i< invoices.length; i++){
		for (j=0; j< invoices[i].length; j++){
			eliminar = JSON.parse(localStorage.getItem("id"));
			if(eliminar == invoices[i][j]){
				invoices.splice(i, 1);
				localStorage[acumulador] = JSON.stringify(invoices);
				alert("Se Eliminó correctamente");
				location.href = "Enviados.html";
			}
		}
	}
}

function enviar(){
	//debugger;
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
