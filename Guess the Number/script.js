let num=Math.round(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector("#guessField")
const guessSlot= document.querySelector('#guesses')
const remaining=document.querySelector('#lastResult')
const lowOrHi=document.querySelector('#lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let attempt=1
let playGame=true

if(playGame){
submit.addEventListener('click',function(e){
 e.preventDefault()
 
 validateGuess(Number(userInput.value))
})
}
function validateGuess(guess){
    if(isNaN(guess) || guess<=0 || guess>100 || guess===""){
        alert('Please Enter valid number between 1 to 100')
    }
    else{

        prevGuess.push(guess)
        if(attempt===11){
            displayGuess(guess)
            displayMsg(`Game over. Random number was ${num}`)
            endGame()
        }
       else{
        displayGuess(guess)
        checkGuess(guess)
       }
    }
}

function checkGuess(guess){
    if(guess===num){
        displayMsg(`You guessed it right! The number was ${num}`)
        endGame()
    }
    else if (guess<num){
        displayMsg(`Your guess is too low`)
        
    }
    else{
        displayMsg(`Your guess is too high`)
        
    }
}
function displayMsg(msg){
   lowOrHi.innerHTML=`<h2>${msg}</h2>`
}

function displayGuess(guess){
    userInput.value=""
    guessSlot.innerHTML+=`${guess} ,`;
    attempt++
    remaining.innerHTML=`${10-attempt}`
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p)
playGame=false
newGame()
}

function newGame(){
const newGame = document.querySelector('#newGame')
newGame.addEventListener('click',function(e){
  num=Math.round(Math.random()*100+1)
  prevGuess=[]
  attempt=1
  guessSlot.innerHTML=''
 remaining.innerHTML=`${10-attempt}`
 userInput.removeAttribute('disabled')
 startOver.removeChild(p)
  
  playGame=true
})
}

