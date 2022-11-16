var readlineSync = require('readline-sync');
var chalk = require('chalk')

const success = chalk.bold.black
const bgsuccess = chalk.bgWhite
const error = chalk.bold.red
const level = chalk.bold.cyan
const bglevel = chalk.white
const bonus = chalk.bold.yellowBright
const finalScore = chalk.bold.magenta
const bgfinalScore = chalk.bgWhite
const totalScore = chalk.bold.black
const bgtotalScore = chalk.bgYellowBright
const message = chalk.bold.black
const bgmessage = chalk.bgGreenBright

var score = 0

var highScores = [
  {
    name: 'Aditya',
    score: 21,
  },
  {
    name: 'Kaushal',
    score: 22,
  },
  {
    name: 'Leon James',
    score: 24,
  },
]

console.log(
  chalk.bgWhite.redBright.bold.italic(
    'Folks, we are here for a Science & Tech based quiz, try answering as many as you can.'
  )
)
console.log('\n')

var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName)
console.log("Let's see if you can get a PERFECT SCORE!")
console.log('\n')

function displayScore() {
  console.log('Current Score: ', score)
}

function play(level, questionNo, question, answerOptions, answer) {
  console.log('Question No.: ', questionNo)
  var userAnswer = readlineSync.keyInSelect(answerOptions, question, {
    cancel: "Not Sure",
  })

  if (userAnswer + 1 === answer) {
    console.log(bgsuccess(success('Right Answer!')))
    if (level === 1) {
      score = score + 2
    }
    if (level === 2) {
      score = score + 4
    }
    if (level === 3) {
      score = score + 3
    }
    displayScore()
    console.log('\n')
  } else {
    console.log(
      error('Wrong Answer! the correct answer is ' + answerOptions[answer - 1])
    )
    if (level === 1) {
      score = score - 1
    }
    if (level === 2) {
      score = score - 2
    }
    displayScore()
    console.log('\n')
  }
}

var questions = [
  {
    level: 1,
    questionNo: 1,
    question: "Dmitri Mendeleev created the what?",
    answerOptions: ['Plastic', 'Penicillin', 'Periodic table', 'Polythene'],
    answer: 3,
  },
  {
    level: 1,
    questionNo: 2,
    question: 'Where would you find chlorophyll?',
    answerOptions: [
      'In a leaf',
      'In animals',
      'In a pokemon',
      'In humans',
    ],
    answer: 1,
  },
  {
    level: 1,
    questionNo: 3,
    question: 'Ruby and Python are types of what?',
    answerOptions: [
      'Jewel',
      'Coding language',
      'Gems',
      'Speaking language',
    ],
    answer: 2,
  },
  {
    level: 1,
    questionNo: 4,
    question: "In what country is the Samsung Headquarters?",
    answerOptions: ['China', 'North Korea', 'South Korea', 'Japan'],
    answer: 3,
  },
  {
    level: 1,
    questionNo: 5,
    question: "Leeds is the City. Which famous Computer games company is situated and founded in Leeds?",
    answerOptions: ['Rockstar', 'Steam', 'Oculus', 'Riot games'],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 1,
    question:
      'Who was the first person in space?',
    answerOptions: [
      'Yuri Gagarin',
      'Neil Armstrong',
      "Zhai Zhigang",
      'Kalpana chawla',
    ],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 2,
    question:
      "Who demonstrated the first working television?",
    answerOptions: ['Thomas alva edison', "John Logie Baird", 'Albert einstein', 'Alexander Graham Bell'],
    answer: 2,
  },
  {
    level: 2,
    questionNo: 3,
    question:
      'What is the hardest tissue in the human body?',
    answerOptions: ['Skin', 'Tooth enamel ', 'Bone', 'hair'],
    answer: 2,
  },
  {
    level: 2,
    questionNo: 4,
    question: 'Apart from cars, Rolls Royce also create what?',
    answerOptions: ['Aeroplane engines.', 'Watch', 'Jewellery', 'Bikes'],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 5,
    question: 'What are Lyrids, Perseids, and Leonids?',
    answerOptions: [
      'Meteor Showers',
      'Virus',
      'Bacteria',
      'Neptunes moon',
    ],
    answer: 4,
  },
]

for (var i = 0; i < questions.length; i++) {
  if (questions[i].level === 1 && questions[i].questionNo === 1) {
    console.log(bglevel(level('We will be starting with Level 1')))
    console.log(level('Here you go...'))
    console.log('\n')
  }
  if (questions[i].level === 2 && questions[i].questionNo === 1) {
    console.log(bglevel(level('We will now be starting with Level 2')))
    console.log(level('Here you go...'))
    console.log('\n')
  }
  play(
    questions[i].level,
    questions[i].questionNo,
    questions[i].question,
    questions[i].answerOptions,
    questions[i].answer
  )
  if (questions[i].level === 1 && questions[i].questionNo === 5) {
    console.log(bglevel(level('We are now done with Level 1')))
    console.log(
      bgfinalScore(finalScore('Your score after Level 1 is: ', score))
    )
    console.log('\n')
    if (score <= 5) {
      console.log(
        "Your position isn't looking good, try to catch up some more points in the next level!"
      )
    } else {
      console.log(
        'Woah! Your position looks good! Still, try to get some more points in your bag & beat the high scorers!'
      )
    }
  }
  if (questions[i].level === 2 && questions[i].questionNo === 5) {
    console.log('Sadly the quiz has to come an end!')
    console.log(bgtotalScore(totalScore('Your FINAL Score: ', score)))
    console.log('\n')
  }
}

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

if (score > 20) {
  console.log(
    bgmessage(
      message.bold(
        'CONGRATS!!! You are one of the high scorers!'
      )
    )
  )
}
console.log('-------------------')
console.log('\n')
console.log('Thank you for playing!')
