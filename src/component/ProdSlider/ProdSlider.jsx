import React from 'react'
import './prodSlider.css'

function ProdSlider(props) {
  return (
    <>
    <div className='card'>
        <img className='product_image' src={props.src} />
        <h2>{props.title}</h2>
        <p className='price'>RS {props.price}</p>
    </div>
    </>
  )
}

export default ProdSlider