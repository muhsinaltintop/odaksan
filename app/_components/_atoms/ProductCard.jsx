import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border bg-neutral-100 rounded-xl mx-4 max-w-xs h-[20rem] group relative flex flex-col items-center py-10">
      <Link href={`/sm/${product.slug}`}>
        <div className="w-full h-auto pt-2">
          <div className="flex justify-center items-center relative">
            {/* Image container with fixed responsive sizing */}
            <div className="relative w-32 h-32 flex justify-center items-center">
              <Image
                src={product.featuredImage}
                layout="fill"
                objectFit="contain"
                alt="focus-srd"
                className="z-10 rounded-full"
              />
              {/* Responsive overlay with centered gradient and hover effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white to-yellow-50 shadow-lg transition-shadow duration-200 group-hover:shadow-xl group-hover:shadow-[#2c244f]" />
            </div>
          </div>
          {/* Product Name */}
          <div className="text-lg text-center mt-6 font-bold">{product.productName}</div>
          {/* Review Button */}
          <div className="w-full p-2 bg-red-700 text-lg text-center font-bold rounded-b-xl absolute bottom-0">
            <span className="text-white">İNCELE</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
