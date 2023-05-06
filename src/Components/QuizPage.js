import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/Quizpage/Quizpage.css"
import CommonCode from './CommonCode'


const QuizPage = ({selectedOption, setSelectedOption}) => {
  const navigate = useNavigate();

  const handleAnswer = (event) => {
    if (selectedOption.length === 5) {
      return;
    }
    (event.target.classList.add("color"));
    setSelectedOption((selectedOption) => [...selectedOption, event.target.innerHTML])

  }
  function handleClick() {
    if (selectedOption.length === 5) {
      navigate("/answer", { replace: true });
     
    }
    else {
      alert("Please complete all the questions first.")
    }
  }
  return (
    <>
      <div className='main_container'>
        <div className='inner_container'>

          <CommonCode handleAnswer={handleAnswer} />
          <div className='quizpage_btn_div'>
            <button className='quizpage_btn' onClick={handleClick} >Check answers</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizPage