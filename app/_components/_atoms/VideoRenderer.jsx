import React from 'react'

const VideoRenderer = ({videoLink, youtubeTitle, title, subtitle}) => {
  return (
    
    <div className='p-2'>
                        <iframe
                            width="100%"  /* Dinamik genişlik */
                            height="auto"
                            style={{ aspectRatio: '16/9' }}
                            src={videoLink}
                            title={youtubeTitle}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                            <div className='font-bold mb-1 mt-4'>{title? title : ""}</div>
                            {title ? <div className='border-t-2 border-primary w-1/12'></div> : "" }
                            <div className='my-1'>{subtitle? subtitle: ""}</div>
    </div>
  )
}

export default VideoRenderer