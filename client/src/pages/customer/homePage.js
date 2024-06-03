import React from 'react';
import Samphoo from '../../images/samphoo.jpg'
import ProductCard from '../../components/customer/ProductCard';


const products = [
    {
      src: Samphoo, // replace with actual image path
      alt: 'Samphoo',
      title: 'Organic Extra Virgin Coconut Oil',
      year: '2024',
      manufacturer: 'KIM THOA',
      price: '$38.00'
    },
    {
      src: Samphoo, // replace with actual image path
      alt: 'Samphoo',
      title: 'Organic Extra Virgin Coconut Oil',
      year: '2024',
      manufacturer: 'KIM THOA',
      price: '$38.00'
    },
    {
      src: Samphoo, // replace with actual image path
      alt: 'Samphoo',
      title: 'Organic Extra Virgin Coconut Oil',
      year: '2024',
      manufacturer: 'KIM THOA',
      price: '$38.00'
    },
    {
      src: Samphoo, // replace with actual image path
      alt: 'Samphoo',
      title: 'Organic Extra Virgin Coconut Oil',
      year: '2024',
      manufacturer: 'KIM THOA',
      price: '$38.00'
    },
    {
      src: Samphoo, // replace with actual image path
      alt: 'Another Product',
      title: 'Another Product Title',
      year: '2023',
      manufacturer: 'Another Manufacturer',
      price: '$45.00'
    }
    // add more products as needed
  ];
  

function homePage(props) {
    return (
        <div className='md:flex'>
           {products.map((product, index) => {
        return (
          <ProductCard
            index={index}
            src={product.src}
            alt={product.alt}
            title={product.title}
            year={product.year}
            manufacturer={product.manufacturer}
            price={product.price}
          />
        );
      })}
        </div>
    );
}

export default homePage;