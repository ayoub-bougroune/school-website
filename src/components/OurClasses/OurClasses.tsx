import React,{ useEffect } from 'react';
import { T1, T2, T3, T4, T5, T6, T7, T8, } from "../../constants/home"
import { OUrClassesDAta } from "../../constants/home"
import { useNavigate } from 'react-router-dom';

const OurClasses = () => {
  const navigate = useNavigate();

  const handleButtonClick = (item: {
    imgSrc: any; title: any;  
}) => {
    // Check which slide is active and navigate accordingly
    switch (item.title) {
      case T1:
        navigate('/activities',  { state: { title: item.title, image: item.imgSrc } });
        break;
      case T2:
        navigate('/activities',  { state: { title: item.title, image: item.imgSrc } });
        break;
      case T3:
        navigate('/activities',  { state: { title: item.title, image: item.imgSrc } });
        break;
      case T4:
        navigate('/activities', { state: { title: item.title, image: item.imgSrc } });
        break;
      case T5:
        navigate('/activities', { state: { title: item.title, image: item.imgSrc } });
        break;
      case T6:
        navigate('/activities', { state: { title: item.title, image: item.imgSrc } });
        break;
      case T7:
        navigate('/activities', { state: { title: item.title, image: item.imgSrc } });
        break;
      case T8:
        navigate('/activities', { state: { title: item.title, image: item.imgSrc } });
        break;
      // Add more cases for other slides as needed
      default:
        console.log('Default functionality');
    }
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="" data-wow-delay="0.2s">
        <div className="text-center font-bold text-3xl m-10">
          <h2>Nos plus</h2>
        </div>    
        <div className="grid grid-cols-1 md:grid-cols-2 m-10 mr-5 ml-5 md:mr-20 md:ml-20 lg:mr-52 lg:ml-52 mt-20 lg:grid-cols-2 gap-4">
        {OUrClassesDAta.map((item, index) => (
          <button onClick={() => handleButtonClick(item)}>
                <div key={index}  style={{ backgroundColor: item.color }} className="flex flex-col items-center bg-white border border-gray-200 rounded-sm shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                  <img
                    className="object-fill w-full rounded-t-sm h-48 md:h-48 md:w-72 md:rounded-none md:rounded-l-sm"
                    src={item.imgSrc}
                    alt=""
                  />
                  <div className="flex flex-col items-end justify-end w-full p-4 leading-normal">
                    <h5 className="text-xl font-bold text-right text-gray-900 dark:text-white">{item.title}</h5>
                    <div className="flex flex-col p-2 mt-10 w-24 rounded-sm bg-white">
                      <p className="text-black text-center text-xs">{ item.tagline }</p>
                      <p className="text-blue-400 text-center text-xs">{ item.paragraph }</p>
                    </div> 
                  </div>
                </div>
          </button>
          ))}
        </div>
    </div>
  );
}

export default OurClasses;
