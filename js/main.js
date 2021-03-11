let button = document.getElementById('button')
let name = document.getElementById('response')
button.addEventListener("click", () => {
var adjectives = ["Ambivalent", "Lucky#7", "Animalistic", "Holiest", "Adroit",
    "the Arcane", "Brutal", "Destructive Chaotic", "the Haunted", "the Wretched", "Mystical",
    "Silent", "Mighty-Magical", "Villainous", "Dark & Shadowy", "Stealthy", "Zombified","Dreadful","host"]

var nouns = ["Ninja", "Technician", "Pancake", "Zero-Assassin", "MegaLord", "ToeEater",
    "Murderer", "LastSamurai", "Barnacle", "Captain", "Nibbler", "Cupcake", "Samarai-X",
    "knight of night", "Glitter-Hoe", "killgrave","Paladin",
    "Exorcist", "Warlock"]    
    let pet = document.getElementById('pet').value
    let food = document.getElementById('food').value
    let music = document.getElementById('music').value
    let powers = document.getElementById('powers').value
    let tv = document.getElementById('tv').value
    let moive = document.getElementById('movie').value
    let noune = [food,tv,powers] 
    let sumOfNoune = 0
for(let i=0; i<noune.length; i++){
  sumOfNoune += Number(noune[i])
} 
    let adjective = [moive,pet,music]
    let sumOfadjective = 0
    for(let i=0; i<adjective.length; i++){
      sumOfadjective += Number(adjective[i])
    }   
console.log(noune);
console.log(adjective);
console.log(sumOfNoune);
console.log(sumOfadjective);
console.log(nouns[sumOfNoune]);
console.log(adjectives[sumOfadjective]);


name.innerHTML= adjectives[sumOfadjective]+" "+nouns[sumOfNoune]

 
});

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
  });