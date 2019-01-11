const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  let containerEl = document.querySelector('.question-container')
  return containerEl.innerHTML = (question['questionText'])
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(() => {
    document.querySelector('.question-container').innerHTML = "";
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
    trueAndFalseButtons().forEach((button) => {
      button.classList.toggle("hide")
    })
}

function displayQuestionOnClick(){
  let askBtn = document.querySelector('a')
  return askBtn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
