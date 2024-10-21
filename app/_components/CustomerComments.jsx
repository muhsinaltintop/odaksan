"use client"
import React from 'react'
import Slider from 'react-slick';
import { Arrow } from './_atoms/Icons';

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
                    <div className='p-2'>
                        <iframe
                            width="100%"  /* Dinamik genişlik */
                            height="auto"
                            style={{ aspectRatio: '16/9' }}
                            src="https://www.youtube.com/embed/-nchn5p441c"
                            title="Odaksan Makineleri İle Nakliye Esnasında Yaşanan Problemleri Minimize Ettik"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='p-2'>
                        <iframe
                            width="100%"  /* Dinamik genişlik */
                            height="auto"
                            style={{ aspectRatio: '16/9' }}
                            src="https://www.youtube.com/embed/lLUTLcYPceg"
                            title="Önce paletlerimiz yolda devriliyordu şimdi ise öyle bir sorunumuz kalmadı"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='p-2'>
                        <iframe
                            width="100%"  /* Dinamik genişlik */
                            height="auto"
                            style={{ aspectRatio: '16/9' }}
                            src="https://www.youtube.com/embed/fAkAWw7RXns"
                            title="Odaksan Mühendislik Firması İle Akü Ve Kart Sorunumuz Ortadan Kalktı"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='p-2'>
                        <iframe
                            width="100%"  /* Dinamik genişlik */
                            height="auto"
                            style={{ aspectRatio: '16/9' }}
                            src="https://www.youtube.com/embed/uF_xh4o3Wvo"
                            title="Odaksan Streç Sarım Makineleri Hem Kasa Olarak Hem De Elektronik Olarak Sağlam Makine"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='p-2'>
                    <iframe width="100%" height="auto" style={{ aspectRatio: '16/9' }}src="https://www.youtube.com/embed/8S1TimKID3s" title="“Her Streç Sarımı Yapan Firmanın Alması Gereken Bir Makine” | PAKTEN SAĞLIK ÜRÜNLERİ A.Ş" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                    <div className='p-2'>
                    <iframe width="100%" height="auto" style={{ aspectRatio: '16/9' }}src="https://www.youtube.com/embed/ARkRZKONPxU" title="Streç Sarım Makinelerinde Tercihimiz Odaksan Mühendislik | Bordokim Boya San." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                    <div className='p-2'>
                    <iframe width="100%" height="auto" style={{ aspectRatio: '16/9' }}src="https://www.youtube.com/embed/Uz812r9x6sk" title="“İtalyan Makinalarda Servis Konusunda Büyük Sıkıntılar Yaşanıyordu” | İskon Plastik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                    <div className='p-2'>
                    <iframe width="100%" height="auto" style={{ aspectRatio: '16/9' }}src="https://www.youtube.com/embed/N1hPEQvsJPc" title="“Odaksan Mühendislik Streçleme Makineleri Hem Ucuz Hem De Streç Sarfiyatı Çok Az” | KİMBCF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CustomerComments;
