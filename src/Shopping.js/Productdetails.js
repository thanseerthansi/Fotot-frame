import React, { useContext, useEffect, useState } from 'react'
// import * as filestack from 'filestack-js';
import * as filestack from "filestack-js";
// import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Callaxios from '../Component.js/Callaxios';
import { Simplecontext } from '../Component.js/Simplecontext';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
// import { apikey } from './filestackapikey';
export default function Productdetails() {
    const { framedata } = useContext(Simplecontext)
    const { prod_id } = useParams();
    const [papervalue,setpapervalue]=useState("MATTE")
    const [framematerial,setframematerial]=useState("CLASSIC")
    const [productdata,setproductdata]=useState([])
    const [frametypedata,setframetypedata]=useState([])
    const [frametype,setframetype]=useState('')
    const [frame,setframe]=useState("")
    const [selectitm,setselectitm]=useState('')
    const [frameprice,setframeprice]=useState('')
    const [framemodel,setframemodel]=useState('')
    let navigate = useNavigate();
    // console.log("frameprice",frameprice)
    // console.log("selectitm",selectitm)
    useEffect(() => {
        window.scrollTo(0, 0);     
        Getproduct()  
        Getframetypes()
    }, [])
    const notify = (msg) => toast.success(msg, {
      position: "top-left",
      theme: "dark",
      });
    const notifyerror = (msg) => toast.error(msg, {
      position: "top-left",
      theme: "dark",
      });
    const Getproduct=async()=>{
      try {
        let data = await Callaxios("get","product/product/",{id:prod_id})
        // console.log("datda",data)
        // console.log("data",data)
        if(data.status===200){
          setproductdata(data.data)       
        }
      } catch (error) {
        
      }
    }
    const Getframetypes =async()=>{
      try {
        let data = await Callaxios("get","frame/frametype/")
        if (data.status===200){
          // console.log("dataframe",data.data)
          setframetypedata(data.data)
        }
        // console.log("data",data)
      } catch (error) {
        console.log(error)
      }
    } 
    const frametypehandler=(value)=>{
      // console.log("value",value)
      let data = frametypedata.filter(t=>t.frame_type===value)
      // console.log("frametypedtafilter",data)
      if(data.length){
        setframetype(data[0])
        setframe('')
        setselectitm('')
        setframemodel(value)
      }else{
        setframetype('')
        setframe('')
        setselectitm('')
        setframemodel("Print")
      }     
    }
    const addtocart =()=>{
      try {
        let cart_list = []
        let body = {
          total_price : selectitm?parseInt(frameprice.split('-')[1])+parseInt(frametype.price):frameprice.split('-')[1] ,
          image_url :"",
          orientation :productdata[0].orientation,
          size :frameprice.split('-')[0],
          product :productdata,
          frame_look:framemodel,
          product_name:productdata[0].product_name +" "+ framemodel?framemodel:"",
          frame_type :frametype,
          frame_image :productdata[0].product_image ,
          frame :frame?selectitm:"",
          papper :"MATTE",
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
          <ToastContainer/>
          <div className='col-12 col-md-7 col-lg-7'>
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className='row col-12'>
        <div className="overflowbar " >
            <div  className='col-6 col-md-4 '>
           
             <div className={selectitm?' d-flex border-cp framebox-shadow':'d-flex framebox-shadow'} style={selectitm?{width:"335px",height:"100%",margin:"auto",borderImage:`url(${selectitm?.image??"http://127.0.0.1:8000/media/Image/black-frame.png"})1%  stretch repeat`}:{width:"335px",height:"100%",margin:"auto"}}   >
            <img src={productdata.length?productdata[0].product_image:null} alt="img" className='' style={{width:"100%",height:"100%"}}    />
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
          <h3 className="mt-4  ">{productdata.length?productdata[0].product_name:null}</h3>
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
                
                <div className='line-break'/>
                  <label className="ps-0"><strong className="text-dark">Frame Type</strong></label><br/>              
                  <div className='d-flex'>
                  <select required onChange={(e)=>frametypehandler(e.target.value)} className="form-select form-select-md ">
                  {/* <option value="" hidden>select frame type</option> */}
                  <option value="" >PRINT ONLY</option>
                    {frametypedata.map((fitm,fk)=>(
                    <option key={fk} value={fitm.frame_type}  >{fitm.frame_type.toUpperCase()} </option>
                    ))}
                    
                  </select>
              </div>
              
                {frametype?<>
                <div className='line-break'/>
                  <label className="ps-0"><strong className="text-dark">Frame </strong></label><br/>              
                  <div className='d-flex'>
                  {frametype?frametype.frame.map((itm,k)=>(
                  <div key={k} className='ps-2'>
                  <img className='frameimage ' style={frame===itm.framename?{border:"2px solid black"}:{}} onClick={()=>setframe(itm.framename) & setselectitm(itm)} src={itm.main_image} width={70} alt="img" />
                 </div>
                )):null}
              </div>
                <br/>
                </>:null}
                <br/>
                <div className='line-break'/>
                  <label className="ps-0"><strong className="text-dark">Size</strong></label><br/>              
                  <div className='d-flex'>
                  <select required onChange={(e)=>setframeprice(e.target.value)} className="form-select form-select-md ">
                  <option value="" hidden>select size</option>
                    {productdata.length?productdata[0].sizes.split(',').map((fitm,fk)=>(
                    <option key={fk} value={fitm}  >{fitm.split('-')[0]} </option>
                    )):null}
                    
                  </select>
              </div>
                <br/>
                <div className='line-break'/>
                  <div className='row'>
                    <div className='col-8'>
                    <label className="ps-0"><strong className="text-dark">Price </strong></label>
                    </div>
                    <div className='col-4'>
                    <span className="pe-0 text-start">
                    <p className="price">{selectitm?frameprice?parseInt(frameprice.split('-')[1]) +parseInt(frametype.price) :productdata.length?productdata[0].price+frametype.price:null:frameprice?frameprice.split('-')[1]:productdata.length?productdata[0].price:null}<span className='aedsize'> AED</span></p>
                  </span>
                    </div>
                  </div>                  
          </div>
          <button onClick={()=>frameprice? addtocart():notifyerror("select size")} className="btn btn-primary rounded w-100 mt-4">ADD TO CART</button>
          </div>
        </div>
        </div>       
      </div>
    </div>
  )
}
