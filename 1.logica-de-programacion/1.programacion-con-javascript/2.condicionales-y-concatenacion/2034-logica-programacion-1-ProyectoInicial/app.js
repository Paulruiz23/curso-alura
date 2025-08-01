//variables
let numeroSecreto = 3;
let numeroUsuario = prompt("¿Podrías indicarme un número entre 1 y 10 por favor?");

console.log(numeroUsuario);
/*
Este codigo realiza
la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero es ${numeroUsuario}`);
} else{
    //La condicion no se cumplio
    alert("Lo siento, no acertaste el numero" );
}
