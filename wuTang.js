document.querySelector("button").addEventListener("click", function(){
  window.scrollTo(500, 0);
  //gets selected value from questions 1 - 5 --> A,B,C,D,E, or F
  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;
  let q4 = document.querySelector('input[name="q4"]:checked').value;
  let q5 = document.querySelector('input[name="q5"]:checked').value;
  //add values to an array
  let myArray = [q1,q2,q3,q4,q5]
  //function mode() filters through the array and gets the most common value selected
  //if there are two values most selected, function returns the first one found
  //code lines 13-30 from: https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
  function mode(array){
    if(array.length == 0)
    return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
      var el = array[i];
      if(modeMap[el] == null){
        modeMap[el] = 1;
      }else {
        modeMap[el]++;
      }
      if(modeMap[el] > maxCount){
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    //if most common selected value is ____, alert respective names
    var name=""
    if (maxEl === "A") {
      name = "Leonious Funk"
    }else if (maxEl === "B") {
      name = "Rougi on Rails"
    }else if (maxEl === "C") {
      name = "Ultimate Fightah"
    }else if (maxEl === "D") {
      name = "B-love-D"
    }else if (maxEl === "E") {
      name = "Ghostface Recruitah"
    }else if (maxEl === "F") {
      name = "Magic Makah"
    }
    document.querySelector('.welcome').innerHTML= "Welcome to the Clan:"
    document.querySelector('.result').innerHTML= name
  }
  //pass myArray into mode() function
  mode(myArray)
})
