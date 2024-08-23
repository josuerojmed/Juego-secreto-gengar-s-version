let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    if (titulo) {
        titulo.innerHTML = texto;
    }
} 

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled'); // Habilita el botón
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return null; // No se puede generar un nuevo número
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Llamar recursivamente
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'El número secreto de Gengar');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}` );     
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);  // Colocarlo aquí para ver el número generado
    intentos = 0;  // Inicializar intentos en 0 al comenzar un nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');  // Deshabilitar el botón de reinicio
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de 
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    // Generar número aleatorio e inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton del juego
    
}

// Inicializa las condiciones al cargar el juego
condicionesIniciales();
