document.querySelector('.submit').addEventListener('click', getResults)


let ageInput = ['Old','New','Fresh']
let payInput = ['romain','bank','spice']
let foodInput = ['Mise','Dodg','Grin']
let faceInput = ['ter','er','der']
let animalInput = ['.G','.A','.R']



function getResults() {
  let age = document.querySelector('.age').value
  let pay = document.querySelector('.pay').value
  let food = document.querySelector('.food').value
  let face = document.querySelector('.face').value
  let animal = document.querySelector('.animal').value

  let names = Number(age) + Number(pay) + Number(food) + Number(face) + Number(animal)
  let fullName = names

  document.querySelector('h3').innerText = ageInput[fullName] + " " + payInput[fullName]+ " " + foodInput[fullName] +
   faceInput[fullName] + animalInput[fullName]
}
