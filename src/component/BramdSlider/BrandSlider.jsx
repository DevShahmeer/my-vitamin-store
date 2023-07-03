import React from 'react'
import './BrandSlider.css'

function BrandSlider(props) {
  return (
    <>
    <div className='card'>
        <img className='brand_img' src={props.src} />
    </div>
    </>
  )
}

export default BrandSlider