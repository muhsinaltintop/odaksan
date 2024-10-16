"use client"
import React, { useState, useEffect, useCallback } from 'react';
import SingleSlide from './_atoms/SingleSlide';
import { Arrow } from './_atoms/Icons';

const SliderComponent = () => {
  const slides = [<SingleSlide key={0} />, <SingleSlide key={1} />, <SingleSlide key={2} />]; // Slider için slide'lar
  const [currentSlide, setCurrentSlide] = useState(0);

  // Bir sonraki slide'a geçiş fonksiyonu, useCallback ile sarıldı
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]); // slides.length bağımlılık olarak ayarlandı

  // Bir önceki slide'a geçiş fonksiyonu, buna da isterseniz useCallback uygulanabilir
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Otomatik kaydırma için useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide(); // Otomatik olarak bir sonraki slide'a geçiş
    }, 5000); // 3 saniye bekleyerek slide değişimi
    return () => clearInterval(interval);
  }, [goToNextSlide]); // useEffect bağımlılığı olarak goToNextSlide eklendi

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slider için sol ve sağ geçiş butonları */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 z-10 rounded-full ml-2 text-xl font-bold"
        onClick={goToPreviousSlide}
      >
        <Arrow flipped={true}/>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 z-10 rounded-full mr-2"
        onClick={goToNextSlide}
      >
        <Arrow flipped={false}/>
      </button>

      {/* Slide'ları göstermek için */}
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Alt kısımda dot navigasyonu */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
