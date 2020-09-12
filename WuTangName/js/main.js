// worked with house cass
// Rahma, Ibrahim,Shawn, Carolin

// myfunction is being called on the index html
function myFunction() {
  console.log("button clicked")
  // grabbing the id from html
  const colorPicked = document.getElementById('color').value
  const petPicked = document.getElementById('pet').value
  const moviePicked = document.getElementById('movie').value

// fetch data from the server
  fetch(`/api?choices=${colorPicked}${petPicked}${moviePicked}`)
    .then(response => response.json())
    .then((data) => {
     
      document.querySelector('p').innerHTML = `oooh what a fantastic choice that is ${data}`
    });

}
