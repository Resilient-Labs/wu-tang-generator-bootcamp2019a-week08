//User will answer questions
//Based on question answers you'll get a Wu Tang name
let btn = document.querySelector('button')

btn.addEventListener("click",(e)=>{
  e.preventDefault()
  let name = document.querySelector(".name")
  let qOne = document.querySelector('input[name=food]:checked').value;
  let qTwo = document.querySelector('input[name=vaca]:checked').value;
  let qThree = document.querySelector('input[name=animal]:checked').value;
  let qFour = document.querySelector('input[name=movie]:checked').value;
  let qFive = document.querySelector('input[name=color]:checked').value;
  let total = parseInt(qOne) + parseInt(qTwo) + parseInt(qThree) + parseInt(qFour) + parseInt(qFive);
  if (total === 25){
      name.innerHTML = "Big Tank"
  }else if (total >= 20){
      name.innerHTML = "Rek Won"
  }else if (total >= 15){
      name.innerHTML = "Chief KZA"
  }else if (total >= 10){
      name.innerHTML = "Lyrical Killer"
  }else{
      name.innerHTML = "Ol\' Dirty Wanksta"
  }
})
