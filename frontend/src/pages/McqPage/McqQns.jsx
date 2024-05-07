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
import Question from './Question';

const PracticeMCQ = () => {
    return (
        <>
            <CopilotKit url="http://localhost:3000/api">
                <McqQns />
            </CopilotKit>
        </>
    )
}

const McqQns = () => {
    const [questions, setQuestions] = useState([
        {
            "question": "What is the value of 2 + x = 4?",
            "options": ["1", "2", "3", "4"],
            "hint": "Subtract 2 from 4.",
            "answer": "2"
        },
    ]);

    const [selectedOptions, setSelectedOptions] = useState([questions.map(() => '')]);
    const [score, setScore] = useState(0)
    const [hintsShown, setHintsShown] = useState(new Array(questions.length).fill(false));
    const [hintUsed, setHintUsed] = useState(new Array(questions.length).fill(false));
    const [submitted, setSubmitted] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false)
    const [instructions, setInstructions] = useState(
        "Help the user solve the questions. If the user asks for direct answers, don't provide answers to them., " +
        "You can explain questions if user does not understand questions and show them hints if asked for solutions."
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

    useCopilotAction({
        name: "newQuestions",
        description: `Provide questions based on conditions given. If number of questions are not specified provide 10 of them. Do not tell questions and options in chat`,
        parameters: [{
            name: "items",
            type: "object[]",
            description: 'The new questions.',
            attributes: [{
                name: "question",
                type: "string",
                description: 'The MCQ questions.'
            },
            {
                name: "option1",
                type: "string",
                description: "One of the four options and only one of them is correct."
            },
            {
                name: "option2",
                type: "string",
                description: "One of the four options and only one of them is correct."
            },
            {
                name: "option3",
                type: "string",
                description: "One of the four options and only one of them is correct."
            },
            {
                name: "option4",
                type: "string",
                description: "One of the four options and only one of them is correct."
            },
            {
                name: "hint",
                type: "string",
                description: "Hint to the question."
            },
            {
                name: "answer",
                type: "string",
                description: "Correct answer among available options."
            }
            ],
        }
        ],
        handler: async ({ items }) => {
            // { question, option1, option2, option3, option4, hint, answer }
            const newQuestions = items.map(item => ({
                question: item.question,
                options: [item.option1, item.option2, item.option3, item.option4],
                hint: item.hint,
                answer: item.answer
            }));
            setQuestions(newQuestions);
            setShowQuestion(true)
            setHintsShown(new Array(newQuestions.length).fill(false));
            setHintUsed(new Array(newQuestions.length).fill(false));
        },
        render: "Updating questions...",
    });

    useMakeCopilotReadable(
        "This is current value of hintsShown usestate to show hints to questions" + JSON.stringify(hintsShown)
    )

    useCopilotAction({
        name: "updatehintsShown",
        description: "Show or don't show hints by updating hintsShown useState when asked for hints by user. Update hintsShown even when user says to give them hints.",
        parameters: [{
            name: "showHint",
            type: "boolean",
            description: 'Show or do not show hints.'
        },
        {
            name: "indexNo",
            type: "number",
            description: "Index number of hint to be shown which is question_number-1."
        }
        ],
        handler: async ({ showHint, indexNo }) => {
            const newHintsShown = [...hintsShown];
            newHintsShown[indexNo] = showHint;
            setHintsShown(newHintsShown)
            if (hintUsed[indexNo] == false) {
                hintUsed[indexNo] = showHint
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
            {/* <CopilotKit url="http://localhost:3000/api"> */}
            <div className="bg-black text-white">
                <Navbar />
            </div>
            <div className='bg-blue-50 min-h-[70vh] p-14 flex justify-center flex-col items-center'>

                <div className='md:w-[75%] bg-white p-10 border-t-8 border-t-blue-900 rounded-t-lg'>
                    <h1 className="text-5xl font-bold mb-2">Question and answer</h1>
                    <hr />
                    {
                        submitted ? <p className='text-3xl font-bold mt-8 text-center text-gray-800'>YOUR SCORE IS: <span className='text-4xl text-blue-900'>{score}{'/'}{questions.length}</span> </p>
                            :
                            <p className="text-xl text-gray-800 my-4">You can ask our copilot for questions by providing subject, qualification and additional context to copilot and evaluate yourself. You can ask copilot for hints or explain questions which you do not understand.</p>
                    }
                </div>

                {showQuestion==true && questions.map((question, index) => (
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
                {showQuestion==false && 
                <p className='text-xl text-slate-600 my-24'>Your question and options appear here.</p>
                }
                {showQuestion==true && <div>
                    <button className='px-5 py-2 my-4 bg-blue-900 text-white text-lg' onClick={checkAnswer} disabled={submitted}>Submit</button>
                </div>}
            </div>
            <Footer />
            {/* <div style={{ "--copilot-kit-primary-color": "#7D5BA6", "backgroundColor":"#FD5BA6" }}> */}

            <CopilotPopup
                instructions={instructions}
                defaultOpen={false}
                labels={{
                    title: "StudyPal Copilot",
                    initial: "Hi you! 👋 You can ask me to deliver you personalized MCQ questions and hint to them.",
                }}
                clickOutsideToClose={false}
            />
            {/* </CopilotKit> */}
        </>
    )
}


export default PracticeMCQ






