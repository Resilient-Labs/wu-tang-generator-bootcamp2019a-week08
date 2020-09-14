let radios = document.querySelectorAll('.radios')
let summer = ['Big', 'Cheese', 'Tha', 'Master']
let fall = ['Ol', 'Dirty', 'Tha', 'Prince']
let winter = ['Lil', 'Gucci', 'Tha', 'Smoke']
let spring = ['Ignint', 'Dragon', 'Tha', 'Power']
let userName = document.querySelector('#userName');
let button = document.querySelector('#submitBtn')
let form = document.querySelector('.form');
let display = document.querySelector('#display')

let test = document.querySelector('#test')
let test1 = []





radios.forEach(radio => {

  radio.addEventListener('click', () => {
    test1.push(radio.value);
  })

})


button.addEventListener('click', (e) =>{
  e.preventDefault()
  let response = {
    season: test1[0],
    answers: test1,
    userName: userName.value
  };

    fetch(`/buildName`, {
      method: 'POST',
      body: JSON.stringify(response),
    })
    .then(response => response.json())
    .then(data => display.innerHTML = data)

    .catch((error) => {
      console.error('Error:', error);
    });

  console.log(test1);
  console.log(userName.value)

})
