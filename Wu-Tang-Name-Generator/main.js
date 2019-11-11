const btn= document.querySelector("button")
const wuName= document.querySelector(".wuTangName")
const wuNamesArr= ["Wicked Overlord","Mighty Genius", "Profound Samurai", "Wacko Wanderer", "Intellectual Dominator", "Leon Raise Hell"]

btn.addEventListener("click", ()=>{
const favColor = document.querySelector(".color").value
const favFood = document.querySelector(".food").value
const favDest = document.querySelector(".destination").value
const favPoke = document.querySelector(".pokemon").value
const favDrink = document.querySelector(".drink").value
const result = favColor*favFood*favDest*favPoke*favDrink

if(result<=42){
  wuName.innerHTML = `Your new name is ${wuNamesArr[0]}`
}else if(result>=43 && result<=84){
  wuName.innerHTML = `Your new name is ${wuNamesArr[1]}`
}else if(result>=85 && result<=126){
  wuName.innerHTML = `Your new name is ${wuNamesArr[2]}`
}else if(result>=127 && result<=168){
  wuName.innerHTML = `Your new name is ${wuNamesArr[3]}`
}else if(result>=169 && result<=210){
  wuName.innerHTML = `Your new name is ${wuNamesArr[4]}`
}else if(result>=210 && result<=243){
  wuName.innerHTML = `Your new name is ${wuNamesArr[5]}`
}
})
