// worked with gardner gang: Wade, Dashlin, Tanecia, Brian

document.querySelector('button').addEventListener('click', convert)

//get the names, aka two different possibilities
// questions = 1 or 2
function grabValues(){
    let q1 = Number(document.querySelector('.q1').value)
    let q2 = Number(document.querySelector('.q2').value)
    let q3 = Number(document.querySelector('.q3').value)
    let q4 = Number(document.querySelector('.q4').value)
    let q5 = Number(document.querySelector('.q5').value)


    // note: this requires that you have exactly 32 options
    // each input represents a binary number because it has two choices
    // 2^5 is 32 so with this math, we can 'search' for any number in the array
    sum1 = (q5 * 16) + (q4 * 8) + (q3 * 4) + (q2 * 2) + q1
    // random gumbo one to ensure that we don't always pick the same index for both names
    sum2 = (q5 * 16) + (q1 * 8) + (q1 * 4) + (q3 * 2) + q4 
    return [sum1, sum2]
}

const firstNameArr = [
    `Bitter`,
    `Buttery`,
    `Compassionate`,
    `Cheese`,
    `Dirty`,
    `Dangerous`,
    `Fierce`,
    `Foolish`,
    `Grimey`,
    `Gucci`,
    `Ignint`,
    `Insane`,
    `Irresistible`,
    `Lil`,
    `Lucky`,
    `Mad`,
    `Menacing`,
    `Nasty`,
    `Ol'`,
    `Passionate`,
    `Smoke`,    
    `Saucy`,
    `Salty`,
    `Shark`,
    `Slippery`,
    `Thicc`,
    `Tha`,
    `Tuff`,
    `Unstable`,
    `Unwashed`,
    `Violent`,
    `Wet`    
]

const lastNameArr = [
    `Bro`,
    `Bofa`,
    `Cat`,
    `Cheese`,
    `Cyclist`,
    `Dan`,
    `Degenerate`,
    `Dragon`,
    `Dog`,
    `Goober`,
    `Goon`,
    `Hammer`,
    `Inspectah`,
    `Killah`,
    `Masta`,
    `Menace`,
    `Method`,
    `Monster`,
    `Power`,
    `Punk`,
    `Prince`,
    `Rat`,
    `Roaster`,
    `Samurai`,
    `Son`,
    `Spice`,
    `Terror`,
    `Tornado`,
    `Vandal`,
    `Wanderer`,
    `Willy`,
    `Worm`
]

function convert(){
    const valArr = grabValues()
    const firstName = firstNameArr[valArr[0]]
    const lastName = lastNameArr[valArr[1]]
    console.log(valArr)

    alert(`${firstName} ${lastName}`)
}


