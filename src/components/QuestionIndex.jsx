import React from 'react'

const QuestionIndex = ({ question, options, handleClick, currentAnswer, handleNext }) => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <h2 className='text-xl mb-5 font-bold'>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index} className={`bg-gray-400 p-2 m-3 w-75 text-center cursor-pointer hover:bg-white duration-300 font-medium ${currentAnswer === option ? 'selected' : ''}`} onClick={() => handleClick(option)}>
                        {option}
                    </li>
                ))}
            </ul>
            <button disabled={currentAnswer === null} onClick={()=>handleNext()} className={`bg-gray-400 hover:bg-white duration-300 w-75 p-2 m-3 rounded-2xl cursor-pointer ${currentAnswer === null ? 'disable' : ''}`}>Next Question</button>
        </div>
    )
}

export default QuestionIndex
