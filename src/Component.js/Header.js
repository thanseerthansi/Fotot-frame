import React from 'react'
import { FaTwitter,FaInstagram,FaFacebookF } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Header() {

  return (
    <div >
    <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none">
        <div className="container flex-lg-column">
          <div className="topbar d-flex flex-row w-100 justify-content-between align-items-center">
            <div className="navbar-brand"><a href="index.html"><img src="\assets\img\photos\logo-fotoframe.png"  height={70} alt="img" /></a></div>
            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/carttext">
                        {/* <i className="uil uil-info-circle" /> */}
                        <BsHandbag size={25}/>
                        </Link>
                        </li>
                
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn"><span /></button>
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.d-flex */}
          <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body d-flex flex-column h-100">
                <ul className="navbar-nav">
                  
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/" >Home</Link>
                    
                  </li>
                  
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="dropdown-item" href="blog.html">Blog without Sidebar</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="blog2.html">Blog with Sidebar</a></li>
                      <li className="nav-item"><a className="dropdown-item" href="blog3.html">Blog with Left Sidebar</a></li>
                      <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Blog Posts</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item"><a className="dropdown-item" href="blog-post.html">Post without Sidebar</a></li>
                          <li className="nav-item"><a className="dropdown-item" href="blog-post2.html">Post with Sidebar</a></li>
                          <li className="nav-item"><a className="dropdown-item" href="blog-post3.html">Post with Left Sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item dropdown dropdown-mega">
                    <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Frames</a>
                    <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                      <li className="mega-menu-content">
                        <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                          <li className="col"><Link className="dropdown-item"  to="/miniframe">
                              <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="\assets\img\photos\miniframes-622.jpg" width={107} alt="img"/></div>
                              <span>Mini Frame</span>
                            </Link>
                          </li>
                          <li className="col"><Link className="dropdown-item" to='/college'>
                              <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0"src="\assets\img\photos\collage-622.jpg" width={107} alt="img"/></div>
                              <span>College</span>
                            </Link>
                          </li>
                          <li className="col"><Link className="dropdown-item" to='/canavstype'>
                              <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="\assets\img\photos\canvas-622.jpg" width={107} alt="img"/></div>
                              <span>Canvas</span>
                            </Link>
                          </li>
                         
                        </ul>
                        {/*/.row */}
                      </li>
                      {/*/.mega-menu-content*/}
                    </ul>
                    {/*/.dropdown-menu */}
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/shopping" >Paintings</Link>
                    
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Documentation</a>
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
                    <a href="cdn-cgi/l/email-protection.html#6f09061d1c1b41030e1c1b2f0a020e0603410c0002" className="link-inverse"><span className="__cf_email__" data-cfemail="fd94939b92bd98909c9491d39e9290">[email&nbsp;protected]</span></a>
                    <br /> 00 (123) 456 78 90 <br />
                    <nav className="nav social social-white mt-4">
                        
                      <a href="/"><FaTwitter color='white' /></a>
                      <a href="/"><FaFacebookF color='white' /></a>
                      <a href="/"><FaInstagram color='white' /></a>
                      
                    </nav>
                    {/* /.social */}
                  </div>
                </div>
                {/* /.offcanvas-footer */}
              </div>
            </div>
            {/* /.navbar-collapse */}
            <div className="navbar-other ms-auto w-100 d-none d-lg-block">
              <nav className="nav social social-muted justify-content-end text-end">
                <a href="/"><FaTwitter color='black 'size={18}/></a>
                <a href="/"><FaFacebookF color='black 'size={15} /></a>
                <a href="/"><FaInstagram color='black 'size={18} /></a>
              </nav>
              {/* /.social */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.navbar-collapse-wrapper */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
      <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
        <div className="offcanvas-header">
          <h3 className="text-white fs-30 mb-0">Sandbox</h3>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body pb-6">
          <div className="widget mb-8">
            <p>Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.</p>
          </div>
          {/* /.widget */}
          <div className="widget mb-8">
            <h4 className="widget-title text-white mb-3">Contact Info</h4>
            <address> Moonshine St. 14/05 <br /> Light City, London </address>
            <a href="cdn-cgi/l/email-protection.html#4e28273c3d3a60222f3d3a0e2b232f2722602d2123"><span className="__cf_email__" data-cfemail="7d14131b123d18101c1411531e1210">[email&nbsp;protected]</span></a><br /> 00 (123) 456 78 90
          </div>
          {/* /.widget */}
          <div className="widget mb-8">
            <h4 className="widget-title text-white mb-3">Learn More</h4>
            <ul className="list-unstyled">
              <li><a href="/">Our Story</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          {/* /.widget */}
          <div className="widget">
            <h4 className="widget-title text-white mb-3">Follow Us</h4>
            <nav className="nav social social-white">
              <a href="/"><i className="uil uil-twitter" /></a>
              <a href="/"><i className="uil uil-facebook-f" /></a>
              <a href="/"><i className="uil uil-dribbble" /></a>
              <a href="/"><i className="uil uil-instagram" /></a>
              <a href="/"><i className="uil uil-youtube" /></a>
            </nav>
            {/* /.social */}
          </div>
          {/* /.widget */}
        </div>
        {/* /.offcanvas-body */}
      </div>
      {/* /.offcanvas */}
    </header>
    </div>
  )
}
