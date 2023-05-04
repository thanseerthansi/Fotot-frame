import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import moment from 'moment';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListManager } from 'react-beautiful-dnd-grid';
import { BaseUrl, imgUrl } from '../Component.js/Url';
export default function Profilepage() {
  const [cartdata,setcartdata]=useState([])
  const [userdata,setuserdata]=useState([])
  const [selectitm,setselectitm]=useState('')
  let navigate = useNavigate();
  // console.log("cartdata",cartdata)
    useEffect(() => {
      GetUser()
      Getuserorder()
      window.scrollTo(0, 0);
     
    }, [])
    const notify = (msg) => toast.success(msg, {
      position: "top-left",
      theme: "dark",
      });
  const notifyerror = (msg) => toast.error(msg, {
      position: "top-left",
      theme: "dark",
      });
  
  
  const GetUser=async()=>{
    try {
      let data=await axios(BaseUrl+"user/user/",{
        headers: {
          'Authorization':  window.localStorage.getItem("fotoframe_usertoken")
        }
      })
      // console.log("userdata",data)
      if(data.status===200){
        setuserdata(data.data)
      }
    } catch (error) {
      
    }
  }
  const Logouthandler=()=>{
    window.localStorage.removeItem('fotoframe_usertoken')
    return navigate("/")
  }
  const Getuserorder=async()=>{
    try {
      let data = await axios(BaseUrl+"order/userorder/",{
        params:{limit:2},
        headers: {
          'Authorization':window.localStorage.getItem("fotoframe_usertoken")
        }
      })
      // console.log("orderdata",data)
      if (data.status===200){
        setcartdata(data.data)
      }
    } catch (error) {
      
    }
  }
  
  return (
    <div>
        <div>
  <section className="wrapper bg-light">
    
    <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div className="row gx-md-8 gx-xl-12 gy-12">
         
        <div className="col-lg-4"> 
        <h3 className="mb-4">Profile </h3>
          <div className="table-responsive">
            <table className="table table-order">
              <tbody>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Name : {userdata.length?userdata[0].first_name:null} </strong></td>
                </tr>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Email :  {userdata.length?userdata[0].username:null}</strong></td>               
                </tr>
                <tr>
                  <td> <div className="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
                <button onClick={()=>Logouthandler()} className="btn btn-primary rounded">Logout</button>
            </div></td>
               
                </tr>
               
              </tbody>
            </table>
          </div>
          
        </div>
        
        {/* /column */}
        
        <div className='col-lg-8'>  
        <h3 className="mb-4">Orders </h3>
        <div className="row mt-0 gy-4">
        <table className="table text-center shopping-cart mt-0">
              {/* <thead>
                <tr>
                  <th className="ps-0 w-25">
                    <div className="h4 mb-0 text-start">Product</div>
                  </th>
                  <th>
                    <div className="h4 mb-0">Price</div>
                  </th>
                  <th>
                    <div className="h4 mb-0">Date</div>
                  </th>
                  
                 
                  <th />
                </tr>
              </thead> */}
              <tbody>
                {cartdata.length?cartdata.map((citm,ck)=>(
                <tr key={ck}>
                  <td className="option text-start d-flex flex-row align-items-center ps-0">
                    <figure className="rounded w-17"><img src={citm.product?imgUrl+citm.product[0].product_image: citm.product_type===("Mini Frame")?"/assets/img/photos/mini-frames-black.png":citm.product_type==="College"?"/assets/img/photos/collage-black.png":citm.product_type==="Canvas"?"/assets/img/photos/canvas.png":citm.product_type==="Print"?"/assets/img/photos/print.png":imgUrl+citm.product[0].product_image} alt="" /></figure>
                    <div className="w-100 ms-4">
                      <h3 className="post-title h6 lh-xs mb-1">{citm.product?citm.product.length?citm.product[0].product_name:citm.product_type:citm.product_type} </h3>
                      <div className="small">Papper Type: {citm.papper} </div>
                      <div className="small">Size: {citm.size}</div>
                      <div className="small">Orientation: {citm.orientation}</div>
                      <div className="small"><u className='hover pointerviewb' onClick={()=>setselectitm(citm)} data-bs-target="#modal-order" data-bs-toggle="modal" data-bs-dismiss="modal"><AiOutlineEye size={15} /> Preview</u></div>
                      
                    </div>
                  </td>
                  {/* <td>
                    <p className="price"><del><span className="amount">$55.00</span></del> <ins><span className="amount">AED 45</span></ins></p>
                  </td> */}
                 
                  <td>
                    <p className="price"><span className="amount">AED {citm.price}</span></p>
                  </td>
                  <td>
                    <p className="price"><span className="amount">{moment(citm.created_date).format("MMMM Do YYYY")}</span></p>
                  </td>
                  
                </tr>
                )) : <tr><td> No Orders!</td></tr>}
              </tbody>
            </table>
        <div className="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
        <Link to="/userorder" className="btn btn-primary rounded">View All Orders</Link>
            </div>
          </div>
           
           </div>
        
   
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
 {/*/.modal */}
 <div className="modal fade" id="modal-order" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm" style={selectitm.product_type==="College"& selectitm.orientation!=="Portait"?{maxWidth:"900px"}:{}}>
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="modal-body">
        {selectitm?<>  
        {selectitm.product_type==="Mini Frame"?
        <div className='row'>
        {selectitm? selectitm.image_url.split(',').map((itm,k)=>(
            <div key={k} className='col-12 col-md-6 '>
            {/* <div className="mt-2 item">
              <figure className='framebox-shadow' >
              <img src="\assets\images\black-frame.png" alt="example"  style={{width:"100%"}} /> 
              <img src={itm} alt="img" className='minimage' style={selectitm.frame_look==="MODERN"?{width:"94%"}:{width:"94%",padding:"10px"}} />             
               
              </figure>
            </div> */}
            <div className="d-flex border-cp framebox-shadow" style={{width:"266px",margin:"auto",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??+imgUrl+"/media/Image/black-frame.png"})1%  stretch repeat`}} >
            {selectitm.image_url.split(',').length?selectitm.image_url.split(',').map((itm,k)=>(               
                <img src={itm} key={k} alt="img" className='' style={selectitm.frame_look==="MODERN"?{width:"250px"}:{width:"250px",padding:"10px"}}    />     
            )):null}
            </div>
            </div>
            ))
            :null}</div>
            :selectitm.product_type==="College" & selectitm.orientation==="LandScape"?
            <div className="overflowbar " >  
            {selectitm.image_url ? 
            <div className={"d-flex border-cp framebox-shadow"} style={selectitm.image_url.split(',').length===2?{width:"500px",height:"100%",margin:"auto",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:selectitm.image_url.split(',').length===3?{width:"780px",height:"200px",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"1049px",height:"200px",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}}   >
              
            {selectitm.image_url?selectitm.image_url.split(',').map((itm,k)=>(               
                <img src={itm} key={k} alt="img" className={selectitm.image_url.split(',').length===2?"image-lcp1 imagelcp_width2":"image-lcp1 imagelcp_width"}    />     
            )):null}
            </div>  
            :null}     
        </div>
          :selectitm.product_type==="College" & selectitm.orientation==="Portait"?
          <div className=" border-cp framebox-shadow" style={{width:"300px",margin:"auto",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}}   >
              <DragDropContext >
      <Droppable droppableId="uploaded-images" direction='vertical'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} >
            {selectitm.image_url.split(',').map((image, index) => (
              <Draggable key={index} draggableId={index.toString()} index={index}>
                {(provided) => (
                  <img
                  src={image}
                  alt="img"
                  className="image-pcp pcpwidth "
                  
                    
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
            </div> 
        :selectitm.product_type==="College" & selectitm.orientation==="Square"?
        <div className="border-cp framebox-shadow" style={selectitm.image_url.split(',').length===4? {width:"386px",margin:"auto",padding:"5px",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:selectitm.image_url.split(',').length===9?{width:"505px",margin:"auto",padding:"5px",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"505px",margin:"auto",padding:"5px",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}}   >
              
    <div className="App">
      <ListManager
        items={selectitm.image_url.split(',')}
        direction="horizontal"
        maxItems={selectitm.image_url.split(',').length===4? 2:selectitm.image_url.split(',').length===9?3:4}
        render={item => <img src={item} alt="img" className='square-image' style={selectitm.image_url.split(',').length===12?{width:"120px",height:"100%"}:selectitm.image_url.split(',').length===9?{width:"160px",height:"100%"}:{width:"180px",height:"100%"}}/>}
        onDragEnd={() => {}}
        dragEnabled={false}
       
      />
    </div>
            </div>
        :selectitm.product_type==="Canvas" & selectitm.product?
        <>
            {selectitm.frame? 
             <div className="d-flex border-cp framebox-shadow" style={{width:"266px",margin:"auto",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}} >
            {selectitm.image_url.split(',').length?selectitm.image_url.split(',').map((itm,k)=>(               
                <img src={itm} key={k} alt="img" className='' style={{width:"250px"}}    />     
            )):null}
            </div>
            :
            <>
            {selectitm.image_url.split(',').length?selectitm.image_url.split(',').map((itm,k)=>( 
              <div className=" margin-css m-auto" >            
              <div className=' ' >             
              <div className='canvas-rotate '>
                <img src={itm} alt="img" style={{width:"250px "}}   />   
                <div className='canvas-border '>
                  
                <img src={itm} alt="img" style={{maxWidth:"none",height:"100%"}}   /> 
                </div>
              </div>
              </div> 
        
          </div>   
              )):null}
              </>  }</>
    :selectitm.product_type==="Canvas" & !selectitm.product?
    <>
        {selectitm.frame? 
         <div className="d-flex border-cp framebox-shadow" style={{width:"266px",margin:"auto",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}} >
        {selectitm.image_url.split(',').length?selectitm.image_url.split(',').map((itm,k)=>(               
            <img src={itm} key={k} alt="img" className='' style={{width:"250px"}}    />     
        )):null}
        </div>
        :
        <>
        {selectitm.image_url.split(',').length?selectitm.image_url.split(',').map((itm,k)=>( 
          <div key={k} className=" margin-css m-auto" >            
          <div className=' ' >             
          <div className='canvas-rotate '>
            <img src={itm} alt="img" style={{width:"250px "}}   />   
            <div className='canvas-border '>
              
            <img src={itm} alt="img" style={{maxWidth:"none",height:"100%"}}   /> 
            </div>
          </div>
          </div> 
    
      </div>   
          )):null}
          </>  }</>
    :selectitm.product_type==="Print"?<>
    {selectitm.image_url.split(',').length?selectitm.image_url.split(',').map((itm,k)=>(               
      <div key={k} className='  ' >             
      <div className='box-shadow p-1 'style={{width:"50%",margin:"auto"}}>
        <img src={itm} alt="img" style={{width:"100%"}}   />   
       
      </div>
      </div>    
 )):null}</>
    :selectitm.product?
    <div className={selectitm.frame?' d-flex border-cp framebox-shadow':'d-flex framebox-shadow'} style={selectitm.frame?{width:"335px",height:"100%",margin:"auto",borderImage:`url(${imgUrl+selectitm.frame[0]?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"335px",height:"100%",margin:"auto"}}   >
    <img src={selectitm.product.length?imgUrl+selectitm.product[0].product_image:null} alt="img" className='' style={{width:"100%",height:"100%"}}    />
    </div>
    :null}
    </>:null}
       
        <div />
        </div>
        
       
        {/*/.social */}
      </div>
      {/*/.modal-content */}
    </div>
    {/*/.modal-body */}
  </div>
  {/*/.modal-dialog */}
</div>
  
{/* modal1start */}
{/* modal check */}

{/*/.modal */}



</div>

    </div>
  )
}
