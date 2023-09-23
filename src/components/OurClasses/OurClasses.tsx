import React from 'react';
import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, T1, T2, T3, T4, T5, T6, T7, T8, TG, PA1, PA2, PA3, PA4, PA5, PA6, PA7, PA8 } from "../../constants/home"
import { OUrClassesDAta } from "../../constants/home"
const  OurClasses = () => {
  return (
    <div className="" data-wow-delay="0.2s">

        <div className="text-center font-bold text-3xl m-10">
          <h2>Nos plus</h2>
        </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 mr-52  ml-52 m-20 lg:grid-cols-2 gap-4">
          {OUrClassesDAta.map((item, index) => (
              <div key={index} className="flex flex-row justify-center rounded-md m-3 w-full h-60 ">   
                <div className="flex flex-row w-full" style={{ backgroundColor: item.color }}>
                  <div className="flex flex-col justify-center items-center text-white ">
                    <div className="m-10">
                      <a href="https://legrandunivers.ma/?class=classe-montessori">
                      <h4 className='text-center font-semibold '>{ item.title }</h4>
                      </a>
                    <h6 className="text-center">{ item.tagline }</h6>
                      <p className='text-center'>{item.paragraph}</p>
                    </div>
                </div>    
                </div>
                  <a href="https://legrandunivers.ma/?class=classe-montessori">
                    <div className="w-64">
                      <img
                        src={item.imgSrc}
                        alt="Classe Montessori"
                        className="h-60 w-64"
                      />

                      <div className="overlay dark"></div>
                      <span><i className="fa fa-plus"></i></span>
                    </div>
                  </a>  
              </div>
          ))}
        </div>
    </div>
  );
}

export default OurClasses;
