const funciones = () => {
    //HEADER MENU--------------------------------------------------------------

    let select = document.getElementById("selectorColores");

    let nav = document.querySelector(".caja");
    console.log(nav, "NAV");

    //Se obtiene el valor del color seleccionado del localStorage, guardado como colorGuardado
    const colorGuardado = localStorage.getItem("colorGuardado");

    if (colorGuardado) {
        //Se establece la opción seleccionada en el select
        select.value = colorGuardado;

        //Se establece la clase del nav en el color seleccionado
        nav.className = colorGuardado;

        //Condicional para el color de la letra del Menu
        if (colorGuardado == "caja") {
            cambiarColorMenu("rgb(53, 149, 77)");
        } else {
            cambiarColorMenu("white");
        }
    }

    //EVENTOS

    select.addEventListener("click", () => {
        switch (Number(select.value)) {
            case 1:
                nav.classList.add("caja");
                nav.classList.remove("naranja", "azul", "morado");
                cambiarColorMenu("rgb(53, 149, 77)");
                break;
            case 2:
                nav.classList.add("naranja");
                nav.classList.remove("caja", "azul", "morado");
                cambiarColorMenu("white");
                break;
            case 3:
                nav.classList.add("azul");
                nav.classList.remove("caja", "naranja", "morado");
                cambiarColorMenu("white");
                break;
            case 4:
                nav.classList.add("morado");
                nav.classList.remove("caja", "naranja", "azul");
                break;
        }
    })

    select.addEventListener("change", () => {
        const color = select.options[select.selectedIndex].className;

        //Se guarda el valor del color seleccionado en el localStorage
        localStorage.setItem("colorGuardado", color);

        nav.className = color;
    });

    //SECTION DESPLEGABLES-----------------------------------------------------
    let elementosAcordeon = document.querySelectorAll(".acordeon");

    elementosAcordeon.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("active");
            let panel = element.nextElementSibling;
            if (panel.style.display == "none") {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
        });   
    })

    let descripcion = document.getElementById("descripcion");
  
    descripcion.addEventListener("click", (e) => {
        if(e.target.classList.contains("acordeon")) {
           e.target.firstElementChild; //h4
           e.target.children[1].classList.toggle("rotate");
        }
    });
}

const cambiarColorMenu = (colorCss) => {
    let items = document.querySelectorAll(".itemsMenu");
    items.forEach(item => {
        item.style.color = colorCss;
    });
}