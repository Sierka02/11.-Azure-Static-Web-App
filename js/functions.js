const answers = document.querySelectorAll('.Answer')
const myButton = document.getElementById('Show_Answers_Button')
  
myButton.addEventListener("click", () => {
    answers.forEach(answers => {
        answers.style.display = 'block'
    })
})