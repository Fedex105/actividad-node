var validator = require("validator");


function verificarUsuario(email, pass){
    return true;
}

function crearUsuario(email, pass){
    return true
}

function verificarEmail(email){
    if(!validator.isEmail(email)){
        console.log("Email no valido")
    }
}
exports.verificarEmail = verificarEmail
exports.verificar = verificarUsuario
exports.registrar = crearUsuario
