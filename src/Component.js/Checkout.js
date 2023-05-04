import React, { useEffect, useState } from 'react'
import Callaxios from './Callaxios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { BaseUrl } from './Url';

export default function Checkout() {
  const [cartdata,setcartdata]=useState([])
  const [delivery,setdelivery]=useState('')
  const [citydata,setcitydata]=useState([])
  const [customername,setcustomername]=useState('')
  const [email,setemail]=useState('')
  const [contact,setcontact]=useState('')
  const [place,setplace]=useState('')
  const [address,setaddress]=useState('')
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [firstname,setfirstname]=useState('')
  const [signusername,setsignusername]=useState('')
  const [signpassword,setsignpassword]=useState('')
  const [signrepassword,setsignrepassword]=useState('')
  const [modal2,setmodal2]=useState(false)
  const [modal1,setmodal1]=useState(false)
  const [load,setload]=useState(false)
  // console.log("cartdatamaindaa",cartdata)
  useEffect(() => {
    GetCart()
    Getshipping()
    Getcity()
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
 
  const GetCart=()=>{
    let cart_list
    if(window.localStorage.getItem('ffcart')){
      cart_list = window.localStorage.getItem('ffcart')     
      if (cart_list.length){
        // console.log("cart",cart_list)
        cart_list = JSON.parse(cart_list)   
        // console.log("cart",cart_list)  
        if (cart_list.length){
          cart_list.forEach(element => {
            if(element.frame){
              element["frameid"]=element.frame.id
          }
            if(element.product){
              element["productid"]=element.product[0].id
          }
          });
      }
        setcartdata(cart_list)
      }
    }else{
      Getcartdata()
    }
    
  }
  const Getcartdata=async()=>{
    // console.log("getcartproduct....")
    try{
      let data = await Callaxios("get","order/cart/")
      // console.log("datacart",data)
      if(data.status===200){
        if (data.data.length){
          // console.log("havegetcart")
          let cart =data.data
          cart.forEach(element => {           
            if (element.image_url){
              let image=[]
              element.image_url.split(',').forEach(url=>{
                image.push(url)
              });
              element['image_url']=image
            }
            // console.log("afteraddimage",cart)
          });
          setcartdata([...cart])
        }
      }
    }catch{

    }
  }
  const Getshipping=async()=>{
    try {
      let data = await Callaxios("get","product/delivery/")
      // console.log("delsi",data)
      if (data.status===200){
        setdelivery(data.data[0].delivery_charge)
      }
    } catch (error) {
      
    }
  }
  const Getcity =async()=>{
    try {
      let data = await Callaxios("get","frame/city/")
      // console.log("datacity",data)
      if (data.status===200){
        // console.log("data",data.data)
        setcitydata(data.data)
      }
    } catch (error) { 
      notifyerror("Something went wrong")
      
    }
  }
  const postorder=async()=>{
    try {
     setload(true)
      if(customername && contact && place && address ){
        if( window.localStorage.getItem("fotoframe_usertoken")){
          let body=[]
          // console.log("cartdata",cartdata)
          cartdata.forEach(element => {
            // console.log("element fraem",element.frame )
            // console.log("element fraem",element.frame?element.frame.id:"no frame present" )
            let data={
              status:"new",
              // product:element.product?element.product[0].id:null,
              image_url:element.image_url?element.image_url.join(','):"",
              orientation:element.orientation,
              size:element.size,
              product_type:element.product_name,
              frame_type:element.frame_type?element.frame_type.frame_type:"",
              // frame:element.frame?element.frame.id:null,
              price:element.total_price,
              papper:element.papper,
            }
            if(element.product){
              data.productid=element.productid
            }
            // console.log("frameelements",element.frame)
            if(element.frame){
              data.frameid=element.frameid
            }
            // console.log("dataelement",data)
          body.push(data)
          
          });
          // console.log("body",body)
          let datalist = {
            Customer_name:customername,
            email:email,
            contact:contact,
            address:address,
            // house:"",
            city:place,
            total_price:cartdata?cartdata.reduce((n, {total_price}) => n + parseInt(total_price), 0)+delivery:0,
            shipping:delivery,
            product_list:body,
            status:"new",
          }
          // console.log("daatalist",datalist)
          let data = await Callaxios("post","order/orders/",datalist,"token")
          // console.log("dataaxiospost",data)
          if (data.data.Status===200){
            Payment_Page(data.data.order_id)
            setload(true)
            // notify("ordered Successfully")
            
            setbillnull()
            
  
          }else{
            notifyerror("Something went wrong")}
            setload(false)
        }else{
          setmodal1(!modal1)
          setload(false)
        }
      }else(notifyerror("Fill All Billing Address"))
            //  console.log("data",data)
          setload(false)
      
    } catch (error) {
      setload(false)
    }
  }
  
  const setbillnull=()=>{
    setcustomername('')
    setcontact('')
    setemail('')
    setplace('')
    setaddress('')
    // window.localStorage.removeItem("ffcart")
    setcartdata([])
  }
  const login=async(e)=>{
    e.preventDefault()
    try {
      let body = {
        method:"post",
        url:BaseUrl+"user/login/",
        data: {"username":username,"password":password}
      }
      let data = await axios(body)
      // console.log("datalogin",data)
      if(data.data.Status===200){       
        window.localStorage.setItem("fotoframe_usertoken",data.data.token)
        postorder()
      }else{
        notifyerror("invalid Username or password")
      }
    } catch (error) {
      console.log(error) 
      notifyerror("invalid Username or password")
    }
      
  }
  const postuser=async(e)=>{
    // console.log("postuser")
    e.preventDefault()
    try {
      if(signpassword===signrepassword){
        let data =await Callaxios("post","user/user/",{username:signusername,first_name:firstname,password:signpassword})
        // console.log("data",data)
        if (data.data.Status===200){
          notify("Successfully registered")
          setmodal2(false)
          setmodal1(true)
          setsignnull()
        }else{
          notifyerror("something went wrong")
         
        }
      }else{
        notifyerror("Password and repassword are different")
        
      }
      
    } catch (error) {
      
    }
  }
  const setsignnull=()=>{
    setusername('')
    setpassword('')
    setsignusername('')
    setsignpassword('')
    setsignrepassword('')
  }
  const deletecart=async(id)=>{
    try {
      // console.log("ids",id)
      let data = await Callaxios("delete","order/cart/",{id:JSON.stringify(id)},"token")
      // console.log("deletedata",data)
      if (data.data.Status===200){
        
      }
    } catch (error) {
      
    }
  }
  const Payment_Page = (order_id) => {
    setload(true)
    if(window.localStorage.getItem("ffcart")){
      window.localStorage.removeItem("ffcart")
    }else{
      let ids =[]
      cartdata.forEach(element=>{
        ids.push(element.id)
      })
      deletecart(ids)
    }
    
    var data = {
        'product_name' : 'check_out',
        'unit_amount' : Math.round (cartdata.reduce((n, {total_price}) => n + parseInt(total_price), 0)+delivery) ,
        'currency' : 'AED',
        'site' : window.origin,
        'order_id' : order_id
        
    }
    axios.post(`${BaseUrl}/order/create-checkout-session/`,data,{
      headers : {
        Authorization : window.localStorage.getItem("fotoframe_usertoken")
      }
    })
    .then((res) => {
      // console.log("response",res)
        if (res.data.Status === 200){
          setload(true)  
          window.location.assign(res.data.Message.url); 
          
        }
        else{
            // setalert({ open : true , msg: "Something Went Wrong",severity:"error"})
            notifyerror("Something Went Wrong")
            setload(false)
        }
      })
      .catch((error) => {
        setload(false)
        if (error.response.request.status === 401) {
          // setalert({ open : true , msg: "Un Authorized request",severity:"error"})
          notifyerror("Un Authorized request")

        }
        else{
          // setalert({ open : true , msg: "Something Went Wrong",severity:"error"})
          notifyerror("Something Went Wrong")

        }
      })

}
  return (
    <div>
       <section className="wrapper bg-light">
  <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
    <ToastContainer/>
    {/* <div>
      <button onClick={()=>Payment_Page(123)}>click</button>
    </div> */}
    {load?
      <div className='spinner-containerload'>
        <div className='spinner'></div>
      </div>    
    :null}
    <div className="row gx-md-8 gx-xl-12 gy-12">
      <div className="col-lg-8">
        {/* <div className="alert alert-blue alert-icon mb-6" role="alert">
          <i className="uil uil-exclamation-circle" /> Already have an account? <a href="#" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-dismiss="modal" className="alert-link hover">Sign in</a> for faster checkout experience.
        </div> */}
        
        <h3 className="mb-4">Billing address</h3>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input onChange={(e)=>setcustomername(e.target.value)} value={customername} type="text" className="form-control" id="firstName" placeholder="First name"  required />
                <label htmlFor="firstName" className="form-label">First name</label>
                <div className="invalid-feedback"> Valid first name is required. </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating">
                <input onChange={(e)=>setcontact(e.target.value)} value={contact}  type="tel" className="form-control" id="tel" placeholder="contact" required />
                <label htmlFor="email" className="form-label">Contact</label>
                <div className="invalid-feedback"> Please enter a valid contact for shipping updates. </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating">
                <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" className="form-control" id="email" placeholder="you@example.com" required />
                <label htmlFor="email" className="form-label">Email</label>
                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-select-wrapper">
                <select onChange={(e)=>setplace(e.target.value)} value={place} className="form-select" id="state" required>
                  <option value="" hidden>Place</option>
                  {citydata?citydata.map((itm,k)=>(
                    <option value={itm.city} key={k}>{itm.city}</option>
                  )):null}
                  
                </select>
                <div className="invalid-feedback"> Please provide a valid place. </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input onChange={(e)=>setaddress(e.target.value)} value={address} type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                <label htmlFor="address" className="form-label">Address</label>
                <div className="invalid-feedback"> Please enter your shipping address. </div>
              </div>
            </div>
           
            
            
            
          </div>
          {/* <hr className="mt-7 mb-6" />
          <h3 className="mb-4">Payment</h3>
          <div className="mt-3 mb-6">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="row gy-3 gx-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="cc-number" placeholder="Credit card number" required />
                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                    <div className="invalid-feedback"> Credit card number is required </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="cc-name" placeholder="Name on card" required />
                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                    <div className="invalid-feedback"> Name on card is required </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="cc-expiration" placeholder="Expiration" required />
                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                    <div className="invalid-feedback"> Expiration date required </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="cc-cvv" placeholder="CVV" required />
                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                    <div className="invalid-feedback"> Security code required </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </form>
      </div>
      {/* /column */}
      {cartdata.length?
      <div className="col-lg-4">
        <h3 className="mb-4">Order Summary {"("+cartdata.length+")"}</h3>
        {/* /.shopping-cart*/}
        <hr className="my-4" />
        <h3 className="mb-2">Shipping</h3>
        {/* <div className="mb-5">
          <div className="form-check mb-2">
            <input id="standart" name="shippingMethod" type="radio" className="form-check-input" required />
            <label className="form-check-label" htmlFor="standart">Free - Standart delivery</label>
            <small className="text-muted d-block">Shipment may take 5-6 business days</small>
          </div>
          <div className="form-check">
            <input id="express" name="shippingMethod" type="radio" className="form-check-input" defaultChecked required />
            <label className="form-check-label" htmlFor="express">$10 - Express delivery</label>
            <small className="text-muted d-block">Shipment may take 2-3 business days</small>
          </div>
        </div> */}
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
        <button onClick={()=>postorder()}  className="btn btn-primary rounded w-100 mt-4">Place Order</button>
      </div>
      :null}
      {/* /column */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
</section>
{/* <div className="modal fade" id="exampleModalCenter" tabIndex={1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog" style={ {display: 'block', paddingRight: 17}}>
  <div className="modal-dialog modal-dialog-centered modal-lg box-shadow-blank" >
    <div className="modal-content"><div className="modal-header">
      <h5 className="modal-title" id="exampleModalCenterTitle">Tasks</h5>
      <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="btn-close" />
      </div>
      <form className="forms-sample" >
        <div className="modal-body">
            <div className='row text-start'>
                <div className="mb-3  col-6">
                    <label htmlFor="select" className="form-label ">Vessel</label>
                    <select required  className="form-select" id="exampleFormControlSelect1">
                          <option hidden>Select Vessel</option>
                          <option  >vessel 1</option>
                          <option   >Vessel 2</option>
                        </select>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="userEmail" className="form-label ">Job Details</label>
                    <input type="text" required  className="form-control" placeholder="Job Details"  />
                </div>
                <div className="mb-3  col-6">
                    <label htmlFor="select" className="form-label ">Engineer</label>
                    <select required  className="form-select" id="exampleFormControlSelect1">
                          <option hidden>Select Engineer</option>
                          <option  >engineer  1</option>
                          <option   >Engineer 2</option>
                        </select>
                </div>
                <div className="mb-3  col-6">
                    <label htmlFor="select" className="form-label ">Port</label>
                    <select required  className="form-select" id="exampleFormControlSelect1">
                          <option hidden>Select Port</option>
                          <option  >Port 1</option>
                          <option   >Port 2</option>
                        </select>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="userEmail" className="form-label ">ETA</label>
                    <input type="date" required  className="form-control" placeholder="Job Details"  />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="userEmail" className="form-label ">ETD</label>
                    <input type="date" required  className="form-control" placeholder="Job Details"  />
                </div>
            </div>
        <div />
        </div>
        <div className="modal-footer">
          <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    </div>
  </div> */}
{/* modal check */}
<div className={modal1?"modal fade show spinner-container":"modal fade"} style={modal1?{display:"block"}:{display:"none"}} id="modal-signin" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" onClick={()=>setmodal1(!modal1)&&setsignnull()} className="btn-close"  />
        <h2 className="mb-3 text-start">{modal1?"Signin to Order":"Welcome Back"}</h2>
        <p className="lead mb-6 text-start">Fill your email and password to sign in.</p>
        <form onSubmit={(e)=>login(e)} className="mb-3">
          <div className="form-floating mb-4">
            <input required onChange={(e)=>setusername(e.target.value)} value={username} type="emaillogin" className="form-control" placeholder="Email"  />
            <label  htmlFor="loginEmail">Email</label>
          </div>
          <div className="form-floating  mb-4">
            <input required onChange={(e)=>setpassword(e.target.value)} value={password} type="password" className="form-control" placeholder="Password"  />
            {/* <span className="password-toggle"><i className="uil uil-eye" /></span> */}
            <label htmlFor="loginPassword">Password</label>
          </div>
          <button type='submit' className="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign In</button>
        </form>
        {/* /form */}
        {/* <p className="mb-1"><a href="#" className="hover">Forgot Password?</a></p> */}
        <p className="mb-0">Don't have an account? <a href="#" onClick={()=>setmodal1(false) & setmodal2(true) & setsignnull()}  className="hover">Sign up</a></p>
      
        {/*/.social */}
      </div>
      {/*/.modal-content */}
    </div>
    {/*/.modal-body */}
  </div>
  {/*/.modal-dialog */}
</div>
{/*/.modal */}
<div className={modal2?"modal fade show spinner-container":"modal fade"} style={modal2?{display:"block"}:{display:"none"}} id="modal-signup" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" onClick={()=>setmodal2(!modal2)} className="btn-close"  />
        <h2 className="mb-3 text-start">Sign up to FotoFrame</h2>
        <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
        <form onSubmit={(e)=>postuser(e)} className="text-start mb-3">
          
          <div className="form-floating mb-4">
            <input required onChange={(e)=>setfirstname(e.target.value)} value={firstname} type="Firstname" className="form-control" placeholder="Email"  />
            <label htmlFor="">Name</label>
          </div>
          <div className="form-floating mb-4">
            <input required onChange={(e)=>setsignusername(e.target.value)} value={signusername} type="email" className="form-control" placeholder="Email"  />
            <label htmlFor="">Email</label>
          </div>
          <div className="form-floating mb-4">
            <input required onChange={(e)=>setsignpassword(e.target.value)} value={signpassword} type="password" className="form-control" placeholder="Password"  />
            {/* <span className="password-toggle"><i className="uil uil-eye" /></span> */}
            <label htmlFor="">Password</label>
          </div>
          <div className="form-floating  mb-4">
            <input required onChange={(e)=>setsignrepassword(e.target.value)} value={signrepassword} type="password" className="form-control" placeholder="Confirm Password"  />
            {/* <span className="password-toggle"><i className="uil uil-eye" /></span> */}
            <label htmlFor="">Confirm Password</label>
          </div>
          <button type='submit' className="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign Up</button>
        </form>
        {/* /form */}
        <p className="mb-0">Already have an account? <a href="#" onClick={()=>setmodal2(false) & setmodal1(true)} className="hover">Sign in</a></p>
        
        {/*/.social */}
      </div>
      {/*/.modal-content */}
    </div>
    {/*/.modal-body */}
  </div>
  {/*/.modal-dialog */}
</div>

    </div>
  )
}
