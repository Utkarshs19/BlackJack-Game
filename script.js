let firstCard=5
let secondCard=6

let cards=[firstCard,secondCard]

let sum=firstCard+secondCard

let hasBlackJack=false
let isAlive=true
let message="";
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")

function startGame()
{
    renderGame()
}

function renderGame(){
    sumEl.textContent="Sum : "+sum
    cardsEl.textContent="Cards : "+cards[0] + " "+ cards[1]
    if(sum <=20){

        message+="Do you want to draw a card again"
    }
    else if(sum===21)
    {
        hasBlackJack=true
     message+="You've got Blackjack"
    }
    else
    {
        isAlive=false;
        message+="Loser"
    }
   messageEl.textContent=message
   message=""
}


function newCard()
{
    let card=5;
    sum+=card;
    renderGame()
}



console.log(hasBlackJack)
console.log(isAlive)