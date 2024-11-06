import React from 'react';
import blogs from '../../public/_mocks_/blogs.json';
import BlogRenderer from '../_components/_atoms/BlogRenderer';
import Breadcrum from '../_components/_atoms/Breadcrum';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="mt-2 ml-10">
        <Breadcrum />
      </div>

      <h1 className="text-center font-bold text-2xl text-primary my-4">BLOG YAZILARI</h1>

      {/* Center grid items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative border-2 w-10/12 pb-4 rounded-xl mx-auto">
            <Link href="/blog">
              <div className='mb-2'>
                <BlogRenderer title={blog.title} content={blog.content} image={blog.image} />
              </div>
              <div className="absolute bottom-0 right-0 pb-2 pr-2 text-primary">
                Devamını Oku...
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
