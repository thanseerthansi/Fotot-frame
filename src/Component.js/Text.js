import React, { useEffect } from 'react'
import Scripts from './Scripts'

export default function Text() {
    useEffect(() => {
      Scripts()
    }, [])
    
  return (
    <div>
        <div>
      <div className="content-wrapper">
  <header className="wrapper bg-light">
    <nav className="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light">
      <div className="container flex-lg-row flex-nowrap align-items-center">
        <div className="navbar-brand w-100">
          <a href="index.html">
            <img src="assets/img/logo.png"  alt />
          </a>
        </div>
        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div className="offcanvas-header d-lg-none">
            <h3 className="text-white fs-30 mb-0">Sandbox</h3>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul className="navbar-nav">
              <li className="nav-item dropdown dropdown-mega">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li className="mega-menu-content mega-menu-scroll">
                    <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                      <li className="col">
                        <a className="dropdown-item" href="demo1.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi1.jpg" srcSet="./assets/img/demos/mi1@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 1</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo2.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi2.jpg" srcSet="./assets/img/demos/mi2@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 2</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo3.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi3.jpg" srcSet="./assets/img/demos/mi3@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 3</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo4.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi4.jpg" srcSet="./assets/img/demos/mi4@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 4</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo5.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi5.jpg" srcSet="./assets/img/demos/mi5@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 5</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo6.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi6.jpg" srcSet="./assets/img/demos/mi6@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 6</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo7.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi7.jpg" srcSet="./assets/img/demos/mi7@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 7</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo8.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi8.jpg" srcSet="./assets/img/demos/mi8@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 8</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo9.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi9.jpg" srcSet="./assets/img/demos/mi9@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 9</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo10.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi10.jpg" srcSet="./assets/img/demos/mi10@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 10</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo11.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi11.jpg" srcSet="./assets/img/demos/mi11@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 11</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo12.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi12.jpg" srcSet="./assets/img/demos/mi12@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 12</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo13.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi13.jpg" srcSet="./assets/img/demos/mi13@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 13</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo14.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi14.jpg" srcSet="./assets/img/demos/mi14@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 14</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo15.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi15.jpg" srcSet="./assets/img/demos/mi15@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 15</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo16.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi16.jpg" srcSet="./assets/img/demos/mi16@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 16</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo17.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi17.jpg" srcSet="./assets/img/demos/mi17@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 17</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo18.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi18.jpg" srcSet="./assets/img/demos/mi18@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 18</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo19.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi19.jpg" srcSet="./assets/img/demos/mi19@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 19</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo20.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi20.jpg" srcSet="./assets/img/demos/mi20@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 20</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo21.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi21.jpg" srcSet="./assets/img/demos/mi21@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 21</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo22.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi22.jpg" srcSet="./assets/img/demos/mi22@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 22</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo23.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi23.jpg" srcSet="./assets/img/demos/mi23@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 23</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo24.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi24.jpg" srcSet="./assets/img/demos/mi24@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 24</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo25.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi25.jpg" srcSet="./assets/img/demos/mi25@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 25</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo26.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi26.jpg" srcSet="./assets/img/demos/mi26@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 26</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo27.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi27.jpg" srcSet="./assets/img/demos/mi27@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 27</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo28.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi28.jpg" srcSet="./assets/img/demos/mi28@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 28</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo29.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi29.jpg" srcSet="./assets/img/demos/mi29@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 29</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo30.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi30.jpg" srcSet="./assets/img/demos/mi30@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 30</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo31.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi31.jpg" srcSet="./assets/img/demos/mi31@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 31</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo32.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi32.jpg" srcSet="./assets/img/demos/mi32@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 32</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo33.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi33.jpg" srcSet="./assets/img/demos/mi33@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 33</span>
                        </a>
                      </li>
                      <li className="col">
                        <a className="dropdown-item" href="demo34.html">
                          <figure className="rounded lift d-none d-lg-block"><img src="assets/img/demos/mi34.jpg" srcSet="./assets/img/demos/mi34@2x.jpg 2x" alt /></figure>
                          <span className="d-lg-none">Demo 34</span>
                        </a>
                      </li>
                    </ul>
                    {/*/.row */}
                    <span className="d-none d-lg-flex"><i className="uil uil-direction" /><strong>Scroll to view more</strong></span>
                  </li>
                  {/*/.mega-menu-content*/}
                </ul>
                {/*/.dropdown-menu */}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="services.html">Services I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="services2.html">Services II</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="about.html">About I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="about2.html">About II</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="shop.html">Shop I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="shop2.html">Shop II</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="shop-product.html">Product Page</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="shop-cart.html">Shopping Cart</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="shop-checkout.html">Checkout</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="contact.html">Contact I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="contact2.html">Contact II</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="contact3.html">Contact III</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Career</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="career.html">Job Listing I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="career2.html">Job Listing II</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="career-job.html">Job Description</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Utility</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="404.html">404 Not Found</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="page-loader.html">Page Loader</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="signin.html">Sign In I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="signin2.html">Sign In II</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="signup.html">Sign Up I</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="signup2.html">Sign Up II</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="terms.html">Terms</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="dropdown-item" href="pricing.html">Pricing</a></li>
                  <li className="nav-item"><a className="dropdown-item" href="onepage.html">One Page</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Projects</a>
                <div className="dropdown-menu dropdown-lg">
                  <div className="dropdown-lg-content">
                    <div>
                      <h6 className="dropdown-header">Project Pages</h6>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="projects.html">Projects I</a></li>
                        <li><a className="dropdown-item" href="projects2.html">Projects II</a></li>
                        <li><a className="dropdown-item" href="projects3.html">Projects III</a></li>
                        <li><a className="dropdown-item" href="projects4.html">Projects IV</a></li>
                      </ul>
                    </div>
                    {/* /.column */}
                    <div>
                      <h6 className="dropdown-header">Single Projects</h6>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="single-project.html">Single Project I</a></li>
                        <li><a className="dropdown-item" href="single-project2.html">Single Project II</a></li>
                        <li><a className="dropdown-item" href="single-project3.html">Single Project III</a></li>
                        <li><a className="dropdown-item" href="single-project4.html">Single Project IV</a></li>
                      </ul>
                    </div>
                    {/* /.column */}
                  </div>
                  {/* /auto-column */}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><a className="dropdown-item" href="blog.html">Blog without Sidebar</a></li>
                  <li className="nav-item"><a className="dropdown-item" href="blog2.html">Blog with Sidebar</a></li>
                  <li className="nav-item"><a className="dropdown-item" href="blog3.html">Blog with Left Sidebar</a></li>
                  <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Posts</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="blog-post.html">Post without Sidebar</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="blog-post2.html">Post with Sidebar</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="blog-post3.html">Post with Left Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-mega">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blocks</a>
                <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li className="mega-menu-content">
                    <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                      <li className="col"><a className="dropdown-item" href="docs/blocks/about.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block1.svg" alt /></div>
                          <span>About</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/blog.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block2.svg" alt /></div>
                          <span>Blog</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/call-to-action.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block3.svg" alt /></div>
                          <span>Call to Action</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/clients.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block4.svg" alt /></div>
                          <span>Clients</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/contact.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block5.svg" alt /></div>
                          <span>Contact</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/facts.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block6.svg" alt /></div>
                          <span>Facts</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/faq.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block7.svg" alt /></div>
                          <span>FAQ</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/features.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block8.svg" alt /></div>
                          <span>Features</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/footer.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block9.svg" alt /></div>
                          <span>Footer</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/hero.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block10.svg" alt /></div>
                          <span>Hero</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/misc.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block17.svg" alt /></div>
                          <span>Misc</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/navbar.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block11.svg" alt /></div>
                          <span>Navbar</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/portfolio.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block12.svg" alt /></div>
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/pricing.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block13.svg" alt /></div>
                          <span>Pricing</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/process.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block14.svg" alt /></div>
                          <span>Process</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/team.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block15.svg" alt /></div>
                          <span>Team</span>
                        </a>
                      </li>
                      <li className="col"><a className="dropdown-item" href="docs/blocks/testimonials.html">
                          <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="assets/img/demos/block16.svg" alt /></div>
                          <span>Testimonials</span>
                        </a>
                      </li>
                    </ul>
                    {/*/.row */}
                  </li>
                  {/*/.mega-menu-content*/}
                </ul>
                {/*/.dropdown-menu */}
              </li>
              <li className="nav-item dropdown dropdown-mega">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Documentation</a>
                <ul className="dropdown-menu mega-menu">
                  <li className="mega-menu-content">
                    <div className="row gx-0 gx-lg-3">
                      <div className="col-lg-4">
                        <h6 className="dropdown-header">Usage</h6>
                        <ul className="list-unstyled cc-2 pb-lg-1">
                          <li><a className="dropdown-item" href="docs/index.html">Get Started</a></li>
                          <li><a className="dropdown-item" href="docs/forms.html">Forms</a></li>
                          <li><a className="dropdown-item" href="docs/faq.html">FAQ</a></li>
                          <li><a className="dropdown-item" href="docs/changelog.html">Changelog</a></li>
                          <li><a className="dropdown-item" href="docs/credits.html">Credits</a></li>
                        </ul>
                        <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                        <ul className="list-unstyled cc-2">
                          <li><a className="dropdown-item" href="docs/styleguide/colors.html">Colors</a></li>
                          <li><a className="dropdown-item" href="docs/styleguide/fonts.html">Fonts</a></li>
                          <li><a className="dropdown-item" href="docs/styleguide/icons-svg.html">SVG Icons</a></li>
                          <li><a className="dropdown-item" href="docs/styleguide/icons-font.html">Font Icons</a></li>
                          <li><a className="dropdown-item" href="docs/styleguide/illustrations.html">Illustrations</a></li>
                          <li><a className="dropdown-item" href="docs/styleguide/backgrounds.html">Backgrounds</a></li>
                          <li><a className="dropdown-item" href="docs/styleguide/misc.html">Misc</a></li>
                        </ul>
                      </div>
                      {/*/column */}
                      <div className="col-lg-8">
                        <h6 className="dropdown-header">Elements</h6>
                        <ul className="list-unstyled cc-3">
                          <li><a className="dropdown-item" href="docs/elements/accordion.html">Accordion</a></li>
                          <li><a className="dropdown-item" href="docs/elements/alerts.html">Alerts</a></li>
                          <li><a className="dropdown-item" href="docs/elements/animations.html">Animations</a></li>
                          <li><a className="dropdown-item" href="docs/elements/avatars.html">Avatars</a></li>
                          <li><a className="dropdown-item" href="docs/elements/background.html">Background</a></li>
                          <li><a className="dropdown-item" href="docs/elements/badges.html">Badges</a></li>
                          <li><a className="dropdown-item" href="docs/elements/buttons.html">Buttons</a></li>
                          <li><a className="dropdown-item" href="docs/elements/card.html">Card</a></li>
                          <li><a className="dropdown-item" href="docs/elements/carousel.html">Carousel</a></li>
                          <li><a className="dropdown-item" href="docs/elements/dividers.html">Dividers</a></li>
                          <li><a className="dropdown-item" href="docs/elements/form-elements.html">Form Elements</a></li>
                          <li><a className="dropdown-item" href="docs/elements/image-hover.html">Image Hover</a></li>
                          <li><a className="dropdown-item" href="docs/elements/image-mask.html">Image Mask</a></li>
                          <li><a className="dropdown-item" href="docs/elements/lightbox.html">Lightbox</a></li>
                          <li><a className="dropdown-item" href="docs/elements/player.html">Media Player</a></li>
                          <li><a className="dropdown-item" href="docs/elements/modal.html">Modal</a></li>
                          <li><a className="dropdown-item" href="docs/elements/pagination.html">Pagination</a></li>
                          <li><a className="dropdown-item" href="docs/elements/progressbar.html">Progressbar</a></li>
                          <li><a className="dropdown-item" href="docs/elements/shadows.html">Shadows</a></li>
                          <li><a className="dropdown-item" href="docs/elements/shapes.html">Shapes</a></li>
                          <li><a className="dropdown-item" href="docs/elements/tables.html">Tables</a></li>
                          <li><a className="dropdown-item" href="docs/elements/tabs.html">Tabs</a></li>
                          <li><a className="dropdown-item" href="docs/elements/text-animations.html">Text Animations</a></li>
                          <li><a className="dropdown-item" href="docs/elements/text-highlight.html">Text Highlight</a></li>
                          <li><a className="dropdown-item" href="docs/elements/tiles.html">Tiles</a></li>
                          <li><a className="dropdown-item" href="docs/elements/tooltips-popovers.html">Tooltips &amp; Popovers</a></li>
                          <li><a className="dropdown-item" href="docs/elements/typography.html">Typography</a></li>
                        </ul>
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </li>
                  {/*/.mega-menu-content*/}
                </ul>
                {/*/.dropdown-menu */}
              </li>
            </ul>
            {/* /.navbar-nav */}
            <div className="offcanvas-footer d-lg-none">
              <div>
                <a href="cdn-cgi/l/email-protection.html#3f59564d4c4b11535e4c4b7f5a525e5653115c5052" className="link-inverse"><span className="__cf_email__" data-cfemail="f29b9c949db2979f939b9edc919d9f">[email&nbsp;protected]</span></a>
                <br /> 00 (123) 456 78 90 <br />
                <nav className="nav social social-white mt-4">
                  <a href="#"><i className="uil uil-twitter" /></a>
                  <a href="#"><i className="uil uil-facebook-f" /></a>
                  <a href="#"><i className="uil uil-dribbble" /></a>
                  <a href="#"><i className="uil uil-instagram" /></a>
                  <a href="#"><i className="uil uil-youtube" /></a>
                </nav>
                {/* /.social */}
              </div>
            </div>
            {/* /.offcanvas-footer */}
          </div>
          {/* /.offcanvas-body */}
        </div>
        {/* /.navbar-collapse */}
        <div className="navbar-other w-100 d-flex ms-auto">
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item"><a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search"><i className="uil uil-search" /></a></li>
            <li className="nav-item">
              <a className="nav-link position-relative d-flex flex-row align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart">
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <button className="hamburger offcanvas-nav-btn"><span /></button>
            </li>
          </ul>
          {/* /.navbar-nav */}
        </div>
        {/* /.navbar-other */}
      </div>
      {/* /.container */}
    </nav>
    {/* /.navbar */}
    <div className="offcanvas offcanvas-end bg-light" id="offcanvas-cart" data-bs-scroll="true">
      <div className="offcanvas-header">
        <h3 className="mb-0">Your Cart</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body d-flex flex-column">
        <div className="shopping-cart">
          <div className="shopping-cart-item d-flex justify-content-between mb-4">
            <div className="d-flex flex-row">
              <figure className="rounded w-17"><a href="shop-product.html"><img src="assets/img/photos/sth1.jpg" srcSet="./assets/img/photos/sth1@2x.jpg 2x" alt /></a></figure>
              <div className="w-100 ms-4">
                <h3 className="post-title fs-16 lh-xs mb-1"><a href="shop-product.html" className="link-dark">Nike Air Sneakers</a></h3>
                <p className="price fs-sm"><del><span className="amount">$55.00</span></del> <ins><span className="amount">$45.99</span></ins></p>
                
                {/*/.form-select-wrapper */}
              </div>
            </div>
            <div className="ms-2"><a href="#" className="link-dark"><i className="uil uil-trash-alt" /></a></div>
          </div>
          {/*/.shopping-cart-item */}
          <div className="shopping-cart-item d-flex justify-content-between mb-4">
            <div className="d-flex flex-row">
              <figure className="rounded w-17"><a href="shop-product.html"><img src="assets/img/photos/sth2.jpg" srcSet="./assets/img/photos/sth2@2x.jpg 2x" alt /></a></figure>
              <div className="w-100 ms-4">
                <h3 className="post-title fs-16 lh-xs mb-1"><a href="shop-product.html" className="link-dark">Colorful Sneakers</a></h3>
                <p className="price fs-sm"><span className="amount">$45.00</span></p>
                <div className="form-select-wrapper">
                  <select className="form-select form-select-sm">
                    <option value={1} selected>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                {/*/.form-select-wrapper */}
              </div>
            </div>
            <div className="ms-2"><a href="#" className="link-dark"><i className="uil uil-trash-alt" /></a></div>
          </div>
          {/*/.shopping-cart-item */}
          <div className="shopping-cart-item d-flex justify-content-between mb-4">
            <div className="d-flex flex-row">
              <figure className="rounded w-17"><a href="shop-product.html"><img src="assets/img/photos/sth3.jpg" srcSet="./assets/img/photos/sth3@2x.jpg 2x" alt /></a></figure>
              <div className="w-100 ms-4">
                <h3 className="post-title fs-16 lh-xs mb-1"><a href="shop-product.html" className="link-dark">Polaroid Camera</a></h3>
                <p className="price fs-sm"><span className="amount">$45.00</span></p>
                <div className="form-select-wrapper">
                  <select className="form-select form-select-sm">
                    <option value={1} selected>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                {/*/.form-select-wrapper */}
              </div>
            </div>
            <div className="ms-2"><a href="#" className="link-dark"><i className="uil uil-trash-alt" /></a></div>
          </div>
          {/*/.shopping-cart-item */}
        </div>
        {/* /.shopping-cart*/}
        <div className="offcanvas-footer flex-column text-center">
          <div className="d-flex w-100 justify-content-between mb-4">
            <span>Subtotal:</span>
            <span className="h6 mb-0">$135.99</span>
          </div>
          <a href="#" className="btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4"><i className="uil uil-credit-card fs-18" /> Checkout</a>
          <p className="fs-14 mb-0">Free shipping on all orders over $50</p>
        </div>
        {/* /.offcanvas-footer*/}
      </div>
      {/* /.offcanvas-body */}
    </div>
    {/* /.offcanvas */}
    <div className="offcanvas offcanvas-top bg-light" id="offcanvas-search" data-bs-scroll="true">
      <div className="container d-flex flex-row py-6">
        <form className="search-form w-100">
          <input id="search-form" type="text" className="form-control" placeholder="Type keyword and hit enter" />
        </form>
        {/* /.search-form */}
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      {/* /.container */}
    </div>
    {/* /.offcanvas */}
  </header>
  {/* /header */}
  <section className="wrapper bg-gray">
    <div className="container py-3 py-md-5">
      <nav className="d-inline-block" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Shop</li>
        </ol>
      </nav>
      {/* /nav */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-light">
    <div className="container pb-14 pb-md-16 pt-12">
      <div className="row gy-10">
        <div className="col-lg-9 order-lg-2">
          <div className="row align-items-center mb-10 position-relative zindex-1">
            <div className="col-md-7 col-xl-8 pe-xl-20">
              <h2 className="display-6 mb-1">New Arrivals</h2>
              <p className="mb-0 text-muted">Showing 1–9 of 30 results</p>
            </div>
            {/*/column */}
            <div className="col-md-5 col-xl-4 ms-md-auto text-md-end mt-5 mt-md-0">
              <div className="form-select-wrapper">
                <select className="form-select">
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="newness">Sort by newness</option>
                  <option value="price: low to high">Sort by price: low to high</option>
                  <option value="price: high to low">Sort by price: high to low</option>
                </select>
              </div>
              {/*/.form-select-wrapper */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="grid grid-view projects-masonry shop mb-13">
            <div className="row gx-md-8 gy-10 gy-md-13 isotope">
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh1.jpg" srcSet="./assets/img/photos/sh1@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                  <span className="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{top: '1rem', left: '1rem'}}><span>Sale!</span></span>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Shoes</div>
                    <span className="ratings five" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Nike Air Sneakers</a></h2>
                  <p className="price"><del><span className="amount">$55.00</span></del> <ins><span className="amount">$45.00</span></ins></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh2.jpg" srcSet="./assets/img/photos/sh2@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Electronics</div>
                    <span className="ratings four" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Apple Watch</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh3.jpg" srcSet="./assets/img/photos/sh3@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                  <span className="avatar bg-aqua text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{top: '1rem', left: '1rem'}}><span>New!</span></span>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Electronics</div>
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Headphones</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh4.jpg" srcSet="./assets/img/photos/sh4@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Shoes</div>
                    <span className="ratings three" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Colorful Sneakers</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh5.jpg" srcSet="./assets/img/photos/sh5@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Electronics</div>
                    <span className="ratings one" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Polaroid Camera</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh6.jpg" srcSet="./assets/img/photos/sh6@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Cosmetics</div>
                    <span className="ratings two" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Curology Cleanser</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh7.jpg" srcSet="./assets/img/photos/sh7@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Home &amp; Kitchen</div>
                    <span className="ratings four" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Q&amp;Q Wall Clock</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh8.jpg" srcSet="./assets/img/photos/sh8@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Electronics</div>
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Earphones</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
              <div className="project item col-md-6 col-xl-4">
                <figure className="rounded mb-6">
                  <img src="assets/img/photos/sh9.jpg" srcSet="./assets/img/photos/sh9@2x.jpg 2x" alt />
                  <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a>
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                </figure>
                <div className="post-header">
                  <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                    <div className="post-category text-ash mb-0">Accessories</div>
                    <span className="ratings five" />
                  </div>
                  <h2 className="post-title h3 fs-22"><a href="shop-product.html" className="link-dark">Apple Watch Milano Loop</a></h2>
                  <p className="price"><span className="amount">$55.00</span></p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /.item */}
            </div>
            {/* /.row */}
          </div>
          {/* /.grid */}
          <nav className="d-flex" aria-label="pagination">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true"><i className="uil uil-arrow-left" /></span>
                </a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true"><i className="uil uil-arrow-right" /></span>
                </a>
              </li>
            </ul>
            {/* /.pagination */}
          </nav>
          {/* /nav */}
        </div>
        {/* /column */}
        <aside className="col-lg-3 sidebar">
          <div className="widget mt-1">
            <h4 className="widget-title mb-3">Categories</h4>
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <a href="#" className="align-items-center rounded link-body" data-bs-toggle="collapse" data-bs-target="#clothing-collapse" aria-expanded="true"> Clothing <span className="fs-sm text-muted ms-1">(21)</span>
                </a>
                <div className="collapse show mt-1" id="clothing-collapse" style={{}}>
                  <ul className="btn-toggle-nav list-unstyled ps-2">
                    <li><a href="#" className="link-body">Dresses</a></li>
                    <li><a href="#" className="link-body">Knitwear</a></li>
                    <li><a href="#" className="link-body">Jeans</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <a href="#" className="align-items-center rounded collapsed link-body" data-bs-toggle="collapse" data-bs-target="#electronics-collapse" aria-expanded="false"> Electronics <span className="fs-sm text-muted ms-1">(19)</span>
                </a>
                <div className="collapse mt-1" id="electronics-collapse" style={{}}>
                  <ul className="btn-toggle-nav list-unstyled ps-2">
                    <li><a href="#" className="link-body">Headphones</a></li>
                    <li><a href="#" className="link-body">Computers</a></li>
                    <li><a href="#" className="link-body">Cameras</a></li>
                    <li><a href="#" className="link-body">Annually</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <a href="#" className="align-items-center rounded collapsed link-body" data-bs-toggle="collapse" data-bs-target="#shoes-collapse" aria-expanded="false"> Shoes <span className="fs-sm text-muted ms-1">(12)</span>
                </a>
                <div className="collapse mt-1" id="shoes-collapse" style={{}}>
                  <ul className="btn-toggle-nav list-unstyled ps-2">
                    <li><a href="#" className="link-body">Sneakers</a></li>
                    <li><a href="#" className="link-body">Sandals</a></li>
                    <li><a href="#" className="link-body">Boots</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <a href="#" className="align-items-center rounded collapsed link-body" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false"> Home &amp; Kitchen <span className="fs-sm text-muted ms-1">(16)</span>
                </a>
                <div className="collapse mt-1" id="home-collapse" style={{}}>
                  <ul className="btn-toggle-nav list-unstyled ps-2">
                    <li><a href="#" className="link-body">Clocks</a></li>
                    <li><a href="#" className="link-body">Kettles</a></li>
                    <li><a href="#" className="link-body">Kitchenware</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* /.widget */}
          <div className="widget">
            <h4 className="widget-title mb-3">Rating</h4>
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="rating" id="rating5" defaultChecked />
              <label className="form-check-label" htmlFor="rating5">
                <span className="ratings five" />
              </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="rating" id="rating4" />
              <label className="form-check-label" htmlFor="rating4">
                <span className="ratings four" />
              </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="rating" id="rating3" />
              <label className="form-check-label" htmlFor="rating3">
                <span className="ratings three" />
              </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="rating" id="rating2" />
              <label className="form-check-label" htmlFor="rating2">
                <span className="ratings two" />
              </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="rating" id="rating1" />
              <label className="form-check-label" htmlFor="rating1">
                <span className="ratings one" />
              </label>
            </div>
            {/* /.form-check */}
          </div>
          {/* /.widget */}
          <div className="widget">
            <h4 className="widget-title mb-3">Size</h4>
            <div className="form-check mb-1">
              <input className="form-check-input" type="checkbox" id="xs" defaultChecked />
              <label className="form-check-label" htmlFor="xs">XS <span className="fs-sm text-muted ms-1">(23)</span></label>
            </div>
            <div className="form-check mb-1">
              <input className="form-check-input" type="checkbox" id="s" />
              <label className="form-check-label" htmlFor="s">S <span className="fs-sm text-muted ms-1">(253)</span></label>
            </div>
            <div className="form-check mb-1">
              <input className="form-check-input" type="checkbox" id="m" />
              <label className="form-check-label" htmlFor="m">M <span className="fs-sm text-muted ms-1">(65)</span></label>
            </div>
            <div className="form-check mb-1">
              <input className="form-check-input" type="checkbox" id="l" />
              <label className="form-check-label" htmlFor="l">L <span className="fs-sm text-muted ms-1">(156)</span></label>
            </div>
            <div className="form-check mb-1">
              <input className="form-check-input" type="checkbox" id="xl" />
              <label className="form-check-label" htmlFor="xl">XL <span className="fs-sm text-muted ms-1">(74)</span></label>
            </div>
          </div>
          {/* /.widget */}
          <div className="widget">
            <h4 className="widget-title mb-3">Price</h4>
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="price" id="price1" defaultChecked />
              <label className="form-check-label" htmlFor="price1"> $0.00 - $50.00 </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="price" id="price2" />
              <label className="form-check-label" htmlFor="price2"> $0.00 - $50.00 </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="price" id="price3" />
              <label className="form-check-label" htmlFor="price3"> $50.00 - $100.00 </label>
            </div>
            {/* /.form-check */}
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="price" id="price4" />
              <label className="form-check-label" htmlFor="price4"> $150.00 - $200.00 </label>
            </div>
            {/* /.form-check */}
            <div className="row">
              <div className="col-7 col-md-5 col-lg-12 col-xl-10 col-xxl-10">
                <div className="d-flex align-items-center mt-4">
                  <input type="number" className="form-control form-control-sm" placeholder="$0.00" min={0} />
                  <div className="text-muted mx-2">‒</div>
                  <input type="number" className="form-control form-control-sm" placeholder="$50.00" max={50} />
                </div>
              </div>
              {/* /column */}
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
  {/* /section */}
  <section className="wrapper bg-gray">
    <div className="container py-12 py-md-14">
      <div className="row gx-lg-8 gx-xl-12 gy-8">
        <div className="col-md-6 col-lg-4">
          <div className="d-flex flex-row">
            <div>
              <img src="assets/img/icons/solid/shipment.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-navy me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Free Shipping</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4">
          <div className="d-flex flex-row">
            <div>
              <img src="assets/img/icons/solid/push-cart.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-navy me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">30 Days Return</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4">
          <div className="d-flex flex-row">
            <div>
              <img src="assets/img/icons/solid/verify.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-navy me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">2-Years Warranty</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem.</p>
            </div>
          </div>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
</div>

  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</div>

    </div>
  )
}
