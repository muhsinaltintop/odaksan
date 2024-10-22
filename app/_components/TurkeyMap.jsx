import Image from 'next/image'
import React from 'react'

const TurkeyMap = () => {
  return (
    <div className="w-full h-[564px] bg-primary bg-no-repeat flex flex-col justify-start text-center text-white bg-center">
      <div>
        Odaksan Mühendislik A.Ş. 2011 yılından bu yana Streçleme Makinaları üretmekte ve bu makinelerin yazılımını yapmaktadır.
      </div>

      <div>
        <h2 className="text-lg font-bold">Lokasyonlar</h2>
        İstanbul Anadolu Yakası, İstanbul Avrupa Yakası, Trakya, Ankara, Bursa, İzmir, Gaziantep, Sakarya, Adana
      </div>

      <div className="flex justify-center mt-4">
        <div className="w-full max-w-3xl">
          <Image 
            src="/turkey.svg" 
            width={1200} 
            height={540} 
            layout="responsive" 
            alt="Turkey Map" 
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default TurkeyMap
