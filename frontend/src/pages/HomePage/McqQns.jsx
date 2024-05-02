import React, { useState } from 'react'
import Navbar from '../../components/Navbar'

const McqQns = () => {
    const questions = [
        {
            "question": "What is the value of 2 + x = 4?",
            "options": ["1", "2", "3", "4"],
            "hint": "Subtract 2 from 4.",
            "answer": "2"
        },
        {
            "question": "What is the capital of France?",
            "options": ["Paris", "Rome", "Berlin", "Madrid"],
            "hint": "It's also called the City of Lights.",
            "answer": "Paris"
        },
        {
            "question": "What gas do plants absorb from the atmosphere for photosynthesis?",
            "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            "hint": "Animals exhale this gas.",
            "answer": "Carbon Dioxide"
        },
        {
            "question": "What is the largest planet in our solar system?",
            "options": ["Mars", "Jupiter", "Saturn", "Venus"],
            "hint": "It's known for its Great Red Spot.",
            "answer": "Jupiter"
        },
        {
            "question": "What year did the Titanic sink?",
            "options": ["1912", "1905", "1898", "1923"],
            "hint": "The event occurred in April during the early 20th century.",
            "answer": "1912"
        },
        {
            "question": "Which element is represented by the symbol 'O'?",
            "options": ["Gold", "Oxygen", "Osmium", "Oladium"],
            "hint": "It is essential for breathing.",
            "answer": "Oxygen"
        },
        {
            "question": "In computing, what does CPU stand for?",
            "options": ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
            "hint": "It is known as the brain of the computer.",
            "answer": "Central Processing Unit"
        },
        {
            "question": "Who wrote 'To Kill a Mockingbird'?",
            "options": ["Harper Lee", "Mark Twain", "Stephen King", "J.K. Rowling"],
            "hint": "The author is from Alabama.",
            "answer": "Harper Lee"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "options": ["Gold", "Iron", "Diamond", "Quartz"],
            "hint": "This substance is often used in jewelry.",
            "answer": "Diamond"
        },
        {
            "question": "What is the chemical formula for table salt?",
            "options": ["NaCl", "HCl", "NaHCO3", "C12H22O11"],
            "hint": "This compound is composed of sodium and chlorine.",
            "answer": "NaCl"
        }
    ];
    

    const [selectedOptions, setSelectedOptions] = useState([questions.map(() => '')]);
    const [score,setScore] = useState(0)

    const handleOptionChange = (questionIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = option;
        setSelectedOptions(newSelectedOptions);
    };

    const checkAnswer=()=>{
        console.log(selectedOptions)
        questions.map((question,index)=>{
            console.log(question.answer)
            if(selectedOptions[index]==question.answer){
                setScore(score+1)
            }
        })
        console.log("Score=",score)
    }


    return (
        <>
            <div className="bg-black text-white">
                <Navbar />
            </div>
            <div className='bg-blue-50 h-full p-14 flex justify-center flex-col items-center'>
                <div className='w-[75%] bg-white p-10 border-t-8 border-t-blue-900 rounded-t-lg'>
                    <h1 className="text-5xl font-bold mb-2">Question and answer</h1>
                    <hr />
                    <p className="text-xl text-gray-800 my-4">Answer provided questions. You can ask copilot for hints or explain questions which you do not understand.</p>
                </div>
                {questions.map((question, index) => (
                    <Question
                        key={index}
                        qno = {index+1}
                        question={question}
                        selectedOption={selectedOptions[index]}
                        onOptionChange={(option) => handleOptionChange(index, option)}
                    />
                ))}

                <div>
                    <button className='px-5 py-2 my-4 bg-blue-900 text-white text-lg' onClick={checkAnswer}>Submit</button>
                </div>
            </div>
        </>
    )
}

const Question = ({ qno,question, selectedOption, onOptionChange }) => {
    const [showHint, setShowhint] = useState(true)
    return (
        <>
                <div className='w-[75%] bg-white mt-4 p-10'>
                    <h1 className="text-3xl font-[500] mb-2">{qno}. {question.question}</h1>
                    <hr />
                    <form>
                        {question.options.map((option, index) => (
                            <div key={index} className="my-2">
                                <label className="inline-flex items-center text-lg">
                                    <input
                                        type="radio"
                                        name={`option-${question.question}`}
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={() => onOptionChange(option)}
                                        className="form-radio h-4 w-4"
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            </div>
                        ))}
                    </form>
                    {showHint && (
                        <div className="mt-2 p-2 border rounded bg-gray-50">
                            <p><span className='text-red-700 font-bold'>Hint:</span> {question.hint}</p>
                        </div>
                    )}
                </div>
        </>
    )
}

export default McqQns