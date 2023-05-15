const desplegar = () => {
    let elementosAcordeon = document.querySelectorAll(".acordeon");

    elementosAcordeon.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("active");
            let panel = element.nextElementSibling;
            if (panel.style.display == "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });   
    })

    let ejercicios = document.getElementById("ejercicios");
  
    ejercicios.addEventListener("click", (e) => {
        if(e.target.classList.contains("acordeon")) {
           e.target.firstElementChild; //h4
           e.target.children[1].classList.toggle("rotate"); //i
        }
    });
}