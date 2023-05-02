import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import moment from 'moment';
import { BaseUrl, imgUrl } from '../Component.js/Url';
export default function Profilepage() {
  const [cartdata,setcartdata]=useState([])
  const [userdata,setuserdata]=useState([])
  const [selectitm,setselectitm]=useState('')
  let navigate = useNavigate();
  console.log("cartdata",cartdata)
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
      console.log("userdata",data)
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
      console.log("orderdata",data)
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
                    <figure className="rounded w-17"><img src={citm.product_type===("Mini Frame")?"/assets/img/photos/mini-frames-black.png":citm.product_type==="College"?"/assets/img/photos/collage-black.png":citm.product_type==="Canvas"?"/assets/img/photos/canvas.png":citm.product_type==="Print"?"/assets/img/photos/print.png":imgUrl+citm.product[0].product_image} alt="" /></figure>
                    <div className="w-100 ms-4">
                      <h3 className="post-title h6 lh-xs mb-1">{citm.product?citm.product.length?citm.product[0].product_name:citm.product_type:citm.product_type} </h3>
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

{/* modal1start */}
{/* modal check */}

{/*/.modal */}



</div>

    </div>
  )
}
