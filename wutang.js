document.querySelector("form").addEventListener("submit", wuGen)

function wuGen (e){
  e.preventDefault()
  let wuTravel = document.querySelectorAll(".travel:checked")[0].value;
  let wuAnimal = document.querySelectorAll(".animal:checked")[0].value;
  let wuChoice = document.querySelectorAll(".choice:checked")[0].value;
  let wuColor = document.querySelectorAll(".color:checked")[0].value;
  let wuStore = document.querySelectorAll(".store:checked")[0].value;

  class Choices {
    constructor(travel, animal, choice, color, store){
      this.travel = parseInt(travel),
      this.animal = parseInt(animal),
      this.choice = parseInt(choice),
      this.color = parseInt(color),
      this.store = parseInt(store)
    }
  }
  let wuName = new Choices(wuTravel, wuAnimal, wuChoice, wuColor, wuStore);

  let total = 0;
  Object.values(wuName).forEach(num => {
    total = total+num;
  })
  document.querySelector("span").textContent = checkResult(total);
}

  function checkResult(total){
    if (total === 5){
      return "Coders de Zilient"
    }else if(total === 6){
      return "Dev Oops"
    }else if(total === 7){
      return "Rascal Sacarstic"
    }else if(total === 8){
      return "Occulist Bitter"
    }else if(total === 9){
      return "Ninja Resilient"
    }else if(total === 10){
      return "Inspector Check"
    }else{
      return "You're not wu-Material"
    }
  }














