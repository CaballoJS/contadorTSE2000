var persona = document.querySelector("#personas");
var correo = document.querySelector("#correo");
var mensaje = document.querySelector("#mensaje");

var usuario = persona.addEventListener('keyup',
    (event) => {
        var inputText = event.path[0].value;
        // document.querySelector('.personas').innerHTML = inputText;
        var nombres = document.querySelector(".nombres");
        nombres.setAttribute('value', inputText);
    });


var email = correo.addEventListener('keyup',
    (event) => {
        var correos = event.path[0].value;
        // document.querySelector('#correo').innerHTML = correos;
        var emails = document.querySelector('.correos');
        emails.setAttribute('value', correos)
    });

var msj = mensaje.addEventListener('keyup',
    (event) => {
        var message = event.path[0].value;
        // document.querySelector('.com').innerHTML = message;
        var com = document.querySelector('.com');
        com.setAttribute('value', message)
    });

function limpiarFormulario() {
    document.querySelector(".formulario").reset();
}