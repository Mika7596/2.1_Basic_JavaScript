'use strict'

                        // Exercici 1.5: Array transformations
// Exercici 1: Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
const arrEx1 = [1, 2, 3, 4];
const quadrat = arrEx1.map(n => n*n);
console.log(quadrat);

// Exercici 2: Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
const arrEx2 = [1, 2, 3, 4];
const parells = arrEx2.filter(n => n%2 == 0);
console.log(parells);

// Exercici 3: Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
const arrEx3 = [1, 10, 8, 11];
const majorDe10 = arrEx3.find(n => n > 10);
console.log(majorDe10);

// Exercici 4: Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.
const arrEx4 = [13, 7, 8, 21];
const total = arrEx4.reduce((a, b) => a + b);
console.log(total);

// Exercici 5: Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
// - Filtra els nombres majors o iguals a 10.
// - Multiplica cada nombre filtrat per 2.
// - Calcula la suma dels nombres filtrats i multiplicats per 2.
// - La funció ha de retornar el resultat de la suma.
const arrEx5 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
function multiplicaISuma(){
    console.log(arrEx5.filter(n => n=> 10).map(n => n * 2).reduce( (n, m) => n + m));
}
multiplicaISuma();

// Exercici 6: Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament
const arrayEx6 = [11, 12, 13, 14];
function major10(){
    if (arrayEx6.every(n => n > 10)) {
        console.log("Tots els nombres són majors de 10")
    }
    else if (arrayEx6.some( n => n > 10)) {
        console.log("Com a mínim un dels nombres de la llista és major de 10")
    }
    else{
        console.log("Tots els nombres de la llista són menors de 10")
    }
}
major10();
