let count =0;

let countEl=document.getElementById("count-el")
console.log(countEl)

function decrement()
{
    count--;
    countEl.innerText=count
}

function increment(){
    count++;
    countEl.innerText=count;
    // console.log(count)
}

