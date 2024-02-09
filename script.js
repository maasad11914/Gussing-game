// finding element
const card = document.querySelector(".card");
const statusp = document.querySelector(".status");
const remain = document.querySelector(".remain");
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
// finding element

// counters
let attemps = 0;
let maxAttemps = 5;
let won = 0;
let lost = 0;
// counters

let winLost = document.createElement("p");
winLost.classList.add("bold-font");
card.appendChild(winLost);


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (attemps === maxAttemps - 1){
        input.disabled = true;
        button.disabled = true;
    }
    if(attemps < maxAttemps){
        showingResult(input.value);
    }
    input.value = "";
})
function showingResult(value){
    attemps++;
    randomNumber = Math.floor(Math.random()*5+1);
    if(parseInt(value) === randomNumber){
        statusp.innerHTML= "You have won";
        won++;
    }else{
        statusp.innerHTML = "You have lost. Number was: "+ randomNumber;
        lost++;
    }
    winLost.innerText = `Won: ${won} Lost: ${lost}`;
    remain.innerText="You have only "+(maxAttemps-attemps)+"attemps";
}



