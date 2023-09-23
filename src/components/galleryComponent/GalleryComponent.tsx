import React from 'react';
import { galleryItems, title } from "../../constants/picture"

const GalleryComponent = () => {
  return (
    <main className="relative bg-gray-100 p-2">
      <div className="flex justify-center items-center mt-8 md:mt-56">
        <h1 className="text-3xl text-black font-bold">{title}</h1>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 md:mt-10">
        {galleryItems.map((item, index) => (
          <li key={index} className="flex justify-center items-center">
            <div className="p-2 bg-white">
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
