import React,{useState} from 'react'
import Features from "../../components/sections/Features"
import { title, obj, P1, P2, P3, P4, P5, P6 } from "../../constants/about"
const About = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <main className="flex w-full flex-col bg-gray-100  mt-52"> 
       <div className="text-center mt-10 md:text-left">
        <h1 className="font-bold text-2xl md:text-4xl ml-2 md:ml-40 p-4 md:p-7">
          {title}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="lg:mb-0 mb-8">
              <h2 className="text-xl sm:text-3xl bg-green-700 md:text-4xl lg:text-xl p-5 font-extrabold text-white" onClick={toggleDropdown}>
                 {obj}
            </h2>
            {isDropdownOpen && (
              <>
                  <p className="mt-3 text-base sm:text-lg text-gray-800"><span className="bg-black  m-3">.</span>
                   {P1}
                  </p>
                  <p className="text-gray-700 my-4"><span className="bg-black  m-3">.</span>
                   {P2}
                  </p>
                  <p className="text-gray-700"><span className="bg-black  m-3">.</span>
                   {P3}
                  </p>
              </>
            )}
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
      <Features />
    </main>
  )
}

export default About
