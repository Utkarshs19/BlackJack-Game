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

let saveEl=document.getElementById("save-el")

function save()
{   
    saveEl.textContent+=count+" - "
    countEl.textContent=0
    count=0
}
