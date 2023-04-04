import React from 'react'

export default function Shoppinghome() {
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\marilyn.jpg" alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                  {/* <span className="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{top: '1rem', left: '1rem'}}><span>Sale!</span></span> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\mona_lisa_glitch_0_0.jpg" alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\new_abstract_dxb_2.jpg"  alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                  {/* <span className="avatar bg-aqua text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{top: '1rem', left: '1rem'}}><span>New!</span></span> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\welcome_to_the_jungle.jpg"  alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\marilyn.jpg" alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                  {/* <span className="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{top: '1rem', left: '1rem'}}><span>Sale!</span></span> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\mona_lisa_glitch_0_0.jpg" alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\new_abstract_dxb_2.jpg"  alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
                  <a href="#" className="item-cart"><i className="uil uil-shopping-bag" /> Add to Cart</a>
                  {/* <span className="avatar bg-aqua text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{top: '1rem', left: '1rem'}}><span>New!</span></span> */}
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
              <div className="project item col-6 col-md-3 col-xl-3">
                <figure className="rounded mb-6 card_style">
                  <img src="\assets\img\brands\welcome_to_the_jungle.jpg"  alt=""/>
                  {/* <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart" /></a>
                  <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye" /></a> */}
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
</div>

    </div>
  )
}
