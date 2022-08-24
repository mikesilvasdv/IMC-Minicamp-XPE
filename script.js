function start() {
    let buttonCalculateImc = document.querySelector('#button-calculate-imc');

    buttonCalculateImc.addEventListener('click', handleButtonClick);

    //definindo as variáveis para o peso e altura e selecionando o elemento correspondente no HTML
    //para calcular automaticamente:
    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();




}

function calculateImc(weight, height) {
    return weight / (height * height);

}

function handleButtonClick() {

    //definindo variáveis para os inputs, resultado do cálculo e selecionando os elementos no HTML

    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');
    
    let imcResult = document.querySelector('#imc-result');


    //definindo variáveis para armazenar o valor do input usando '.value' e convertendo de string para number
    let weight = Number(inputWeight.value);
    let height = Number(inputHeight.value);

    // definindo variável para o resultado da função de cálculo
    let imc = calculateImc(weight, height);

    // definindo variável para formatar o valor do resultado usando '.toFixed()' e '.replace()'
    let formattedImc = imc.toFixed(2).replace('.', ',');

    //alterando o valor do resultado após todas as alterações anteriores, utilizando '.textContent'
    imcResult.textContent = formattedImc;    

    printGrau();
}

function grau() {

    let imc = parseFloat(document.querySelector('#imc-result').innerText);

    if (imc >= 16 && imc < 16.9){
        return 'Muito abaixo do peso';

    } else if (imc >= 17 && imc < 18.4) {
        return 'Abaixo do peso';

    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade grau I';

    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade grau II';

    } else if (imc > 40) {
        return 'Obesidade grau III';

    } else {
        return 'Resultado inválido';

    }
}

function printGrau() {
    let grauTest = document.querySelector('#result');
    grauTest.innerHTML = grau();

}

start();