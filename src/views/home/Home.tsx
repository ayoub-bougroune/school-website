import React from 'react'
import CarouselComponent from '../../components/carousel/Carousel'
import Features from '../../components/sections/Features'
import FacilitySection from '../../components/sections/FacilitySection'
import TeacherProfile from '../../components/sections/TeacherProfile'
import VideoSection from '../../components/video/VideoSection'
import Testimonial from '../../components/sections/Testimonial'
import OurClasses from '../../components/OurClasses/OurClasses'
import AboutSection from '../../components/sections/AboutSection'
const Home: React.FC = () => {
  return (
    <>
      <CarouselComponent />
      <AboutSection />
      <Features />
      <VideoSection />
      <FacilitySection />
      <TeacherProfile />
      <OurClasses />
      <Testimonial />
    </>    
  )
}

export default Home