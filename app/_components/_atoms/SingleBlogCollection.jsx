import Image from 'next/image'
import React from 'react'

const SingleBlogCollection = () => {
  return (
    <div className='border m-2 p-4 rounded-3xl'>
        <div><Image src="/products/smt.png" width="100" height="200" alt="blog"/>
        </div>
        <div className='text-primary font-extralight'>21-10-2024</div>
        <h2 className='font-bold'>Streç Makinesinin Faydaları</h2>
        <p>Streç makineleri, %75&apos;e kadar streç tasarrufu sağlar. </p>
        <div className='text-sm text-blue-600'>Devamı {">"}</div>
    </div>
  )
}

export default SingleBlogCollection