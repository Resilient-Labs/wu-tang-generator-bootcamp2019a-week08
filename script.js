let btn = document.querySelector('button')
let first = ['lil', 'young', 'childish', 'tiny', '69', 'hot', 'puny', 'big', 'purp', 'yung']
let second = ['big', 'easy', 'ez', 'fist', 'gambino', 'gunner', 'kool', 'playa', 'dawg', 'Slingshot', 'skinny', 'stubbs', 'pimp']
let result = document.querySelector('.result')
btn.addEventListener('click', () => {
  let color = document.querySelector('input[name = color]:checked').value
  let city = document.querySelector('input[name = city]:checked').value
  let season = document.querySelector('input[name = season]:checked').value
  let house = document.querySelector('input[name = house]:checked').value
  let animal = document.querySelector('input[name = animal]:checked').value
  let one = Number(color) + Number(city)
  let two = Number(season) + Number(house) + Number(animal)
  result.innerHTML = `${first[one]} ${second[two]}`
})
