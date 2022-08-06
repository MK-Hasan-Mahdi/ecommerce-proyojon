import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product;
    // console.log(product);
    const navigate = useNavigate();
    const navigateProductDetail = (id) => {
        navigate(`/products/${id}`)
        // console.log(id);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4" key={product.id}>
                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <p className="card-text lead ">{product.title}</p>
                            <p className="card-text lead ">{product.category}</p>
                            <button onClick={() => navigateProductDetail(id)} className="btn btn-outline-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;