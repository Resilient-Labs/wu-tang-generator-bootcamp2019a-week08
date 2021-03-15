document.querySelector(".submit").addEventListener("click", generate)
document.querySelector(".clear").addEventListener("click", ()=>{
  location.reload()
})

let pointsQ1 = 0
let pointsQ2 = 0
let pointsQ3 = 0
let pointsQ4 = 0
let pointsQ5 = 0


function generate(){
    let ques1Res = document.getElementsByName('ques1')
    let ques2Res = document.getElementsByName('ques2')
    let ques3Res = document.getElementsByName('ques3')
    let ques4Res = document.getElementsByName('ques4')
    let ques5Res = document.getElementsByName('ques5')



    for(i =0; i<ques1Res.length; i++){
      if(ques1Res[i].checked){
        pointsQ1 += parseInt(ques1Res[i].value)
      }
      }
    for(i =0; i<ques2Res.length; i++){
      if(ques2Res[i].checked){
        pointsQ2 += parseInt(ques2Res[i].value)
      }
      }
    for(i =0; i<ques3Res.length; i++){
      if(ques3Res[i].checked){
        pointsQ3 += parseInt(ques3Res[i].value)
      }
      }
    for(i =0; i<ques4Res.length; i++){
      if(ques4Res[i].checked){
        pointsQ4 += parseInt(ques4Res[i].value)
      }
      }
    for(i =0; i<ques5Res.length; i++){
      if(ques5Res[i].checked){
        pointsQ5 += parseInt(ques5Res[i].value)
      }
      }
      let userPoints = pointsQ1+pointsQ2+pointsQ3+pointsQ4+pointsQ5
      console.log(`Total = ${userPoints}`);

        if(userPoints<= 5 ){
          document.querySelector("h2").innerText = "Quiet Titan"
        }else if(userPoints >5 && userPoints <=10){
          document.querySelector("h2").innerText = `You are: \n Thunderous Poet`
        }else if(userPoints >10 && userPoints <=15){
          document.querySelector("h2").innerText = `You are: \n Phantom Warlock`
        }else if(userPoints >15 && userPoints <=20){
          document.querySelector("h2").innerText = `You are: \n B-Loved Conquerer`
        }else if(userPoints >20 && userPoints <=25){
          document.querySelector("h2").innerText = `You are: \n Mighty Contender`
        }else if(userPoints >25 && userPoints <=30){
          document.querySelector("h2").innerText = `You are: \n Wicked Hunter`
        }else if(userPoints >30 && userPoints <=35){
          document.querySelector("h2").innerText = `You are: \n Profound Overlord`
        }else if(userPoints >35 && userPoints <=40){
          document.querySelector("h2").innerText = `You are: \n Dynamic Observer`
        }else if(userPoints >40 && userPoints <=45){
          document.querySelector("h2").innerText = `You are: \n Intellectual Assassin`
        }else if(userPoints >45 && userPoints <=50){
          document.querySelector("h2").innerText = `You are: \n Unlucky Madman`
        }else if(userPoints >50 && userPoints <=55){
          document.querySelector("h2").innerText = `You are: \n Wild Mercenary`
        }else if(userPoints >55 && userPoints <=60){
          document.querySelector("h2").innerText = `You are: \n Masterful Wizard`
        }else if(userPoints >60 && userPoints <=65){
          document.querySelector("h2").innerText = `You are: \n Midnight Menace`
        }else if(userPoints >65 && userPoints <=70){
          document.querySelector("h2").innerText = `You are: \n Interepid Desperado`
        }else{
          document.querySelector("h2").innerText = `You are: \n Devious Spektor`
        }


}//end function generate
