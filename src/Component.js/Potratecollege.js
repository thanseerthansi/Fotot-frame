import React, { useContext, useEffect, useState } from 'react'
import * as filestack from "filestack-js";
import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { apikey } from './filestackapikey';
import { Simplecontext } from './Simplecontext';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';

export default function Potratecollege () {
  const { framedata,Getframe,framepricedata } = useContext(Simplecontext)
  const [uploaded_images, setuploaded_images] = useState([]);
  const [selectitm,setselectitm]=useState('')
  var client = filestack.init(apikey);
  const [papervalue,setpapervalue]=useState("MATTE")
  const [frame,setframe]=useState("Black")
  let navigate = useNavigate();
  // console.log("select",selectitm)
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
  const notify = (msg) => toast.success(msg, {
    position: "top-left",
    theme: "dark",
    });
const notifyerror = (msg) => toast.error(msg, {
    position: "top-left",
    theme: "dark",
    });
  // console.log("uploadeimage", uploaded_images)

  const Upload_Product_Image = () => {
    const options = {
      fromSources: ["local_file_system", "instagram", "facebook"],
      accept: ["image/*"],
      transformations: {
        crop: {
          aspectRatio:3/2,
          force: true,
        },
      },
      maxFiles: 4,
      minFiles: 2,
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
//   const removeimage =(k)=>{
//     let imagelist = uploaded_images
//     imagelist.splice(k)
//     console.log("imagelist",imagelist)
//     setuploaded_images(()=>[...imagelist])
//   }
const handleOnDragEnd = (result) => {
  if (!result.destination) return;

  const newItems = [...uploaded_images];
  const [reorderedItem] = newItems.splice(result.source.index, 1);
  newItems.splice(result.destination.index, 0, reorderedItem);

  setuploaded_images(newItems);
};
const addtocart =(pricetag)=>{
  try {
    let cart_list = []
    let body = {
      total_price : pricetag.split('-')[2],
      image_url :uploaded_images,
      orientation :"Portait",
      size :pricetag.split('-')[1],
      // product_type :"",
      frame_look:"",
      product_name:"College",
      frame_type :"",
      frame_image :"/assets/img/photos/collage-black.png",
      frame :selectitm,
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
const handlerprice=()=>{
  let data = framepricedata.filter(t=>t.frame==="college" )  
  .filter(t=>t.orientation?t.orientation==="portait":"")
  console.log("datdprice",data)
  
  if (data.length){
    console.log("datdprice",data[0].price)
    let priceno = data[0].price.split(',').filter(t=>t.split("-")[0]===uploaded_images.length.toString())
    console.log("priceno",priceno[0])
    if (priceno.length){
      return priceno[0]
    }else{
      return null
    }
    
  }
  return null
}
  return (
    <div>
        <div className=''>
        <div className='row padd' >
          <ToastContainer/>
          <div className='col-12 col-md-8 col-lg-8'>
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className=" " >
          <div className='text-center' style={uploaded_images.length?{display:'block'}:{display:'none'}}>
          <h4>Drag & reorder images</h4>
          </div>
          
            {uploaded_images.length? 
            <div className=" border-cp framebox-shadow" style={{width:"300px",margin:"auto",borderImage:`url(${selectitm?.image??"/assets/img/photos/collage-black.png"})1%  stretch repeat`}}   >
              <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="uploaded-images" direction='vertical'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} >
            {uploaded_images.map((image, index) => (
              <Draggable key={index} draggableId={index.toString()} index={index}>
                {(provided) => (
                  <img
                  src={image}
                  alt="img"
                  className="image-pcp pcpwidth "
                  
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
              
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
              {/* <div className='ps-2'>
               <img className='frameimage ' style={frame==="Black"?{border:"2px solid black"}:{}} onClick={()=>setframe("Black")} src="\assets\img\photos\blackH.jpg" width={70} alt="img" />
              </div> */}
              {framedata.map((itm,k)=>(
                  <div key={k} className='ps-2'>
                  <img className='frameimage ' style={frame===itm.framename?{border:"2px solid black"}:{}} onClick={()=>setframe(itm.framename) & setselectitm(itm)} src={itm.main_image} width={70} alt="img" />
                 </div>
                ))} 
              
              </div>
            </div>
                
                <div className='line-break'/>
                  <div className='row'>
                    <div className='col-6'>
                    <label className="ps-0"><strong className="text-dark">Size </strong></label>
                    </div>
                    <div className='col-6'>
                    <span className="pe-0 text-end">
                    <p className="price">{uploaded_images.length?framepricedata? handlerprice()?handlerprice().split('-')[1] :null:null:null}</p>
                  </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                    <label className="ps-0"><strong className="text-dark">Price </strong></label>
                    </div>
                    <div className='col-6'>
                    <span className="pe-0 text-end">
                    <p className="price">{uploaded_images.length?framepricedata? handlerprice()?handlerprice().split('-')[2] :null:null:null}<span className='aedsize'> AED</span></p>
                  </span>
                    </div>
                  </div>
                  
          </div>
          <a href="#" onClick={()=>selectitm? addtocart(handlerprice()):notifyerror("Select Frame")} className="btn btn-primary rounded w-100 mt-4">ADD TO CART</a>

          </div>
        </div>
        </div>       
      </div>
    </div>
  )
}
