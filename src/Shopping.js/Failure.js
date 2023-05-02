import React, { useEffect } from 'react'
import Callaxios from '../Component.js/Callaxios'
import { useParams } from 'react-router-dom';
import Header from '../Component.js/Header';
import Footer from '../Component.js/Footer';

export default function Failure() {
    const { order_id } = useParams();
    useEffect(() => {   
        fail()
    }, [])
    const fail=async()=>{
        try {
            // console.log("id",order_id)
            let data = await Callaxios("delete","order/orders/",{id:order_id})
            console.log("dat",data)
            if (data.data.Status===200){
                console.log("deleted")
            }
        } catch (error) {
            
        }
    }
  return (
    <div>
        <Header/>
         <div>
      <div className=''>
        <div className='row padd text-center' >
          <h1>Failed</h1>
        </div>       
      </div>
    </div>
    <Footer/>
    </div>
  )
}
