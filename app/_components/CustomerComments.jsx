"use client"
import React from 'react'
import Slider from 'react-slick';
import { Arrow } from './_atoms/Icons';
import VideoRenderer from './_atoms/VideoRenderer';
import videos from '../../public/_mocks_/videos.json'

const CustomerComments = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div>
            <div className='text-center mb-5 font-bold text-xl text-primary'>
                MÜŞTERİ YORUMLARI
            </div>
            <div className="slider-container px-4 md:px-8 lg:mx-16"> {/* Sağ-sol padding ekledik */}
                <Slider {...settings}>
                {videos.map((video) => (
          <VideoRenderer key={video.id} videoLink={video.videoLink} youtubeTitle={video.youtubeTitle} />
        ))}
                </Slider>
            </div>
        </div>
    );
};

export default CustomerComments;
