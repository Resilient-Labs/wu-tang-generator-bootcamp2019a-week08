// house hayden helped me with this
document.querySelector('button').addEventListener('click' , findName)
const animal = document.getElementById('animal')
const color = document.getElementById('color')
const food = document.getElementById('food')
const anime = document.getElementById('anime')
const relax = document.getElementById('relax')

function findName(){
    const names = ['DJ Wagsta','Adonis Morissette','DJ Yung Educated But Unemployed','Lil Caesars Pizza','20,000 Chainz Unda Da C','Kelly Clarkson','Xponent','Ghostface Pacifist','Autocorrekt','Yung Urban Professional','Moulin Rogue','Urban Outfitted'];
    let sumOfOptions = Number(animal.value) + Number(color.value) + Number(food.value) + Number(anime.value) + Number(relax.value),
    yourName;
    switch(sumOfOptions) {
        case 55: yourName = names[0]; break;
        case 56: yourName = names[1]; break;
        case 57: yourName = names[2]; break;
        case 58: yourName = names[3]; break;
        case 59: yourName = names[4]; break;
        case 60: yourName = names[5]; break;
        case 61: yourName = names[6]; break;
        case 62: yourName = names[7]; break;
        case 63: yourName = names[8]; break;
        case 64: yourName = names[9]; break;
        case 65: yourName = names[10]; break;
        case 66: yourName = names[11]; break;
        case 67: yourName = names[1]; break;
        case 68: yourName = names[2]; break;
        case 69: yourName = names[3]; break;
        case 70: yourName = names[4]; break;
        case 71: yourName = names[5]; break;
        case 72: yourName = names[6]; break;
        case 73: yourName = names[7]; break;
        case 74: yourName = names[8]; break;
        case 75: yourName = names[9]; break;
    }
    document.querySelector('.results').innerText = yourName;
    // console.log(findName)
}