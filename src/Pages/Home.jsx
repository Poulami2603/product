import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    const [product, setProduct] = useState([])

    const getProduct = async () => {
        const response = await axios.get(`https://dummyjson.com/products`)
        console.log(response)
        setProduct(response.data.products)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        product.map((products, id) => {

                            return (

                                <>
                                    <div key={id} className="col-md-3 mt-4" >
                                        <div className="card" style={{ height: '25rem' }}>
                                            <div className="img-wrapper">
                                                <img src={products.thumbnail} width={350} height={200} alt="..." />

                                            </div>
                                            <div className="card-body" height={300}>
                                                <h5 className="card-title">{products.title.slice(0, 20)}</h5>
                                                <h6>Price :<del>{products.price}</del> <ins>{products.discountPercentage}</ins></h6>
                                                <p className="card-text ">Description : {products.description.slice(0, 30)}....</p>
                                                <Link to={`/${products.id}`} className="btn btn-outline-danger">Read More .....</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home