const login = ()  => {
    let user = document.getElementById('usuario').value;
    let passw = document.getElementById('contraseña').value;

    let form = document.getElementById('formLog');

    console.log(user);
    console.log(passw);

    let usuario = 'admin@admin.com';
    let contraseña = '1234'

    if(user == usuario && passw == contraseña){
        location.href = 'admin.html';
    }else{
        location.href = 'error.html';
    }

    form.reset();
}