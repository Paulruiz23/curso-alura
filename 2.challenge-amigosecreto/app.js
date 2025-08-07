//variables
let listaDeAmigos = [];
let nombresDisponibles = [];
let contadorSorteos = 0;
let grupoActual = [];
let confirmacionHecha = false;

//funcion para validar si el nombre ingresado es valido (no vacío)
function esNombreValido(nombre) {
    let soloEspacios = true;
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] !== " ") {
            soloEspacios = false;
        }
    }
    return nombre !== "" && !soloEspacios;
}

//funcion para desactivar el input y boton de añadir
function desactivarEntrada() {
    document.querySelector(".button-add").disabled = true;
    document.getElementById("amigo").disabled = true;
}

//funcion para mostrar un mensaje en el area de resultado
function mostrarResultado(mensaje) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = mensaje;
}

//funcion para tachar un nombre sorteado en la lista visual
function tacharNombre(nombre) {
    let indice = listaDeAmigos.indexOf(nombre);
    if (indice !== -1) {
        let li = document.getElementById("amigo-" + indice);
        if (li) {
            li.classList.add("nombre-sorteado");
        }
    }
}

//funcion para eliminar un nombre por índice de una lista
function eliminarNombrePorIndice(lista, indice) {
    let nuevaLista = [];
    for (let i = 0; i < lista.length; i++) {
        if (i !== indice) {
            nuevaLista.push(lista[i]);
        }
    }
    return nuevaLista;
}

//crea un duplicado temporal de la lista original de amigos
function duplicarListaDeAmigos(listaOriginal) {
    let copia = [];
    for (let i = 0; i < listaOriginal.length; i++) {
        copia.push(listaOriginal[i]);
    }
    return copia;
}

//muestra el grupo actual en la lista (aunque esté incompleto)
function mostrarGrupoActual() {
    let listaGrupos = document.getElementById("listaGrupos");

    if (grupoActual.length === 1) {
        let ultimo = document.querySelector("#listaGrupos li.temp");
        if (ultimo) {
            listaGrupos.removeChild(ultimo);
        }

        let item = document.createElement("li");
        item.textContent = grupoActual[0] + " 🤝 ?";
        item.classList.add("temp");
        listaGrupos.appendChild(item);
    }

    if (grupoActual.length === 2) {
        let temporal = document.querySelector("#listaGrupos li.temp");
        if (temporal) {
            listaGrupos.removeChild(temporal);
        }

        let itemGrupo = document.createElement("li");
        itemGrupo.textContent = grupoActual[0] + " 🤝 " + grupoActual[1];
        listaGrupos.appendChild(itemGrupo);

        grupoActual = [];
    }
}

//agrega nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    if (!esNombreValido(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    listaDeAmigos.push(nombre);
    input.value = "";
    input.focus();
    actualizarLista();

    if (listaDeAmigos.length >= 2) {
        document.getElementById("btn-sortear").disabled = false;
    }
}

//muestra los nombres en la pantalla uno debajo del otro
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        item.setAttribute("id", "amigo-" + i);
        lista.appendChild(item);
    }
    nombresDisponibles = duplicarListaDeAmigos(listaDeAmigos);
}

// función que finaliza el sorteo cuando ya no hay más nombres
function finalizarSorteo() {
    mostrarResultado("Ya se sortearon todos los nombres.");
    document.getElementById("btn-reiniciar").disabled = false;
    document.getElementById("btn-sortear").disabled = true;
}

//sirve para confirmar si la lista ingresada esta completa
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    if (!confirmacionHecha) {
        if (listaDeAmigos.length % 2 !== 0) {
            alert("El número de amigos es impar. Alguien quedará sin pareja.");
        }

        if (!confirm("¿Estás seguro de que ya ingresaste todos los nombres?")) return;

        desactivarEntrada();
        confirmacionHecha = true;
    }

    if (nombresDisponibles.length === 0) {
        finalizarSorteo();
        return;
    }

    let elegido = sortearNombreAleatorio();
    mostrarResultado(`El amigo secreto es: <span style="color: red"><b>${elegido}</b></span>🎉`);
    contadorSorteos++;
    tacharNombre(elegido);
    grupoActual.push(elegido);
    mostrarGrupoActual();

    if (nombresDisponibles.length === 0) {
        finalizarSorteo();
    }
}

//devuelve un nombre aleatorio y lo elimina de la lista de disponibles
function sortearNombreAleatorio() {
    let indice = Math.floor(Math.random() * nombresDisponibles.length);
    let nombre = nombresDisponibles[indice];
    nombresDisponibles = eliminarNombrePorIndice(nombresDisponibles, indice);
    return nombre;
}

//función para limpiar las secciones de la pantalla
function limpiarPantallas() {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("listaGrupos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

//reinicia el juego
function reiniciarJuego() {
    listaDeAmigos = [];
    nombresDisponibles = [];
    contadorSorteos = 0;
    grupoActual = [];
    confirmacionHecha = false;

    limpiarPantallas();

    document.getElementById("amigo").value = "";
    document.getElementById("amigo").disabled = false;
    document.querySelector(".button-add").disabled = false;

    document.getElementById("btn-reiniciar").disabled = true;
    document.getElementById("btn-sortear").disabled = true;

    document.getElementById("amigo").focus();
}
