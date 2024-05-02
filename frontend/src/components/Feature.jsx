import React, { useState } from 'react'

const FeaturesSection = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div>
            <h1 className='text-center text-4xl font-bold tracking-wider'>STUDY WITH <span className='text-blue-400'>COPILOT</span></h1>
            <div className='grid md:grid-cols-2'>
                <div className="flex flex-col gap-10 mx-10 md:mx-24 my-14 hover:cursor-pointer">
                    <div className={selected == 1 ? " border-b-[6px] rounded-2xl border-blue-400 flex justify-center flex-col items-center mx-4 " : "flex justify-center flex-col items-center mx-4 border-b rounded-2xl hover:bg-gray-900"} onClick={() => { setSelected(1) }}>
                        <h1 className='text-2xl text-blue-400'>Question Explanation </h1>
                        <p className='text-xl text-[#aaabc4] my-5'>Input questions which are explained with AI.</p>
                    </div>

                    <div className={selected == 2 ? " border-b-[6px] rounded-2xl border-blue-400 flex justify-center flex-col items-center mx-4" : "flex justify-center flex-col items-center mx-4 border-b rounded-2xl hover:bg-gray-900"} onClick={() => { setSelected(2) }}>
                        <h1 className='text-2xl text-blue-400'>Question Explanation </h1>
                        <p className='text-xl text-[#aaabc4] my-5'>Input questions which are explained with AI.</p>
                    </div>

                    <div className={selected == 3 ? " border-b-[6px] rounded-2xl border-blue-400 flex justify-center flex-col items-center mx-4" : "flex justify-center flex-col items-center mx-4 border-b rounded-2xl hover:bg-gray-900"} onClick={() => { setSelected(3) }}>
                        <h1 className='text-2xl text-blue-400'>Question Explanation </h1>
                        <p className='text-xl text-[#aaabc4] my-5'>Input questions which are explained with AI.</p>
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
            <div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolor veritatis ipsa quidem, officia accusamus nobis ut, maiores illo temporibus nesciunt rem totam! Distinctio fugit animi ullam ducimus nam nostrum! Ipsa, fugiat. Voluptatum!
                </div>

            </div>
        </>
    )
}

const Feature2 = () => {
    return (
        <>
            <div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, obcaecati?
                </div>

            </div>
        </>
    )
}

const Feature3 = () => {
    return (
        <>
            <div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam numquam rem aliquam consequatur beatae quia natus harum velit reiciendis minima?
                </div>

            </div>
        </>
    )
}

export default FeaturesSection