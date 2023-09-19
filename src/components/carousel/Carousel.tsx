import React, { useState, useEffect, useRef  } from 'react';
import styled, { keyframes } from 'styled-components';
import { sliderData } from "../../constants/home"

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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  position: relative;
  text-align: left;
  margin-left: 4rem;
  right: 20rem;
  color: #fff;
  animation: ${slideInFromTop} 1s ease-in-out;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center; /* Center the text on mobile */
    margin: 0; /* Reset margins for centering */
    right: auto; /* Reset right positioning */
  }
`;

const StyledP = styled.p`
  font-size: 2rem;
  color: #fff;
  position: relative;
  text-align: center;
  animation: ${slideInFromBottom} 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

let slideInterval: any;
const CarouselComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

 const slideRef = useRef<any>(null);

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    // slideRef.current.addEventListener("animationend", removeAnimation);
    // slideRef.current.addEventListener("mouseenter", pauseSlider);
    // slideRef.current.addEventListener("mouseleave", startSlider);

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

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
  };




  return (
    <div
        id="carouselExampleCaptions"
        ref={slideRef}
        className="relative mt-4 sm:mt-8 md:mt-16 lg:mt-24 xl:mt-32">
  {/* ... Carousel indicators ... */}

    <div className="absolute bottom-0 left-0 right-0 z-[2] mx-4 sm:mx-[15%] mb-2 sm:mb-4 flex list-none justify-center p-0" data-text-carousel-indicators>
      {sliderData.map((_, index) => (
        <button
          key={index}
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to={index}
          className={`mx-1 sm:mx-[3px] box-content h-2 sm:h-[3px] w-8 sm:w-[30px] flex-initial cursor-pointer border-0 border-y-[5px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
            activeSlide === index ? 'opacity-100' : 'opacity-50'
          } transition-opacity duration-300 ease-in-out`}
          onClick={() => setActiveSlide(index)}
          aria-current={activeSlide === index}
          aria-label={`Slide ${index + 1}`}

        ></button>
      ))}
    </div>
    {sliderData.map((slide, index) => (
      <div
        key={index}
        className={`relative  h-screen sm:h-[75vh] lg:h-screen transition-transform duration-300 ease-in-out ${
                    activeSlide === index ? 'block' : 'hidden'
                  } ${window.innerWidth <= 768 ? 'mobile-image' : ''}`}
        style={{
          backgroundImage: `url(${slide.imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center m-28 text-white">
          <StyledH5>{slide.label}</StyledH5>
          <StyledP>{slide.content}</StyledP>
        </div>
      </div>
    ))}
    {/* Carousel controls - prev item */}
    <button
      className="absolute bottom-0 left-0 top-0 z-[1] flex w-1/6 sm:w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
      className="absolute bottom-0 right-0 top-0 z-[1] flex w-1/6 sm:w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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

export default CarouselComponent;
