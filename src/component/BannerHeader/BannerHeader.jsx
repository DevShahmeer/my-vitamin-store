import React from 'react'
import './BannerHeader.css'

function BannerHeader() {
  return (
    <div className='banner_container'>   
    <div className='banner_wrapper'>
        <div className="grid_banner">
        <div className='banner1'>   
            <img  src="https://cdn.fishry.com/themes/1-9bf21fd-my-vitamin-store.jpg" alt="" />
        </div>
        <div className='banner1'>   
            <img  src="https://cdn.fishry.com/themes/2-0d067a3-my-vitamin-store.jpg" alt="" />
        </div>
        <div className='banner1'>   
            <img  src="https://cdn.fishry.com/themes/3-31ec70a-my-vitamin-store.jpg" alt="" />
        </div>
        <div className='banner1'>   
            <img  src="https://cdn.fishry.com/themes/4-e3a113b-my-vitamin-store.jpg" alt="" />
        </div>
        </div>
    </div>
    </div>
  )
}

export default BannerHeader