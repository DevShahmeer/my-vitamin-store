import React, { useState } from 'react';
import './ToSellProduct.css';

function ToSellProduct({ data }) {
  const [prodSlider, setProdSlider] = useState(0);

  const nextProduct = () => {
    setProdSlider((prodSlider) => (prodSlider === data.length - 1 ? 0 : prodSlider + 1));
  };

  const prevProduct = () => {
    setProdSlider((prodSlider) => (prodSlider === 0 ? data.length - 1 : prodSlider - 1));
  };

  return (
    <div className="">
       <h1 className='headline_product'><span>Top Sell</span></h1>
      {/*<svg
        className="arrows arrows_left"
        onClick={nextProduct}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
      >
        <path fill="#fff" d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z" />
      </svg>
      <div className='product_container'>
        
        <div className='top_products'>
          {data.map((item) => (
            <div key={item.id}> {}
              <img src={item.src} />
            </div>
          ))}
        </div>
      </div>
      <svg
        className="arrows arrows_right"
        onClick={prevProduct}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
      >
        <path fill="#fff" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" />
      </svg> */}
    </div>
  );
}

export default ToSellProduct;