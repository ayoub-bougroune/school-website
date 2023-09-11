import React from 'react';

const VideoSection = () => {
  return (
    <div className="our-features flex justify-center items-center  p-44">
      <div className="container">
        <div className="heading-block wow fadeIn mb-10">
          <h2 className=' text-3xl font-bold'>Le Grand Univers</h2>
          <h4 className="tagline">Prenez le bon départ</h4>
        </div>
        <div className="row">
          <div className="about-img col-md-12 wow" style={{ textAlign: 'center' }}>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/Os91iz6dVIs"
              title="Prenez le bon départ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
