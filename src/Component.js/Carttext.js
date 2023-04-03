import React, { useEffect } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
export default function Carttext() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
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
                <tr>
                  <td className="option text-start d-flex flex-row align-items-center ps-0">
                    <figure className="rounded w-17"><a href="shop-product.html"><img src="\assets\img\photos\canvas.png"  alt="" /></a></figure>
                    <div className="w-100 ms-4">
                      <h3 className="post-title h6 lh-xs mb-1"><a href="shop-product.html" className="link-dark">potrate Canvas</a></h3>
                      <div className="small">Papper Type: Matte </div>
                      <div className="small">Size: 45 x 30 cm</div>
                      <div className="small">Orientation: Landscape</div>
                    </div>
                  </td>
                  {/* <td>
                    <p className="price"><del><span className="amount">$55.00</span></del> <ins><span className="amount">AED 45</span></ins></p>
                  </td> */}
                 
                  <td>
                    <p className="price"><span className="amount">AED 45.99</span></p>
                  </td>
                  <td className="pe-0">
                    <RiDeleteBin6Fill/>
                  </td>
                </tr>
                
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
                    <p className="price">$135.99</p>
                  </td>
                </tr>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Discount (5%)</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price text-red">-$6.8</p>
                  </td>
                </tr>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Shipping</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price">$10</p>
                  </td>
                </tr>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Grand Total</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price text-dark fw-bold">$152.79</p>
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
