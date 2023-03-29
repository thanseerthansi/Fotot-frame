import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Collage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
  return (
    <div>
          <div className=''>
        <div className=' '  >
        <div className="card-body minibackgound "  >   
        <div className='row col-12'>
      

            <div  className='col-12 col-md-4 '>
              {/* <div><p>You can add 2, 3, or 4 images</p></div> */}
            
            <div className="card-bodyframe " >
                <Link to="/Collegeframe">
              <div className=' d-flex border-cp' >
              <div className='image_cp'>
                <img src="\assets\img\photos\ff-cp1.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              <div className='image_cp2 '>
                <img src="\assets\img\photos\ff-cp1.jpg" alt="img"  style={{width:"100%"}}   />   
              </div>
              </div>   
              </Link>      
            </div>
            
            </div>
            <div  className='col-12 col-md-4 '>
            <div className="card-bodyframe"style={{marginLeft:"20%",marginRight:"20%"}} >
              <Link to="/potratecollege">
              <div className=' border-cp' >
              <div className='image_cl'>
                <img src="\assets\img\photos\ff-lp1.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              <div className='image_cl2 '>
                <img src="\assets\img\photos\ff-lp1.jpg" alt="img"  style={{width:"100%"}}   />   
              </div>
              <div className='image_cl2 '>
                <img src="\assets\img\photos\ff-lp1.jpg" alt="img"  style={{width:"100%"}}   />   
              </div>
              </div>  
              </Link>       
            </div>
            </div>
            <div  className='col-12 col-md-4 '>
            <div className="card-bodyframe" >
              <div className='  border-cp ' >
              <div className='d-flex'>
              <div className='image_cs '>
                <img src="\assets\img\photos\ff-cs4.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              <div className='image_cs2 '>
                <img src="\assets\img\photos\ff-cs4.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              </div>  
              <div className='d-flex'>
              <div className='image_cs3 '>
                <img src="\assets\img\photos\ff-cs4.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              <div className='image_cs4 '>
                <img src="\assets\img\photos\ff-cs4.jpg" alt="img" style={{width:"100%"}}   />   
              </div>
              </div>  
             
              </div>         
            </div>
            </div>
       
        
        
        </div > 
        

        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>   
       <div className='m-5 text-start'>
        <h4>Collage Photo Prints & Frames</h4>
        <div className=''> <span>How can you remember your wedding, your party, your holiday or an unexpected day with friends with just one picture?<br/>
            Memories are a part of us, and draft photo collages let them stay with you forever.<br/>
            Whether you’re making a gift for a loved one or are seeking a meaningful addition to your home, our collage photo frames let you decide.<br/>
            So, what are you waiting for? Create your own destiny with draft collages.<br/>
            Choose between landscape, collage or square format to start!</span></div>
        </div>    
        </div> 
        </div>
    </div>
  )
}
