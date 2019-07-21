document.querySelector("button").addEventListener("click", function() {
  //gets selected value from questions 1 - 5 --> A,B,C,D, or E
  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;
  let q4 = document.querySelector('input[name="q4"]:checked').value;
  let q5 = document.querySelector('input[name="q5"]:checked').value;
  //add values to an array
  let myArray = [q1, q2, q3, q4, q5]
  //The function mode filters through the array and gets the most common string value selected
  //Function Code From:
  //https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
  function mode(array) {
    if (array.length == 0)
      return null;
    var modeMap = {};
    var maxEl = array[0],
      maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i];
      if (modeMap[el] == null)
        modeMap[el] = 1;
      else
        modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    // declaring the variable "name"
    // and max() takes one or more comma separated expressions as its parameter, with the largest (most positive) expression value used as the value of the property to which it is assigned (MDN)
    let name;
    if (maxEl === "A") {
      name = "Masta Man"
    } else if (maxEl === "B") {
      name = "Dirty Killa"
    } else if (maxEl === "C") {
      name = "GodFace"
    } else if (maxEl === "D") {
      name = "Inspecah Method"
    } else if (maxEl === "E") {
      name = "BZA"
    }
    alert("Your name is: " + name)

  }
  mode(myArray)
}) //end of code
