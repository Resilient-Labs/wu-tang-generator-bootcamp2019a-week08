//sam helped with my code

document.querySelector('button').addEventListener('click', generateName)

let nameArr = ['hillary', 'will', 'carlton', 'uncle phil', 'ashley']


function generateName() {
  console.log('hi');

  let option = document.querySelectorAll('.option')
  let sum = 0
  for (let i = 0; i < option.length; i++) {
    sum += parseInt(option[i].value)
  }
  let answer = Math.round(sum / option.length)
  document.querySelector('#result').innerText = nameArr[answer]
  // if (option === '1') {
  //   document.querySelector('#result').innerText = sum
  //
  // }
}
