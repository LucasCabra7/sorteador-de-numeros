function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value); /* utilizei o parseInt para so aceitar .value de valores numeriocos inteiro*/
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    /* Verificador caso o número incial seja maior que o numero final. Ex: inciar com 10 e terminar com 9 */
    if(de >= ate) { 
        alert(`Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!`);
        limparCampo();
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        return;
    }

    /* Verificar se a condição de quantidades de números satisfaz ser menor do que o maximo digito, para não gerar um loop infinito*/
    if(quantidadeDeNumeros > ate) {
        alert('Insira uma quantidade de números maior que "Do número" e menor que "Até o numero".');
        limparCampo();
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        return;
    }

    for (let i = 0; i < quantidadeDeNumeros < ate; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
    }
    
    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    StatusDoBotaoReiniciar();
} 

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function StatusDoBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function limparCampo(){
    quantidadeDeNumeros = document.getElementById('quantidade');
    quantidadeDeNumeros.value = ' ';
    de = document.getElementById('de');
    de.value = ' ';
    ate = document.getElementById('ate');
    ate.value = ' ';
    textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Inicie um novo Jogo.</label>`;

}

function reiniciar() {
    limparCampo();
    StatusDoBotaoReiniciar();
}