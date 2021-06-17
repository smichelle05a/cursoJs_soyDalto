/* Cofla reprobó 2 materias y tiene que enviar un formulario para registrarse en las mesas de examen.
    -El formulario debe contener:
        -Nombre Completo
        -Mail
        -Materia Adeudada
    -Se deben validar mails y nombres
    -Enviar al servidor de manera pulida */

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const materia = document.getElementById('materia');
const btn = document.getElementById('btn-submit');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add('invalid-feedback', 'text-center', 'mt-3');
        resultado.style.display = 'block';
        resultado.style.fontSize = '2rem';
    } else {
        resultado.innerHTML = 'Solicitud enviada correctamente';
        resultado.classList.remove('invalid-feedback');
        resultado.classList.add('valid-feedback');
    }
})

const validarCampos = () => {
    let error = [];
    if (email.value.length < 5 || email.value.length > 40 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        error[0] = true;
        error[1] = 'Email inválido';
        return error;
    } else if (materia.value.length < 4 || materia.value.length > 40) {
        error[0] = true;
        error[1] = 'La materia no existe';
        return error;
    } else {
        error[0] = false;
        return error;
    }
}