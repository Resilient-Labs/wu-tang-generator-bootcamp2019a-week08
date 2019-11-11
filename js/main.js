

const btn=document.querySelector('button')

let result=document.querySelector('h3')


btn.addEventListener('click',()=>{
  let topOneQ = parseInt(document.querySelector(".topOneQ").value,10);
  let topThreeQ = parseInt(document.querySelector(".topThreeQ").value,10);
  let topTwoQ = parseInt(document.querySelector(".topTwoQ").value,10);
  let topFourQ = parseInt(document.querySelector(".topFourQ").value,10);
  let topFiveQ = parseInt(document.querySelector(".topFiveQ").value,10);

  let sum = topOneQ + topTwoQ + topThreeQ + topFourQ + topFiveQ;
  let product = topOneQ * topTwoQ * topThreeQ * topFourQ * topFiveQ;

  fetch(`/api?sum=${sum}&product=${product}`)
    .then(res =>res.json())
    .then(response=>{
      console.log(response)
      document.querySelector('h3').textContent = `${response.firstName} ${response.lastName}`;
  })

  // stringReveresed(input)
  // checkPalidrome(input)
  // console.log(input)
})

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
