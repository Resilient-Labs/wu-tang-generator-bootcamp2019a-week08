const firstname = [
    "Hush",
    "Phantom",
    "No Face",
    "G-lock",
    "Tec",
    "Bakey",
    "King"
]
const lastname = [
    "Menace",
    "Overlord",
    "Killah",
    "Rizzle",
    "Lurkin",
    "Tokyo",
    "Cancoon",
    "Coop",
    "Inspect",
    "Sweepin",
    "Ronnie",
    "Skuna",
    "Da God",
    "Oxx",
    "Snow",
    "Jones",
    "Phonk",
    "Dont Miss",
    "Kaiser",
    "Gassin",
    "Mosh"
]
const one = document.querySelector('.first');
      two = document.querySelector('.second'),
      three = document.querySelector('.third'),
      four = document.querySelector('.fourth'),
      five = document.querySelector('.fifth');

document.querySelector('button').addEventListener('click', ()=> {
    let wutangFirstName = ""
    let wutangLastName = ""
    let sum = parseInt(one.value) + parseInt(two.value) + parseInt(three.value) + parseInt(four.value) + parseInt(five.value)
    switch(sum){
        case 11: 
        case 13:
        wutangFirstName = firstname[0]
        break;
        case 7:
        case 14:
        case 21:
        wutangFirstName = firstname[2]
        break;
        case 5:
        case 10:
        case 15:
        case 20:
        case 25:
        wutangFirstName = firstname[1]
        break;
        case 6:
        case 9:
        case 12:
        case 18:
        case 24:
        wutangFirstName = firstname[3]
        break;
        case 8:
        case 16:
        case 22:
        wutangFirstName = firstname[4]
        break;
        case 17: 
        case 19:
        wutangFirstName = firstname[5]
        break;
        case 23:
        wutangFirstName = firstname[6]
        break;
    }
    switch(sum){
        case 5:
        wutangLastName = lastname[0];
        break; 
        case 6:
        wutangLastName = lastname[1];
        break; 
        case 7:
        wutangLastName = lastname[2];
        break; 
        case 8:
        wutangLastName = lastname[3];
        break; 
        case 9:
        wutangLastName = lastname[4];
        break; 
        case 10:
        wutangLastName = lastname[5];
        break; 
        case 11:
        wutangLastName = lastname[6];
        break; 
        case 12:
        wutangLastName = lastname[7];
        break; 
        case 13:
        wutangLastName = lastname[8];
        break; 
        case 14:
        wutangLastName = lastname[9];
        break; 
        case 15:
        wutangLastName = lastname[10];
        break; 
        case 16:
        wutangLastName = lastname[11];
        break; 
        case 17:
        wutangLastName = lastname[12];
        break; 
        case 18:
        wutangLastName = lastname[13];
        break; 
        case 19:
        wutangLastName = lastname[14];
        break; 
        case 20:
        wutangLastName = lastname[15];
        break; 
        case 21:
        wutangLastName = lastname[16];
        break; 
        case 22:
        wutangLastName = lastname[17];
        break; 
        case 23:
        wutangLastName = lastname[18];
        break; 
        case 24:
        wutangLastName = lastname[19];
        break; 
        case 25:
        wutangLastName = lastname[20];
        break; 
    }
    console.log(wutangFirstName)
    document.querySelector('.results').innerText = wutangFirstName +" "+ wutangLastName;
})
