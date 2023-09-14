import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Features from '../../components/sections/Features'
import FacilitySection from '../../components/sections/FacilitySection'
import TeacherProfile from '../../components/sections/TeacherProfile'
import VideoSection from '../../components/video/VideoSection'
import Testimonial from '../../components/sections/Testimonial'
import OurClasses from '../../components/OurClasses/OurClasses'
import { title1, title2, P1, P2, btn, img } from "../../constants/home"

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <div className="about-us bg-gray-100 mt-20 w-full">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4 m-32">
            <div className="col-md-6 wow fadeIn m-5">
              <div className="heading-block m-5">
                <h2 className="text-3xl font-semibold">{title1}</h2>
                <h4 className="tagline text-xl font-medium">{ title2 }</h4>
              </div>
              <p className="mt-4 m-5">
                {P1}
                <br /><br />
                {P2}
            </p>

              <div className="mt-6 m-5">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  <a href="/about-us">{ btn }</a>
                </button>
              </div>
            </div>

            <div className="about-img col-md-6 wow zoom-in m-5 mt-10" data-wow-delay="0.2s">
              <img
                src={img}
                alt="Le Grand Univers privé"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
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