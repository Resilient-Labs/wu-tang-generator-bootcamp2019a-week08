//House Moses: Kim, Carlosalberto, Farrah and Gabriel
let radios = document.querySelectorAll('.radioSelect')
let summer = ['Big', 'Cheese', 'Tha', 'Master']
let fall = ['Ol', 'Dirty', 'Tha', 'Prince']
let winter = ['Lil', 'Gucci', 'Tha', 'Smoke']
let spring = ['Ignint', 'Dragon', 'Tha', 'Power']
let userName = document.querySelector('#userName');
let button = document.querySelector('#submitBtn')
let form = document.querySelector('.form');
let display = document.querySelector('#display')

// let username = userName.value
let ansArr = []
//empty array for user answers

radios.forEach(radio => {

  radio.addEventListener('click', () => {
    ansArr.push(radio.value);
  })
// eventlistener fot radio buttons
})


button.addEventListener('click', (e) =>{
  e.preventDefault()
  let response = {
    season: ansArr[0],
    answers: ansArr,
    userName: userName.value
  };
// answers in array
    fetch(`/buildName`, {
      method: 'POST',
      body: JSON.stringify(response),
    })
    .then(response => response.json())
    .then(data => display.innerHTML = data)

    .catch((error) => {
      console.error('Error:', error);
    });

  console.log(ansArr);
  console.log(userName.value)

})

