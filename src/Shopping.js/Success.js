import React, { useEffect } from 'react'
import Header from '../Component.js/Header'
import Footer from '../Component.js/Footer'
import { useParams } from 'react-router-dom';
import Callaxios from '../Component.js/Callaxios';

export default function Success() {
  const { id,order_id } = useParams();
    useEffect(() => {
      changestatus()
    }, [])
    const changestatus=async()=>{
      try {
        let data =await Callaxios("patch","order/orders/",{id:order_id,paidstatus:true})
        // console.log("datastatu",data)
        if (data.data.Status===200){
          // notify("status changed")
          console.log("ststus",data)
       
        }
      } catch (error) {
        
      }
    }
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
