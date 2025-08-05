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


    listaDeAmigos.push(nombre);
    input.value = "";
    //se aprendio a usar focus
    input.focus();
    actualizarLista();
}


//muestra los nombres en la pantalla uno debajo del otro
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //borrar lo anterior

    // Crear un <li> para cada nombre y añadirlo a la lista
    for (let i = 0; i < listaDeAmigos.length; i++) {
        //se aprendioa usar <li>
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        // se aprendio a usar appendChild
        lista.appendChild(item);
    }

    //copia la lista para el sorteo
    nombresDisponibles = [];
    for (let i = 0; i < listaDeAmigos.length; i++) {
        nombresDisponibles.push(listaDeAmigos[i]);
    }
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