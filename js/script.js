const botonModoOscuro = document.querySelector(".btn-activar-modo-oscuro");

const body = document.querySelector("body");
const cards = document.querySelectorAll(".cardGeneral");
const texto = document.querySelectorAll(".lista-tiempo-preparacion-card");
const titulos = document.querySelectorAll(".titulo-card");
const tituloPrincipal = document.querySelectorAll(".titulo-principal");

const articles = document.querySelectorAll("article");
const asideNutricional = document.getElementsByClassName("contenedor-nutricional");
const asideOtros = document.getElementsByClassName("contenedor-otros");
const contenedorTiempoPreparacion = document.getElementsByClassName("contenedor-info-tiempo-preparacion");

const textoRecetas = document.querySelectorAll("p");
const textoRecetasLista = document.querySelectorAll("li");
const tablatd = document.querySelectorAll("td");
const tituloh1 = document.querySelectorAll("h1");
const tituloh2 = document.querySelectorAll("h2");
const tituloh3 = document.querySelectorAll("h3");


const contenidoFormulario = document.querySelector(".contenido-formulario");
const textarea = document.querySelectorAll(".textarea");
const labels = document.querySelectorAll(".contenedor-preguntas-formulario label");


botonModoOscuro.addEventListener("click", () => {

    event.preventDefault();

    body.classList.toggle("modoOscuroBody");
    for (card of cards) {
        card.classList.toggle("modoOscuroCards");
    }
    for (text of texto) {
        text.classList.toggle("modoOscuroLetras");
    }
    for (title of titulos) {
        title.classList.toggle("modoOscuroLetras");
    }
    for (tituloP of tituloPrincipal) {
        tituloP.classList.toggle("modoOscuroLetras");
    }


    for (article of articles) {
        article.classList.toggle("modoOscuroArticles");
    }

    for (asideNutr of asideNutricional) {
        asideNutr.classList.toggle("modoOscuroArticles");
    }

    for (asideOtro of asideOtros) {
        asideOtro.classList.toggle("modoOscuroArticles");
    }

    for (tiempoPreparacion of contenedorTiempoPreparacion) {
        tiempoPreparacion.classList.toggle("modoOscuroTiempo");
    }

    for (textoReceta of textoRecetas) {
        textoReceta.classList.toggle("modoOscuroTexto");
    }

    for (ul of textoRecetasLista) {
        ul.classList.toggle("modoOscuroTexto");
    }

    for (td of tablatd) {
        td.classList.toggle("modoOscuroTexto");
    }

    for (h1 of tituloh1) {
        h1.classList.toggle("modoOscuroTexto");
    }

    for (h2 of tituloh2) {
        h2.classList.toggle("modoOscuroTexto");
    }

    for (h3 of tituloh3) {
        h3.classList.toggle("modoOscuroTexto");
    }

    for (texta of textarea) {
        texta.classList.toggle("modoOscuroInputs");
    }

    for (label of labels) {
        label.classList.toggle("modoOscuroTexto");
    }

    contenidoFormulario.classList.toggle("modoOscuroContenido");

});

const botonEnviar = document.querySelector(".boton-enviar");

botonEnviar.addEventListener("click", () => {
    event.preventDefault();
});