"use client"
import React from 'react'
import Slider from 'react-slick';
import references from '../../public/_mocks_/references.json'
import Image from 'next/image';

const ReferenceSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true
                }
              }
        ]
        
      };
      return (
        <div className="bg-slate-100 p-10 slider-container px-5 md:p-20">
          <Slider {...settings}>
            {references.map((reference)=> {
                return(
                    <div key={reference.id}>
                        <Image src={`/references/${reference.referenceName}.png`} width="100" height="100" alt={`${reference.referenceName} logo`}/>

                    </div>
                )
            } )}
          </Slider>
          <div className='text-left text-lg mt-10 md:text-2xl md:text-right md:mr-20'>Bizi Tercih Ettikleri Teşekkür Ederiz...</div>
        </div>
      );
    }

export default ReferenceSlider