import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import UserDetails,{userDataLoader} from './components/UserDetails'
import About from './components/About'
import UsersList,{ loader as userListLoader } from './components/UsersList'
import Root from './routes/root';
import ErrorPage from './components/ErrorPage'



function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
  
      children:[{
        path:'/',
        element:<Home/>
      },{
      path:'/about/',
      element:<About/>

    }, {
      path:'/users/',
      element:<UsersList/>,
      loader:userListLoader
    },{
      path:'/users/:id',
      element:<UserDetails/>,
      loader:userDataLoader
    }
  ],

  errorElement:<ErrorPage/>,
    },
    
   
    
  ])

  return (
    <>

    <RouterProvider router={router}/>

    </>
  )
}

export default App
