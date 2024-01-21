console.log('Hola admin');



//Boton para bajar elementos
let boton = document.getElementById('mostrarDatos');

//Tramos los datos del localStorage
let misFormularios = localStorage.getItem('Formulario');

console.log(misFormularios);

misFormularios = JSON.parse(misFormularios);
console.log(misFormularios);

let cantidadFormularios = document.getElementById('cantidadFormularios');
cantidadFormularios.textContent = 'Cantidad de formularios: ' + (misFormularios ? misFormularios.length : 0);


boton.addEventListener('click', (e) => {

    e.preventDefault();

    let tabla = document.getElementById('miTabla');

    for (let i = 0; i < misFormularios.length; i++) {

        //Creamos filas
        let fila = document.createElement('tr');
        //Celdas
        let celdaNombre = document.createElement('td');
        let celdaEmail = document.createElement('td');
        let celdaMensaje = document.createElement('td');
        //Asignacion de datos
        celdaNombre.textContent = misFormularios[i].nombre;
        celdaEmail.textContent = misFormularios[i].email;
        celdaMensaje.textContent = misFormularios[i].mensaje;

        //Agregamos las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEmail);
        fila.appendChild(celdaMensaje);

        //Agregamos la fila a la tabla
        tabla.appendChild(fila);
    }

})

const borrarLocalStorage = () => {
    localStorage.removeItem('Formulario')
    location.reload();
    alert('LocalStorage reiniciado');

}

document.addEventListener('DOMContentLoaded', function () {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    fetch(URL)
        .then(res => res.json())
        .then(json => mostrarData(json));

    const mostrarData = (data) => {
        console.log(data);
        let body = '';
        for (let i = 0; i < data.length; i++) {
            body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
        }
        document.getElementById('data').innerHTML = body;
    }
});



