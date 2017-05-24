document.addEventListener('keydown', capturaTeclas);// Capturo los eventos del teclado digitados por el usuario

var codigoTecla = {// Keycode para detectar las siguientes teclas digitadas por el usuario
    right: 39,
    left: 37,
    up: 38,
    down: 40,
};

class Auto {
        atributos(posicion_x, posicion_y) {// Creo mi contructor y le agrego 2 atributos
        this.posicion_x = posicion_x;
        this.posicion_y = posicion_y;
    }
    // Mis cuatro métodos. Cada uno suma o resta uno de posisión x/y dependiendo de la dirección
    derecha() {
        return 'avanza a la derecha';
    }

    izquierda() {
        return 'avanza a la izquierda';
    }

    avanzar() {
        return 'avanza';
    }

    retroceder() {
        return 'retrocede';
    }
}

// Capturo eventos digitados por el usuario y valido coordenadas x/y
function validate() {
    var positionX = document.getElementById('posicion_x').value;
    var positionY = document.getElementById('posicion_y').value;
    var validado = true;

    if (positionX < 1 || positionX > 10) {
        alert('En X ingrese un valor entre 1 y 10:)')
        validado = false;
    }

    if (positionY < 1 || posicion_y > 6) {
        alert('En Y ingrese un valor entre 1 y 6:)')
        validado = false;
    }

    if ((positionX > 1 || positionX < 10) && (positionY > 1 || posicion_y < 6)) {
        console.log('desplegar tablero');
        esconderTablero();
    }
}

var botonStart = document.getElementsByClassName('boton-play')[0]; // Me retorna un arreglo
botonStart.addEventListener('click', validate);

// Hago que se despliegue o esconda el tablero
function esconderTablero() {

    var tablero = document.getElementById('tablero');

    if (tablero.style.display == 'none' && tablero.style.display == '') {
        tablero.style.display = 'none';
    } else {
        tablero.style.display = 'block';
        ocultarFormulario();// Oculto el formulario
        desplegarTablero();// Muestro el tablero
    }
}

// Elimino el formulario una vez que se despliega el tablero
function ocultarFormulario() {
    var el_formulario = document.getElementsByClassName('caja-dos')[0];
    console.log(el_formulario.style.display);
    if (el_formulario.style.display != 'none' && el_formulario.style.display == '') {
        el_formulario.style.display = 'none';
    }
}

// Valido mi caja 1 
var botonBecome = document.getElementsByClassName('boton-formulario')[0];
botonBecome.addEventListener('click', validarCaja1) 

function validarCaja1() {
    var number = document.getElementById('phone');
    if (number.value === '') {
        alert('Ingrese su número telefónico');
    } else {
        number.value = '';
    }
}

function capturaTeclas(tecla) {
    var teclaPress = tecla.keyCode;
    switch (teclaPress) {
        
        case 39:
            metodos = 'right';
            break;

        case 37:
            metodos = 'left';
            break;

        case 38:
            metodos = 'up';
            break;

        case 40:
            metodos = 'down';
            break;
    }
    console.log(teclaPress);
}

// Tablero a desplegar
function desplegarTablero() {
    //Defino el tablero
    var tablero = [
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ]
       
    tablero[3][5] = "A";// Ingresa el auto en la posición dada (3,5)

    var el_tablero = document.getElementById("tablero");// Div donde estará mi tablero

    var fila, posicion;

    // Recorro mi arreglo
    for (var i = 0; i < tablero.length; i++) {
        fila = document.createElement("div");
        fila.classList.add("fila");
        for (var j = 0; j < tablero[i].length; j++) {
            posicion = document.createElement("div");
            posicion.innerHTML = tablero[i][j];
            posicion.classList.add("posicion")
            fila.appendChild(posicion);
        }
        el_tablero.appendChild(fila);
    }
}