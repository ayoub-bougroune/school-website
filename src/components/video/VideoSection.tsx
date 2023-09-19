import React from 'react';
import { VTitle, vDes, vd } from "../../constants/home"
const VideoSection = () => {
  return (
    <div className="our-features flex justify-center items-center p-10 md:p-16 lg:p-20 xl:p-44">
      <div className="container">
        <div className="heading-block wow fadeIn mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{VTitle}</h2>
          <h4 className="tagline text-base sm:text-lg">{vDes}</h4>
        </div>
        <div className="row">
          <div className="about-img col-md-12 wow" style={{ textAlign: 'center' }}>
            <iframe
              width="100%"
              height="400"
              src={vd}
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
