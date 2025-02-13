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


