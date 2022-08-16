let temporizador = document.getElementById("temporizador");
let botonIniciar = document.getElementById("iniciar");
botonIniciar.addEventListener("click", iniciar)
let botonPausar = document.getElementById("pausar");
botonPausar.addEventListener("click", pausar);
let botonReiniciar = document.getElementById("reiniciar");
let inputHoras = document.getElementById("horas");
inputHoras.addEventListener("change", asignarHoras);
let inputMinutos = document.getElementById("minutos");
inputMinutos.addEventListener("change", asignarMinutos)
let inputSegundos = document.getElementById("segundos");
inputSegundos.addEventListener("change", asignarSegundos);
let horas = 0;
let minutos = 0;
let segundos = 0;
let horasFormateada = "00";
let minutosFotmateados = "00";
let segundosFormateados = "00";
let timeout = 0;
function asignarHoras(){
    if(inputHoras.value<10){
        horasFormateada = "0" + inputHoras.value;
    } else {
        horasFormateada = inputHoras.value;
    }
    temporizador.innerHTML = horasFormateada + ":" + minutosFotmateados + ":" + segundosFormateados;
    horas = inputHoras.value;
}
function asignarMinutos(){
    if(inputMinutos.value<10){
        minutosFotmateados = "0" + inputMinutos.value;
    } else {
        minutosFotmateados = inputMinutos.value;
    }
    temporizador.innerHTML = horasFormateada + ":" + minutosFotmateados + ":" + segundosFormateados;
    minutos = inputMinutos.value;
}
function asignarSegundos(){
    if(inputSegundos.value<10){
        segundosFormateados = "0" + inputSegundos.value;
    } else {
        segundosFormateados = inputSegundos.value;
    }
    temporizador.innerHTML = horasFormateada + ":" + minutosFotmateados + ":" + segundosFormateados;
    segundos = inputSegundos.value;
}
function iniciar(event){
    event.preventDefault();
    setTimeout(() => {
        temporizar();
    }, 1000);
    habilitarBotones();
    inputHoras.setAttribute("disabled", true);
    inputMinutos.setAttribute("disabled", true);
    inputSegundos.setAttribute("disabled", true);
    bloquearBotones(botonIniciar);
}
function temporizar() {
    segundos -= 1;
    timeout = setTimeout(temporizar, 1000);
    if(segundos < 0){
        segundos = 59;
        minutos -= 1;
    }
    if(minutos<0){
        minutos = 59;
        horas -= 1;
    }
    if(segundos==0 & minutos==0 & horas==0 || horas<0){
        clearInterval(timeout);
        alert("Tiempo finalizado");
        horas = 0;
        minutos = 0;
        segundos = 0;
    }
    if(horas<10){
        horasFormateada = "0" + horas;
    } else {
        horasFormateada = horas;
    }
    if(minutos<10){
        minutosFotmateados = "0" + minutos;
    } else{
        minutosFotmateados = minutos;
    }
    if (segundos<10){
        segundosFormateados = "0" + segundos;
    } else {
        segundosFormateados = segundos;
    }
    temporizador.innerHTML = horasFormateada + ":" + minutosFotmateados + ":" + segundosFormateados
}
function pausar(event) {
    event.preventDefault();
    clearTimeout(timeout);
    habilitarBotones();
}
function reiniciar(event){
    event.preventDefault();
    clearTimeout(timeout);
    inputHoras.value = "";
    inputMinutos.value = "";
    inputSegundos.value = "";
    inputHoras.removeAttribute("disabled");
    inputMinutos.removeAttribute("disabled");
    inputSegundos.removeAttribute("disabled");
}
function habilitarBotones(){
    let botones = document.getElementsByClassName("disabled");
    for(i=0;i<botones.length;i++){
        botones[i].classList.remove("disabled");
    }
}
function bloquearBotones(boton){
    boton.classList.add("disabled")
}