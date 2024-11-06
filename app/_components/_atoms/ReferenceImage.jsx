import Image from 'next/image';
import React from 'react';

const ReferenceImage = ({ imageName, companyName }) => {
  return (
    <div className="flex flex-col items-center h-full mb-6">
      <div className="flex justify-center items-center">
        <Image
          src={`/references/${imageName}.png`}
          height={200}
          width={200}
          alt={imageName}
          className="w-full max-w-xs h-auto" // Image scaling for responsiveness
        />
      </div>
      <div className="border-t-2 mb-2 mt-4 w-full max-w-xs border-primary"></div>
      <div className="bg-slate-100 w-full max-w-xs p-2">
        <h1 className="text-center text-base sm:text-lg font-bold">{companyName}</h1>
      </div>
    </div>
  );
};

export default ReferenceImage;
