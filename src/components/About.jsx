import React from 'react'

function About() {
    return (
        <>
            <div>
                <div className='bg-blue-900 w-[98%] h-[77vh] my-3 mx-auto rounded-xl flex flex-col justify-center items-center text-gray-200'>
                    <h2 className='font-bold text-base md:text-lg lg:text-xl pb-8'><u>About Userly<span className='text-blue-400'>.</span></u></h2>
                    <p className='pb-1 px-1 text-[10px] md:text-sm lg:text-base'>Userly was created to make accessing user information effortless and organized.</p>
                    <p className='pb-1 px-1 text-[10px] md:text-sm lg:text-base'>We believe that connecting people starts with clear and reliable data.</p>
                    <p className='pb-1 px-1 text-[10px] md:text-sm lg:text-base'>Our platform provides structured user profiles, advanced search options, and a clean, user-friendly experience.</p>
                    <p className='pb-1 px-1 text-[10px] md:text-sm lg:text-base'>Whether you’re looking to network, analyze, or manage user data, UserConnect is designed to help you do it efficiently.</p>
                </div>
            </div>
        </>
    )
}

export default About