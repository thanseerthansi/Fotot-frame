import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Scripts from './Scripts';
export default function Home() {
  useEffect(() => {
    Scripts()
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div>
        
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 pt-md-14 pb-md-20">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0" data-cues="slideInDown" data-group="page-title" data-delay={600}>
            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">Creative. Smart. Awesome.</h1>
            <p className="lead fs-lg mb-7">We specialize in web, mobile and identity design. We love to turn ideas into beautiful things.</p>
            <div className="d-flex justify-content-center justify-content-lg-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay={900}>
              <span><Link className="btn btn-primary rounded me-2">See Projects</Link></span>
              <span><Link className="btn btn-yellow rounded">Learn More</Link></span>
            </div>
          </div>
          {/* /column */}
          <div className="col-lg-7" data-cue="slideInDown">
            <figure><img className="w-auto" src="\assets\img\photos\frameeg.jpeg" alt="img"/></figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /section */}
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16 pb-md-17">
        <div className="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
          <div className="col-md-6 col-xl-4">
            <div className="card shadow-lg card-border-bottom border-soft-yellow ">
            <Link to="/miniframe" className=''>
              <div className="card-body frame_card ">
                <img src="public\assets\img\photos\ffmain.jpg" className='image_width' alt="img"/>
                <h4>Mini frame</h4>
              </div>
              </Link>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-4">
            <div className="card shadow-lg card-border-bottom border-soft-green ">
              <Link to="/college">
              <div className="card-body frame_card">            
                <img src="\assets\img\photos\collage-622.jpg" className='image_width' alt="img"/>
                <h4>Collage</h4>              
              </div>
              </Link>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-4">
            <div className="card shadow-lg card-border-bottom border-soft-orange ">
                <Link to="/canavstype">
              <div className="card-body frame_card ">
                <img src="\assets\img\photos\canvas-622.jpg" className='image_width' alt="img"/>
                <br/><h4> Canvas</h4>
              </div>
                </Link>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
         
        </div>
        {/*/.row */}
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
          <div className="col-lg-7">
            <figure><img className="w-auto rounded" src="\assets\img\photos\Free-Frame-Mockup.jpg"  alt="img"/></figure>
          </div>
          {/*/column */}
          <div className="col-lg-5">
            <h3 className="display-4 mb-7">How It Works.</h3>
            <div className="d-flex flex-row mb-6">
              <div>
                <span className="icon btn btn-circle btn-soft-primary pe-none me-5"><span className="number fs-18">1</span></span>
              </div>
              <div>
                <h6 className="my-1">Pick your frame and upload your images</h6>
                {/* <p className="mb-0">Pick your frame and upload your images.</p> */}
              </div>
            </div>
            <div className="d-flex flex-row mb-6">
              <div>
                <span className="icon btn btn-circle btn-soft-primary pe-none me-5"><span className="number fs-18">2</span></span>
              </div>
              <div>
                <h6 className="my-1">We'll make and deliver your order</h6>
                {/* <p className="mb-0">Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna auctor fringilla augue.</p> */}
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <span className="icon btn btn-circle btn-soft-primary pe-none me-5"><span className="number fs-18">3</span></span>
              </div>
              <div>
                <h6 className="my-1">All you need to do is hang it up :)</h6>
                {/* <p className="mb-0">Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed. Nulla vitae elit libero pharetra.</p> */}
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <figure><img className="w-auto rounded" src="\assets\img\photos\FF.jpg"  alt="img"/></figure>
          </div>
          {/*/column */}
          <div className="col-lg-5">
            {/* <h3 className="display-4 mb-7  ">What is draft?</h3> */}
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                {/* <div className="card-header" id="headingOne">
                  <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Professional Design </button>
                </div> */}
                {/*/.card-header */}
                {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"> */}
                
                  <div className="card-body">
                  <h3 className="display-4 mb-7  ">What is draft?</h3>
                    <p>We are printing & framing nerds, who make your photos look gallery quality, without the gallery price!</p>
                  </div>
                  {/*/.card-body */}
                {/* </div> */}
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                {/* <div className="card-header" id="headingTwo">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Top-Notch Support </button>
                </div> */}
                {/*/.card-header */}
                {/* <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"> */}
                  <div className="card-body">
                    <p>We get how important life’s moments are and your special memories shouldn’t be lost on your laptop or camera roll.</p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              {/* </div> */}
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                {/* <div className="card-header" id="headingThree">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Header and Slider Options </button>
                </div> */}
                {/*/.card-header */}
                {/* <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"> */}
                  <div className="card-body">
                    <p>In just a few simple clicks you can bring your favorite images to life .</p>
                  </div>
                  {/*/.card-body */}
                {/* </div> */}
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>

    
    {/* /section */}
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure><img className="w-auto" src="assets/img/illustrations/i5.png"  alt="img"/></figure>
          </div>
          {/*/column */}
          <div className="col-lg-5">
            <h3 className="display-4 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <SlLocationPin/> </div>
              </div>
              <div>
                <h5 className="mb-1">Address</h5>
                <address>Moonshine St. 14/05 Light City, London</address>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <FiPhoneCall/> </div>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p>00 (123) 456 78 90</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <MdOutlineEmail/> </div>
              </div>
              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0"><a href="cdn-cgi/l/email-protection.html#e99a88878d8b8691a98c84888085c78a8684" className="link-body"><span className="__cf_email__" data-cfemail="661507080204091e26030b070f0a4805090b">[email&nbsp;protected]</span></a></p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
    </div>
  )
}
