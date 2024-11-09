// Valores de los Contenedores
let contenedor = document.getElementById('contenedor');
let intogame = document.getElementById('intogame');
let tituloJuego;
let game;

document.getElementById('luz').style.display = 'none';
document.getElementById('noche').style.display = 'block';

// Modo de Pagina cargar parametros
let parametros = window.location.search;
console.log(parametros);
parametros = new URLSearchParams(parametros);
console.log(parametros);
let modo = parametros.get('mode');

// Mostrar el modo de pagina
if (modo == 'inicio' || modo == null) {
    intogame.style.display = 'none';
    contenedor.style.display = 'display';
    document.title = 'Minimal Games | Inicio';
    document.getElementById('back').style.display = 'none';
}
else {
    tituloJuego = document.querySelector('#titlegame');
    game = parametros.get('game');
    intogame.style.display = 'block';
    contenedor.style.display = 'none';
    document.title = game + ' | Minimal Games';
    tituloJuego.innerHTML = game;
    document.getElementById('back').style.display = 'block';
}
establecermodo();


// Catalogo de Juegos Interactivo
let imgprincipal1 = document.getElementById('imgprincipal1');
let imgprincipal2 = document.getElementById('imgprincipal2');

function selecion(color, img) {
    if (img == 'img1') {
        imgprincipal1.style.backgroundColor = color;
    }
    else {
        imgprincipal2.style.backgroundColor = color;
    }
}

function establecermodo(defecto) {
    light = defecto;
    if (light == 'dia' || light == null) {
        document.body.style.backgroundImage = 'linear-gradient(var(--bgcolor1), var(--bgcolor2)';
        document.getElementById('luz').style.display = 'none';
        document.getElementById('noche').style.display = 'block';
        document.getElementById('contenedor').style.background = 'var(--bgcolor3)';
        document.getElementById('intogame').style.background = 'var(--bgcolor3)';
    }
    else {
        document.body.style.background = 'linear-gradient(white, #bfb1f1)';
        document.getElementById('noche').style.display = 'none';
        document.getElementById('luz').style.display = 'block';
        document.getElementById('contenedor').style.background = '#93b9e7';
        document.getElementById('intogame').style.background = '#93b9e7';
    }
    console.log(light);
}