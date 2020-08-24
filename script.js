const q = document.querySelector("#questao")
var pont = document.querySelector("#pontos")
var pt =  document.querySelector("#ponts")
var respostaCorreta = '';

let x = 0;
let n = 0;

function verTotal(){
    pontos.innerHTML = "Pontuação salva: " + localStorage.getItem(localStorage.key(0));
}


function perguntaNova(){

    fetch("https://opentdb.com/api.php?amount=10&type=boolean")
    .then(response => {
        return response.json();
    })
    .then(function(resposta) {
        console.log(resposta)
        let pergunta = resposta.results[0].question
        console.log(pergunta)
        questao.innerHTML = pergunta;
        let answer =   resposta.results[0].correct_answer;
        respostaCorreta = answer;
        console.log(respostaCorreta)
        console.log(answer)
    })
    .catch(err => {
        console.log(err);
    });

}

function envio(){
    let resposta = document.querySelector('input[name="resposta"]:checked').value;
    console.log("Sua respota é: " + resposta)
    if(resposta == respostaCorreta){
        console.log("Vc acertou")
        n += 100
        console.log(n)
        ponts.innerHTML = n + " pontos";
        localStorage.setItem('Pontuação', n)
    }else{
        console.log("Vc errou")
        x = 0;
        ponts.innerHTML = x + " pontos";
    }
}

