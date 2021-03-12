// Tamika and Khorally helped me with this
let firstName = ["No ","Queens","Shadow","Stoop"]
let lastName = ["Cappa","Katana","OG","Hokage"]

document.querySelector("button").addEventListener("click", first)
document.querySelector("button").addEventListener("click", last)

function first(){
    let uno = document.querySelectorAll("#uno")
    let sum = 0
    for( let i =0; i < uno.length ; i++){
        sum += parseInt(uno[i].value)
    }
    let answer = Math.round(sum/uno.length)
    document.getElementById("first").innerText =firstName[answer]
}

function last(){
    let dos = document.querySelectorAll("#dos")
    let sum2 = 0
    for( let i =0; i < dos.length ; i++){
        sum2 += parseInt(dos[i].value)
    }
    let answer2 = Math.round(sum2/dos.length)
    document.getElementById("second").innerText =lastName[answer2]

}