import React, { createContext, useEffect, useState } from 'react'
import Callaxios from './Callaxios';
export const Simplecontext = createContext();

export default function Simplecontextprovider({children}) {
    const [framedata,setframedata]=useState([])
    const [framepricedata,setframepricedata]=useState([])
    const [promodal2,setpromodal2]=useState(false)
    const [promodal1,setpromodal1]=useState(false)
    useEffect(() => {
      Getframe()
      Getframeprice()
     
    }, [])
    
    const Getframe =async()=>{
        try {
          let data = await Callaxios("get","frame/frame/")
          if (data.status===200){
            // console.log("data.data ",data.data)
            setframedata(data.data)
          }
          // console.log("data",data)
        } catch (error) {
          console.log(error)
        }
      } 
    const Getframeprice =async()=>{
        try {
          let data = await Callaxios("get","frame/frameprice/")
          if (data.status===200){
            // console.log("data.data ",data.data)
            setframepricedata(data.data)
          }
          // console.log("data",data)
        } catch (error) {
          console.log(error)
        }
      } 
    
     
  return (
    <Simplecontext.Provider value={{
        framedata,Getframe,framepricedata,Getframeprice,setpromodal1,setpromodal2,promodal1,promodal2
    }}>{children}</Simplecontext.Provider>
  )
}
