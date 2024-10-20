"use client"
import React from 'react'
import Slider from 'react-slick';
import ProductCard from './_atoms/ProductCard';
import products from '../../public/_mocks_/products.json'
import { Arrow } from './_atoms/Icons';



const ProductCardSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow:  <Arrow style={{ right: "50px" }} />,
    prevArrow: <Arrow style={{ left: "50px" }} />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };
  return (
    <div className="slider-container" style={{position: "relative"}}>
      <Slider {...settings}>
        {products.map((product)=> {
          return(
            <div key={product.id}>

            <ProductCard product={product}/>
            </div>
          )
        })}

      </Slider>
    </div>
  );
}

export default ProductCardSlider
