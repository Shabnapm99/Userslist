import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorPage() {
    const error = useRouteError();
    console.log(error)
  return (
    <div className='flex flex-col h-screen justify-center items-center gap-1'>
        <h2 className='text-5xl mb-3'>😥</h2>
        <h1 className='font-extrabold text-3xl'>{error.status}</h1>
        <h2 className='text-xl font-semibold'>Oops!!!</h2>
        <p>Something went wrong</p>
         <p className='text-sm'>
        <i>{error.statusText}</i>
      </p>
    </div>
  )
}

export default ErrorPage