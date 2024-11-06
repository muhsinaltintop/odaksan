import React from 'react';
import Breadcrum from '../_components/_atoms/Breadcrum';
import videos from '../../public/_mocks_/videos.json';
import VideoRenderer from '../_components/_atoms/VideoRenderer';

const Page = () => {
  return (
    <div className='mb-10'>
      <div className="mt-2 ml-10">
        <Breadcrum />
      </div>
      <div className="text-center font-bold text-2xl">
        <h1>Yorumlar</h1>
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16">
        {videos.map((video) => (
          <VideoRenderer key={video.id} videoLink={video.videoLink} youtubeTitle={video.youtubeTitle} title={video.title} subtitle={video.subtitle}/>
        ))}
      </div>
    </div>
  );
};

export default Page;
