//Variables
let numeroSecreto = 2;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}.`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }
        else{
            alert("El numero secreto es mayor");
        }
        // incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = "veces";
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}