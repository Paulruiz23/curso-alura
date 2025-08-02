let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto;
let intentos;
let juegoTerminado = false;

//Cambia el texto de un elemento del html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Verifica si el numero ingresado es correcto
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    //Verifica si el numero es valido
    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p', `⚠️ Por favor, ingresa un número válido entre 1 y ${numeroMaximo}`);
        limpiarCaja();
        return;
    }

    // El juego ya terminó, no hacemos nada
    if (juegoTerminado) {
    return; 
    }

    //Comparacion con el numero secreto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`🎉 ¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}🎯🥳`);
        document.getElementById('reiniciar').removeAttribute('disabled');

       //Desactivar el botón "Intentar"
        document.getElementById('intentar').setAttribute('disabled', 'true');
        juegoTerminado = true;

    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','🔻El número secreto es menor');
        } else {
            asignarTextoElemento('p','🔺El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

//Limpia el campo de texto del input
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//Genera el numero secreto que no se repite
function generarNumeroSecreto() {
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', '⚠️ Ya se sortearon todos los números posibles');
        return null;
    }

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    let intentosRepeticion = 0;

    while (listaNumerosSorteados.includes(numeroGenerado)) {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
        intentosRepeticion++;

        if (intentosRepeticion > 100) {
            asignarTextoElemento('p', '❌ Error: No se pudo generar un número único.');
            return null;
        }
    }

    listaNumerosSorteados.push(numeroGenerado);

    //Mostrar en consola para revision
    console.log("Número secreto generado:", numeroGenerado);
    console.log("Lista de números sorteados:", listaNumerosSorteados);

    return numeroGenerado;
}

//Configura el estado inicial del juego
function condicionesIniciales() {
    asignarTextoElemento('h1','🎯Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

//Reinicia el juego con el boton
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    document.getElementById('intentar').removeAttribute('disabled');
    juegoTerminado = false;
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
//Inicia el juego al cargar
condicionesIniciales();