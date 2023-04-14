// Função para verificar se um número é primo
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Loop para encontrar e exibir todos os números primos de 0 a 100
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  