let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos == 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }  else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        } else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";

}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}
function reiniciarJuego(){
// limpiar caja
    limpiarCaja();
// indicar mensaje de intervalo de numero
// generar el numero aleatorio
// inicializar el numero de intentos
    condicionesIniciales();
// dehabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");


}

condicionesIniciales();
