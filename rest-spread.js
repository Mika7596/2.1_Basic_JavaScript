'use strict'

                        // Exercici 1.4: Rest & Spread operators
// Exercici 1: Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
const array1 = ["Daniel", "Anna", "Paula"];
const array2 = ["David", "Laura"];
const array3 = [...array1, ...array2];
console.log (array3);

// Exercici 2: Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
let suma = 0;
function sumar(...numbers){
    numbers.forEach (n => suma += n);
    console.log(`La suma de tots els números rebuts és igual a ${suma}`);
}
sumar(1, 2, 3);

// Exercici 3: Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
const alumne = {
    nom: "Alex",
    edat: 35,
    especialitzacio: "Angular"
}
const copiaAlumne ={
    ...alumne
}
console.log(alumne);
console.log(copiaAlumne);
copiaAlumne.edat = 36;
console.log(alumne);
console.log(copiaAlumne);

// Exercici 4: Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
const nouArray = [null, 2, 3, "hola", 8, {alumne: "Joan", edat: 43}];
let [primerElement, segonElement, ...resta] = nouArray;
console.log(primerElement);
console.log(segonElement);
console.log(resta);

// Exercici 5: Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
function sumarTresNumeros(num1, num2, num3){
    console.log(num1 + num2 + num3)
}
const arrayDeTres = [5, 7, 19];
sumarTresNumeros(...arrayDeTres);

// Exercici 6: Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
const estudiant = {
    carrera: "Front-End",
    projectes: 3,
    especialitzacio: "React"
}
const favs = {
    equipPreferit: "Barça",
    colorPreferit: "lila",
    destíPreferit: "Islàndia"
}
const personaEx6 = {...estudiant, ...favs};
console.log(personaEx6);