import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Callaxios from '../Component.js/Callaxios'

export default function Shoppinghome() {
  const [productdata,setproductdata]=useState([])
  const [themedata,setthemedata]=useState([])
  const [orientation,setorientation]=useState('')
  const [color,setcolor]=useState('')
  const [themesearch,setthemesearch]=useState([])
  // console.log("listtheme",themesearch)
  useEffect(() => {
    window.scrollTo(0,0)
    Getproduct()
    Gettheme()
  }, [])
  
  const Getproduct=async()=>{
    try {
      let data = await Callaxios("get","product/product/")
      // console.log("data",data)
      if(data.status===200){
        setproductdata(data.data)       
      }
    } catch (error) {
      
    }
  }
  const Gettheme =async()=>{
    try {
      let data = await Callaxios("get","product/producttheme/")
      // console.log("themedata",data)
      if (data.status===200){
        // console.log("data",data.data)
        setthemedata(data.data)
      }
    } catch (error) { 
      
      
    }
  }
  const handlecheckadd=(itmid)=>{
      setthemesearch([...themesearch,itmid])  
  }
  const handlecheckdelete=(itmid)=>{
    const newItems = themesearch.filter(item => item !== itmid);
    setthemesearch(newItems);
  }
  const Searchhandling=()=>{
    let product = productdata
    let data = productdata
    // console.log("themesearch",themesearch)
    if(themesearch.length){
      let filter_data = data.filter(t =>t.theme.some(th => themesearch.includes(th.id)))
      // console.log("filter",filter_data)
      product = filter_data
    }
    if (orientation){
      let filter_data = product.filter(t=>t.orientation.toLowerCase().includes(orientation.toLowerCase()))
      product = filter_data
    }
    if (color){
      // let filter_data = product.filter
    }
    return product.filter(t=>t.status===true)
  }
  return (
    <div>
        <div>
  <section className="wrapper bg-light">
    <div className="container pb-14 pb-md-16 pt-12">
      <div className="row gy-10">
        <div className="col-lg-9 order-lg-2">
          <div className="row align-items-center mb-10 position-relative zindex-1">
            <div className="col-md-7 col-xl-8 pe-xl-20">
              <h2 className="display-6 mb-1">New Arrivals</h2>
              {/* <p className="mb-0 text-muted">Showing 1–9 of 30 results</p> */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="  projects-masonry shop mb-13">
            <div className="row gx-md-8 gy-10 gy-md-13 ">
              {Searchhandling().map((itm,k)=>(
                <div key={k} className="project item col-6 col-md-3 col-xl-3">
                <figure className="backimage mb-6 card_style">
                {/* <img src={"/assets/img/photos/black-frame.png"} alt="example"  style={{width:"100%",height:''}} />  */}
                  <img src={itm.product_image} alt=""/>
                  
                  <Link to={`/productdetails/${itm.id}`} className="item-cart"> Add to Cart</Link>
                  
                </figure>
                <div className="post-header">

                  <h6 className="post-title h3 fs-17"><Link to={`/productdetails/${itm.id}`} className="link-dark">{itm.product_name}</Link></h6>
                  <p className="price">

                     <ins><span className="amount">{itm.price}</span></ins><b className='aedsize'> AED</b></p>
                </div>
                {/* /.post-header */}
              </div>
              ))}
              
              {/* /.item */}
             
              
             
            
            </div>
            {/* /.row */}
          </div>
          {/* /.grid */}
         {/* pagination */}
          {/* /nav */}
        </div>
        {/* /column */}
        <aside className="col-lg-3 sidebar" >
          <div className='row'>
          <div className="widget col-6 col-md-12">
            <h4 className="widget-title mb-3">Theme</h4>
            <div className='row col-12 overflowx-theme'>
              {themedata.map((titm,tk)=>(
                 <div key={tk} className="form-check  col-6">           
                 <input onChange={(e)=>e.target.checked? handlecheckadd(titm.id):handlecheckdelete(titm.id)} className="form-check-input checkbox_form" type="checkbox" id="xs"  />
                 <label className="form-check-label" htmlFor="xs">{titm.theme_name}</label>           
               </div>
              ))}
           
            
            </div>
            
          </div>
          </div>
         
          {/* /.widget */}
          {/* <div className='line-break'/>   
          <div className="widget">
            <h4 className="widget-title mb-3">Color</h4>
            <div className='d-flex'>
            <div className=''>
              <div onClick={()=>setcolor()} className='color-body' style={{border:"1px solid",backgroundColor:"blue"}}/> 
            </div>
           
            <div className=''>
              <div className='color-body' style={{border:"1px solid",backgroundColor:"green"}}/> 
            </div>
            <div className=''>
              <div className='color-body' style={{border:"1px solid"}}>
                <div style={{backgroundColor:"white",height:"50%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}/>
                <div style={{backgroundColor:"black",height:"50%",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}}/>
              </div> 
            </div>
            </div>
           
          </div> */}
          {/* /.widget */}
          <div className='line-break'/>
          <div className="widget">
            <h4 className="widget-title mb-3">Orientation <button className='btn btn-sm btn-dark mt-1' style={{marginLeft:"60px"}} onClick={()=>setorientation('')}>Clear</button></h4>
            <div className='d-flex'>
            <div onClick={()=>setorientation("potrait")} style={orientation==="potrait"?{border:"2px solid #000"}:{}} className='ml-leftfirst' >
              <div className='p-2' style={{width:"80px",height:"100px"}}>
              <div className='card border-cp' style={{width:"100%",height:"100%",borderWidth:"3px"}}/>               
                <div>
                  </div>
                  <div className='button-orient'style={{marginLeft:"10px"}}><h6>Potrait</h6></div>
                </div>               
              </div>
            <div onClick={()=>setorientation("landscape")}  className='ml-left' style={orientation==="landscape"?{border:"2px solid #000"}:{}} >
              <div className='' style={{width:"80px",height:"100px",padding:"29px 10px"}}>
              <div className='card border-cp' style={{width:"100%",height:"100%",borderWidth:"3px"}}/>               
                <div>
                  </div>
                  <div className='button-orient ' style={{marginTop: "19px"}}><h6>Landscape</h6></div>
                </div>               
              </div>
            <div onClick={()=>setorientation("square")} style={orientation==="square"?{border:"2px solid #000"}:{}}  className='ml-left' >
              <div className='' style={{width:"80px",height:"100px",padding:"20px 10px"}}>
              <div className='card border-cp' style={{width:"100%",height:"100%",borderWidth:"3px"}}/>               
                <div>
                  </div>
                  <div className='button-orient'style={{marginTop: "10px",marginLeft:"10px"}}><h6>Square</h6></div>
                </div>               
              </div>
            
            
            </div>
            {/* /.row */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column .sidebar */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
</div>

    </div>
  )
}