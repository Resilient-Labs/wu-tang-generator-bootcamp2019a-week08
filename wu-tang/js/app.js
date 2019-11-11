const output = document.querySelector('.return')

const submitBtn = document.querySelector('.submit').addEventListener('click', function() {
  let q1 = document.querySelector('input[name="question1"]:checked').value;
  let q2 = document.querySelector('input[name="question2"]:checked').value;
  let q3 = document.querySelector('input[name="question3"]:checked').value;
  let q4 = document.querySelector('input[name="question4"]:checked').value;
  let q5 = document.querySelector('input[name="question5"]:checked').value;

  let myArray = [q1, q2, q3, q4, q5]

  function mode(myArray) {
    if (myArray.length == 0)
      return null;
    var modeMap = {};
    var maxEl = myArray[0],
      maxCount = 1;
    for (var i = 0; i < myArray.length; i++) {
      var el = myArray[i];
      if (modeMap[el] == null)
        modeMap[el] = 1;
      else
        modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    let wuname;
    if (maxEl === "a") {
      wuname = "Ghostface Nodeface"
    } else if (maxEl === "b") {
      wuname = "Ol' Dirty HTML"
    } else if (maxEl === "c") {
      wuname = "Method Method"
    } else if (maxEl === "d") {
      wuname = "Mongo Dirty Bastard"
    }
    output.innerHTML = `Welcome to the clan, you shall now be known as <br>${wuname}`
  }
  mode(myArray)
})
