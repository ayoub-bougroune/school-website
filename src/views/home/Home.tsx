import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ServiceItem from '../../components/ServiceItem/ServiceItem'
import Features from '../../components/sections/Features'
import FacilitySection from '../../components/sections/FacilitySection'
import ContactSection from '../../components/contactSection/ContactSection'
import TeacherProfile from '../../components/sections/TeacherProfile'
import VideoSection from '../../components/video/VideoSection'
import Testimonial from '../../components/sections/Testimonial'
import OurClasses from '../../components/OurClasses/OurClasses'


const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <div className="about-us bg-gray-100 mt-20 w-full">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4 m-32">
            <div className="col-md-6 wow fadeIn m-5">
              <div className="heading-block m-5">
                <h2 className="text-3xl font-semibold">Le Grand Univers privé</h2>
                <h4 className="tagline text-xl font-medium">Prenez le bon départ</h4>
              </div>
              <p className="mt-4 m-5">
                Là où Harmonie conforte épanouissement, éducation et enseignement, c’est bel et bien Le Grand Univers privé.
                <br /><br />
                Notre univers ne cesse de grandir par sa capacité à prendre en charge les sensibilités, les choix et les besoins de l’enfant, à s’appuyer sur ses multiples potentiels, à l’accompagner pour emprunter le chemin de la réussite, à cultiver l’autonomie et établir l’équilibre psychologique entre l’enfant grandissant et l’élève apprenant… à faire vivre joyeusement l’école !
              </p>

              <div className="mt-6 m-5">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  <a href="/about-us">Qui sommes-nous ?</a>
                </button>
              </div>
            </div>

            <div className="about-img col-md-6 wow zoom-in m-5 mt-10" data-wow-delay="0.2s">
              <img
                src="https://legrandunivers.ma/wp-content/uploads/2020/02/nous.jpg"
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