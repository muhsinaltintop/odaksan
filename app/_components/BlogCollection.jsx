import React from 'react'
import SingleBlogCollection from './_atoms/SingleBlogCollection'

const BlogCollection = () => {
  return (
    <div className='my-10'>
        <div className='text-center text-xl font-bold m-4'>BLOG</div>

    <div className='grid grid-cols-1 mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-4'>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
        <div className='flex justify-center'><SingleBlogCollection/></div>
    </div>
    </div>
  )
}

export default BlogCollection