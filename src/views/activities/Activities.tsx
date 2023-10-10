import React,{ useEffect }  from 'react'
import { P4, P5, P6 } from "../../constants/about"
import { img } from "../../constants/home"
import OurClasses from '../../components/OurClasses/OurClasses';
import { useLocation } from 'react-router-dom';

const Activities = () => {
  const location = useLocation();
    const { title, image } = location.state || {};
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
  <main className="flex w-full flex-col bg-gray-100  mt-52"> 
       <div className="text-center mt-10 md:text-left ">
        <h1 className="font-bold text-2xl md:text-4xl ml-2 md:ml-40 p-4 md:p-7 ">
          {title}
        </h1>
        <div className="border-b-4 w-24 ml-48 border-gray-500"></div>
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          
            <div className="about-img col-md-6 wow zoom-in" data-wow-delay="0.2s">
              <img
                src={image}
                alt="Le Grand Univers privé"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-8 lg:mt-0">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold text-gray-800">
                { title }
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-700">
                { P4 }
              </p>
              <p className="text-gray-700 my-4">
               {P5}
              </p>
              <p className="text-gray-700">
               {P6}
              </p>
            </div>
          </div>
        </div>
        <OurClasses/>    
  </main>
  )
}

export default Activities