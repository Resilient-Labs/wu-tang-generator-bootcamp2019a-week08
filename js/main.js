/* Pseudo Code
in the html I created 5 questions with 4 otions each. The radio inputs for each questions have a shared name, are treated as a group, and require a selection from only one of the inputs. Each radio input has a value which will be used in js

1.variables for the selected radio buttons values. the input values are not rendered as values in the js and need to be wrapped in parseInt
2. add click event to button to run the function
3. create an array where each element is set to he input value variables
4. sum this array to get total
5. create a names array with all the potential wu tang names
6. the sum "total" will be the the index of the name in the names array
7. render this index of the names array into the dom
*/

document.querySelector('button').addEventListener('click', generateName)

function generateName(){
  const answer1 = parseInt(document.querySelector('input[name="question1"]:checked').value)
  const answer2 = parseInt(document.querySelector('input[name="question2"]:checked').value)
  const answer3 = parseInt(document.querySelector('input[name="question3"]:checked').value)
  const answer4 = parseInt(document.querySelector('input[name="question4"]:checked').value)
  const answer5 = parseInt(document.querySelector('input[name="question5"]:checked').value)

  const allAnswers = [answer1, answer2, answer3, answer4, answer5]

  const total = allAnswers.reduce(
    (a,b) => a + b
  )
  const names = ['Samurai Warlock','Prophet Dreamer','Demon Watcher','Genius Bastard','Desperado Overlord',' Knight Bandit','Overlord Killah','Commander Assasin','Swami Wizard','Madman Mercenary','Menace Warrior','Mastermind Begger','Wizard Pupil','Dominator Artist','Specialist Contender','Hunter Criminal']

  yourName = names[total]
  document.querySelector('h3').innerText = yourName
}

/*
wu tang name inspo from https://github.com/unrarp/WuNameAAS/blob/master/wu_nouns.txt
*/
