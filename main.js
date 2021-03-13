document.querySelector("button").addEventListener('click', odb)

let firstNameArr = ["Big", "Buddah"," Cheese", "Dirty", "Dragon", "Foolish", "Gucci","Ignint", "Power", "Prince","Professional"," Samurai", "Smoke", "Tha", "True"]
    
let sirNameArr = ["Inspectah", "Killah", "Lil", "Menace","Method", "Ol"]
    
// function mapCC(x, in_min, out_min, out_max){
//     return(x-in_min) * (out_max- out_min) / (in_max- in_min) + out_min
// }


function inputs(){
    // let name =(document.querySelector('.name').value)
    let questTwo = Number(document.querySelector('.album').value)
    let questThree =Number(document.querySelector('.weapon').value)
    let questFour = Number(document.querySelector('.place').value)
    let sum1 = (questTwo + questThree + questFour) % 3



    let questFive =Number(document.querySelector('.hero').value)
    let questSix =Number(document.querySelector('.better').value)
    let sum2 = (questFive + questSix) % 2

    return [sum1, sum2]
}
function odb(){
    let valueArr = inputs()

    let name1 = firstNameArr[valueArr[0]]
    let name2 = sirNameArr[valueArr[1]]
    
   document.querySelector('.newName').innerText =`${name1} ${name2}`
}
//     let odb =[questOne, questTwo, questThree, questFour, questFive]
//     let first = 0
//     let second = 0
//     odb.forEach((item, i) => {
//         (item ===1) ? first+=1: second+=1
//     })
// } 
// console.log(odb)


