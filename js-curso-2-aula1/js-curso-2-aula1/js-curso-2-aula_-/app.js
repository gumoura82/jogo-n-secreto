let listaDeNumerosSorteados = [];  
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMenagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 a 10');    
}

exibirMenagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto e menor');
        } else {
            exibirTextoNaTela('p','O numero secreto e maior');
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroescolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeelementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeelementosNaLista == numeroLimite){
        listaDeNumerosSorteados();       
    } 

    if(listaDeNumerosSorteados.includes(numeroescolhido)){
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroescolhido);
        console.log(listaDeNumerosSorteados);
        return numeroescolhido;
    }
    
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


console.log(numeroSecreto)