import React, { useContext, useEffect, useState } from 'react'
import { Simplecontext } from './Simplecontext';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Callaxios from './Callaxios';
import { BaseUrl } from './Url';
export default function Signmodal() {
    const {promodal1,promodal2,setpromodal1,setpromodal2 } = useContext(Simplecontext)
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [firstname,setfirstname]=useState('')
    const [signusername,setsignusername]=useState('')
    const [signpassword,setsignpassword]=useState('')
    const [signrepassword,setsignrepassword]=useState('')
    let navigate = useNavigate();
    useEffect(() => {
      
    }, [])
    const notify = (msg) => toast.success(msg, {
      position: "top-left",
      theme: "dark",
      });
  const notifyerror = (msg) => toast.error(msg, {
      position: "top-left",
      theme: "dark",
      });
   
    const login=async(e)=>{
      e.preventDefault()
      try {
        let body = {
          method:"post",
          url:BaseUrl+"user/login/",
          data: {"username":username,"password":password}
        }
        let data = await axios(body)
        // console.log("data",data)
        if(data.data.Status===200){       
          window.localStorage.setItem("fotoframe_usertoken",data.data.token)
          setpromodal1(false)
          setpromodal2(false)
          setsignnull()
          return navigate("/profile")
        }else{
          notifyerror("invalid Username or password")
        }
      } catch (error) {
        console.log(error) 
        notifyerror("invalid Username or password")
      }
        
    }
    const setsignnull=()=>{
      setfirstname('')
      setusername('')
      setsignpassword('')
      setsignrepassword('')
      setsignusername('')
      setpassword('')
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
            setpromodal2(false)
            setpromodal1(true)
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
    const profilehandler=()=>{
      console.log("profileclicked")
      if(window.localStorage.getItem("fotoframe_usertoken")){
        return navigate("/profile")
      }else{
        setpromodal1(true)
      }
    }
  return (
    <div>
           <div className={promodal1?"modal fade show spinner-container":""} style={promodal1?{display:"block"}:{display:"none"}} tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content text-center">
    <div className="modal-body">
        <button type="button" onClick={()=>setpromodal1(false) & setsignnull()} className="btn-close"  />
        <h2 className="mb-3 text-start">{promodal1?"Signin to Order":"Welcome Back"}</h2>
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
        <p className="mb-0">Don't have an account? <a href="#" onClick={()=>setpromodal1(false) & setpromodal2(true) & setsignnull()}  className="hover">Sign up</a></p>
      
        {/*/.social */}
      </div>
      {/*/.modal-content */}
    </div>
    {/*/.modal-body */}
  </div>
  {/*/.modal-dialog */}
</div>
{/*/.modal */}
<div className={promodal2?"modal fade show spinner-container":""} style={promodal2?{display:"block"}:{display:"none"}}  tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" onClick={()=>setpromodal2(!promodal2)} className="btn-close"  />
        <h2 className="mb-3 text-start">Sign up to FotoFrame</h2>
        <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
        <form onSubmit={(e)=>postuser(e)} className="text-start mb-3">
          
          <div className="form-floating mb-4">
            <input required onChange={(e)=>setfirstname(e.target.value)} value={firstname}  className="form-control" placeholder="name"  />
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
        <p className="mb-0">Already have an account? <a href="#" onClick={()=>setpromodal2(false) & setpromodal1(true)} className="hover">Sign in</a></p>
        
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
