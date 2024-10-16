import Image from 'next/image'

const SingleSlide = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:px-6 w-full'>
        <div className='w-full max-w-[200px] sm:max-w-[300px] lg:max-w-sm'>
            <Image 
                src="/slider/spider-ser.png" 
                alt='spider-ser' 
                width={420} 
                height={700} 
                className="w-full h-auto" // Görselin responsive olması için gerekli sınıflar
            />
        </div>
        <div className='text-center lg:text-left px-4 lg:px-0'>
            <h2 className='text-xl lg:text-2xl font-bold'>Mobil Streçleme Makineleri</h2>
            <p className='text-lg lg:text-xl'>Mobil Streçleme Makineleri Streç Tasarrufu ve Kullanım Kolaylığı Sağlar</p>
        </div>
    </div>
  )
}

export default SingleSlide
