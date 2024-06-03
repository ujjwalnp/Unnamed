import React from 'react';
import Samphoo from '../../images/samphoo.jpg';

const product = {
    src: Samphoo,
    alt: 'Samphoo',
    title: 'JBL Tune 525BT',
    description: 'A Series of tools designed and engineered to empower creators, makers, and codes to master what they make.',
    price: '$99.99'
};

function ProductDetails(props) {
    return (
        <div>
            <h1 className='text-xl font-[500] md:font-semibold text-dark-grey text-start m-3 '>product details &gt; {product.title}</h1>

            <div className="md:grid grid-cols-2 max-sm:m-10 ">
                <div>
                <img className="w-fit" src={Samphoo} alt="product" />

                </div>
                <div className='details md:m-10 max-sm:mt-5'>
                    <h1 className='text-2xl font-bold text-start'>{product.title}</h1>
                    <p className='text-start mt-4'>{product.description}</p>
                    <div className='flex justify-between mt-10'>
                        <button className='btn-light font-semibold'>{product.price}</button>
                        <button className='btn-dark font-semibold'>Add to Bag</button>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default ProductDetails;