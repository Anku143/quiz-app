import React, { useState } from 'react'
import QuestionIndex from './QuestionIndex'

const Quiz = () => {
    const question = [{
        question: "1. What is the capital of France?",        
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "2. What is the capital of Germany?",
        options: ["Paris", "Delhi", "Berlin", "Madrid"],
        answer: "Berlin"
    },
    {
        question: "3. What is the capital of India?",
        options: ["Paris", "Delhi", "Berlin", "Madrid"],
        answer: "Delhi"
    },
    {
        question: "4. What is the capital of Spain?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Madrid"
    },
    {
        question: "5. What is the capital of Italy?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Rome"
    }
]

    const [questionsList, setQuestionsList] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [score,setScore] = useState(0)

    const handleClick = (option)=>{
        setCurrentAnswer(option)
        console.log(currentAnswer)
        if(option === question[questionsList].answer ){
            setScore(prevScore => prevScore + 1 )
        }
    }

    const handleNext = () => {
        setQuestionsList(prev => prev + 1);
        setCurrentAnswer(null); 
    };
    

    return (
        <>
        {questionsList < question.length ? 
        <div>
            <QuestionIndex 
        question={question[questionsList].question} 
        options={question[questionsList].options} 
        questionsList={questionsList}  
        handleClick={handleClick} 
        currentAnswer={currentAnswer} 
        handleNext={handleNext}/>
                

        </div>
   : <div className='
   flex justify-center items-center h-screen '>
   <div className='p-5 bg-amber-50 rounded-xl'>
   Your Score is {score} out of {question.length}
   </div>
   </div> 
   }
        </>
    )
}

export default Quiz

