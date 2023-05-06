import questions from './QuizData'

const CommonCode = ({ handleAnswer }) => {

    const details = questions.map((question, index) => {
        return (
            <>
                <p
                    className='para'
                    key={index}>
                    {question.questionText}
                </p>
                {question.answerOptions.map((options, index) => {
                    return (
                        <button
                            className='btn'
                            key={index}
                            onClick={handleAnswer}
                        >
                            {options.answerText}
                        </button>
                    )
                })}
                <hr />
            </>
        )
    })
   
    return (
        <>
            <div className='questions_container'>
                <div className='ques'>
                    {details}
                </div>
            </div>
        </>
    )
}

export default CommonCode

