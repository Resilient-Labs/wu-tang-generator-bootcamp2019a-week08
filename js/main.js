const btn=document.querySelector('button')

let result=document.querySelector('h3')
let arrOne=['coast','wud','siz','shalla','diamond']
let arrTwo=['Rizza','Giraffe','Sphinx','Tical','Arizona']

btn.addEventListener('click',()=>{
  let topOneQ=document.querySelector(".topOneQ").value
  let topThreeQ=document.querySelector(".topThreeQ").value
  let topTwoQ=document.querySelector(".topTwoQ").value
  let topFourQ=document.querySelector(".topFourQ").value
  let topFiveQ=document.querySelector(".topFiveQ").value
  console.log(topOneQ)

let sumOne=Number(topOneQ)+Number(topTwoQ)
console.log(sumOne)
let sumTwo=Number(topThreeQ)+Number(topFourQ)+Number(topFiveQ)
let firstName=arrOne[sumOne]
let lastName=arrTwo[sumTwo]
result.textContent=`Your Wu-Tang Name Is ${firstName} ${lastName}`
console.log(firstName,lastName)

// fetch(`/api?word=${input}`)
// .then(res =>res.json())
// .then(response=>{
//   console.log(response)
// document.querySelector('h3').innerHTML=response.res

})

  // stringReveresed(input)
  // checkPalidrome(input)
  // console.log(input)
// })

// function stringReveresed(input){
// let reverse=input.split('').reverse().join('')
// result.appendChild(document.createTextNode(reverse))
// console.log(reverse)
//   return reverse
// }
//
// function checkPalidrome(input,reverse){
//   console.log(input)
//
//   if(input===stringReveresed(input)){
//     let mainElement=document.createElement('section')
//     let element=document.createElement('h4')
//     document.body.appendChild(mainElement)
//     element.appendChild(document.createTextNode('Is A Palindrome'))
//     mainElement.appendChild(element)
//     input.value=""
//     console.log(mainElement)
//
//   }else {
//     let mainElement=document.createElement('section')
//     let element=document.createElement('h4')
//     document.body.appendChild(mainElement)
//     element.appendChild(document.createTextNode('Is not a Palindrome'))
//     mainElement.appendChild(element)
// console.log('no')
//   }
// // if(str===)
// }
