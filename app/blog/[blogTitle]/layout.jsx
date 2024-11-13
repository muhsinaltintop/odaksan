import React from 'react'
import blogs from '../../../public/_mocks_/blogs.json';
import Link from 'next/link';
import ToSlug from '@/app/_components/_atoms/ToSlug';

const layout = ({ params, children }) => {
  return (
    <div className='flex'>
      {/* Menü Alanı */}
      <div className='w-2/12 px-4 my-10 justify-center'>
        <h1 className='bg-primary text-white text-center rounded-xl font-bold mb-2'>
          Blog Yazıları
        </h1>
        {blogs.map((blog) => {
          const isActive = ToSlug(blog.title) === params.blogTitle; // Aktif olan blog kontrolü
          console.log("active", params, isActive);
          
          return (
            
            <div
              key={blog.id}
              className={`py-2 px-2 border text-sm hover:bg-primary hover:text-white ${isActive ? 'bg-primary text-white' : ''}`}
            >
              <Link href={`/blog/${ToSlug(blog.title)}`}>
                {blog.title}
              </Link>
            </div>
          );
        })}
      </div>
      {/* İçerik Alanı */}
      <div className='w-full text-justify'>{children}</div>
    </div>
  );
};

export default layout