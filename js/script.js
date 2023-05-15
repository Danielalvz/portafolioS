const main = () => {
    const btnPerfil = document.getElementById("btnPerfil");
    const btnProyectos = document.getElementById("btnProyectos");

    button(btnProyectos, "portafolio.html");
    button(btnPerfil, "perfil/index.html");
}

//Un boton que dirige a otra pagina
const button = (elemento, link) => {

    elemento.addEventListener("click", () => {
        window.location.href = link;
    });
}

const portafolio = () => {
    const lista = document.querySelector('.listaProyectos');
    const items = lista.getElementsByTagName('li');
    const itemsEnlace = lista.getElementsByTagName('a');

    agregaColorListas(items);
    agregaColorTexto(itemsEnlace);
}

const pseint = () => {
    const lista = document.querySelector('.listaPseint');
    const items = lista.getElementsByTagName('li');

    agregaColorListas(items);

    button(items[0], "pseintVariables.html")
    button(items[1], "pseintCondicionales.html")
    button(items[2], "pseintCiclos.html")
    button(items[3], "pseintArreglos.html")
    button(items[4], "pseintFunciones.html")
}

const java = () => {
    const lista = document.querySelector('.listaJava');
    const items = lista.getElementsByTagName('li');
    
    agregaColorListas(items);
   
    button(items[0], "javaVariables.html")
    button(items[1], "javaCondicionales.html")
    button(items[2], "javaCiclos.html")
    button(items[3], "javaArreglos.html")
}

//Agrega color intercalado para las listas
const agregaColorListas = (items) => {
    for (let i = 0; i < items.length; i++) {
        //console.log("ITEMS",items[i].textContent)
        if (i % 2 === 0) { //PAR
            items[i].classList.add('fondoPar');
        } else { //IMPAR
            items[i].classList.add('fondoImpar');
        }
    }
}

const agregaColorTexto = (items) => {
    for (let i = 0; i < items.length; i++) {
        if (i % 2 === 0) { //PAR
            items[i].classList.add('enlacePar');
        }
    }
}





