const prompt = require("prompt-sync")();


console.log("Bienvenido")
console.log("Que desea hacer")
console.log("Para iniciar sesión 1")
console.log("Para registrarse 2")

let opcion = parseInt(prompt("Numero opción elegida:"));

if(opcion === 1){
    console.log("Inicio sesion")
    const email = prompt("Email:");
    const pass = prompt("Contraseña:");

    if(verificarUsuario(email, pass)){
        console.log("Usuario existe")
    }else {
        console.log("Usuario no existe")
    }
}else if(opcion === 2){
    //registro
}else{
    console.log("Ingreso erroneo")
}
