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
