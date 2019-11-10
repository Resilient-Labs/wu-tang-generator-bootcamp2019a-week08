let arrayOfNames = ["Wicked Overlord","Mighty Genius","Profound Samurai","Wacko Wanderer","Intellectual Dominator","Terrible Toaster"];
document.querySelector("button").onclick= ()=>{
  let color = Number(document.querySelector(".color").value);
  let food = Number(document.querySelector(".food").value);
  let dest = Number(document.querySelector(".destination").value);
  let pokemon = Number(document.querySelector(".pokemon").value);
  let rapper = Number(document.querySelector(".rapper").value);
  let result = color+food+dest+pokemon+rapper;
  if(result<=6){
    document.querySelector("h2").textContent= `Your Wu-Tang name is: ${arrayOfNames[0]}`;
  }else if (result<=8) {
    document.querySelector("h2").textContent= `Your Wu-Tang name is: ${arrayOfNames[1]}`;
  }else if (result<=10) {
    document.querySelector("h2").textContent= `Your Wu-Tang name is: ${arrayOfNames[2]}`;
  }else if (result<=12) {
    document.querySelector("h2").textContent= `Your Wu-Tang name is: ${arrayOfNames[3]}`;
  }else if (result<=14) {
    document.querySelector("h2").textContent= `Your Wu-Tang name is: ${arrayOfNames[4]}`;
  }else if (result<=15) {
    document.querySelector("h2").textContent= `Your Wu-Tang name is: ${arrayOfNames[5]}`;
  }
};
