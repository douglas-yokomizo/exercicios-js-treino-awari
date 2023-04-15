//Faça um programa que recebe um número inteiro e mostre a tabuada desse número.
const number = prompt('Insira um número inteiro: ', '');

alert('A tabuada de ' + number + ' é:')

for (let i = 1; i <= 10 ; i++){
    const result = i * number;
    console.log(result);
}