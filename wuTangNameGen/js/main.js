const button = document.querySelector('button')
button.addEventListener('click', createName )

function createName(){
  let value0 = parseInt(document.querySelector('.animal').value)
  let value1 = parseInt(document.querySelector('.gameConsole').value)
  let value2 = parseInt(document.querySelector('.iceCream').value)
  let value3 = parseInt(document.querySelector('.cartoon').value)
  let value4 = parseInt(document.querySelector('.cereal').value)

  fetch(`/api?input=${value0}${value1}${value2}${value3}${value4}`)
    .then(response => response.json())
    .then((data) => {
       document.querySelector('#firstName').innerHTML = data.wutangname1
       document.querySelector('#lastName').innerHTML = data.wutangname2

        console.log(data);
    });
};
