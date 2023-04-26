import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Callaxios from './Callaxios';
export default function Carttext() {
  const [cartdata,setcartdata]=useState([])
  const [delivery,setdelivery]=useState('')
  // console.log("cartdaatlistbefore",cartdata)
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
        // console.log("cart",cart_list)  
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
                    <figure className="rounded w-17"><a href="shop-product.html"><img src={citm.frame_image} alt="" /></a></figure>
                    <div className="w-100 ms-4">
                      <h3 className="post-title h6 lh-xs mb-1"><a href="shop-product.html" className="link-dark">{citm.product_name} </a></h3>
                      <div className="small">Papper Type: {citm.papper} </div>
                      <div className="small">Size: {citm.size}</div>
                      <div className="small">Orientation: {citm.orientation}</div>
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
            <div className="col-md-8 col-lg-7">
              <div className="form-floating input-group">
                <input type="url" className="form-control" placeholder="Enter promo code" id="seo-check" />
                <label htmlFor="seo-check">Enter promo code</label>
                <button className="btn btn-primary" type="button">Apply</button>
              </div>
              {/* /.input-group */}
            </div>
            {/* /column */}
            <div className="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
              <Link to="/" className="btn btn-primary rounded">Update Cart</Link>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /column */}
        <div className="col-lg-4">
          <h3 className="mb-4">Order Summary</h3>
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
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
 
</div>

    </div>
  )
}
