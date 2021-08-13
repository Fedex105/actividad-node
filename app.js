const prompt = require("prompt-sync")();
const usuarios = require("./funcionesAux")

console.log("Bienvenido")

while(true){

    console.log("Que desea hacer")
    console.log("Para iniciar sesión 1")
    console.log("Para registrarse 2")
    console.log("Para cerrar programa 3")


    let opcion = parseInt(prompt("Numero opción elegida:"));

    if(opcion === 1){
        console.log("Inicio sesion")
        const email = prompt("Email:");
        usuarios.verificarEmail(email);
        const pass = prompt("Contraseña:");
        if(usuarios.verificar(email, pass)){
            console.log("Usuario existe")
        }else {
            console.log("Usuario no existe")
        }
    }else if(opcion === 2){
        console.log("Registro")
        const email = prompt("Email:");
        usuarios.verificarEmail(email);
        const pass = prompt("Contraseña:");
        usuarios.registrar(email,pass);
    }else if(opcion === 3){
        process.kill(process.pid, "SIGTERM");
    }else{
        console.log("Ingreso erroneo")
    }

}