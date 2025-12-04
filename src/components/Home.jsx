import React from 'react'
import userList from '../assets/usersImage.png';
import userDetails from '../assets/userDetailsImage.png';


function Home() {
    return (
        <div>
            <div className='w-[98%] flex bg-blue-800 my-2 mx-auto p-5 rounded-xl justify-center'>

                <div className='flex flex-col justify-center basis-1/2'>
                    <div className='relative p-6'>
                        <div className='w-40 h-12 bg-white absolute -rotate-5 z-0'></div>
                        <h2 className=' font-bold text-2xl z-10 relative px-8 py-2 text-blue-900'>USERLY<span className='text-blue-400'>.</span></h2>
                    </div>

                    <p className='p-6 text-xl font-medium text-gray-300'>Hey there 👋</p>
                    <p className='text-gray-300 p-0 md:p-6 text-[12px] md:text-sm lg:text-base'>Welcome to our User Directory — a simple and fast way to browse and explore user information at a glance.</p>

                </div>

                <div id="image" className='relative basis-1/2 hidden md:block'>
                    <img src={userList} alt='userListImage' className='absolute z-51 md:top-[15%] top-[15%] right-[45%] w-[45%] h-[40%]'/>
                    <img src={userDetails} alt='userDetailsImage' className='absolute z-50 top-[40%] right-9 w-[45%] h-[40%]'/>
                </div>

            </div>


            <div className='bg-blue-900 w-[98%] py-10 my-2 mx-auto rounded-xl flex justify-center items-center px-10'>
              <p className='text-gray-300 text-[12px] md:text-sm lg:text-base'>
                Welcome to Userly, your go-to platform for finding and exploring user profiles. Whether you’re networking, collaborating, or simply discovering new people, our intuitive interface makes browsing user details fast and simple. Filter, search, and view profiles with ease — all in one place.
              </p>
            </div>
            
        </div>
    )
}

export default Home