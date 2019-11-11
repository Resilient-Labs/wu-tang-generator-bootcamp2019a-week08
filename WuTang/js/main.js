//wu tang
//Create a Wu-Tang Clan name generator.
//Present the user with 5 survey questions and based on those answers randomly generate their name.
//The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator). App should be served by a simple server


const button = document.querySelector("#btn")

btn.addEventListener('click', function(){
  getWuName()
})

function getWuName(){
  let quest1 = document.querySelector("#q1").value
  let quest2 = document.querySelector("#q2").value
  let quest3 = document.querySelector("#q3").value
  let quest4 = document.querySelector("#q4").value
  let quest5 = document.querySelector("#q5").value

  fetch(`/api?question=${quest1}${quest2}${quest3}${quest4}${quest5}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(res => {

          let wuNameResults = document.querySelector("#results")

          let arrFirstName = ['coaster','wud','siz','shalla','diamond']

          let arrLastName = ['rizza', 'grafiti', 'sphinx', 'tical', 'arizona']

          let sumOne = Number(quest1) + Number(quest2)
          let sumTwo = Number(quest3) + Number(quest4) + Number(quest5)

          let firstName = arrFirstName[sumOne]
          let lastName = arrLastName[sumTwo]

          let object = res.verified

          if(object === 'false'){
            console.log('no wu name')
            wuNameResults.textContent = `unable to provide wu name`
          }else{
            console.log('found wu name')
            wuNameResults.textContent = `${firstName} ${lastName}`
          }
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, we are unable to provide a Wu name for you. Please try again later.")
        });
  }
