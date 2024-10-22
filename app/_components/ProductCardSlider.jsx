"use client"
import React from 'react'
import Slider from 'react-slick';
import ProductCard from './_atoms/ProductCard';
import products from '../../public/_mocks_/products.json'
import { Arrow } from './_atoms/Icons';



const ProductCardSlider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow:  <Arrow />,
    prevArrow: <Arrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true, 
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
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
