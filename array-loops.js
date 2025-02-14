'use strict'

                            // Exercici 1.6: Array loops
// Exercici 1: forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let nomsEx1 = ['Anna', 'Bernat', 'Clara'];
nomsEx1.forEach(n => console.log(n));

// Exercici 2: for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let nomsEx2 = ['Anna', 'Bernat', 'Clara'];
for (let n of nomsEx2){
    console.log(n);
}

// Exercici 3: filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];
const numsEx3 = [1, 2, 3, 4, 5, 6];
const parellsEx3 = numsEx3.filter( n => n % 2 == 0);
console.log(parellsEx3);

// Exercici 4:for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
for (const element in obj) {
    console.log(`${element}: ${obj[element]}`);
  }

// Exercici 5: for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
const numerosEx5 = [1, 2, 3, 4, 5, 6];
for (let n of numerosEx5){
    if ( n > 5){ break }
    console.log(n);
}

// Exercici 6: for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']
const nomsEx6 = ['Anna', 'Bernat', 'Clara'];
for (let n of nomsEx6){
    console.log(`${n}; el seu index és ${nomsEx6.indexOf(n)}`)
}