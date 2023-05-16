const main = () => {
    //const listItems = document.querySelector(".list");
    //console.log(listItems)
    const boton = document.getElementById("boton");

    const lista = document.getElementById("frutas");
    const cantidadElementos = lista.children.length;
    console.log(cantidadElementos);

    let coloresNuevos = false;

    boton.addEventListener("click", () => {
        for (let i = 0; i < cantidadElementos; i++) {
            const valorElemento = lista.children[i].textContent;
            const numeroOrden = i + 1;
            console.log(`${numeroOrden}. ${valorElemento}`);
            if (coloresNuevos) {
                if (numeroOrden % 2 === 0) {
                    console.log(numeroOrden, "PAR")
                    lista.children[i].style.backgroundColor = '#801414';
                } else {
                    lista.children[i].style.backgroundColor = 'yellow';
                }
            } else {
                if (numeroOrden % 2 === 0) {
                    lista.children[i].style.backgroundColor = '#f2f2f2';
                } else {
                    lista.children[i].style.backgroundColor = '#801414';
                }
            }

        }
        coloresNuevos = !coloresNuevos;
    })



}