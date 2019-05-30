let edad;
let dia_nacimiento = 16;
let mes_nacimiento = 10;
let fecha = new Date();
let mes = fecha.getMonth();
let dia = fecha.getDate();
const edad_actual_web = document.getElementById("edad_actual");


if (dia >= dia_nacimiento && mes >= mes_nacimiento) {
    edad =  parseInt(edad_actual_web.textContent);
    edad_actual_web.textContent = edad + 1;
}

