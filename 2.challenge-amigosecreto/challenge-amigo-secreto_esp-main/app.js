//variables
let listaDeAmigos = [];
let nombresDisponibles = [];


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value; // se guarda el usuario

    //Validar si está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    //Valida si tiene numero
    if (tieneNumero(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    //valida si tiene simbolo
    if (tieneSimbolos(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombre);
    input.value = "";
    //se aprendio a usar focus
    input.focus();
    actualizarLista();
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (nombresDisponibles.length === 0) {
        resultado.innerHTML = "Ya se sortearon todos los nombres.";
        return;
    }

    let indice = Math.floor(Math.random() * nombresDisponibles.length);
    let elegido = nombresDisponibles[indice];

    //Eliminar el nombre sorteado de la lista
    let nuevaLista = [];
    for (let i = 0; i < nombresDisponibles.length; i++) {
        if (i !== indice) {
            nuevaLista.push(nombresDisponibles[i]);
        }
    }
    nombresDisponibles = nuevaLista;

    resultado.innerHTML = `El amigo secreto es: <span style="color: red"><b>${elegido}</span><b>🎉`;
}