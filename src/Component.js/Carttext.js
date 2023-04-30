import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Callaxios from './Callaxios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListManager } from 'react-beautiful-dnd-grid';

export default function Carttext() {
  const [cartdata,setcartdata]=useState([])
  const [delivery,setdelivery]=useState('')
  const [selectitm,setselectitm]=useState('')
  console.log("selectitm",selectitm)
    useEffect(() => {
      GetCart()
      Getshipping()
      window.scrollTo(0, 0);
     
    }, [])
  const GetCart=()=>{
    let cart_list
    if(window.localStorage.getItem('ffcart')){
      cart_list = window.localStorage.getItem('ffcart')     
      if (cart_list.length){
        // console.log("cart",cart_list)
        cart_list = JSON.parse(cart_list)   
        console.log("cart",cart_list)  
        setcartdata(cart_list)
      }
    }
    
  }
  const Getshipping=async()=>{
    try {
      let data = await Callaxios("get","product/delivery/")
      console.log("delsi",data)
      if (data.status===200){
        setdelivery(data.data[0].delivery_charge)
      }
    } catch (error) {
      
    }
  }
  const removecarthandler=(ck)=>{
    // console.log("cartdata",cartdata)
    let c_list =cartdata.filter((number, index) => index !== ck)
    // console.log("removedata",c_list)
    setcartdata(c_list)
    window.localStorage.setItem('ffcart',JSON.stringify(c_list))
  }
  return (
    <div>
        <div>
  <section className="wrapper bg-light">
    <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div className="row gx-md-8 gx-xl-12 gy-12">
        <div className="col-lg-8"> 
          <div className="table-responsive">
            <table className="table text-center shopping-cart">
              <thead>
                <tr>
                  <th className="ps-0 w-25">
                    <div className="h4 mb-0 text-start">Product</div>
                  </th>
                  <th>
                    <div className="h4 mb-0">Price</div>
                  </th>
                  
                  {/* <th>
                    <div className="h4 mb-0">Total</div>
                  </th> */}
                  <th />
                </tr>
              </thead>
              <tbody>
                {cartdata.length?cartdata.map((citm,ck)=>(
                <tr key={ck}>
                  <td className="option text-start d-flex flex-row align-items-center ps-0">
                    <figure className="rounded w-17"><img src={citm.frame_image} alt="" /></figure>
                    <div className="w-100 ms-4">
                      <h3 className="post-title h6 lh-xs mb-1">{citm.product_name} </h3>
                      <div className="small">Papper Type: {citm.papper} </div>
                      <div className="small">Size: {citm.size}</div>
                      <div className="small">Orientation: {citm.orientation}</div>
                      <div className="small"><u className='hover pointerviewb' onClick={()=>setselectitm(citm)} data-bs-target="#modal-signup" data-bs-toggle="modal" data-bs-dismiss="modal"><AiOutlineEye size={15} /> Preview</u></div>
                      
                    </div>
                  </td>
                  {/* <td>
                    <p className="price"><del><span className="amount">$55.00</span></del> <ins><span className="amount">AED 45</span></ins></p>
                  </td> */}
                 
                  <td>
                    <p className="price"><span className="amount">AED {citm.total_price}</span></p>
                  </td>
                  <td className="pe-0">
                    <RiDeleteBin6Fill className='pointerb'onClick={()=>removecarthandler(ck)} />
                  </td>
                </tr>
                )) : <tr><td>Your Cart is Empty!</td></tr>}
              </tbody>
            </table>
          </div>
          {/* /.table-responsive */}
          <div className="row mt-0 gy-4">
            {/* <div className="col-md-8 col-lg-7">
              <div className="form-floating input-group">
                <input type="url" className="form-control" placeholder="Enter promo code" id="seo-check" />
                <label htmlFor="seo-check">Enter promo code</label>
                <button className="btn btn-primary" type="button">Apply</button>
              </div>
            </div> */}
            {/* /column */}
            <div className="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
              <Link to="/" className="btn btn-primary rounded">Update Cart</Link>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /column */}
        {cartdata.length?
        <div className="col-lg-4">
          <h3 className="mb-4">Order Summary {"("+cartdata.length+")"}</h3>
          <div className="table-responsive">
            <table className="table table-order">
              <tbody>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Subtotal</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price">{cartdata?cartdata.reduce((n, {total_price}) => n + parseInt(total_price), 0):null}<span className='aedsize'> AED</span></p>
                  </td>
                </tr>
                {/* <tr>
                  <td className="ps-0"><strong className="text-dark">Discount (5%)</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price text-red">-$6.8</p>
                  </td>
                </tr> */}
                <tr>
                  <td className="ps-0"><strong className="text-dark">Shipping</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price">{delivery}<span className='aedsize'> AED</span></p>
                  </td>
                </tr>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Grand Total</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price text-dark fw-bold">{cartdata?cartdata.reduce((n, {total_price}) => n + parseInt(total_price), 0)+delivery:null}<span className='aedsize'> AED</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/checkout" className="btn btn-primary rounded w-100 mt-4">Proceed to Checkout</Link>
        </div>
        :null}
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
 {/*/.modal */}
<div className="modal fade" id="modal-signup" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm" style={selectitm.product_name==="College"& selectitm.orientation!="Portait"?{maxWidth:"900px"}:{}}>
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        {selectitm.product_name==="Mini Frame"?
        <div className='row'>
        {selectitm? selectitm.image_url.map((itm,k)=>(
            <div key={k} className='col-12 col-md-6 '>
            <div className="mt-2 item">
              <figure className='framebox-shadow' >
              <img src="/assets/img/photos/black-frame.png" alt="example"  style={{width:"100%"}} /> 
              <img src={itm} alt="img" className='minimage' style={selectitm.frame_look==="MODERN"?{width:"94%"}:{width:"94%",padding:"10px"}} />             
               
              </figure>
            </div>
            </div>
            ))
            :null}</div>
            :selectitm.product_name==="College" & selectitm.orientation==="LandScape"?
            <div className="overflowbar " >  
            {selectitm.image_url.length ? 
            <div className={"d-flex border-cp framebox-shadow"} style={selectitm.image_url.length===2?{width:"500px",height:"100%",margin:"auto",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:selectitm.image_url.length===3?{width:"780px",height:"200px",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"1049px",height:"200px",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}}   >
              
            {selectitm.image_url.length?selectitm.image_url.map((itm,k)=>(               
                <img src={itm} alt="img" className={selectitm.image_url.length===2?"image-lcp1 imagelcp_width2":"image-lcp1 imagelcp_width"}    />     
            )):null}
            </div>  
            :null}     
        </div>
          :selectitm.product_name==="College" & selectitm.orientation==="Portait"?
          <div className=" border-cp framebox-shadow" style={{width:"300px",margin:"auto",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}}   >
              <DragDropContext >
      <Droppable droppableId="uploaded-images" direction='vertical'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} >
            {selectitm.image_url.map((image, index) => (
              <Draggable key={index} draggableId={index.toString()} index={index}>
                {(provided) => (
                  <img
                  src={image}
                  alt="img"
                  className="image-pcp pcpwidth "
                  
                    
                    // ref={provided.innerRef}
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
        :selectitm.product_name==="College" & selectitm.orientation==="Square"?
        <div className="border-cp framebox-shadow" style={selectitm.image_url.length===4? {width:"386px",margin:"auto",padding:"5px",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:selectitm.image_url.length===9?{width:"505px",margin:"auto",padding:"5px",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"505px",margin:"auto",padding:"5px",borderImage:`url(${selectitm?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}}   >
              
    <div className="App">
      <ListManager
        items={selectitm.image_url}
        direction="horizontal"
        maxItems={selectitm.image_url.length===4? 2:selectitm.image_url.length===9?3:4}
        render={item => <img src={item} alt="img" className='square-image' style={selectitm.image_url.length===12?{width:"120px",height:"100%"}:selectitm.image_url.length===9?{width:"160px",height:"100%"}:{width:"180px",height:"100%"}}/>}
        onDragEnd={() => {}}
        dragEnabled={false}
       
      />
    </div>
            </div>
        :selectitm.product_name==="Canvas" & selectitm.product?
        <>
            {selectitm.frame? 
             <div className="d-flex border-cp framebox-shadow" style={{width:"266px",margin:"auto",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}} >
            {selectitm.image_url.length?selectitm.image_url.map((itm,k)=>(               
                <img src={itm} key={k} alt="img" className='' style={{width:"250px"}}    />     
            )):null}
            </div>
            :
            <>
            {selectitm.image_url.length?selectitm.image_url.map((itm,k)=>( 
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
    :selectitm.product_name==="Canvas" & !selectitm.product?
    <>
        {selectitm.frame? 
         <div className="d-flex border-cp framebox-shadow" style={{width:"266px",margin:"auto",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}} >
        {selectitm.image_url.length?selectitm.image_url.map((itm,k)=>(               
            <img src={itm} key={k} alt="img" className='' style={{width:"250px"}}    />     
        )):null}
        </div>
        :
        <>
        {selectitm.image_url.length?selectitm.image_url.map((itm,k)=>( 
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
    :selectitm.product_name==="Print"?<>
    {selectitm.image_url.length?selectitm.image_url.map((itm,k)=>(               
      <div key={k} className='  ' >             
      <div className='box-shadow p-1 'style={{width:"50%",margin:"auto"}}>
        <img src={itm} alt="img" style={{width:"100%"}}   />   
       
      </div>
      </div>    
 )):null}</>
    :selectitm.product?
    <div className={selectitm.frame?' d-flex border-cp framebox-shadow':'d-flex framebox-shadow'} style={selectitm.frame?{width:"335px",height:"100%",margin:"auto",borderImage:`url(${selectitm.frame?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"335px",height:"100%",margin:"auto"}}   >
    <img src={selectitm.product.length?selectitm.product[0].product_image:null} alt="img" className='' style={{width:"100%",height:"100%"}}    />
    </div>
    :null}
        
        
       
        {/*/.social */}
      </div>
      {/*/.modal-content */}
    </div>
    {/*/.modal-body */}
  </div>
  {/*/.modal-dialog */}
</div>
</div>

    </div>
  )
}
