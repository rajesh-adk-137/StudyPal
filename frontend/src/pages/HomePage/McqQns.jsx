"use client";
import React, { useEffect, useState } from 'react'
import {
    CopilotKit,
    useCopilotAction,
    useMakeCopilotReadable,
} from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
// import { useCopilotReadable }  from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const McqQns = () => {
    const [questions, setQuestions] = useState([
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
    ]);

    const [selectedOptions, setSelectedOptions] = useState([questions.map(() => '')]);
    const [score, setScore] = useState(0)
    const [hintsShown, setHintsShown] = useState(new Array(questions.length).fill(false));
    const [hintUsed, setHintUsed] = useState(new Array(questions.length).fill(false));
    const [submitted, setSubmitted] = useState(false);
    const [instructions, setInstructions] = useState(
        "Help the user solve the questions. If the user asks for direct answers, don't provide answers to them., " +
        "You can explain questions if user does not understand questions."
    )
    // const [hints, setHints] = useState(false);

    const handleOptionChange = (questionIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = option;
        setSelectedOptions(newSelectedOptions);
    };

    useMakeCopilotReadable(
        "This is the questions with their options, hint and answers: " + JSON.stringify(questions)
    );
    useMakeCopilotReadable(
        "This is current value of hintsShown usestate to show hints to questions" + JSON.stringify(hintsShown)
    )

    useCopilotAction({
        name: "updatehintsShown",
        description: "Show or don't show hints by updating hintsShown useState.",
        parameters: [{
            name: "showHint",
            type: "boolean",
            description: 'Show or do not show hints.'
        },
        {
            name: "questionNo",
            type: "number",
            description: "Question number of hint to be shown."
        }
        ],
        handler: async ({ showHint, questionNo }) => {
            const newHintsShown = [...hintsShown];
            newHintsShown[questionNo] = showHint;
            setHintsShown(newHintsShown)
            if(hintUsed[questionNo]==false){
                hintUsed[questionNo] = showHint
            }
        },
        render: "Updating hints...",
    });

    useCopilotAction({
        name: "newHint",
        description: "Provide different hint to question.",
        parameters: [{
            name: "newHint",
            type: "string",
            description: 'Show or do not show hints.'
        },
        {
            name: "questionNo",
            type: "number",
            description: "Question number of new hint to be updated."
        }
        ],
        handler: async ({ newHint, questionNo }) => {
            const updatedQuestions = questions.map((question, index) => {
                if (index === questionNo) {
                    return { ...question, hint: newHint };
                }
                return question;
            });
            setQuestions(updatedQuestions);
        },
        render: "Updating hints...",
    });


    const checkAnswer = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setSubmitted(true);
        // console.log("Score=", newScore);
        window.scrollTo(0, 0);
        setInstructions("Help the user solve the questions. If the user asks for direct solutions or answers, you can provide direct solutions or answers to them., " +
        "You can how their answers are wrong.")
    };
    

    useEffect(() => {
    }, [hintsShown, questions])

    return (
        <>
            {/* <CopilotKit url="http://localhost:5174/api"> */}
            <div className="bg-black text-white">
                <Navbar />
            </div>
            <div className='bg-blue-50 h-full p-14 flex justify-center flex-col items-center'>

                <div className='md:w-[75%] bg-white p-10 border-t-8 border-t-blue-900 rounded-t-lg'>
                    <h1 className="text-5xl font-bold mb-2">Question and answer</h1>
                    <hr />
                    {
                        submitted ? <p className='text-3xl font-bold mt-8 text-center text-gray-800'>YOUR SCORE IS: <span className='text-4xl text-blue-900'>{score}{'/'}{questions.length}</span> </p>
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
                        showHint={hintsShown}
                        hintUsed={hintUsed}
                        onOptionChange={handleOptionChange}
                        isSubmitted={submitted}
                        isCorrect={selectedOptions[index] === question.answer}
                    />
                ))}

                <div>
                    <button className='px-5 py-2 my-4 bg-blue-900 text-white text-lg' onClick={checkAnswer} disabled={submitted}>Submit</button>
                </div>
            </div>
            <Footer />
            {/* <div style={{ "--copilot-kit-primary-color": "#7D5BA6", "backgroundColor":"#FD5BA6" }}> */}
            {submitted == false &&
                <CopilotPopup
                    instructions={
                        "Help the user solve the questions. If the user asks for direct answers, don't provide answers to them., " +
                        "You can explain questions if user does not understand questions."
                    }
                    defaultOpen={false}
                    labels={{
                        title: "Copilot",
                        initial: "Hi you! 👋 I can help you with your questions.",
                    }}
                    clickOutsideToClose={false}
                />
            }
            {submitted == true &&
                <CopilotPopup
                    instructions={
                        "Help the user solve the questions. If the user asks for direct solutions or answers, you can provide direct solutions or answers to them., " +
                        "You can how their answers are wrong."
                    }
                    defaultOpen={false}
                    labels={{
                        title: "Copilot",
                        initial: "Hi you! 👋 How Can I Help you?.",
                    }}
                    clickOutsideToClose={false}
                />
            }



            {/* </CopilotKit> */}
        </>
    )
}

const Question = ({ qno, question, selectedOption, showHint, hintUsed, onOptionChange, isSubmitted, isCorrect }) => {
    // const [showHint, setShowhint] = useState(true)
    return (
        <>
            <div className='md:w-[75%] bg-white mt-4 p-10'>
                <h1 className="text-3xl font-[500] mb-2">
                    {qno}. {question.question}
                    {hintUsed[qno - 1] ? <button className=' text-xs align-middle mb-[0.25rem] bg-red-500 text-white rounded-md p-[0.15rem] border ml-3'>Hint Used</button>
                        : <></>}
                </h1>
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
                                <span className={`ml-2 font-[500] ${isSubmitted ? (option === question.answer ? 'text-green-500' : selectedOption === option ? 'text-red-500' : '') : ''}`}>{option}</span>
                            </label>
                        </div>
                    ))}
                </form>
                {showHint[qno - 1] && (
                    <div className="mt-2 p-2 border rounded bg-gray-50">
                        <p><span className='text-red-700 font-bold'>Hint:</span> {question.hint}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default McqQns
