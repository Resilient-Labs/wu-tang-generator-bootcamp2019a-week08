

const wu = {
  answers: [...document.querySelectorAll("select")],
  score: 0,
  getScore(){
    wu.answers.forEach((answer) =>{
      wu.score += parseInt(answer.value)
    })
  },
  getName(score){
    fetch(`/api?answer=${score}`)
    .then(response => response.json())
    .then(data =>{
      document.getElementById("result").innerHTML = data
    })
  },
  click(){
    wu.getScore()
    wu.getName(wu.score)
    wu.score= 0
  }
}
document.querySelector("button").onclick = wu.click;
