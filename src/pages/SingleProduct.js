import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { LiaTruckSolid } from 'react-icons/lia';
import { GrFavorite } from 'react-icons/gr';
import { TbGitCompare } from 'react-icons/tb';
import { BsFillCartFill } from 'react-icons/bs'
import Container from '../components/Container';


const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://m.media-amazon.com/images/I/61mKFHjinhL._AC_SX522_.jpg"
  };

  const [orderedProduct, setOrderedProduct] = useState(true);


  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div><img src="https://m.media-amazon.com/images/I/61mKFHjinhL._AC_SX522_.jpg" className="img-fluid" alt="" /></div>
              <div><img src="https://m.media-amazon.com/images/I/61mKFHjinhL._AC_SX522_.jpg" className="img-fluid" alt="" /></div>
              <div><img src="https://m.media-amazon.com/images/I/61mKFHjinhL._AC_SX522_.jpg" className="img-fluid" alt="" /></div>
              <div><img src="https://m.media-amazon.com/images/I/61mKFHjinhL._AC_SX522_.jpg" className="img-fluid" alt="" /></div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 5 reviews )</p>
                </div>
                <a href="#review">Write a Review</a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type : </h3> <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand : </h3> <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category : </h3> <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3> <p className="product-data">Watches</p> <p className="product-data">Phones</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3> <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size </h3>
                  <div className="product-size d-flex flex-wrap gap-15">
                    <span className="badge">S</span>
                    <span className="badge">M</span>
                    <span className="badge">L</span>
                    <span className="badge">XL</span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-10 flex-row mt-2 mb-3">
                  <h3 className="product-heading mt-2">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "50px" }}
                      id="" />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">ADD TO CART</button>
                    <button className="button signup">Buy it Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a className="add-list" href="">
                      <GrFavorite className="fs-5 me-2" />Add to Wishlist</a>
                  </div>
                  <div>
                    <a className="add-list" href="">
                      <TbGitCompare className="fs-5 me-2" />Add to Compare</a>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="more-info"><LiaTruckSolid className="fs-5 me-2" />Shipping & Returns </h3>
                  <p className="product-data">Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within <b>5-10 business days!</b></p>
                </div>
                <div className="d-flex flex-wrap gap-10 align-items-center my-3">
                  <h3 className="more-info"><BsFillCartFill className="fs-5 me-2" />Materials </h3>
                  <p className="product-data">Running Shoes cushions your stride with soft foam to keep you running in comfort. Lightweight knit material wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>

            <div className="bg-white p-3">
              <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
              </p>
            </div>
          </div>
        </div>

      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">
                    Costumer Reviews
                  </h4>
                  <div className="d-flex align-items gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 3 reviews</p>
                  </div>
                </div>

                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                  </div>
                )}

              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">
                  Write a Review
                </h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700" />
                  </div>
                  <div>
                    <textarea name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments">
                    </textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">laborum episuulom ds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>

        </div>
        <div className="row">
          <ProductCard />

        </div>
      </Container>

    </>
  )
}

export default SingleProduct