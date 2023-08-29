import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ServiceItem from '../../components/ServiceItem/ServiceItem'
import Categories from '../../components/Categories/Categories'
import ContactSection from '../../components/contactSection/ContactSection'

import { faGraduationCap, faGlobe, faHome, faBookOpen, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import catImage from '../../assets/cat-4.jpg'; // Adjust the path based on your file structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <h4 className="text-2xl font-bold text-center mt-10 flex items-center justify-center  dark:text-black pb-2 md:hover:text-blue-700">Services</h4>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg mt-10 p-10 overflow-hidden">
            <ServiceItem
              icon={faGraduationCap}
              title="Skilled Instructors"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
            />
            <ServiceItem
              icon={faGlobe}
              title="Online Classes"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
            />
            <ServiceItem
              icon={faHome}
              title="Home Projects"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
            />
            <ServiceItem
              icon={faBookOpen}
              title="Book Library"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
            />
      </div>
      <h4 className="text-2xl font-bold text-center mt-10 flex items-center justify-center  dark:text-black pb-2 md:hover:text-blue-700">About Us</h4>
      <div className="container-xxl mt-20 py-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col-span-1 lg:col-span-1 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className="relative h-100 p-5 rounded-lg">
                <img className="img-fluid position-absolute w-full h-full rounded-lg object-cover top-0 left-0" src={catImage} alt="" />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 wow fadeInUp mt-40" data-wow-delay="0.3s">
              <h1 className="mb-4 text-4xl font-semibold m-3">Welcome to eLEARNING</h1>
              <p className="mb-4  m-3 mt-16">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              <p className="mb-4  m-3 mt-10">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 m-3 mt-10">
                <p className="mb-0"><FontAwesomeIcon icon={faArrowRight} className="text-sky-500 me-3" />Skilled Instructors</p>
                <p className="mb-0"><FontAwesomeIcon icon={faArrowRight} className="text-sky-500 me-3" />Online Classes</p>
                <p className="mb-0"><FontAwesomeIcon icon={faArrowRight} className="text-sky-500 me-3" />International Certificate</p>
                <p className="mb-0"><FontAwesomeIcon icon={faArrowRight} className="text-sky-500 me-3" />Skilled Instructors</p>
                <p className="mb-0"><FontAwesomeIcon icon={faArrowRight} className="text-sky-500 me-3" />Online Classes</p>
                <p className="mb-0"><FontAwesomeIcon icon={faArrowRight} className="text-sky-500 me-3" />International Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <h4 className="text-2xl font-bold text-center mt-10 flex items-center justify-center  dark:text-black pb-2 md:hover:text-blue-700">Gallery</h4>

  <div className="grid grid-cols-2 md:grid-cols-3 m-10 mt-10 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div>
    <ContactSection />
    </>    
  )
}

export default Home