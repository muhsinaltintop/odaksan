
"use client"
import React, { useState, useEffect, useCallback } from 'react';
import SingleSlide from './_atoms/SingleSlide';
import { Arrow } from './_atoms/Icons';
const SliderComponent = () => {
  // Slide verilerini bir array olarak tutun.
  const slideData = [
    { id: 1, content: 'Slide 1 content' },
    { id: 2, content: 'Slide 2 content' },
    { id: 3, content: 'Slide 3 content' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Bir sonraki slide'a geçiş fonksiyonu
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  }, [slideData.length]);

  // Bir önceki slide'a geçiş fonksiyonu
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  // Otomatik kaydırma için useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slider için sol ve sağ geçiş butonları */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 z-10 rounded-full ml-2 text-xl font-bold"
        onClick={goToPreviousSlide}
      >
        <Arrow flipped={true} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 z-10 rounded-full mr-2"
        onClick={goToNextSlide}
      >
        <Arrow flipped={false} />
      </button>

      {/* Slide'ları göstermek için */}
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slideData.map((slide, index) => (
          <div key={slide.id} className="min-w-full">
            <SingleSlide content={slide.content} /> {/* Her slaytı render et */}
          </div>
        ))}
      </div>

      {/* Alt kısımda dot navigasyonu */}
      <div className="flex justify-center mt-4">
        {slideData.map((_, index) => (
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
