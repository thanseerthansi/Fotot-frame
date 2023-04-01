import React, { useEffect, useState } from 'react'
import * as filestack from "filestack-js";
import { FaUpload } from "react-icons/fa";
import { Link, useParams} from 'react-router-dom';
import { ListManager } from 'react-beautiful-dnd-grid';
import { apikey } from './filestackapikey';

export default function Squarecollege () {
  const  urlparam  = useParams()
  let framesize =  urlparam.framesize
    const [uploaded_images, setuploaded_images] = useState([]);
  var client = filestack.init(apikey);
  const [papervalue,setpapervalue]=useState("MATTE")
  const [frame,setframe]=useState("Black")
 
  useEffect(() => {
    Upload_Product_Image()
    window.scrollTo(0, 0);
  }, [])
 
  // console.log("urlparam",framesize)

  const Upload_Product_Image = () => {
    const options = {
      fromSources: ["local_file_system", "instagram", "facebook"],
      accept: ["image/*"],
      transformations: {
        crop: {
          aspectRatio:1/1,
          force: true,
        },
      },
      maxFiles:framesize==="2"? 4:framesize==="3"?9:16,
      minFiles: framesize==="2"? 4:framesize==="3"?9:16,
      uploadInBackground: false,
      onUploadDone: (res) => {
        if (res.filesUploaded.length !== 0) {
          var newArray = [...uploaded_images];
          res.filesUploaded.forEach((element) => {
            newArray.push(element.url);
          });
          setuploaded_images(()=>[...newArray]);
        }
      },
    };

    client.picker(options).open();
  };

const handleOnDragEnd = (sourceindex,destinationindex) => {
  // if (!destinationindex) return;
  const newItems = [...uploaded_images];
  const [reorderedItem] = newItems.splice(sourceindex, 1);
  newItems.splice(destinationindex, 0, reorderedItem);
  setuploaded_images(newItems);
};
  return (
    <div>
        <div className=''>
        <div className='row padd' >
          <div className='col-12 col-md-8 col-lg-8'>
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className="overflowbar " >
          <div className='text-center' style={uploaded_images.length?{display:'block'}:{display:'none'}}>
          <h4>Drag & reorder images</h4>
          </div>
          
            {uploaded_images.length? 
            <div className={frame==="Black"?'  border-cp framebox-shadow':frame==="Natural oak"?"d-flex  border-oak-cp framebox-shadow":"d-flex  border-white-cp framebox-shadow"} style={framesize==="2"? {width:"386px",margin:"auto",padding:"5px"}:framesize==="3"?{width:"505px",margin:"auto",padding:"5px"}:{width:"505px",margin:"auto",padding:"5px"}}   >
              
    <div className="App">
      <ListManager
        items={uploaded_images}
        direction="horizontal"
        maxItems={framesize==="2"? 2:framesize==="3"?3:4}
        render={item => <img src={item} alt="img" className='square-image' style={framesize==="4"?{width:"120px",height:"100%"}:framesize==="3"?{width:"160px",height:"100%"}:{width:"180px",height:"100%"}}/>}
        onDragEnd={handleOnDragEnd}
      />
    </div>
      
            {/* {uploaded_images.length?uploaded_images.map((itm,k)=>(               
                <img src={itm} alt="img" className='image-lcp1' style={uploaded_images.length===3?{width:"31.5%",height:"100%"}:uploaded_images.length===2?{width:"47.2%",height:"100%"}:{width:"23.2%",height:"100%"}}    />     
            )):null} */}
            </div>  
            :<div>
                <p>No Images Selected</p>
                <div className='col-6 col-md-3'>
        <div className="mt-2 item ">      
          <div className='text-center upload_card ' >
            <div className='' onClick={()=>Upload_Product_Image()}>
            <FaUpload size={50} color={"black"} />
          <h6>upload images</h6>
            </div>
          </div>
        </div>
        </div>
        </div>}     
        </div>
        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>       
        </div> 
        </div>
        <div className=' col-12 col-md-4 col-lg-4  '>
        <div className='p-2 my-5 border-cart 'style={uploaded_images.length?{display:"block"}:{display:'none'}} >
          <h3 className="mt-4  ">Mini Frames</h3>
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
            <div className='mb-3'>
              <label className='ps-0 mb-2'><strong className='text-dark'>{frame} Frame</strong></label><br/>
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
            </div>
                
                <div className='line-break'/>
                  <div className='row'>
                    <div className='col-6'>
                    <label className="ps-0"><strong className="text-dark">Size </strong></label>
                    </div>
                    <div className='col-6'>
                    <span className="pe-0 text-end">
                    <p className="price">89.5cm x 22cm</p>
                  </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                    <label className="ps-0"><strong className="text-dark">Price </strong></label>
                    </div>
                    <div className='col-6'>
                    <span className="pe-0 text-end">
                    <p className="price"><span style={{fontSize:"80%"}}>AED</span> 10</p>
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