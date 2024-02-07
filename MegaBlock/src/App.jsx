/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {Header , Footer} from './components' 
import './App.css'

import authService from "./appwrite/auth"
import {login , logout} from "./store/authSlice"  ;
import { useEffect } from 'react';

function App() {
  const [loading ,setLoading ] = useState(true)
  const dispatch = useDispatch()

  useEffect( ()=> {
    authService.getCurrentUser()
    .then( (userData) =>{
      if(userData){
        dispatch (login({userData}))
      }
      else{
        dispatch({logout})

      }
    })
    .finally( ()=> setLoading(false))

  },[])
  
  return !loading ? (
    <div  className="min-h-screen flex flex-wrap content-between bg-gray-400" >
      <div className='w-full block '>
        <Header />
        <main> 
          ToDo:
          <oulet/>
           
        </main>
        <Footer/>

      </div>
      
    </div>
  ) : (null)
  
}

export default App
