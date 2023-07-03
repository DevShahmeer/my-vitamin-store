
import './App.css'
import Navbar from './component/Navbar/Navbar'
import ImageSlider from './component/ImageSlider/ImageSlider'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { slides } from './data/slideImageData.json'
import { products } from './data/toSellProducts.json'
import BannerHeader from './component/BannerHeader/BannerHeader'
import ToSellProduct from './component/ToSellProduct/ToSellProduct'
import ProdSlider from './component/ProdSlider/ProdSlider';
import { productData, responsive, brandData } from './data/prodSlider';
import ImgBanner from './component/ImgBanner/ImgBanner';
import NewsletterSub from './component/NewsLetterSub/NewsLetterSub';
import BrandSlider from './component/BramdSlider/BrandSlider';

function App() {

  const product = productData.map((item) => <ProdSlider title={item.title} src={item.src} price={item.price} /> ); 
  const brand = brandData.map((item) => <BrandSlider  title={item.title} src={item.src} price={item.price}  /> ); 

  return (
    <>
      <Navbar />
      <ImageSlider data={slides} />
      <div className='banner_container'>
      <BannerHeader />
      </div>
      <ToSellProduct data={products} />
      <div className='banner_cont'>
      <Carousel responsive={responsive}>{product}</Carousel>;
      </div>
      <ToSellProduct data={products} />
      <div className='banner_cont'>
      <Carousel responsive={responsive}>{product}</Carousel>;
      </div>
      <ToSellProduct data={products} />
      <div className='banner_cont'>
      <Carousel responsive={responsive}>{product}</Carousel>;
      </div>
      <ImgBanner/>
      <div className='banner_brand'>
      <h1 className='headline_product'><span>Brands</span></h1>
      <Carousel responsive={responsive}>{brand}</Carousel>;
      </div>
      <NewsletterSub />
      
    </>
  )
}

export default App
