const formulario = document.getElementById('formulario')
const campos = document.querySelectorAll('#formulario input')

const reglas = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const inputs = {
    tipoDocu: false,
    numDocu: false,
    nombres: false,
    apellidos: false,
    fechaNac: false,
    Correo: false,
	password: false,
	correo: false,
    terminos: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "numDocumento":
			validarCampo(reglas.telefono, e.target, 'numDocumento');
            console.log("entro al caso numero de documento");
		break;
		case "Nombres":
			validarCampo(reglas.nombre, e.target, 'Nombres');
            console.log("entro al caso nombres");
		break;
        case "Apellidos":
			validarCampo(reglas.nombre, e.target, 'Apellidos');
            console.log("entro al caso apellidos");
		break;
        case "correo":
			validarCampo(reglas.correo, e.target, 'correo');
            console.log("entro al caso correo");
		break;
		case "password":
			validarCampo(reglas.password, e.target, 'password');
			validarPassword2();
            console.log("entro al caso contraseña");
		break;
		case "password2":
			validarPassword2();
            console.log("validar contraseñas");
		break;
	}
}

const validarCampo = (reglas, input, campo) => {
	if(reglas.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('mensajeError');
		document.getElementById(`${campo}`).classList.add('mensajeExito');
		document.querySelector(`#${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#${campo} i`).classList.remove('fa-times-circle');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('mensajeError');
		document.getElementById(`${campo}`).classList.remove('mensajeExito');
		document.querySelector(`#${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#${campo} i`).classList.remove('fa-check-circle');
		campos[campo] = false;
	}
}

campos.forEach((campo) => {
	campo.addEventListener('keyup', validarFormulario);
	campo.addEventListener('blur', validarFormulario);
    console("asd")
})