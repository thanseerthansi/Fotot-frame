import React, { useContext, useEffect, useState } from 'react'
import * as filestack from "filestack-js";
import { GrPowerReset } from "react-icons/gr";
import { FaUpload } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { apikey } from './filestackapikey';
import { Simplecontext } from './Simplecontext';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
export default function Papperprint() {
  const { framedata,Getframe,framepricedata } = useContext(Simplecontext)
  const [uploaded_images, setuploaded_images] = useState([]);
  var client = filestack.init(apikey);
  const [papervalue,setpapervalue]=useState("MATTE")
  const [frame,setframe]=useState('')
  const [selectitm,setselectitm]=useState('')
  const [pricelist,setpricelist]=useState('')
  let location = useLocation();
  let navigate = useNavigate();
  console.log("satae",location.state.string)
  // let params = useParams()
  // let frametype = params.frametype
  let frametype = location.state.string

  // console.log("setframe",frame?"ok":"not")
  useEffect(() => {
    Upload_Product_Image()
    window.scrollTo(0, 0);
    // to prevent reload of page 
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
      // return "";
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [])
  const notify = (msg) => toast.success(msg, {
    position: "top-left",
    theme: "dark",
    });
const notifyerror = (msg) => toast.error(msg, {
    position: "top-left",
    theme: "dark",
    });
  // console.log("frame canvas", framecanvas)
 
  // console.log("rtio",ratio)
  const Upload_Product_Image = () => {
    const options = {
      fromSources: ["local_file_system", "instagram", "facebook"],
      accept: ["image/*"],
      transformations: {
        
        crop: {
          aspectRatio:frametype==="landscape"?3/2:frametype==="portait"?2/3:1/1,
          force: true,
        },
      },
      maxFiles: 1,
      minFiles: 1,
      uploadInBackground:false,
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
  const handlerprice=()=>{
   
    let data = framepricedata.filter(t=>t.frame==="print" )
    .filter(t=>t.orientation===frametype)
    
    // console.log("datdprice",data)
    if (data.length){
      // console.log("datdprice",data)
      
      return data[0].price
    }
    return null
  }
  const addtocart =(pricetag)=>{
    try {
      let cart_list = []
      let body = {
        total_price : pricetag.split('-')[2] ,
        image_url :uploaded_images,
        orientation :frametype,
        size :pricetag.split('-')[1],
        // product_type :"",
        frame_look:"",
        product_name:"Print",
        frame_type :"",
        frame_image :"/assets/img/photos/print.png",
        frame :frame?selectitm:"",
        papper :papervalue,
        quantity :1,
        vat :"",
        shipping :"",
      }
      if(window.localStorage.getItem('ffcart')){
        cart_list = window.localStorage.getItem('ffcart')
      }
      if (cart_list.length){
        cart_list = JSON.parse(cart_list)     
      }
      let c_list = cart_list.concat(body)  
      window.localStorage.setItem('ffcart',JSON.stringify(c_list))
      return navigate('/carttext')
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div>
        <div className='container'>
        <div className='row padd' >
        <ToastContainer/> 
          <div className='col-12 col-md-8 col-lg-8'>
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className='text-center' style={uploaded_images.length?{display:'block'}:{display:'none'}}>
          
          </div>
        <div className="overflowbar m-auto" >       
            {uploaded_images.length? <>
            {/* <div className="box-shadow p-1" style={{width:"410px",margin:"auto"}} > */}
            {uploaded_images.length?uploaded_images.map((itm,k)=>(               
                 <div key={k} className='  ' >             
                 <div className='box-shadow p-1 'style={{width:"50%",margin:"auto"}}>
                   <img src={itm} alt="img" style={{width:"100%"}}   />   
                  
                 </div>
                 </div>    
            )):null}
            {/* </div> */}
            </>
            
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
        <div className='text-center mt-5' style={uploaded_images.length?{display:'block'}:{display:'none'}}><span onClick={()=>setuploaded_images([]) & Upload_Product_Image()} className=' reset-link'><GrPowerReset color="white" /> reset image</span></div>
        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>       
        </div> 
        </div>
        <div className=' col-12 col-md-4 col-lg-4  '>
        <div className='p-2 my-5 border-cart 'style={uploaded_images.length?{display:"block"}:{display:'none'}} >
          
          {/* <div className='line-break'/> */}
          <div className="table-responsive p-3">
          <div><h3 className="pb-1 ">Print</h3></div>
          <div className='line-break'/>
          <label className="ps-0"><strong className="text-dark">Papper</strong></label>            
            <div className="switch-field ">
            <input type="radio" id="radio-one" name="switch-one" onClick={(e)=>e.target.value?setpapervalue("MATTE"):""} value="true" defaultChecked/>
            <label className='label1' htmlFor="radio-one">MATTE</label>
            <input type="radio" id="radio-two" name="switch-one" onClick={(e)=>e.target.value?setpapervalue("GLOSS"):""} defaultValue="GLOSS" />
            <label className='label2' htmlFor="radio-two">GLOSS</label>
        </div>
            
            
            {/* <div className='mb-3 ' style={frame?{display:'block'}:{display:'none'}}>
            <div className='line-break'/>
              <label className='ps-0 mb-2'><strong className='text-dark'>{frame} Frame</strong></label><br/>
              <div className='d-flex overflowbar'>
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
            </div> */}
                
                <div className='line-break'/>
                <div className='mb-2'>
              <label className='ps-0 mb-2'><strong className='text-dark'>Frame Size</strong></label><br/>
              <div className='form-select-wrapper'>
              <select required onClick={(e)=>setpricelist(e.target.value)} className="form-select form-select-md ">
                  <option value="" hidden>select size</option>
                    {handlerprice()?handlerprice().split(',').map((itm,k)=>(
                    <option key={k} value={itm}  >{itm.split('-')[1]} &emsp;&emsp;&emsp;&emsp;{itm.split('-')[2]} AED </option>
                    )):null}
                    {/* <option value={"45 x 30 cm"} >45 x 30 cm &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; AED 150</option>
                    <option value={"45 x 30 cm"} >45 x 30 cm &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; AED 150</option> */}
                    
                    
                   
                  </select>
              
              
              </div>
            </div>
                  {/* <div className='row'>
                    <div className='col-6'>
                    <label className="ps-0"><strong className="text-dark"> Size </strong></label>
                    </div>
                    <div className='col-6'>
                    <span className="pe-0 text-end">
                    <p className="price">89.5cm x 22cm</p>
                  </span>
                    </div>
                  </div> */}
                  {/* <div className='row'>
                    <div className='col-6'>
                    <label className="ps-0"><strong className="text-dark">Price </strong></label>
                    </div>
                    <div className='col-6'>
                    <span className="pe-0 text-end">
                    <p className="price"><span style={{fontSize:"80%"}}>AED</span> 10</p>
                  </span>
                    </div>
                  </div> */}
                  
          </div>
            <div className='container'>
              <button onClick={()=>pricelist? addtocart(pricelist):notifyerror("select size")} className="btn btn-primary rounded w-100 mt-0">ADD TO CART</button>
            </div>
          </div>
        </div>
        </div>       
      </div>
    </div>
  )
}
