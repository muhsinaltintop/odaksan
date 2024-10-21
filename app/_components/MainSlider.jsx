
"use client"
import React from 'react'
import Slider from 'react-slick';
import SingleSlide from './_atoms/SingleSlide';
import { MainArrow } from './_atoms/Icons';

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:  <MainArrow/>,
    prevArrow: <MainArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <SingleSlide/>
        </div>
        <div>
          <SingleSlide/>
        </div>
        <div>
          <SingleSlide/>
        </div>
      </Slider>
    </div>
  );
}

export default MainSlider