import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
          backgroundImage: 'url(https://legrandunivers.ma/wp-content/uploads/2020/02/bg_testimonial.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
      }}>

          <div className="testimonial-wrap text-center  wow fadeIn">
            <Carousel showThumbs={false} showStatus={false}>
              <div>
                <div className="m-20">
                  <p className='text-white font-sans text-2xl'>&#8220;C&#8217;est une école que je recommande à mon entourage. C&#8217;est un vrai bonheur d&#8217;avoir une équipe souriante et sur qui nous pouvons compter pour confier nos enfants&#8221;</p>
                  <h5 className='text-white font-sans'>Parent</h5>
                </div>
              </div>
              <div>
                <div className="m-20">
                  <p className='text-white font-sans text-2xl'>&#8220;Mon fils de bientôt 6 ans est scolarisé depuis ses 2 ans au Grand Univers et j&#8217;en suis très satisfaite.</p>
                  <p className='text-white font-sans'>C&#8217;est une école où l&#8217;on retrouve une famille pour nos enfants&#8221;</p>
                  <h5 className="text-white">Parent</h5>
                </div>
              </div>
              <div>
                <div className='m-20'>
                  <p className='text-white font-sans text-2xl'>&#8220;Mon enfant est épanoui et heureux d&#8217;aller à l&#8217;école chaque matin. Les enfants s&#8217;amusent, apprennent et découvrent tous les jours&#8221;</p>
                  <h5 className="text-white">Parent</h5>
                </div>
              </div>
              <div>
                <div className="m-20">
                  <p className='text-white font-sans text-2xl'>&#8220;Direction proche et à l’écoute&#8221;</p>
                  <h5 className="text-white">Parent</h5>
                </div>
              </div>
              <div>
                <div className="m-20">
                  <p className='text-white font-sans text-2xl'>&#8220;Mon enfant est très satisfait et épanoui&#8221;</p>
                  <h5 className="text-white">Parent</h5>
                </div>
              </div>
              <div>
                <div className="m-20">
                  <p className='text-white font-sans text-2xl'>&#8220;L&#8217;école assure un suivi de près&#8221;</p>
                  <h5 className="text-white">Parent</h5>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

  );
}

export default TestimonialSlider;
