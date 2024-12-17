import React from 'react';

const Video = () => {
  return (
    <div className="instagram-video-container" style={{ textAlign: 'center' }}>
      <iframe
        src="https://www.instagram.com/p/C6WZO61sz4C/embed"
        width="400"
        height="480"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  );
};

export default Video;
