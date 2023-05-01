import React, { useEffect } from 'react'
import Header from '../Component.js/Header'
import Footer from '../Component.js/Footer'

export default function Success() {
    useEffect(() => {
      
      
    }, [])
    
  return (
    <div>
        <Header/>
      <div className=''>
        <div className='row padd text-center' >
          <h1>Thank you</h1>
          <h4>Successfully Ordered</h4>
          
          
       
        </div>       
      </div>
      <Footer/>
    </div>
  )
}
