import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export async function userDataLoader({params}){//data loader function gets params object automatically

    const id = params.id;

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();
    return data;
}

function UserDetails() {

    let user = useLoaderData();
   
    let fName = user.name.split(' ')[0];
    let lName = user.name.split(' ')[1];

    return (
        <div className='m-3 w-[98%] flex flex-col items-center gap-4'>
            <div className='w-[75%] border border-gray-300 rounded-b-lg'>
                <div className='w-full h-15 bg-blue-900'></div>
                <div className='flex flex-col justify-center items-center p-5'>
                    <p className='font-semibold text-lg'>{user.username}</p>
                    <p>{user.name}</p>
                </div>
                <div className='m-4 flex gap-3 text-sm'>
                    <button className='bg-gray-900 rounded-md px-3 py-1  text-white'>About</button>
                    <button className=' rounded-md px-3 py-1 text-gray-700'>Comments</button>
                </div>
            </div>

            <div className='flex w-[75%] justify-between'>
                <div className='w-[60%] border border-gray-300 rounded-b-lg shadow-2xl p-5'>
                    <p className='font-medium text-sm my-2'>First Name</p>
                    <hr className='text-gray-300'/>
                    <p className='text-sm my-1'>{fName}</p>

                    <p className='font-medium text-sm my-2'>Last Name</p>
                    <hr className='text-gray-300'/>
                    <p className='text-sm my-2'>{lName}</p>

                    <p className='font-medium text-sm my-2'>Email</p>
                    <hr className='text-gray-300'/>
                    <p className='text-sm my-2'>{user.email}</p>

                    <p className='font-medium text-sm my-2'>Mobile</p>
                    <hr className='text-gray-300'/>
                    <p className='text-sm my-2'>{user.phone}</p>

                     <p className='font-medium text-sm my-2'>Website</p>
                    <hr className='text-gray-300'/>
                    <p className='text-sm my-2'>{user.website}</p>
                </div>
                <div className='w-[35%] border border-gray-300 rounded-b-lg shadow-2xl p-5'>
                   

                    <p className='font-medium text-sm my-2'>address</p>
                    <hr className='text-gray-300'/>
                    <address>
                    <p className='text-sm my-2'>{user.address.street}</p>
                    <p className='text-sm my-2'>{user.address.suite}</p>
                    <p className='text-sm my-2'>{user.address.city}</p>
                    <p className='text-sm my-2'>{user.address.zipcode}</p>
                    </address>


                    <p className='font-medium text-sm my-2'>Office</p>
                    <hr className='text-gray-300'/>
                    <p className='text-sm my-2'>{user.company.name}</p>
                </div>
            </div>


        </div>
    )
}

export default UserDetails