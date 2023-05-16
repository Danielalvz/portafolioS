const main = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const asunto = document.querySelector('#asunto').value;
        const mensaje = document.querySelector('#mensaje').value;
        console.log(mensaje)
        console.log(`Nombre: ${nombre}`);
        console.log(`Correo: ${email}`);
        console.log(`Asunto: ${asunto}`);
        console.log(`Mensaje: ${mensaje}`);
        alert("Datos enviados.");
    });
}