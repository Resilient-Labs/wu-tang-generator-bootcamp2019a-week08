const submit = document.querySelector('button');
      food = document.querySelector('#food'),
      caffeine = document.querySelector('#caffeine'),
      os = document.querySelector('#os'),
      searchEngine = document.querySelector('#searchEngine'),
      language = document.querySelector('#language');

submit.addEventListener('click', generateName);

function generateName() {
    const names = ['Ol\' Dirty RZA','CappaGZA','Masta Deck','U-Raekwon','Method Killah','Ghostface God','GZA Killa','Method Donna','Raedeck','RZA Man'];
    let sumOfOptions = Number(food.value) + Number(caffeine.value) + Number(os.value) + Number(searchEngine.value) + Number(language.value),
        yourName;
    switch(sumOfOptions) {
        case 30: yourName = names[0]; break;
        case 31: yourName = names[1]; break;
        case 32: yourName = names[2]; break;
        case 33: yourName = names[3]; break;
        case 34: yourName = names[4]; break;
        case 35: yourName = names[5]; break;
        case 36: yourName = names[6]; break;
        case 37: yourName = names[7]; break;
        case 38: yourName = names[8]; break;
        case 39: case 40: yourName = names[9]; break;
    }
    document.querySelector('span').innerText = yourName;
}