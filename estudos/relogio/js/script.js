const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const relogio = setInterval(() => {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if(hr < 10) hr = '0' + hr

    if(min < 10) min = '0' + min

    if(s < 10) s = '0' + s

    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = s
});
