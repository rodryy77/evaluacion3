function validar() {
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contra();
    var retorno_confirmacion = validar_confirmacion();
    var retorno_direccion = validar_direccion();
    var retorno_telefono = validar_telefono();
    var retorno_comuna = validar_comuna();
    var retorno_pasatiempo = validar_pasatiempo();
    return retorno_correo && retorno_contraseña && retorno_confirmacion && retorno_direccion && retorno_telefono && retorno_comuna && retorno_pasatiempo;
}

function validar_correo() {

    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var email = input_email.value;

    if (email == "") {
        div_error_email.innerHTML = "El correo electrónico es obligatorio";
        div_error_email.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_email.innerHTML = "";
        return true;
    }
}

function validar_contra() {

    var input_contra = document.getElementById("input-contraseña");
    var div_error_contra = document.getElementById("error-contraseña");
    var contra = input_contra.value;

    if (contra == "") {
        div_error_contra.innerHTML = "La contraseña es obligatoria";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else if (contra.length > 6 ) {
        div_error_contra.innerHTML = "La contraseña no puede tener mas de 6 caracteres";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else if (contra.length < 3 ) {
        div_error_contra.innerHTML = "La contraseña no puede tener menos de 3 caracteres";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_contra.innerHTML = "";
        return true;
    }
}

function validar_confirmacion() {

    var input_confirmacion = document.getElementById("input-confirmacion");
    var div_error_confirmacion = document.getElementById("error-confirmacion");
    var confirmacion = input_confirmacion.value;
    

    if (confirmacion == "") {
        div_error_confirmacion.innerHTML = "La confirmación de contraseña es obligatoria";
        div_error_confirmacion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmacion.innerHTML = "";
        return true;
    }
}

function validar_direccion() {

    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;

    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_telefono() {

    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value;

    if (fono == "") {
        div_error_fono.innerHTML = "El teléfono es obligatorio";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_fono.innerHTML = "";
        return true;
    }
}

function validar_comuna() {

    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;

    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_pasatiempo() {

    var check_pasatiempo = document.getElementsByClassName("form-check-input");
    var div_error_pasatiempo = document.getElementById("error-pasatiempo");
    for (var i in check_pasatiempo) {
        console.log(check_pasatiempo[i].checked);
        if (check_pasatiempo[i].checked) {
            div_error_pasatiempo.innerHTML = "";
            return true;
        }    
    }
    div_error_pasatiempo.innerHTML = "Debe seleccionar al menos una aficion";
    div_error_pasatiempo.className = "text-danger small mt-1";
    return false;

}