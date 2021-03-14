//sam helped during community and i passed the info onto my house

document.querySelector('button').addEventListener('click', generateFirstName)
document.querySelector('button').addEventListener('click', generateLastName)

let firstNameArr = ['Method', 'Snoop Doggy', 'Gambino', 'Uncle', 'Spooked']
let lastNameArr = ['Man', 'Drizzle', 'Gunna', 'Murda Snacks', 'Jackson']


function generateFirstName() {
  console.log('hi');
  let option = document.querySelectorAll('.option')
  let sum = 0
  for (let i = 0; i < option.length; i++) {
    sum += parseInt(option[i].value)
  }
  let answer = Math.round(sum / option.length)
  document.querySelector('#first').innerText = firstNameArr[answer]
}

function generateLastName() {
  console.log('hi');
  let option2 = document.querySelectorAll('.option2')
  let sum2 = 0
  for (let i = 0; i < option2.length; i++) {
    sum2 += parseInt(option2[i].value)
  }
  let answer2 = Math.round(sum2 / option2.length)
  document.querySelector('#last').innerText = lastNameArr[answer2]
}
