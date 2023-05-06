import React, { useEffect } from 'react'
import CommonCode from './CommonCode'
import "../Styles/Answerspage/Answerspage.css"
import questions from './QuizData'
import { useNavigate } from 'react-router-dom'

let wrongAnswersArray = [];
let correctAnswer = [];
for (let ans of questions) {
  ans.answerOptions.map((correctAns) => {
    if (correctAns.isCorrect) {
      correctAnswer.push(correctAns.answerText)
    }
  })
}

const AnswerPage = ({ selectedOption }) => {

  useEffect(() => {
    let lists = document.querySelectorAll(".btn");
    for (let list of lists) {
                                                
      if (correctAnswer.includes(list.innerHTML)) {
        list.classList.add("green");
      }
      if(selectedOption.includes(list.innerHTML) && !correctAnswer.includes(list.innerHTML)){
        list.classList.add("wrong")
      }
    }
  }, [])
  
  const navigate = useNavigate();
  
  let wrongAnswers = document.querySelectorAll(".btn.color");
  for (let wrong of wrongAnswers) {
    if (!correctAnswer.includes(wrong.innerHTML)) {
      wrongAnswersArray.push(wrong.innerHTML);
    }
  }

  const handleClick = () => {
    navigate("/", { replace: true });
  }

  return (
    <>
      <div className='main_container'>
        <div className='inner_container'>

          <CommonCode />
          <div className='answerpage_footer_div'>
            <p className='answerpage_footer_para'>You scored {correctAnswer.length - wrongAnswersArray.length}/{questions.length} correct answers</p>
            <button className='answerpage_btn' onClick={handleClick}>Play again</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnswerPage