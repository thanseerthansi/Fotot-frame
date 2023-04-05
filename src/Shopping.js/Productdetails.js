import React, { useEffect, useState } from 'react'
// import * as filestack from 'filestack-js';
import * as filestack from "filestack-js";
// import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { apikey } from './filestackapikey';
export default function Productdetails() {

    const [frame,setframe]=useState("Black")
    const [papervalue,setpapervalue]=useState("MATTE")
    const [framematerial,setframematerial]=useState("CLASSIC")
    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [])
 
 
  
  return (
    <div>
      <div className=''>
        <div className='row padd' >
          <div className='col-12 col-md-7 col-lg-7'>
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className='row col-12'>
        <div className="overflowbar " >
            <div  className='col-6 col-md-4 '>
           
             <div className={' d-flex border-cp framebox-shadow'} style={{width:"335px",height:"100%",margin:"auto"}}   >
            <img src="\assets\img\brands\marilyn.jpg" alt="img" className='' style={{width:"100%",height:"100%"}}    />
            </div>
            </div>
            </div>
            
        
        
       
        </div > 
        

        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>       
        </div> 
        </div>
        <div className=' col-12 col-md-5 col-lg-5'>
        <div className='p-2 my-5 border-cart ' >
          <h3 className="mt-4  ">marilyn</h3>
          {/* <div className='line-break'/> */}
          <div className="table-responsive p-3">
          <div className='line-break'/>
                  <label className="ps-0"><strong className="text-dark">Papper</strong></label><br/>              
                 <div className="switch-field ">
                  <input type="radio" id="radio-one" name="switch-one" onClick={(e)=>e.target.value?setpapervalue("MATTE"):""} value="true" defaultChecked/>
                  <label className='label1' htmlFor="radio-one">MATTE</label>
                  <input type="radio" id="radio-two" name="switch-one" onClick={(e)=>e.target.value?setpapervalue("GLOSS"):""} defaultValue="GLOSS" />
                  <label className='label2' htmlFor="radio-two">GLOSS</label>
                </div>
                <br/>
                <div className='line-break'/>
                  <label className="ps-0"><strong className="text-dark">Frame </strong></label><br/>              
                  <div className='d-flex'>
              <div className='ps-2'>
               <img className='frameimage ' style={frame==="Black"?{border:"2px solid black"}:{}} onClick={()=>setframe("Black")} src="\assets\img\photos\blackH.jpg" width={70} alt="img" />
              </div>
              <div className='ps-2'>
               <img className='frameimage' style={frame==="Natural oak"?{border:"2px solid black"}:{}} onClick={()=>setframe("Natural oak")} src="\assets\img\photos\oakH.jpg" width={70} alt="img" />
              </div>
              <div className='ps-2'>
               <img className='frameimage' style={frame==="White"?{border:"2px solid black"}:{}} onClick={()=>setframe("White")} src="\assets\img\photos\whiteH.jpg" width={70} alt="img" />
              </div>
              </div>
                <br/>
                <div className='line-break'/>
                  <div className='row'>
                    <div className='col-8'>
                    <label className="ps-0"><strong className="text-dark">Price </strong></label>
                    </div>
                    <div className='col-4'>
                    <span className="pe-0 text-start">
                    <p className="price">$10</p>
                  </span>
                    </div>
                  </div>                  
          </div>
          <a href="#" className="btn btn-primary rounded w-100 mt-4">ADD TO CART</a>
          </div>
        </div>
        </div>       
      </div>
    </div>
  )
}
