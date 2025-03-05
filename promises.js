'use strict'

                        // Exercici 1.7: Promises & Async/Await
// Exercici 1: Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
const greetEx1 = new Promise(() => {
    setTimeout(() => {
      console.log("Hola, món!");
    }, 2000);
});

// Exercici 2: Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
const greetEx2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola de nou!");
    }, 2000);
});
greetEx2.then(valor => console.log(valor))

// Exercici 3: Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa

function promesaEx3 (input){
    return new Promise ((resolve, reject) =>{
        if (input.toLowerCase() == "hola"){
        setTimeout(() => {
            resolve();
        }, 2000)
        } else{
            reject();
        }
    })
}
promesaEx3("hola").then( () => {
    console.log("Bingo! 'Hola' era la paraula correcta")},
    () => {
        console.log("Paraula incorrecta.");})
   
// Exercici 4: Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
const greetEx4 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, Exercici 4!");
    }, 2000);
});
async function asyncF (){
    const greeting = await greetEx4;
    console.log (greeting)
};
asyncF();

// Exercici 5: Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
const greetEx5 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, Exercici 5!");
    }, 2000);
});
async function catchingErrors() {
    try{
        const newAwait = await greetEx5;
        console.log (greeting);
    } catch(error){
        console.log(`Quelcom va malement: ${error}`)
    }
}
catchingErrors();

// Exercici 6: Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promise1Ex6 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("resultat de la 1ª promise de l'exercici 6 amb 2 segons de retard");
    }, 2000)
})
const promise2Ex6 = new Promise ((resolve) =>{
    setTimeout( () => {
        resolve("resultat de la 2ª promise de l'exercici 6 amb 6 segons de retard");
    }, 3000)
})
Promise.all([promise1Ex6, promise2Ex6]).then((messages) =>{
    for (let m of messages){
    console.log(m);
    }
})