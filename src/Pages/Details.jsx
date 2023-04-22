import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick";
// import image from '../images/psychedelic-paper-shapes-with-copy-space.jpg'
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';

const Details = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
  };

  const { details } = useParams()

  const [product, setProduct] = useState([])
  const [load, setLoad] = useState(true)

  const getProduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${details}`)
    console.log(response)
    setProduct(response.data)
    setTimeout(() => {
      setLoad(false)
    }, 3000);
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      {
        load === true ? <Loader />
          :
          <>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 mx-auto mt-3 mb-3">
                  <div className="card">
                    {
                      <Slider {...settings}>
                        {product.images && product.images.map((element) => {
                          return (
                            <>
                              <img src={element} alt="..." height={500} width={"100%"} />
                            </>
                          )
                        })}
                      </Slider>
                    }
                    <div className="card-body">
                      <h5 className="card-title">{product.brand}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><strong>Rating :</strong> {product.rating}</li>
                      <li className="list-group-item"><strong>Stock :</strong> {product.stock}</li>
                      <li className="list-group-item"><strong>Brand :</strong> {product.brand}</li>
                      <li className="list-group-item"><strong>Category :</strong> {product.category}</li>
                      <li className="list-group-item"><strong>Price :</strong> <del>{product.price}</del> <ins>{product.discountPercentage}</ins></li>
                    </ul>
                    <div className="card-body text-end">
                      <Link to={`/`} className="btn btn-danger">Back</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
      }
    </>

  )
}

export default Details