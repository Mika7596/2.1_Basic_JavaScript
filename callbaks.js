'use strict'


                            //Exercici 1.3: Callbacks
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
    console.log(`L'input original ${cadena}`)
    callback(newChain);
}
function originalChain(cadena) {
    console.log(`L'input després de toUpperCase() és '${newChain}'`)
}
processarCadena(originalChain, charChain);
