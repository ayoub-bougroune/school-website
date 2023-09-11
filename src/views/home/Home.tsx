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
import { faGraduationCap, faGlobe, faHome, faBookOpen, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import catImage from '../../assets/cat-4.jpg'; // Adjust the path based on your file structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      {/* <ContactSection /> */}
      <div className='flex flex-row  justify-evenly items-center w-full h-96 bg-red-500'>
        <div className="footer-widget col-span-4 md:col-span-4 m-10">
          <div id="custom_html-2" className="widget-text widget-footer widget_custom_html">
              <h4 className="text-xl m-5 text-white font-semibold">Le Grand Univers Privé</h4>
              <div className="textwidget custom-html-widget"></div>
          </div>
          <div id="media_image-2" className="widget-footer widget_media_image">
              <img width="300" height="158" src="https://legrandunivers.ma/wp-content/uploads/2021/05/Le-Grand-Univers.jpg" className="w-72 m-5 h-auto max-w-full" alt="" decoding="async" loading="lazy" />
          </div>
        </div>
        <div className="footer-widget col-span-4 md:col-span-4">
          <div id="custom_html-3" className="widget-text widget-footer widget_custom_html">
              <h4 className="text-xl text-white font-semibold">Contactez-nous</h4>
              <div className="textwidget custom-html-widget">
                  <p className="text-white">Adresse : 71 av Mehdi Ben Barka, Souissi - Rabat</p>
                  <p className="text-white">Tél.: +212 537 65 89 39</p>
                  <p className="text-white">Mob.: +212 667 79 05 77</p>
                  <p className="text-white">Email: contact@legrandunivers.ma</p>
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.821311046369!2d-6.848181884833282!3d33.9714320294318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76cb02b1d4763%3A0xf9712b13f2e239f9!2sGrand+Univers!5e0!3m2!1sen!2s!4v1466423707997"
                    className="w-full"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Google Map"
                  ></iframe>
              </div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Home