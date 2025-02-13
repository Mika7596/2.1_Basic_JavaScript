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




