document.querySelector('button').addEventListener('click', convert)
let newName = document.querySelector('.sideContent h2')
let firstNameArr = ['Big', 'Dirty', 'Inspectah', 'Foolish ', 'Ignint']
let secondNameArr = ['Killah', 'Method', 'Wanderer', 'Dragon', 'Masta']
let MiddleNameArr = ['Lil', 'Tha', 'Gucci', 'Buddah', 'Ol']

//get the names of all the possibilities
function grabValues(){
  let qOne = Number(document.querySelector('.qOne').value)
  let qTwo = Number(document.querySelector('.qTwo').value)
  let qThree = Number(document.querySelector('.qThree').value) //9
  let sum1 = (qOne + qTwo + qThree) % 3
  
  let qFour = Number(document.querySelector('.qFour').value)
  let qFive = Number(document.querySelector('.qFive').value)
  let sum2 = (qFour + qFive) % firstNameArr.length
  
  let qSix = Number(document.querySelector('.qSix').value)
  let qSeven = Number(document.querySelector('.qSeven').value)
  let sum3 = (qSix + qSeven) % 3
  
  return [sum1, sum2, sum3]
}

//function that gets the values and use them in an array
function convert(){
  let valArr = grabValues()
  let userName = document.querySelector('#userName').value
  
  let firstName = firstNameArr[valArr[0]]
  let secondName = secondNameArr[valArr[1]]
  let middleName = MiddleNameArr[valArr[2]]

  if(userName === ''){
    newName.innerText = `Your name is ${firstName} ${middleName} ${secondName}`
  }
  else {
    newName.innerText = `${userName} is now know as ${firstName} ${middleName} ${secondName}`
  }
}
