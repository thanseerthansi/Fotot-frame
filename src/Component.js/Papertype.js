import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Papertype() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
  return (
    <div>
          <div className=''>
        <div className=' '  >
        <div className="card-body minibackgound "  >   
        <div className='row col-12 '>

           
            
            <div  className='col-12 col-md-4 '>
            <div className=" margin-csl"  title="Landscape"  >
                <Link to={{pathname: "/paperprint"}} state={{string: "landscape"}}>
              <div className='  ' >             
              <div className='box-shadow p-1 '>
                <img src="\assets\img\photos\demo-landscape2.jpg" alt="img" style={{width:"100%"}}/>   
              </div>
              </div> 
              </Link>        
            </div>
            </div>  
            <div  className='col-12 col-md-4 '>
            <div className=" margin-csp"  title="portait"  >
                <Link  to={{pathname: "/paperprint"}} state={{string: "portait"}}>
              <div className='  ' >             
              <div className=' box-shadow p-1'>
                <img src="\assets\img\photos\demo-portrait2.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              </div> 
              </Link>        
            </div>
            </div>  
            <div  className='col-12 col-md-4 '>
            <div className=" margin-css"  title="Square">
                <Link  to={{pathname: "/paperprint"}} state={{string: "square"}}>
              <div className='  ' >             
              <div className='box-shadow p-1 '>
                <img src="\assets\img\photos\demo-square2.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              </div> 
              </Link>        
            </div>
            </div>  
        </div > 
        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>   
          
        </div> 
        </div>
    </div>
  )
}
