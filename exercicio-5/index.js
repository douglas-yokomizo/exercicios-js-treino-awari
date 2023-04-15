/* Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição. */ 

/* mostrar a tabuada de 1 = 
1 * 1
1 * 2
1 * 3
1 * 4
1 * 5
1 * 6
1 * 7
1 * 8
1 * 9
1 * 10 */

for (let i = 1;  i < 10; i++) {
        console.log(`Tabuada do ${i}: `); 
        for (let j = 1; j <= 10; j++) {
                let resultado = i * j
                console.log(`Resultado de ${i} x ${j} é ${resultado}`);
        }
}