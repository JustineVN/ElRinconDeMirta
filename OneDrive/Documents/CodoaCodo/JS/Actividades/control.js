let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let usuario = document.querySelector('#usuario');
    let clave = document.querySelector('#clave');

    if (usuario.value == ''){
        alert('El nombre de usuario es obligatorio');
    } else if (clave.value == ''){
        alert('La clave es obligatoria');
    }else if (usuario.value.includes('@') == false){
        alert('El nombre de usuario debe tener el caracter @');
    }else {
        form.submit();
    }


})