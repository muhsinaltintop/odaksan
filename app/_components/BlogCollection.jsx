import React from 'react'
import SingleBlogCollection from './_atoms/SingleBlogCollection'

const BlogCollection = () => {
  return (
    <div className='my-10 mx-20'>
        <div className='text-center text-xl font-bold'>BLOG</div>

    <div className='grid grid-cols-2 md:grid-cols-4 mx-4'>
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