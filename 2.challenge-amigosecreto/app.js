//variables
let listaDeAmigos = [];
let nombresDisponibles = [];
let contadorSorteos = 0;
let grupoActual = [];
let colores = ["red", "blue", "green", "black", "gray", "purple"];
let confirmacionHecha = false; // ✅ Nueva variable para controlar si ya se hizo la confirmación

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

    // Se aprendio a usar y crear elemento <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        item.setAttribute("id", "amigo-" + listaDeAmigos[i]);    
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

    // ✅ Confirmación antes de sortear solo una vez
    if (!confirmacionHecha) {
        let confirmar = confirm("¿Estás seguro de que ya ingresaste todos los nombres?");
        if (!confirmar) {
            return;
        }

        // ✅ Desactiva el botón y el input después de confirmar
        document.querySelector(".button-add").disabled = true; // desactiva el botón añadir
        document.getElementById("amigo").disabled = true;       // desactiva el campo de texto

        confirmacionHecha = true; // evita que vuelva a preguntar
    }

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

    resultado.innerHTML = `El amigo secreto es: <span style="color: red"><b>${elegido}</b></span>🎉`;
    
    contadorSorteos++;

    //tachar los nombres sorteados
    let liSorteado = document.getElementById("amigo-" + elegido);
    if (liSorteado) {
        liSorteado.classList.add("nombre-sorteado");
    }

    //Agrupa de a 2 sorteos
    grupoActual.push(elegido);

    if (grupoActual.length === 2) {
        let listaGrupos = document.getElementById("listaGrupos");
        let itemGrupo = document.createElement("li");
        itemGrupo.textContent = grupoActual[0] + " 🤝 " + grupoActual[1];

        cambiarColorDeGrupo(itemGrupo); // aplicar color solo a esta lista

        listaGrupos.appendChild(itemGrupo);
        grupoActual = [];
    }
}

// Función nueva para cambiar color de fondo
function cambiarColorDeGrupo(elementoGrupo) {
    let grupo = Math.floor(contadorSorteos / 2);
    let color = colores[grupo % colores.length];
    elementoGrupo.style.backgroundColor = color;
    elementoGrupo.style.color = "white";
}
