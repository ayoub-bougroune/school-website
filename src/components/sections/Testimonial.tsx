import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carouselData, BGIMTestimonial } from "../../constants/home"

let slideInterval: any;
const TestimonialSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    
    useEffect(() => {

    startSlider();
     return () => {
       pauseSlider();
     };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNextSlide();
    }, 9500);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

    const handleNextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

  return (
      <div className={`testimonial with-bg-image flex flex-col justify-center items-center h-screen `} style={{
          backgroundImage: `url(${BGIMTestimonial})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
      }}>

          <div className="testimonial-wrap text-center  wow fadeIn">
            <Carousel showThumbs={false} showStatus={false}>
              {carouselData.map((slide, index) => (
                <div key={index}>
                    <div className="m-20">
                  <p className='text-white font-sans text-2xl'>{slide.content}</p>
                    <h5 className='text-white font-sans'>{ slide.label }</h5>
                    </div>
                  </div>
              ))}
            </Carousel>
          </div>
        </div>

  );
}

export default TestimonialSlider;
