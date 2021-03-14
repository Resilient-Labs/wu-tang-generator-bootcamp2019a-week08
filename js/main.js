document.querySelector('.submit').addEventListener('click', clicky)

let names = ['Wheelin Flat Penny','Free Dealing Lung']
const response = document.querySelector('.response')

function clicky(element) {
  let value1 = Number(document.querySelector('.option-1').value)
  let value2 = Number(document.querySelector('.option-2').value)
  let value3 = Number(document.querySelector('.option-3').value)
  let value4 = Number(document.querySelector('.option-4').value)
  let value5 = Number(document.querySelector('.option-5').value)
  if(value1 !== -1 && value2 !== -1 && value3 !== -1 && value4 !== -1 && value5 !== -1) {
    response.innerText = names[(value1+value2+value3+value4+value5)%2]
  } else {
    response.innerText = 'You gotta fill everything in...'
  }
}
