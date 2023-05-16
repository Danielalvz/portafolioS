const main = () => {
    const boton = document.getElementById('boton');
    const list = document.querySelector('.list');

    boton.addEventListener('click', () => {
        list.classList.toggle('list--alternate');
    });
}