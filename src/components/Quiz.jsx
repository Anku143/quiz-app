import React, { useState } from 'react'
import QuestionIndex from './QuestionIndex'

const Quiz = () => {
    const question = [{
        "question": "1. What is the capital of France?",        "options": ["Paris", "London", "Berlin", "Madrid"],
        "answer": "Paris"
    },
    {
        "question": "2. What is the capital of Germany?",
        "options": ["Paris", "Delhi", "Berlin", "Madrid"],
        "answer": "Berlin"
    }]

    const [questionsList, setQuestionsList] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)

    const handleClick = (option)=>{
        setCurrentAnswer(option)
    }

    const handleNext=()=>{
        setQuestionsList(questionsList + 1)
        currentAnswer(null)

    }

    return (
        <>
        {questionsList < question.length ? 
        <div>
            <QuestionIndex question={question[questionsList].question} options={question[questionsList].options} setQuestionsList={setQuestionsList} questionsList={questionsList}  handleClick={handleClick} currentAnswer={currentAnswer} handleNext={handleNext}/>
                

        </div>
   : '' }
        </>
    )
}

export default Quiz
