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
     <div className={`testimonial with-bg-image flex flex-col justify-center items-center h-screen`} style={{
        backgroundImage: `url(${BGIMTestimonial})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="testimonial-wrap text-center wow fadeIn">
          <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}>
          {carouselData.map((slide, index) => (
            <>
              <div key={index} className={`m-5 md:m-10 ${
                      activeSlide === index ? 'block' : 'hidden'
                    } ${window.innerWidth <= 768 ? 'mobile-image' : ''}`}>
                <p className='text-white font-sans text-lg md:text-xl'>"{slide.content}"</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                  <div className="border-b-2 w-14 border-white"></div>
                  <span className="font-medium text-lg text-white mt-5 mb-5">PARENT</span>
              </div>
            </>
            ))}
          </Carousel>
        </div>
    </div>


  );
}

export default TestimonialSlider;
