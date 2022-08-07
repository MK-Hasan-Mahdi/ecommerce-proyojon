import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { title, price, description, category, image, rating, rate } = product;
    console.log(product);


    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <div className='container'>

            <div className='row'>
                <div className="col-md-6">
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{category}</h4>
                    <h1 className='display-5'>{title}</h1>
                    <p className='lead fw-bolder'>Rating {rating && rating.rate} <i className='fa fa-star'></i> </p>
                    <h3 className='display-6 fw-bold my-4'>{price}</h3>
                    <p className='lead'>{description}</p>
                    <button className='btn btn-outline-dark px-4 py-2'>Add to Cart</button>
                    <button onClick={() => { navigateToCart() }} className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;