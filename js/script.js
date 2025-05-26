// Atividade 1

let hoje_hora = Date.now();
let hoje = Date();
console.log(hoje);
console.log(hoje_hora);

function f_countdown (datamenor, datamaior) {
    let mili = datamaior - datamenor;
    let sec = mili / 1000;
    let min = sec / 60;
    let hour = min / 60;
    let day = hour / 24;
    return day;
}

function f_countdown_hour (hora_in) {
    let hora = (hora_in - Math.floor(hora_in)) * 24;
    return hora;
}

function f_countdown_min (min_in) {
    let min = ((min_in - Math.floor(min_in)) * 60);
    return min;
}

let dia_hoje = document.getElementById("data_hoje");
dia_hoje.innerHTML = "Hoje é : " + hoje;

let countdown_dayleft = document.getElementById("data_ferias");

let ferias = new Date("July 15, 2025 00:00:00");
let ferias_mili = ferias.getTime();
let ferias_data = f_countdown(hoje_hora, ferias_mili);
let ferias_hora = f_countdown_hour(ferias_data);
let ferias_min = f_countdown_min(ferias_hora)
countdown_dayleft.innerHTML = "Faltam " + Math.floor(ferias_data) + " dias " + Math.floor(ferias_hora) + " horas e " + Math.floor(ferias_min) + " minutos para as férias!";

let niver = new Date("March 14, 2026 00:00:00");
let niver_mili = niver.getTime();
let niver_data = f_countdown(hoje_hora, niver_mili);
let niver_hora = f_countdown_hour(niver_data);
let niver_min = f_countdown_min(niver_hora);

let countdown_niver = document.getElementById("data_niver");
countdown_niver.innerHTML = "Faltam " + Math.floor(niver_data) + " dias " + Math.floor(niver_hora) + " horas e " + Math.floor(niver_min) + " minutos para o meu aniversário '-'";

// Atividade 2

let button_imc = document.getElementById("button1");

button_imc.addEventListener("mouseup", function(){
    let peso = document.getElementsByTagName("input")[0].value;
    let altura = document.getElementsByTagName("input")[1].value;
    let IMC = (peso / Math.pow(altura/100, 2)).toFixed(1);

    switch(true){
        case(IMC < 18.5):
            document.getElementById("imc_box").value = "IMC = " + IMC + " - " + "abaixo do peso";break;
        case(IMC < 25):
            document.getElementById("imc_box").value = "IMC = " + IMC + " - " + "peso ideal - Parabéns!";break;
        case(IMC < 30):
            document.getElementById("imc_box").value = "IMC = " + IMC + " - " + "levemente acima do peso";break;
        case(IMC < 35): 
            document.getElementById("imc_box").value = "IMC = " + IMC + " - " + "obesidade grau I";break;
        case(IMC < 40):
            document.getElementById("imc_box").value = "IMC = " + IMC + " - " + "obesidade grau II (severa)";break;
        case(IMC >= 40):
            document.getElementById("imc_box").value = "IMC = " + IMC + " - " + "obesidade grau III (mórbida)";break;
    }
})

//Atividade 3

let bmedia = document.getElementById("button2");

bmedia.addEventListener("mouseup", function(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    error3 = document.getElementById("error_input3");
    error4 = document.getElementById("error_input4");
    error3.innerHTML = "";
    error4.innerHTML = "";

    if ((nota1 < 0 || nota1 > 10 || isNaN(nota1)) && (nota2 < 0 || nota2 > 10 || isNaN(nota2))){
        error3.innerHTML = "Nota 1 inválida.";
        error4.innerHTML = "Nota 2 inválida.";
    } else if (nota1 < 0 || nota1 > 10 || isNaN(nota1)){
        error3.innerHTML = "Nota 1 inválida.";
    } else if (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
        error4.innerHTML = "Nota 2 inválida.";
    } else {
        let media = ((nota1 + nota2)/2).toFixed(2);
        let result;
        let mcolor;

        switch(true){
            case(media < 6):
                result = "Insuficiente";
                mcolor = "red";break;
            case(media <= 7.5):
                result = "Regular";
                mcolor = "black";break;
            case(media <= 8.5):
                result = "Bom";
                mcolor = "green";break;
            case(media <= 9.5):
                result = "Ótimo";
                mcolor = "blue";break;
            case(media <= 10 ):
                result = "Excelente";
                mcolor = "lightskyblue";break;
        }
    document.getElementById("media_box").style.color = mcolor;
    document.getElementById("media_box").value = media + " - " + result;
    }
})

//Atividade 4

let blista = document.getElementById("button3");
let bclear = document.getElementById("button4");
let clear_last = document.getElementById("button5");
let lista_array = new Array;
let pLista = document.getElementById("pLista");


blista.addEventListener("click", () => {
    let lista = document.getElementById("listaVIP").value;
    if (lista == "") return;

    let char = lista.length;
    var y;
    if (lista_array.length == 0) y = 0; else y = (lista_array.length)++;
    var start_index = 0;

    for(var x = 0; x <= char; x++){
        if(lista[x] == "," || x == char){
            let nome = (lista.substring(start_index, x)).toUpperCase().trim();
            if(lista_array.includes(nome) == false) {
                lista_array[y] = nome;
                y++;
            }
            start_index = x+1;
        }
    }

    lista_array.sort();
    pLista.innerHTML = "";

    for(var x = 0; x < lista_array.length; x++){
        let newname = '<li id="li_lista">' + lista_array[x] + '</li>';
        pLista.insertAdjacentHTML("beforeend", newname);
    }

    const allLis = document.getElementsByTagName("li");
    for (let li of allLis) {
        li.style.padding = "0";
    }
    document.getElementById("listaVIP").value = "";
});

bclear.addEventListener("mouseup", () => {
    lista_array = [];
    pLista.innerHTML = "";
});

clear_last.addEventListener("mouseup", () => {
    if (lista_array.length == 0) return;

    lista_array.pop();
    pLista.removeChild(pLista.lastElementChild);
});