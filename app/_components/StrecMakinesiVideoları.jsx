"use client"
import React from 'react'
import { Arrow } from './_atoms/Icons';
import Slider from 'react-slick';

const StrecMakinesiVideoları = () => {
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
                STREÇ MAKİNESİ HAKKINDA MERAK ETTİKLERİNİZ
            </div>
            <div className="slider-container px-4 md:px-8 lg:mx-16"> {/* Sağ-sol padding ekledik */}
                <Slider {...settings}>
                    <div className='p-2'>
                        <iframe
                            width="100%"  /* Dinamik genişlik */
                            height="auto"
                            style={{ aspectRatio: '16/9' }}
                            src="https://www.youtube.com/embed/cebZs2wkG9I"
                            title="Hem Streçten Hem Zamandan Kazanın | Streçleme Makinesi |"
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
                            src="https://www.youtube.com/embed/c_5fsbOH7zk"
                            title="Odaksan Mühendisliği, Diğer Streçleme Makinesi Üreticilerinden Ayıran Farkımız | Streç Makinesi |"
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
                            src="https://www.youtube.com/embed/vrjn3vtlGcA"
                            title="Egzoz borusu Streçleme Makinesi  | Palet Streç Makinası |"
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
                            src="https://www.youtube.com/embed/Hm5WYr-2yPM"
                            title="Focus Mobil Streçleme Makinası | Palet Streç Makinası |"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='p-2'>
                    <iframe width="100%" height="auto" style={{ aspectRatio: '16/9' }}src="https://www.youtube.com/embed/W8YaOE7QQhY" title="Streç Sarım Makinesinde Otomatik Kesme Yapıştırma Opsiyonu  | Streç Makinesi |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                    <div className='p-2'>
                    <iframe width="100%" height="auto" style={{ aspectRatio: '16/9' }}src="https://www.youtube.com/embed/BhA0BK-y4UA" title="Streçleme Makinesi Alırken Hangi Doğru Soruları Sormalıyız?  | Palet Streç Makinası |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default StrecMakinesiVideoları