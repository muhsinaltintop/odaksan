import React from 'react';
import ReferenceImage from '../_components/_atoms/ReferenceImage';
import references from '../../public/references/references.json';
import Breadcrum from '../_components/_atoms/Breadcrum';

const Page = () => {
    return (
        <div className="p-4">
            <div className="mt-2 ml-4 md:ml-10">
                <Breadcrum />
            </div>
            <div className="text-center font-bold text-xl md:text-2xl text-primary mt-6 md:mt-10">
                Referanslarımız
            </div>
            {/* Responsive grid: 1 column on small screens, 2 on medium, 4 on large */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {references.map((reference) => (
                    <div key={reference.id} className="flex justify-center">
                        <ReferenceImage
                            imageName={reference.imageName}
                            companyName={reference.companyName}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
