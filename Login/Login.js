var correo = document.getElementById('idCorreo');
var contrasena = document.getElementById('idContrasena');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando Formulario');
    var mensajesError = [];
    if (correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa tu Correo');
    }

    
    if (contrasena.value === null || contrasena.value === ''){
       mensajesError.push('Ingresa tu contraseña');
    }

    console.log(mensajesError);
    error.innerHTML = mensajesError.join(', ');

    // error.innerHTML = mensajesError.join(', ');
    correo.innerHTML = mensajesError.join(', ');
    return false;


}

// var formulario = document.getElementById('formulario');
//     formulario.addEventListener('Submit ',function(event){
//         console.log('Enviando Formulario');
//     })