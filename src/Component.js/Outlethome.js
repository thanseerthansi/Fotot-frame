import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Scripts from './Scripts'

export default function Outlethome() {
    useEffect(() => {
      Scripts()
    
    }, [])
    
  return (
    <div>
    <div className="content-wrapper">
        <Header/>
        <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}
