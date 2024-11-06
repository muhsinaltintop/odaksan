"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'


const BlogRenderer = ({title, content, image}) => {
    const pathName = usePathname()
  return (
    <div className='mx-4'>
        <div className='mx-10 my-4 border-2 rounded-xl'><Image src={image} width={400} height={200} alt='' className='rounded-xl'/></div>
        <h1 className='text-xl font-bold px-4 py-2'>{title}</h1>
        {pathName === "/blog" ? <div className='px-4 text-justify'>{content[0]}</div>  : (content.map((parag, index) => (
            <div key={index} className='pb-2 px-4'>{parag}</div>
        )))}
    </div>
  )
}

export default BlogRenderer