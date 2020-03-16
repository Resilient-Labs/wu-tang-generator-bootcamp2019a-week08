const ul = document.querySelector('ul')
let btn = document.querySelector('button')
let firstName = ["CONTROLLER","WELL-THOUGHT-OF","BLESSEDUPLEASANT","BOSSMAN","VANQUISHER",]
let lastName = ["BAD", "VENTURER","HONORED", "CROOKED","ALLIGATOR",]
let result = document.querySelector('.result')
btn.addEventListener('click', () => {
  let color = document.querySelector('input[name = color]:checked').value
  let candy = document.querySelector('input[name = candy]:checked').value
  let season = document.querySelector('input[name = season]:checked').value
  let eyes = document.querySelector('input[name = eyes]:checked').value
  let book = document.querySelector('input[name = book]:checked').value
  let first = Number(color) +  Number(candy)
  let last =  Number(season) + Number(eyes) + Number(book)
  feedback.textContent = `${firstName[first]} ${lastName[last]}`
})
// document.getElementById("submit").onclick=userSubmits
//
// let array = [];
//
// function userSubmits(){
//   document.getElementById("container").innerHTML = "";
//  let rand= Math.round(Math.random()* first.length)
//  let randLast = Math.round(Math.random()* last.length)
//  document.getElementById("finalName").innerHTML = ("Your Wu-Tang name is: "+first[rand]+ " "+last[rand])
// }
//

// ["CONTROLLER", "WELL-THOUGHT-OF", "BLESSEDUPLEASANT", "BOSSMAN", "VANQUISHER", "BAD", "VENTURER", "HONORED", "CROOKED", "ALLIGATOR"]
