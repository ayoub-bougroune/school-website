import React,{ useEffect }  from 'react';
import { galleryItems, title } from "../../constants/picture"

const GalleryComponent = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="relative bg-gray-100 p-3">
       <div className="text-center mt-10 md:text-left md:mt-56">
        <h1 className="font-bold text-2xl md:text-4xl ml-2 md:ml-40 p-4 md:p-7 ">
          {title}
        </h1>
        <div className="border-b-4 w-14 ml-48 border-gray-500"></div>
       </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 mt-4 md:mt-10">
        {galleryItems.map((item, index) => (
          <li key={index} className="flex justify-center items-center">
            <div className="p-1 bg-white">
              <a href={item.link} target="_self">
                <img
                  src={item.imageSrc}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  alt={item.imageAlt}
                  className="p-0 mt-10"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default GalleryComponent;
