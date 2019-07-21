//How many yesses would determine the name
//count the number of yes respnses
// the number of yes would determine the name ex. 1 yes = name1, 2 yes = name2
//Step One get the value of all the buttons from the DOM
//
// document.getElementById('submit').addEventListener("click", () =>{
// console.log(document.getElementByName(answer2).value)
//
//
// })

// let answerOne = document.getElementById('yes1').onclick = function() {
//     // access properties using this keyword
//     if ( this.checked ) {
//         // if checked ...
//         submit( this.value );
//     } else {
//         // if not checked ...
//     }
// };



document.getElementById('submit').addEventListener('click',() =>{

   var oRadio = document.querySelectorAll('.positve');

   let yes = []

   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)

         yes.push(oRadio[i].value);
      }
      generateName(yes)

   })



function generateName(value){
  console.log(value)
  let names = ["Fetch Fleek","Bootleg Boolean", "SQL Squad","Konstructor Kush","API Plug","Object OG"]
  if(value.length - 1 === 0){
    console.log(names[1])
    document.getElementById("generatedName").innerHTML = names[0]

  }else if(value.length - 1 === 1){
    console.log(value.length)
    document.querySelector("#generatedName").innerHTML = names[1]
  }else if(value.length -1 === 2){

    document.querySelector("#generatedName").innerHTML = names[2]
  }else if (value.length -1 === 3){

    document.querySelector("#generatedName").innerHTML = names[3]
  }else if(value.length - 1 === 4){

    document.querySelector("#generatedName").innerHTML = names[4]

  }else{
    //zero
    document.querySelector("#generatedName").innerHTML = [5]
  }
}



//
//    return '';
// }


// document.getElementById('submit').addEventListener('click',() =>{
// document.getElementById('yes2').onclick = function() {
//     // access properties using this keyword
//     if ( this.checked ) {
//         // if checked ...
//       let val = this.value;
//       console.log(val)
//     } else {
//         // if not checked ...
//     }
// };
// })
