import React, { useState } from 'react'
import BreadCumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from '../components/Color';
import Container from '../components/Container';


const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return <>
    <Meta title={"Our Store"} />
    <BreadCumb title="Our Store" />
    <Container class1="store-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
          <div className="filter-card mb-3">
            <h3 className="filter-title">
              Shop By Categories
            </h3>
            <div>
              <ul>
                <li>Watch</li>
                <li>TV</li>
                <li>Camera</li>
                <li>Laptop</li>
              </ul>
            </div>
          </div>
          <div className="filter-card mb-3">
            <h3 className="filter-title">
              Filter By
            </h3>
            <div>
              <h5 className="sub-title">Availability</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label>
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                    checked
                  />
                  <label>
                    Out of Stock(0)
                  </label>
                </div>
              </div>
              <h5 className="sub-title">Price</h5>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="From" />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To" />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>
              <h5 className="sub-title">Color</h5>
              <div>
                <Color />
              </div>
              <h5 className="sub-title">Size</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-1"
                  />
                  <label className="form-check-label" htmlFor="color-1">
                    S {2}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    M {2}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-card mb-3">
            <h3 className="filter-title">
              Product Tag
            </h3>
            <div>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Headphones
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Laptop
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Mobile
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Oppo
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Speaker
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Tablet
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Vivo
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 py-3">
                  Wire
                </span>
              </div>
            </div>
          </div>
          <div className="filter-card mb-3">
            <h3 className="filter-title">
              Random Products
            </h3>
            <div>
              <div className="random-products mb-3 d-flex">
                <div className="w-50">
                  <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="w-50">
                  <h5>Kids Headphones Bulk 10 Pack Multi Colored</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700" />
                  <b>$100.00</b>
                </div>
              </div>
              <div className="random-products d-flex">
                <div className="w-50">
                  <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="w-50">
                  <h5>Kids Headphones Bulk 10 Pack Multi Colored</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700" />
                  <b>$100.00</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="filter-sort-grid mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-10">
                <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                <select name=""
                  defaultValue={"manual"}
                  className="form-control form-select"
                  id=""
                >
                  <option value="manual">Featured</option>
                  <option value="">Best Selling</option>
                  <option value="">Alphabetically, A-Z</option>
                  <option value="">Alphabetically, Z-A</option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-10">
                <p className="totalProducts mb-0">21 Products</p>
                <div className="d-flex gap-10 align-items-center grid">
                  <img onClick={() => { setGrid(3) }}
                    src="images/gr4.svg"
                    className="d-block img-fluid"
                    alt="grid" />
                  <img onClick={() => { setGrid(4) }}
                    src="images/gr3.svg"
                    className="d-block img-fluid"
                    alt="grid" />
                  <img onClick={() => { setGrid(6) }}
                    src="images/gr2.svg"
                    className="d-block img-fluid"
                    alt="grid" />
                  <img onClick={() => { setGrid(12) }}
                    src="images/gr.svg"
                    className="d-block img-fluid"
                    alt="grid" />
                </div>
              </div>
            </div>
          </div>
          <div className="products-list pb-5">
            <div className="d-flex gap-10 flex-wrap" >
              <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </>
}

export default OurStore