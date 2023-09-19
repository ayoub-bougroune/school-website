import React from 'react'
import { title1, title2, P1, P2, btn, img } from "../../constants/home"

const AboutSection = () => {
  return (
      <div className="about-us bg-gray-100 mt-10 md:mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mt-5 md:m-32">
            <div className="col-md-6 wow fadeIn m-5">
              <div className="heading-block m-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{title1}</h2>
                <h4 className="tagline text-lg md:text-xl lg:text-2xl font-medium">{title2}</h4>
              </div>
              <p className="mt-4 m-5">
                {P1}
                <br /><br />
                {P2}
              </p>

              <div className="mt-6 m-5">
                <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
                  <a href="/about-us">{btn}</a>
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
  )
}

export default AboutSection
