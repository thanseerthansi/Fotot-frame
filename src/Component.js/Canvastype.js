import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Canvastype() {
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
            <div className=" margin-csl" title="Landscape" >
                <Link to={{pathname: "/canavsframe"}} state={{string: "landscape"}}>
              <div className='  ' >             
              <div className='canvas-rotate '>
                <img src="\assets\img\photos\demo-landscape2.jpg" alt="img" style={{width:"100%"}}   />   
                <div className='canvas-border'>
                   
                <img src="\assets\img\photos\demo-landscape2.jpg" alt="img" style={{maxWidth:"none",height:"100%",display:"block"}} /> 

                </div>
              </div>
              </div> 
              </Link>        
            </div>
            </div>  
            <div  className='col-12 col-md-4 '>
            <div className=" margin-csp" title="portait" >
                <Link  to={{pathname: "/canavsframe"}} state={{string: "portait"}}>
              <div className='  ' >             
              <div className='canvas-rotate '>
                <img src="\assets\img\photos\demo-portrait2.jpg" alt="img" style={{width:"100%"}}   />   
                <div className='canvas-border'>
                <img src="\assets\img\photos\demo-portrait2.jpg" alt="img" style={{maxWidth:"none",height:"100%"}}   /> 
                </div>
              </div>
              </div> 
              </Link>        
            </div>
            </div>  
            <div  className='col-12 col-md-4 '>
            <div className=" margin-css" title="Square" >
                <Link  to={{pathname: "/canavsframe"}} state={{string: "square"}}>
              <div className='  ' >             
              <div className='canvas-rotate '>
                <img src="\assets\img\photos\demo-square2.jpg" alt="img" style={{width:"100%"}}   />   
                <div className='canvas-border '>
                    <div></div>
                <img src="\assets\img\photos\demo-square2.jpg" alt="img" style={{maxWidth:"none",height:"100%"}}   /> 
                </div>
              </div>
              </div> 
              </Link>        
            </div>
            </div>  
        </div > 
        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>   
       <div className='m-5 text-start'>
        <h4>Canvas Photo Prints & Frames</h4>
        <div className=''> <span>The photo canvas prints are a special art piece for your friends, for your family and for you.<br/>
        At draft, we like to do things in threes.<br/>
        Our photo canvas prints and frames area compelling addition to your home,<br/>
        a treasured gift for a loved one and a precious moment immortalised for your pleasure-are no exception.<br/>
        Choose from either a landscape, portrait or square canvas format, and we’ll sort the rest.</span></div>
        </div>    
        </div> 
        </div>
    </div>
  )
}
