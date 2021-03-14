// Array storing the initial names
//Got this from a git hub repo!!!
let nounsArray = ["Madman","Genius","Hunter","Killah","Professional","Artist",
"Dreamer","Observer","Wizard","Swami","Wanderer","Assassin","Bandit",
"Leader","Ambassador","Warrior","Menace","Worlock","Conqueror","Lover",
"Desperado","Specialist","Mercenary","Ninja","Contender",
"Mastermind","Watcher","Destroyer","Beggar","Commander",
"Dominator","Overlord","Samurai","Knight","Pupil","Prophet","Criminal"]
console.log(nounsArray.length);
let adjArray = ["Bittah","Tha","Master","Dynamic","E-ratic","Fearless","Misunderstood",
"Quiet","Pesty","Gentlemen","Profound","Respected","Amateur","Shriekin’","Lucky",
"Phantom","Smilin’","Thunderous","Tuff","Scratchin’","Drunken","X-cessive",
"X-pert","Zexy","Ruff","Intellectual","Unlucky","Vizual","Midnight","Mighty",
"Annoyin’","Arrogant","B-loved","Sarkastik","Insane","Irate","Wicked","Amazing",]
console.log(adjArray.length);


document.querySelector('.show').addEventListener('click',nickname)

function nickname() {
  let season = document.querySelector('.Season').value
  let pelicular = document.querySelector('.Pelicular').value
  let beverage = document.querySelector('.Beverage').value
  let audio = document.querySelector('.Audio').value
  let breakfast = document.querySelector('.Breakfast').value

  let name = Number(season) + Number(pelicular) + Number(beverage) + Number(audio) + Number(breakfast)
  let nameChanger = name+5

  console.log(adjArray[nameChanger] + " " + nounsArray[nameChanger])
  document.querySelector('h3').innerText = adjArray[nameChanger] + " " + nounsArray[nameChanger]
}
