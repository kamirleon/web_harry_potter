$(document).ready(function () {
    
    //Validar nombre
    $('#idNombre').blur(function () { 
        var vNombre = $('#idNombre').val();

        if(vNombre === ''){
            $('#idNombre').addClass('border-danger');

        }
    });

    $('#idNombre').click(function (e) { 
        $('#idNombre').removeClass('border-danger');
    });

    //Validar Alias
    $('#idAlias').blur(function () { 
        var vAlias = $('#idAlias').val();

        if(vAlias === ''){
            $('#idAlias').addClass('border-danger');

        }
    });

    $('#idAlias').click(function (e) { 
        $('#idAlias').removeClass('border-danger');
    });

    //Validar Correo
    $('#idCorreo').blur(function () { 
        var vCorreo = $('#idCorreo').val();

        if(vCorreo === ''){
            $('#idCorreo').addClass('border-danger');

        }
    });

    $('#idCorreo').click(function (e) { 
        $('#idCorreo').removeClass('border-danger');
    });


    //Validar Contraseña
    $('#idContrasena').blur(function () { 
        var vContrasena = $('#idContrasena').val();

        if(vContrasena === ''){
            $('#idContrasena').addClass('border-danger');

        }
    });

    $('#idContrasena').click(function (e) { 
        $('#idContrasena').removeClass('border-danger');
    });

});