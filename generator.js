// First thing was to form our question in html 
//( radio, drop , or text )... choose to do radio 
// made a button for the user to get the results of the
// name generator 
// need a fuction to where when 5 questions are answered 
// we get a random name 
// Combination in two array (first/last name )
//smiliar to winning combinations in tic tac toe 
//could use mathrandom or else if statments 

// first arrays with random first and last names 

let firstNames = ["Mastermind","Authority","Venturer","Wrecker","Breaker","Fiend","Fish","Love"]
let lastNames=["Invasive"," Awesome","Barbed"," Sinister"," Visible"," Excessive","Stinky","Bug"]
document.getElementById("submit").addEventListener("click",nameGenerator)


// our function to generate new name Game
function nameGenerator(e){
  e.preventDefault()


  /// else if statements to check how many yes are being marked
  // to make the random generator based on the yes being marked
  // use concat method to join both first and last name 
  // used &nsbp for space between the names 
  let yes = document.querySelectorAll(".si:checked").length
  if(yes === 0){
      newName =firstNames[0].concat('&nbsp',lastNames[5]);
  }else if(yes === 1){
      newName =firstNames[1].concat('&nbsp',lastNames[4]);

  }else if(yes === 2){
    newName =firstNames[2].concat('&nbsp',lastNames[3]);

  }else if(yes ===3){
   newName =firstNames[3].concat('&nbsp',lastNames[2]);

  }else if(yes === 4){
   newName =firstNames[4].concat('&nbsp',lastNames[1]);

  }else{
   newName =firstNames[5].concat('&nbsp',lastNames[0]);


  }

document.getElementById("resultName").innerHTML = ("Your New Name is " + newName )
}
