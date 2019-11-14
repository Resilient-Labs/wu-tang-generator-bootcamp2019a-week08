const output = document.querySelector('.return')

const submitBtn = document.querySelector('.submit').addEventListener('click', function() {
  let question1 = document.querySelector('input[name="question1"]:checked').value;
  let question2 = document.querySelector('input[name="question2"]:checked').value;
  let question3 = document.querySelector('input[name="question3"]:checked').value;
  let question4 = document.querySelector('input[name="question4"]:checked').value;
  let question5 = document.querySelector('input[name="question5"]:checked').value;

  let questionArray = [question1, question2, question3, question4, question5]

  function mode(questionArray) {
    if (questionArray.length == 0)
      return null;
    var modeMap = {};
    var maxEl = questionArray[0],
      maxCount = 1;
    for (var i = 0; i < questionArray.length; i++) {
      var el = questionArray[i];
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
  mode(questionArray)
})
