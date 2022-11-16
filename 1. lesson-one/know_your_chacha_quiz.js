var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("Hey There! What's your name?")

console.log('Welcome ' + userName + ' to - KYC: Know Your Chacha?')

var highScores = [
  {
    name: "Chacha",
    score: 11,
  },
  {
    name: 'Jethiya',
    score: 10,
  },
  {
    name: 'Popat',
    score: 9.5,
  },
]

function startKyc(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Right Answer! Chacha is proud of you.')
    score = score + 1
  } else {
    console.log('Bhakk Budbak!' + answer + 'is the correct answer.')
  }

  console.log('Current Score: ', score)
}

var questions = [
  {
    question: 'Where does your chacha live? ',
    answer: 'Jamshedpur',
  },
  {
    question: 'What is chachas fav series? ',
    answer: 'Breaking Bad',
  },
  {
    question: 'Who is chachas fav character? ',
    answer: 'Champaklal',
  },
  {
    question: 'What is chachas fav language? ',
    answer: 'Love language',
  },
  {
    question: 'Which is chachas fav cartoon character? ',
    answer: 'Sinchan',
  },
  {
    question: 'SpiderMan or BatMan? ',
    answer: 'SpiderMan',
  },
  {
    question: 'Who is my fav Avenger? ',
    answer: "Ironman",
  },
  {
    question: 'What is chachas favorite season? ',
    answer: 'Winter',
  },
  {
    question: 'Which is chachas favorite drink? ',
    answer: 'Beer',
  },
  {
    question: "The last one - Which is chachas favorite song? ",
    answer: 'Zindagi Ek Suffer!',
  },
]

// loop
for (var i = 0; i < questions.length; i++) {
  startKyc(questions[i].question, questions[i].answer)
}

console.log('Shabbash! You SCORED: ', score)

console.log('High Scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

console.log('Dhanyawaad!')
