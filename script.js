// pegando variáveis
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

console.log(horas)

const relogio = setInterval(function pegandoTime() {
    let dataToday = new Date();

    let hrs = dataToday.getHours();
    let mins = dataToday.getMinutes();
    let sec = dataToday.getSeconds();

    if (hrs < 10) hrs = '0' + hrs;

    if (mins < 10) mins = '0' + mins;

    if (sec < 10) sec = '0' + sec;


    horas.textContent = hrs;
    minutos.textContent = mins;
    segundos.textContent = sec;
})