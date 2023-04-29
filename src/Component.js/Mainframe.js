import React, { useContext, useEffect, useState } from 'react'
// import * as filestack from 'filestack-js';
import * as filestack from "filestack-js";
import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { apikey } from './filestackapikey';
import { Simplecontext } from './Simplecontext';
import Callaxios from './Callaxios';
export default function Mainframe() {
  const { framepricedata,Getframeprice,framedata } = useContext(Simplecontext)
  const [uploaded_images, setuploaded_images] = useState([]);
  var client = filestack.init(apikey);
  const [papervalue,setpapervalue]=useState("MATTE")
  const [framematerial,setframematerial]=useState("CLASSIC")
  // console.log("uploaded images",uploaded_images)
  let navigate = useNavigate();
  useEffect(() => {
    Upload_Product_Image()
    window.scrollTo(0, 0);
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
  // console.log("papervalue", papervalue)
  // console.log("framematerial", framematerial)
  const frameselect =()=>{
    let data = framedata.filter(t=>t.framename.toLowerCase().includes("black"))
    // console.log("frameitm",data)
    return data[0]
  }
  const Upload_Product_Image = () => {
    const options = {
      fromSources: ["local_file_system", "instagram", "facebook"],
      accept: ["image/*"],
      transformations: {
        crop: {
          aspectRatio: 4 / 4,
          force: true,
        },
      },
      maxFiles: 10,
      minFiles: 1,
      uploadInBackground: false,
      onUploadDone: (res) => {

        if (res.filesUploaded.length !== 0) {
          var newArray = [...uploaded_images];
          res.filesUploaded.forEach((element) => {
            newArray.push(element.url);
          });
          setuploaded_images(newArray);
        }
      },
    };

    client.picker(options).open();
  };
  const removeimage =(k)=>{
    let imagelist = uploaded_images
    imagelist.splice(k)
    // console.log("imagelist",imagelist)
    setuploaded_images(()=>[...imagelist])
  }
  const handlerprice=()=>{
   
    let data = framepricedata.filter(t=>t.frame==="miniframe" )
    .filter(t=>t.price.split("-")[0]==="1")
    // console.log("datdprice",data)
    if (data.length){
      // console.log("datdprice",data)
      
      return data[0].price
    }
    return null
  }
 
  const addtocart =(pricetag)=>{
    console.log('frame',frameselect()?frameselect():"no")
    console.log("frameselect()",frameselect())
    try {
      let cart_list = []
      let body = {
        total_price : pricetag.split('-')[2] * uploaded_images.length,
        image_url :uploaded_images,
        orientation :"square",
        size :pricetag.split('-')[1],
        // product_type :"",
        frame_look:framematerial,
        product_name:"Mini Frame",
        frame_type :"",
        frame_image :"/assets/img/photos/mini-frames-black.png",
        frame :frameselect()?frameselect():"",
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
      <div className=''>
        <div className='row padd' >
          <div className='col-12 col-md-8 col-lg-8'>
           
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className='row col-12'>
          {uploaded_images.map((itm,k)=>(
            <div key={k} className='col-6 col-md-4 '>
            <div className="mt-2 item">
              <figure className='framebox-shadow' >
              <img src="/assets/img/photos/black-frame.png" alt="example"  style={{width:"100%"}} /> 
              <img src={itm} alt="img" className='minimage' style={framematerial==="MODERN"?{width:"94%"}:{width:"94%",padding:"10px"}} />             
                <button onClick={()=>removeimage(k)} className="item-cart"><RxCross2 className='mt-1'/> remove</button>
              </figure>
            </div>
            </div>
          ))}
        
        <div className='col-6 col-md-4'>
        <div className="mt-2 item ">
        
          <div className='text-center upload_card ' >
            <div className='' onClick={()=>Upload_Product_Image()}>
            <FaUpload size={50} color={"black"} />
          <h6>upload images</h6>
            </div>
          </div>
        </div>
        </div>
        </div > 
        

        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>       
        </div> 
        </div>
        <div className=' col-12 col-md-4 col-lg-4'>
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
                  <label className="ps-0"><strong className="text-dark">Frame Material</strong></label><br/>              
                 <div className="switch-field2 ">
                  <input   defaultValue="CLASSIC" />
                  <label className='label1' onClick={()=>setframematerial("CLASSIC")}  style={framematerial==="CLASSIC"?{backgroundColor: "#111111",boxShadow: "none", color: "white"}:{}} >CLASSIC LOOK</label>
                  <input     defaultValue="MODERN" />
                  <label className='label2' onClick={()=>setframematerial("MODERN")} style={framematerial==="MODERN"?{backgroundColor: "#111111",boxShadow: "none", color: "white"}:{}} >MODERN LOOK</label>
                </div>
                <br/>
                <div className='line-break'/>
                  <div className='row'>
                    <div className='col-8'>
                    <label className="ps-0"><strong className="text-dark">Size</strong></label>
                    </div>
                    <div className='col-4'>
                    <span className="pe-0 text-start">
                    <p className="price">{uploaded_images.length? framepricedata? handlerprice().split('-')[1] :null:null}</p>
                  </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-8'>
                    <label className="ps-0"><strong className="text-dark">Price for {uploaded_images.length}</strong></label>
                    </div>
                    <div className='col-4'>
                    <span className="pe-0 text-start">
                    <p className="price">{uploaded_images.length?framepricedata? handlerprice().split('-')[2] * uploaded_images.length:null:null}<span className='aedsize'>AED</span></p>
                  </span>
                    </div>
                  </div>
                  
          </div>
          <a href="#" onClick={()=>addtocart(handlerprice())} className="btn btn-primary rounded w-100 mt-4">ADD TO CART</a>

          </div>
        </div>
        </div>       
      </div>
    </div>
  )
}
