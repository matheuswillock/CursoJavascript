//Solicitar o nome da pessoa.
var nome = prompt('Qual o seu nome?'); 

// Solicitar a altura da pessoa em cm.
var altura = parseFloat(prompt('Qual a sua altura? (cm)')); //Vamos utilizar o parseFloat para manter as strings do prompt em npumeros fracionados enquanto o transforma os dados em numbers. 

// Solicitar o peso da pessoa.
var peso = parseFloat(prompt('Qual o seu peso?')); 

// Transformar a altura de cm em metros.
var altura = altura / 100;

// Elevar o valor da altura ao quadrado (x²) => multiplicar a altura por ela mesma.
// Executar o calculo da massa corporal através da exressão: M = peso (quilos) / altura².
var massa = Math.round(peso / (altura * altura));

//testes condicionais para identificar a classificação do peso com base no imc
var classificacao = '';

if (massa < 16) { 
    classificacao = 'Baixo peso muito grave';

} else if (massa >= 16 && massa <= 16.99) { 
    classificacao = 'Baixo peso grave'; 

} else if (massa >= 17 && massa <= 18.49) { 
    classificacao = 'Baixo peso';

} else if (massa >= 18.50 && massa <= 24.99) { 
    classificacao = 'Peso normal';

} else if (massa >= 25 && massa <= 29.99) { 
    classificacao = 'Sobrepeso';

} else if (massa >= 30 && massa <= 34.99) { 
    classificacao = 'Obesidade grau I';

} else if (massa >= 35 && massa <= 39.99) { 
    classificacao = 'Obesidade grau II';

} else { 
    classificacao = 'Obesidade grau III';
}

document.write('<b>' + nome + ' possui índice de massa corporal igual a ' + massa + ' sendo classificado como: ' + classificacao + '.<b/>');