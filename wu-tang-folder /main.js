const wuwuNames = ["Wicked Overload", "MONKEY CHILLY", "SAMURAI BITTER", "SIR BIBULOUS", "Mighty Genius", "Profound Samurai", "Wack Wanderer", "Intellectual Dominator", "Lord Key", "DESIGNER STRONG", "NINJA BIBULOUS", "LORD WANDERING"]
let btn = document.querySelector(".submitButton")

btn.addEventListener("click", () => {
let favColor = document.querySelector(".color").value
let favFood = document.querySelector(".food").value
let favDestination = document.querySelector(".destination").value
let favPoki = document.querySelector(".poki").value
let favDrink = document.querySelector(".drink").value
let result = favColor*favFood*favDestination*favPoki*favDrink
if (result < 260){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[0]}`
} else if (result < 520  && result >= 260 ){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[1]}`
} else if (result < 780 && result >= 520){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[2]}`
} else if (result < 1040 && result >= 780){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[3]}`
} else if(result < 1300 && result >= 1040){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[4]}`
} else if (result <= 1560 && result >=1300){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[5]}`
} else if (result <= 1820 && result >=1560){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[6]}`
}else if (result <= 2080 && result >=1820){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[7]}`
} else if (result <= 2340 && result >=2080){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[8]}`
} else if (result <= 2600 && result >=2340){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[9]}`
} else if (result <= 2860 && result >=2600){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[10]}`
} else if (result <= 3125 && result >=2860){
  document.querySelector(".result").innerHTML = `Your name is ${wuwuNames[11]}`
}
console.log(result)
})
