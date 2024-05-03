import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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
    ];


    const [selectedOptions, setSelectedOptions] = useState([questions.map(() => '')]);
    const [score, setScore] = useState(0)
    const [hintsShown, setHintsShown] = useState(new Array(questions.length).fill(false));
    const [submitted, setSubmitted] = useState(false);

    const handleOptionChange = (questionIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = option;
        setSelectedOptions(newSelectedOptions);
    };

    const checkAnswer = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setSubmitted(true);
        console.log("Score=", newScore);
        window.scrollTo(0, 0);
    };


    return (
        <>
            <div className="bg-black text-white">
                <Navbar />
            </div>
            <div className='bg-blue-50 h-full p-14 flex justify-center flex-col items-center'>
                <div className='md:w-[75%] bg-white p-10 border-t-8 border-t-blue-900 rounded-t-lg'>
                    <h1 className="text-5xl font-bold mb-2">Question and answer</h1>
                    <hr />
                    {
                        submitted? <p className='text-3xl font-bold mt-8 text-center text-gray-800'>YOUR SCORE IS: <span className='text-4xl text-blue-900'>{score}{'/'}{questions.length}</span> </p>
                        :
                    <p className="text-xl text-gray-800 my-4">Answer provided questions. You can ask copilot for hints or explain questions which you do not understand.</p>
                    }
                </div>

                {questions.map((question, index) => (
                    <Question
                        key={index}
                        qno={index + 1}
                        question={question}
                        selectedOption={selectedOptions[index]}
                        showHint={hintsShown[index]}
                        onOptionChange={handleOptionChange}
                        isSubmitted={submitted}
                        isCorrect={selectedOptions[index] === question.answer}
                    />
                ))}

                <div>
                    <button className='px-5 py-2 my-4 bg-blue-900 text-white text-lg' onClick={checkAnswer} disabled={submitted}>Submit</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

const Question = ({ qno, question, selectedOption, showHint, onOptionChange, isSubmitted, isCorrect }) => {
    // const [showHint, setShowhint] = useState(true)
    return (
        <>
            <div className='md:w-[75%] bg-white mt-4 p-10'>
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
                                    onChange={() => onOptionChange(qno - 1, option)}
                                    disabled={isSubmitted}
                                    className={`form-radio h-4 w-4 ${isSubmitted ? (option === question.answer ? 'text-green-500' : selectedOption === option ? 'text-red-500' : '') : ''}`}
                                />
                                <span className={`ml-2 ${isSubmitted ? (option === question.answer ? 'text-green-500' : selectedOption === option ? 'text-red-500' : '') : ''}`}>{option}</span>
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