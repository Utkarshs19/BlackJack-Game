function getRandomCard()
{
    let c= (Math.floor(Math.random()*13)) +1;

    if(c===1)return 11
    else if(c>=11)return 10
    else return c;
}

let player={
 name:"Utkarsh :",
 chips:145
}



let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" $"+player.chips

let cards=[]

let sum=0

let hasBlackJack=false
let isAlive=false
let message="";
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")

function startGame()
{   
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard 
    isAlive=true;
    renderGame()
}

function renderGame(){
    sumEl.textContent="Sum : "+sum
    cardsEl.textContent="Cards : "
    for(let i=0;i<cards.length;i++)
    cardsEl.textContent+=" "+cards[i]
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
        message+="You are out of the Game"
    }
   messageEl.textContent=message
   message=""
}


function newCard()
{
    if(isAlive==true && hasBlackJack===false){
    let card=getRandomCard();
    cards.push(card)
    sum+=card;
    renderGame()
    }
}



console.log(hasBlackJack)
console.log(isAlive)