import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Scripts from './Scripts'
import Signmodal from './Signmodal'
import { Simplecontext } from './Simplecontext'

export default function Outlethome() {
  const {promodal1,promodal2,setpromodal1,setpromodal2 } = useContext(Simplecontext)
    useEffect(() => {
      Scripts()
    
    }, [])
    
  return (
    <div>
    <div className="content-wrapper">
        <Header/>
        <Outlet/>
        <Signmodal/>
    </div>
    <Footer/>
    </div>
  )
}
