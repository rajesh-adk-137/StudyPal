import React, { useState } from 'react'

const FeaturesSection = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div>
            <h1 className='text-center text-4xl font-bold tracking-wider'>STUDY WITH <span className='text-blue-400'>COPILOT</span></h1>
            <div className='grid md:grid-cols-2'>
                <div className="flex flex-col gap-10 mx-10 md:mx-24 my-14 hover:cursor-pointer">
                    <div className={selected == 1 ? " border-b-[6px] rounded-2xl border-blue-400 flex justify-center flex-col items-center mx-4 " : "flex justify-center flex-col items-center mx-4 border-b rounded-2xl hover:bg-gray-900"} onClick={() => { setSelected(1) }}>
                        <h1 className='text-2xl text-blue-400'>Personalized Study Materials </h1>
                        <p className='text-xl text-[#aaabc4] my-5 text-center'>Select your desired subjects and generate customized study materials.</p>
                    </div>

                    <div className={selected == 2 ? " border-b-[6px] rounded-2xl border-blue-400 flex justify-center flex-col items-center mx-4" : "flex justify-center flex-col items-center mx-4 border-b rounded-2xl hover:bg-gray-900"} onClick={() => { setSelected(2) }}>
                        <h1 className='text-2xl text-blue-400'>Interactive MCQ Practice </h1>
                        <p className='text-xl text-[#aaabc4] my-5 text-center'>Dive into detailed insights and explanations for your topics and questions!</p>
                    </div>

                    <div className={selected == 3 ? " border-b-[6px] rounded-2xl border-blue-400 flex justify-center flex-col items-center mx-4" : "flex justify-center flex-col items-center mx-4 border-b rounded-2xl hover:bg-gray-900"} onClick={() => { setSelected(3) }}>
                        <h1 className='text-2xl text-blue-400'>Insights and Explanations</h1>
                        <p className='text-xl text-[#aaabc4] my-5 text-center'>Uncover detailed insights and explanations on your topics and questions!.</p>
                    </div>
                </div>

                <div className='mx-10 md:mx-24 py-10'>
                    {selected == 1 && <Feature1 />}
                    {selected == 2 && <Feature2 />}
                    {selected == 3 && <Feature3 />}
                </div>
            </div>
        </div>
    )
}

const Feature1 = () => {
    return (
        <>
            <div className="bg-black p-5 rounded-lg">
                <ul className="pl-5 space-y-3 text-white text-lg leading-relaxed my-4 font-sans">
                    <li className="border-b border-blue-500 pb-2">
                        With <span className="text-blue-400">StudyPal</span>, you have the power to tailor your study experience to your unique needs.
                    </li>
                    <li className="border-b border-blue-500 pb-2">
                        Select your desired subjects and educational qualifications, and let <span className="text-blue-400">StudyPal</span> do the rest.
                    </li>
                    <li className="border-b border-blue-500 pb-2">
                        Our platform utilizes advanced algorithms to generate customized study materials specifically for you.
                    </li>
                    <li className="border-b border-blue-500 pb-2">
                        From concise revision points that condense complex concepts into easily digestible summaries to practice multiple-choice questions (MCQs) that test your understanding.
                    </li>
                    <li className="border-b border-blue-500 pb-2">
                        <span className="text-blue-400">StudyPal</span> ensures that you have the right resources at your fingertips to excel in your studies.
                    </li>
                </ul>
            </div>
        </>
    )
}

const Feature2 = () => {
    return (
        <>
            <div className="bg-black p-5 rounded-lg">
                <ul className="pl-5 space-y-3 text-white text-lg leading-relaxed my-4 font-sans">
                    <li className="border-b border-blue-500 pb-2">
                        Gone are the days of passive studying. With <span className="text-blue-400">StudyPal's interactive MCQ practice feature</span>, you can actively engage with the material and put your knowledge to the test.
                    </li>
                    <li className="border-b border-blue-500 pb-2">
                        Our platform offers a wide range of multiple-choice questions tailored to your selected subjects. But that's not all – if you find yourself stuck on a particular question, <span className="text-blue-400">StudyPal has got you covered</span>.
                    </li>
                    <li className="border-b border-blue-500 pb-2">
                        Simply seek hints and guidance directly within the platform's chat interface. Our integrated AI assistance provides personalized support to help you work through challenging concepts and improve your understanding.
                    </li>
                </ul>
            </div>

        </>
    )
}

const Feature3 = () => {
    return (
        <>
            <div className="bg-black p-5 rounded-lg">
                <ul className="pl-5 space-y-3 text-white text-lg leading-relaxed my-4 font-sans">
                    <li className="border-b border-blue-500 pb-2">Understanding the "why" behind the answer is just as important as knowing the answer itself, enhancing deep learning.</li>
                    <li className="border-b border-blue-500 pb-2">We provide valuable insights and explanations to deepen your understanding of the subject matter.</li>
                    <li className="border-b border-blue-500 pb-2">Whether you've aced a question or stumbled upon a tricky one, StudyPal offers detailed explanations that illuminate the rationale behind each answer.</li>
                    <li className="border-b border-blue-500 pb-2">By gaining insight into the reasoning behind the solutions, you'll not only strengthen your grasp of the material but also pave the way for academic success.</li>
                </ul>
            </div>

        </>
    )
}

export default FeaturesSection