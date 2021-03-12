document.querySelector(".submit").addEventListener("click", generate)

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
}//end function generate

//function to assign names
//names:
// Mighty Contender
// Intellectual Assassin
// Thunderous Poet
// Intrepid Desperado
// Quiet Titan
// Dynamic Observer
// Profound Overlord
// Midnight Menace
// Phantom Warlock
// Masterful Wizrd
// Unlucky Madman
// B-Loved Conquerer
// Wild Mercenary
// Wicked Hunter
// Devious Spektor
