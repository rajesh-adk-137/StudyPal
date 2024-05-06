import React from 'react'

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

export default Question