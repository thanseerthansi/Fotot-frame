import React from 'react'

export default function Checkout() {
  return (
    <div>
       <section className="wrapper bg-light">
  <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
    <div className="row gx-md-8 gx-xl-12 gy-12">
      <div className="col-lg-8">
        <div className="alert alert-blue alert-icon mb-6" role="alert">
          <i className="uil uil-exclamation-circle" /> Already have an account? <a href="#" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-dismiss="modal" className="alert-link hover">Sign in</a> for faster checkout experience.
        </div>
        <h3 className="mb-4">Billing address</h3>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="firstName" placeholder="First name" defaultValue required />
                <label htmlFor="firstName" className="form-label">First name</label>
                <div className="invalid-feedback"> Valid first name is required. </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="lastName" placeholder="Last name" defaultValue required />
                <label htmlFor="lastName" className="form-label">Last name</label>
                <div className="invalid-feedback"> Valid last name is required. </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                <label htmlFor="email" className="form-label">Email</label>
                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                <label htmlFor="address" className="form-label">Address</label>
                <div className="invalid-feedback"> Please enter your shipping address. </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-select-wrapper">
                <select className="form-select" id="country" required>
                  <option value>Country</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback"> Please select a valid country. </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-select-wrapper">
                <select className="form-select" id="state" required>
                  <option value>State</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback"> Please provide a valid state. </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="zip" placeholder="Zip Code" required />
                <label htmlFor="zip" className="form-label">Zip Code</label>
                <div className="invalid-feedback"> Zip code required. </div>
              </div>
            </div>
          </div>
          <hr className="mt-7 mb-6" />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address" />
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info" />
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div>
          <hr className="mt-7 mb-6" />
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
          </div>
        </form>
      </div>
      {/* /column */}
      <div className="col-lg-4">
        <h3 className="mb-4">Order Summary</h3>
        {/* /.shopping-cart*/}
        <hr className="my-4" />
        <h3 className="mb-2">Shipping</h3>
        <div className="mb-5">
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
        </div>
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
        <a href="#" className="btn btn-primary rounded w-100 mt-4">Place Order</a>
      </div>
      {/* /column */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
</section>
<div className="modal fade" id="modal-signin" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <h2 className="mb-3 text-start">Welcome Back</h2>
        <p className="lead mb-6 text-start">Fill your email and password to sign in.</p>
        <form className="text-start mb-3">
          <div className="form-floating mb-4">
            <input type="email" className="form-control" placeholder="Email" id="loginEmail" />
            <label htmlFor="loginEmail">Email</label>
          </div>
          <div className="form-floating password-field mb-4">
            <input type="password" className="form-control" placeholder="Password" id="loginPassword" />
            <span className="password-toggle"><i className="uil uil-eye" /></span>
            <label htmlFor="loginPassword">Password</label>
          </div>
          <a className="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign In</a>
        </form>
        {/* /form */}
        <p className="mb-1"><a href="#" className="hover">Forgot Password?</a></p>
        <p className="mb-0">Don't have an account? <a href="#" data-bs-target="#modal-signup" data-bs-toggle="modal" data-bs-dismiss="modal" className="hover">Sign up</a></p>
        <div className="divider-icon my-4">or</div>
        <nav className="nav social justify-content-center text-center">
          <a href="#" className="btn btn-circle btn-sm btn-google"><i className="uil uil-google" /></a>
          <a href="#" className="btn btn-circle btn-sm btn-facebook-f"><i className="uil uil-facebook-f" /></a>
          <a href="#" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter" /></a>
        </nav>
        {/*/.social */}
      </div>
      {/*/.modal-content */}
    </div>
    {/*/.modal-body */}
  </div>
  {/*/.modal-dialog */}
</div>
{/*/.modal */}
<div className="modal fade" id="modal-signup" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content text-center">
      <div className="modal-body">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
        <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
        <form className="text-start mb-3">
          <div className="form-floating mb-4">
            <input type="text" className="form-control" placeholder="Name" id="loginName" />
            <label htmlFor="loginName">Name</label>
          </div>
          <div className="form-floating mb-4">
            <input type="email" className="form-control" placeholder="Email" id="loginEmail" />
            <label htmlFor="loginEmail">Email</label>
          </div>
          <div className="form-floating password-field mb-4">
            <input type="password" className="form-control" placeholder="Password" id="loginPassword" />
            <span className="password-toggle"><i className="uil uil-eye" /></span>
            <label htmlFor="loginPassword">Password</label>
          </div>
          <div className="form-floating password-field mb-4">
            <input type="password" className="form-control" placeholder="Confirm Password" id="loginPasswordConfirm" />
            <span className="password-toggle"><i className="uil uil-eye" /></span>
            <label htmlFor="loginPasswordConfirm">Confirm Password</label>
          </div>
          <a className="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign Up</a>
        </form>
        {/* /form */}
        <p className="mb-0">Already have an account? <a href="#" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-dismiss="modal" className="hover">Sign in</a></p>
        <div className="divider-icon my-4">or</div>
        <nav className="nav social justify-content-center text-center">
          <a href="#" className="btn btn-circle btn-sm btn-google"><i className="uil uil-google" /></a>
          <a href="#" className="btn btn-circle btn-sm btn-facebook-f"><i className="uil uil-facebook-f" /></a>
          <a href="#" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter" /></a>
        </nav>
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
