import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


export async function loader() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    return users;
}

function UsersList() {

    let users = useLoaderData();
    console.log(users);

    return (
        <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20'>
            {
                users.map((user) => {
                    return (
                        <div className='w-[98%] border border-gray-400 rounded-b-lg shadow-2xl mt-3 flex flex-col pb-2' key={user.id}>
                            <div className='w-full h-1 bg-blue-900'></div>
                            <div className='flex flex-col justify-center gap-2 ps-5 text-[12px] md:text-sm lg:text-base'>
                                <p className='text-lg font-medium'>{user.username}</p>
                                 <p>{user.name}</p>
                               {/* <p>{user.website}</p> */}
                                 <Link to={`/users/${user.id}`}><button className='bg-gray-900 w-[15%] text-white rounded-sm flex justify-center items-center py-1 text-[10px] md:text-[12px] lg:text-sm cursor-pointer'>profile</button></Link>
                            </div>
                           


                        </div>
                    )
                })
            }

        </div>
    )
}

export default UsersList