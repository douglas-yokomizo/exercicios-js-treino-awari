
//recebe um número inteiro
const numeroRecebido = prompt('Digite um número inteiro: ');

//array para armazenar os numeros pares e impares
function separaParesEImpares(numeroRecebido) {
    let pares = [];
    let impares = [];
  
    //o loop vai ficar adicionando um e comparando com o numeroRecebido pra ver se ainda é menor ou igual a ele
    for(let i = 1; i <= numeroRecebido; i++) {
        //enquanto estiver nos parametros do loop , ele vai pegar todos os numeros e comparar com a condição do if, e armazenar no array pares ou impares
      if(i % 2 === 0) {
        pares.push(i);
      } else {
        impares.push(i);
      }
    }
    // vai adicionar todos os elementos da array, separando eles com virgulana na string 'numeros pares ou impares'
    console.log(`Números pares: ${pares.join(", ")}`);
    console.log(`Números ímpares: ${impares.join(", ")}`);
  }
  
  // Exemplo de uso
separaParesEImpares(numeroRecebido);  