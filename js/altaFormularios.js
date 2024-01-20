console.log('altaFormularios');

let enviarDatos = document.getElementById('enviarDatos');

let misFormularios = [];

enviarDatos.addEventListener('click', (e) => {
    e.preventDefault();

    let nombreCompleto = document.getElementById('nombreCompleto').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    let formulario = {
        nombre: nombreCompleto,
        email: email,
        mensaje: mensaje,
    }

    console.log(formulario)

    misFormularios.push(formulario)

    //asigno datos al localstor

    localStorage.setItem('Formulario',JSON.stringify(misFormularios));

    console.log(misFormularios);

    console.log (`La cantidad de formularios es : ${misFormularios.length}`);

    form.reset();
});
