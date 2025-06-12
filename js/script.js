// Atividade 1

let hoje_hora = Date.now();
let hoje = Date();

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
    let imc_box = document.getElementById("imc_box");
    let imc_end;

    switch(true){
        case(IMC < 18.5):
            imc_end = "abaixo do peso";break;
        case(IMC < 25):
            imc_end = "peso ideal - Parabéns!";break;
        case(IMC < 30):
            imc_end = "levemente acima do peso";break;
        case(IMC < 35): 
            imc_end = "obesidade grau I";break;
        case(IMC < 40):
            imc_end = "obesidade grau II (severa)";break;
        case(IMC >= 40):
            imc_end = "obesidade grau III (mórbida)";break;
    }

    imc_box.value = "IMC = " + IMC + " - " + imc_end;
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
let error5 = document.getElementById("error_input5");

blista.addEventListener("click", () => {
    let lista = document.getElementById("listaVIP").value;
    
    if (lista == "") {
        error5.innerHTML = "Campo vazio."
        return;
    };
    error5.innerHTML = "";

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


//Atividade 05

let hoje_data = new Date();
let hora_hoje = hoje_data.getHours();
let saudacao;
let dia_da_semana = ["domingo","segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
let meses_do_ano = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

switch(true){
    case(hora_hoje < 12):
        saudacao = "Bom dia!";break;
    case(hora_hoje < 18):
        saudacao = "Boa tarde!";break;
    case(hora_hoje >= 18):
        saudacao = "Boa noite!";break;
}

let print_data = document.getElementById("hoje_print");

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

print_data.innerHTML = `${saudacao} Hoje é ${dia_da_semana[hoje_data.getDay()]}, ${addZero(hoje_data.getDate())} de 
${meses_do_ano[hoje_data.getMonth()]} de ${hoje_data.getFullYear()} - ${addZero(hoje_data.getHours())}:${addZero(hoje_data.getMinutes())}hs.`;


//Atividade 06

let novo = true;
let bt_tentativa = document.getElementById("button6");
let bt_novojogo = document.getElementById("button7");
let heart = document.getElementById("vidas");
let numero_escondido = document.getElementById("rand_number");
let cmp_tentativa = document.getElementById("number_input");
let resultado = document.getElementById("resultado");
let vidas;
let numero_secreto;
let var_addHearts;

function dis_button (novo){
    if (novo){
        bt_tentativa.disabled = true;
    }
}

dis_button(novo);
console.log(cmp_tentativa.value);

function addHearts (times){
    for(let i = 0; i < times; i++){
        var_addHearts += "&#x2665;";
    }
}

bt_novojogo.addEventListener("click", () => {
    bt_tentativa.disabled = false;

    resultado.innerHTML = "";
    var_addHearts = "";

    vidas = 3;

    addHearts(vidas);
    heart.innerHTML = var_addHearts;

    numero_escondido.value = "**";
    cmp_tentativa.value = "Sua tentativa";

    numero_secreto = Math.ceil(Math.random() * 10);
    console.log(numero_secreto);
});

bt_tentativa.addEventListener("click", () => {
    if (cmp_tentativa.value === ""){
        resultado.innerHTML = "Digite um número para tentar";
    } else {
        if (cmp_tentativa.value == numero_secreto){
            numero_escondido.value = numero_secreto;
            dis_button(true);
            if (vidas == 3) {
                resultado.innerHTML = "Parabéns! Jogada Perfeita!";
            } else {
                resultado.innerHTML = "Parabéns! Você acertou o número!";
            }
        } else {
            var_addHearts = "";
            vidas -= 1;
            if(vidas >= 1){
                resultado.innerHTML = "Tente novamente!";
                addHearts(vidas);
                heart.innerHTML = var_addHearts;
            } else {
                resultado.innerHTML = "Você Perdeu :(";
                heart.innerHTML = "";
                dis_button(true);
            }
        }
    }
});


// Atividade 07

let links = document.getElementById("sites");

links.addEventListener("change", function() {
    let url = this.value;
    window.open(url, "_blank");
});


// Atividade 08

let relogio = document.getElementById("relogio");

function updateRelogio() {
    relogio.innerHTML = `${new Date().toLocaleTimeString()}`;
};

setInterval(updateRelogio, 1000);


// Atividade 09

let sun = document.getElementById("sun");
// let size = 400;
// let crescer;
// let diminuir;

function crescer() {
    let b1 = setInterval(() => {
        sun.width += 2;
        if(sun.width >= 340){
            clearInterval(b1)
            setTimeout(diminuir, 500);
        }
    }, 100);
}

function diminuir() { 
    let b2 = setInterval(() => {
        sun.width -= 2;
        if(sun.width <= 250){
            clearInterval(b2)
            setTimeout(crescer, 500);
        }
    }, 100);
}

crescer();


// Atividade 10

let picture = document.getElementById("slide");
let t, x = 1;

function slides() {
    picture.innerHTML = `<img src="img/img_0`+ x + `.jpg" />`;
    x++;
    if(x > 6) x = 1;
    t = window.setTimeout(slides, 3000);
}

slides();