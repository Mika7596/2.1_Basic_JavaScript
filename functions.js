'use strict'

//                              Exercici 1.1: Arrow functions
// Exercici 1: Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}
const add = (a, b) => a + b;
console.log(add(4, 5));

// Exercici 2: Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
const randomNumber = () => Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);
console.log(randomNumber());

// Exercici 3: Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name}).
class Person {
    constructor(name){
        this.name = name;
    }
    greet = () => console.log(`Hola, ${this.name}`)
}
const persona = new Person ("usuari")
persona.greet();

// Exercici 4: Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
const arrayNum = [0, 1, 35, 48, 15, 90];
const printNumbers = arrayNum => {
    for (let i = 0; i < arrayNum.length; i++){
        console.log(arrayNum[i])
    }
}
printNumbers(arrayNum);

// Exercici 5: Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
const delayedmsg = () => setTimeout(greet, 3000);
const greet = () => console.log("Missatge amb 3 segons de retard")
delayedmsg();


                            // Exercici 1.2: Operador ternari
// Exercici 1: Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
const potConduir = edat => edat>=18 ? console.log("Pots conduir") : console.log("No pots conduir");
potConduir(28);


// Exercici 2: Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.
const compareNumbers = (a, b) => a>b ? console.log(a + " és més gran") : console.log(b + " és més gran")
compareNumbers(30, 19);

// Exercici 3: Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
const numPositiu = a => a < 0 ? console.log(a + " és un nombre negatiu.") : a == 0 ? console.log (a + " val zero") : console.log(a + " és un nombre més gran que el zero.")
numPositiu(-2);
numPositiu(0)
// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
const trobarMaxim = (a, b, c) => {
    a > b && a > c ? console.log (`${a} és el nombre major`) :  b < a && b < c ? console.log (`${b} és el nombre major`) : console.log (`${c} és el nombre major.`)
}
trobarMaxim(2, 3, 4);

// Exercici 4: Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.
const arrayNum2 = [1, 3, 2, 5, 89, 54, 102, 7];
function parOImpar(array){
    for (let i = 0 ; i < array.length ; i ++){
        array[i] % 2 == 0 ? console.log (`${array[i]} és un nombre parell`) : console.log(`${array[i]} és un nombre senar`)
    }
}
parOImpar(arrayNum2);


//                                  Exercici 1.3: Callbacks
// Exercici 1: Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
let absNumber
function processar(callback, nombre){
    absNumber = Math.abs(nombre);
    callback()
}
function displayNum(){
    console.log(`El valor absolut del nombre donat és el ${absNumber}`)
}
processar(displayNum, -3);


// Exercici 2: Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.
function calculadora(callback, a, b){
    console.log (a + b);
    callback (a, b);
}

function displayNums(a, b){
    console.log(`L'output anterior és la suma de ${a} i el ${b}`)
}

calculadora(displayNums, 2, -7);

// Exercici 3: Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.
function esperarISaludar(callback, nom){
    setTimeout(console.log(`Hola, ${nom}!`), 2000);
    callback(nom);
}
function despedir(nom){
    console.log(`Adeu, ${nom}!`)
}
esperarISaludar(despedir, "usuari")

// Exercici 4: Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
const nums = [1, 2, 3, 4, 5];
function processarElements(array, callback){
    array.forEach(n => callback(n))
}
const duplicar = n => console.log (n * 2);
processarElements(nums, duplicar);

// Exercici 5: Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.
let charChain = "Hola, com va?"
let newChain = "";
function processarCadena(callback, cadena){
    newChain = cadena.toUpperCase()
    console.log(newChain)
    callback(cadena);
}
function originalChain(cadena) {
    console.log(`L'input original abans de toUpperCase() era '${cadena}'`)
}
processarCadena(originalChain, charChain);


                        // Exercici 1.4: Rest & Spread operators
// Exercici 1: Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
const array1 = ["Daniel", "Anna", "Paula"];
const array2 = ["David", "Laura"];
const array3 = [...array1, ...array2];
console.log (array3);

// Exercici 2: Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
let suma = 0;
function sumar(...numbers){
    numbers.forEach (n => suma +=n);
    console.log(`La suma de tots els números és igual a ${suma}`);
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
const nouArray = [1, 2, 3, "hola", 8, {alumne: "Joan", edat: 43}];
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
const fav = {
    equipPreferit: "Barça",
    colorPreferit: "lila",
    destíPreferit: "Islàndia"
}
const personaEx6 = {...estudiant, ...fav};
console.log(personaEx6);

