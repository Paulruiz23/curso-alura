let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";
let ciudad = "Brasilia";


function botonConsola() {
    console.log("El boton fue clicado");
    }
function botonPrompt() {
    console.log("Diga el nombre de una ciudad de brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}
function botonAlerta() {
    alert("Yo amo JS");
}
function botonSuma() {
    let numero1 = parseInt(prompt("Escriba su primer numero"));
    let numero2 = parseInt(prompt("Escriba su segundo numero"));
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`);
}