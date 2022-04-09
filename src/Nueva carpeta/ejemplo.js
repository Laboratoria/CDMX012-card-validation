/*const botoncito = document.querySelector("#botoncito")
const comida = document.querySelector("#comida")
const favorita = document.querySelector("#favorita")

//let videojuegos = ['mario', 'lol', 'pokemon', 1+2, ['charizard', 'pikachu', 'gengar']];
//console.log( videojuegos[4][2] );
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'spiderman',
    vive: false,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster', 'lol'],
}
 console.log(personaje.trajes.length);
console.log(personaje.trajes[personaje.trajes.length-3]);
//Object.freeze(personaje);
console.log(personaje);

personaje.casado = true;

console.log(personaje);*/

function getAleatorio() {
    return Math.random();
}
console.log (getAleatorio () );

const getAleatorio2 = () => Math.random();

console.log (  getAleatorio2 () );

/*botoncito.addEventListener("click", clickMenu )

function clickMenu(){
    comida.innerHTML=`
        <ul>
            <li>Pollo</li>
            <li>Sopa</li>
            <li>Enchiladas</li>
            <li>Pozole</li>
        </ul>
    `
}*/

/*botoncito.addEventListener("click", function(){
    comida.innerHTML=clickMenu()
} )

function clickMenu(){
    return `   <ul>
            <li>Pollo</li>
            <li>Sopa</li>
            <li>Enchiladas</li>
            <li>Pozole</li>
        </ul>
    `
    
}*/

botoncito.addEventListener("click", function(){
    comida.innerHTML=clickMenu(favorita.value)
    favorita.value=""
} )

function clickMenu(comidaExtra){
    return `   <ul>
            <li>Pollo</li>
            <li>Sopa</li>
            <li>${comidaExtra}</li>
            <li>Enchiladas</li>
            <li>Pozole</li>
        </ul>
    `
    
}
