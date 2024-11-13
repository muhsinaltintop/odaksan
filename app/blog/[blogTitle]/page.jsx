import React from 'react'
import blogs from '../../../public/_mocks_/blogs.json';
import ToSlug from '@/app/_components/_atoms/ToSlug';
import Image from 'next/image';


const page = ({params}) => {
  const result = blogs.find(blog => ToSlug(blog.title) == params.blogTitle)
  if(!result) {
    return <div>Blog Not Found</div>
  }

  return (
    <div className='m-4'>
      <h1 className='font-bold mb-10 text-xl'>{result.title}</h1>
      <Image src={result.image} alt={result.title} width={600} height={800} />
      {result.content.map((paragraph, index) => (
        <p key={index} className='w-9/12 py-2'>{paragraph}</p>
      ))}
    </div>
  )
}

export default page