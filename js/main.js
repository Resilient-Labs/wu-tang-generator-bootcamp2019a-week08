const resetBtn = document.querySelector('.reset')
const names = [
"Golden Grip",
"Killa Donk",
"Soul Rippa",
"Savage Monk",
"X-God",
"Iron Bars",
"Silva Tongue",
"Shogunz Assasin",
"16 Chamber Kid",
"Shaolin Slaya",
"Buddha Bastard",
"Cypher Deus",
"Star-Blizzer",
"Deadly Diction",
"Seventh Sun",
"Drunken Dictator"
]

let holdValue = [];
let result = null;
let option = 0;

const answers = document.querySelectorAll('.answer')
for(answer of answers){
  answer.addEventListener('click', getName)
  console.log(answer)
}

function getName(item){
  console.log(item)
  option = item.target
  console.log(option)
  holdValue.push(parseInt(option.value))

  console.log('hello')
  console.log(holdValue)
  console.log(holdValue.length)
  document.querySelector('button').addEventListener('click', getResponse)
  function getResponse(){
    if(holdValue.length === 5){
      let totalSum = holdValue.reduce(function(sum, current){
        return sum + current;
      });
      console.log(totalSum)

      if(totalSum == 5 ){
        result = names[0]
        console.log(result)
      } else if(totalSum == 6 ){
        result = names[1]
      } else if(totalSum == 7){
        result = names[2]
      } else if(totalSum == 8){
        result = names[3]
      } else if(totalSum == 9){
        result = names[4]
      } else if(totalSum == 10){
        result = names[5]
      } else if(totalSum == 11){
        result = names[6]
      } else if(totalSum == 12){
        result = names[7]
      } else if (totalSum == 13){
        result = names[8]
      } else if(totalSum == 14){
        result = names[9]
      } else if(totalSum == 15){
        result = names[10]
      } else {
        result = 'incorrect input, try again!'
      }
        document.querySelector('#results').innerText = result
    }
  }
}

resetBtn.addEventListener('click', resetGenerator)

function resetGenerator(){
  console.log('hi')
  holdValue = [];
  console.log(holdValue)
  result = null;
  option = 0
  document.querySelector('#results').innerText = ''
  for(answer of answers){
    answer.checked = false;
    console.log(answer.checked)
  }
}
