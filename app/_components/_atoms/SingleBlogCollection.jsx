import Image from 'next/image'
import React from 'react'

const SingleBlogCollection = () => {
  return (
    <div>
        <div><Image src="/products/smt.png" width="100" height="200" alt="blog"/>
        </div>
        <div>21-10-2024</div>
        <h2>Streç Makinesinin Faydaları</h2>
        <p>Streç makineleri, %75&apos;e kadar streç tasarrufu sağlar. </p>
        <div>Devamı {">"}</div>
    </div>
  )
}

export default SingleBlogCollection