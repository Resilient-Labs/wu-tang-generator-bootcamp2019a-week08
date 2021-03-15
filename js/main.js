//name generator//
//help from rodas of house cass//

//wants if same combo of answers, you get the same name

/* Pseudocode
need 11 names
sum of lowest value combo = 30
sum of highest value combo = 40
*/

let selectedArray = []
let selectedInput = 0 //this represents the value of the selected input option that you clicked on
const inputs = document.querySelectorAll('input') //gives array of all the inputs//

document.querySelector('.submit').addEventListener('click',getArraySum)
document.querySelector('.reset').addEventListener('click',reset)

let message = document.querySelector(".results")

//for of, loop  (great for going thru everything in the array)//
for (input of inputs){
  input.addEventListener('click',getName) //please add an eventListener to all elements (in this case inputs or candy) of the array//
  console.log(input.value)
}

function getName(item){
  console.log(item)
  selectedInput = item.target.value  //now that we have our value (from the targeted clicked on item), we want to create an empty array to hold all the values
  console.log(selectedInput) //showed us all the value of that specific selectedInput that got clicked on
  selectedArray.push(parseInt(selectedInput))//pushing (adding) selectedinput into the selectedArray~ WE ADDED  parseInt to turn the values from string to numbers//

}
  console.log(selectedArray)

function getArraySum(){
  const reducer = (accumulator, currentValue) => accumulator + currentValue  //from mdn//
  let totalArraySum = selectedArray.reduce(reducer)
  console.log(selectedArray.reduce(reducer)) //works! shows the sum of the array//

  if (totalArraySum === 30){
    message.innerText = 'Your new name is Alex'
  }
  else if (totalArraySum === 31){
    message.innerText = 'Your new name is Bob'
  }
  else if (totalArraySum === 32){
    message.innerText = 'Your new name is Carl'
  }
  else if (totalArraySum === 33){
    message.innerText = 'Your new name is Daphne'
  }
  else if (totalArraySum === 33){
    message.innerText = 'Your new name is Ellen'
  }
  else if (totalArraySum === 34){
    message.innerText = 'Your new name is Fiona'
  }
  else if (totalArraySum === 35){
    message.innerText = 'Your new name is Gary'
  }
  else if (totalArraySum === 36){
    message.innerText = 'Your new name is Harry'
  }
  else if (totalArraySum === 37){
    message.innerText = 'Your new name is Issac'
  }
  else if (totalArraySum === 38){
    message.innerText = 'Your new name is Jim'
  }
  else if (totalArraySum === 39){
    message.innerText = 'Your new name is Kai'
  }
  else if (totalArraySum === 40){
    message.innerText = 'Your new name is Liam'
  }else{
    message.innerText = 'ERROR! You are too extra. Please reset and play again.'
  }


}
//conditionals to get names//

function reset(){
  selectedInput = 0
  selectedArray = []
  message.innerText = " "

  //reset loop//
  for (input of inputs){
    input.checked = false //magically removes blue dots to unselect inputs
  }
}
