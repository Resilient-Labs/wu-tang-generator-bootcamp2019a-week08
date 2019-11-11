const btn = document.querySelector('button')
let result = document.querySelector('h3')
let firstArray = ['lil','Method','Biz','Shabba','Rock']
let secondArray = ['Rizza','Mob','Cat','Pump','Dexter']

btn.addEventListener('click', ()=>{
  let firstQuestion=document.querySelector(".firstQuestion").value
  let thirdQuestion=document.querySelector(".thirdQuestion").value
  let secondQuestion=document.querySelector(".secondQuestion").value
  let fourthQuestion=document.querySelector(".fourthQuestion").value
  let fifthQuestion=document.querySelector(".fifthQuestion").value


let firstResult=Number(firstQuestion)+Number(secondQuestion)

let secondResult=Number(thirdQuestion)+Number(fourthQuestion)+Number(fifthQuestion)
let firstName=firstArray[firstResult]
let lastName=secondArray[secondResult]
result.textContent=`Welcome to the Wu-Tang culture ${firstName} ${lastName}!`

})
