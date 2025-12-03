import React from 'react'
import { useLoaderData } from 'react-router-dom'


export async function loader() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    return users;
}

function UsersList() {

    let users = useLoaderData();
    console.log(users);
    return (
        <div className='m-5 grid grid-cols-3 px-20'>
            {
                users.map((user) => {
                    return (
                        <div className='w-[98%] h-[20vh] border border-gray-400 rounded-b-lg shadow-2xl mt-3 flex flex-col' key={user.id}>
                            <div className='w-full h-1 bg-blue-900'></div>
                            <div className='flex flex-col justify-center gap-2 ps-5'>
                                <p className='text-lg font-medium'>{user.username}</p>
                                 <p>{user.name}</p>
                               {/* <p>{user.website}</p> */}
                                 <button className='bg-gray-900 w-[15%] text-white rounded-sm flex justify-center items-center py-1 text-sm cursor-pointer'>profile</button>
                            </div>
                           


                        </div>
                    )
                })
            }

        </div>
    )
}

export default UsersList