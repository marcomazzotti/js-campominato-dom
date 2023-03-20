//*Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


//dichiarazioni
const grid = document.querySelector(".grid")
const play = document.querySelector(".btn-play")

//cosa succede al click
play.addEventListener("click" , function(){
    
    let difficult = document.querySelector(".level");
    let numberOfSquare = parseInt(difficult.options[difficult.selectedIndex].value);
    let numbersArray = getNumberArray(numberOfSquare);

    grid.innerHTML = "";
    for (let i = 0; i < numbersArray.length ; i++){
      const currentNumber = numbersArray[i];
      const newItem = GridItem(currentNumber);
      grid.append(newItem);
      newItem.addEventListener("click", ItemClick, bombs);

      if (numberOfSquare === 81){
        newItem.classList.remove("easy")
        newItem.classList.add("normal")
      } else if (numberOfSquare === 49){
        newItem.classList.remove("easy")
        newItem.classList.add("hard")
      }
    }
})

//funzioni
function getNumberArray(numbersQuantity) {
    const array = [];

    for (let i = 1; i<=numbersQuantity; i++){
        const number = i
        array.push(number)
    }
    return array   
}

function GridItem(text) {
    const gridElem = document.createElement("div");
    gridElem.classList.add("grid-item" , "easy");
    gridElem.innerHTML = `<span>${text}</span>`;
    return gridElem;
}

function ItemClick() {
    const clickedNumber = parseInt(this.querySelector("span").textContent);
    this.classList.add("green");
    console.log(`Hai scelto il numero ${clickedNumber}`);
    if (bombs.includes(clickedNumber)){
      this.classList.add("red");
      alert("GAME OVER")
    }
}


// **Consegna**
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// ****
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//Genero le bombe
const bombs = generateBombs(16, 100);

function generateBombs(numbersQuantity, maxNumber) {
  const numbers = [];
  while(numbers.length < numbersQuantity){
    const rndNumber = getRndInteger(1, maxNumber);
    if (!numbers.includes(rndNumber)){
      numbers.push(rndNumber);
    }
  }
  return numbers
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//se utente clicca su una bomba

// function handleClick () {
//   const bombsArray = bombs;
//   const clickedNumber = parseInt(this.querySelector("span").textContent);
//   if(bombs.includes(clickedNumber)) {
//     this.classList.add("red");
//     console.log("HAI PERSO");
//   }
// }

console.log(bombs);