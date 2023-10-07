import React from 'react';
import Feature from '../Feature/Feature';

const PriceData = (props) => {
       const product_features=props.products.product_features
       ;
       
    const { full_name, id, image_url, price} = props.products

    return (
        <div className='bg-purple-500 p-3 rounded-md flex flex-col'>
            <h1>
                <span className='text-3xl'>{price}</span>
                <span className='text-xl text-white'>/mon</span>
            </h1>
            <h5 className='text-2xl font-bold'>{full_name}</h5>
            <p className='underline font-bold text-white '>product_features:
            </p>
            {
                product_features.map((product,idx)=><Feature product={product} key={idx}></Feature>)
            }
            <button className='w-full font-bold text-white py-3 text-xl bg-green-500 mt-auto rounded-2xl hover:bg-red-600'>Buy Now</button>
        </div>
    );
};

export default PriceData;