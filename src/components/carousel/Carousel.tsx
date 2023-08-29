import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledH5 = styled.h5`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: blue;
  animation: ${slideInFromTop} 1s ease-in-out;
  
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;
  color: #007acc;
  animation: ${slideInFromBottom} 1s ease-in-out;

    @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const slideData = [
      {
        imageUrl: 'https://media.istockphoto.com/id/874279838/fr/photo/int%C3%A9rieur-de-la-salle-de-classe-moderne.jpg?s=170667a&w=0&k=20&c=hkA0tg0_xAGLlJLcsNVZMhyLuLiIWzmffnhnMTvMLGM=',
        label: 'Welcome to Our School',
        content: 'Explore a world of knowledge and growth.',
      },
      {
        imageUrl: 'https://thumbs.dreamstime.com/b/ng-together-high-school-college-students-studying-reading-together-105156570.jpg',
        label: 'Excellence in Education',
        content: 'We are committed to delivering the best learning experience.',
      },
      {
        imageUrl: 'https://media.istockphoto.com/id/1335448474/photo/public-school-exterior-front-of-a-brand-new-modern-education-building-photo-series.jpg?s=612x612&w=0&k=20&c=apJYH3Ou6CbORsturDZjPql5LrzEHOffNe-HhbO-eAk=',
        label: 'A Vibrant Learning Community',
        content: 'Join us in shaping a bright future for your child.',
      },
  ];

  return (
    <div id="carouselExampleCaptions" className="relative">
      {/* ... Carousel indicators ... */}
    
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
        {slideData.map((_, index) => (
          <button
            key={index}
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
              activeSlide === index ? 'opacity-100' : 'opacity-50'
            } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
            onClick={() => setActiveSlide(index)}
            aria-current={activeSlide === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      {/* Carousel items */}
      {/* <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {slideData.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              activeSlide === index ? 'block' : 'hidden'
            }`}
          >
            <img src={slide.imageUrl} className="block w-full" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{slide.label}</h5>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div> */}
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`relative w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
            activeSlide === index ? 'block' : 'hidden'
          }`}
        >
          <img src={slide.imageUrl} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <StyledH5>{slide.label}</StyledH5>
              <StyledP>{slide.content}</StyledP>
            </div>
          </div>
        </div>
      ))}
      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handlePrevSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleNextSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
