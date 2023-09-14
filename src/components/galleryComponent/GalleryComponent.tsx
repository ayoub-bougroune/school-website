import React from 'react';
import { galleryItems, title } from "../../constants/picture"
const GalleryComponent = () => {
  return (
    <main className=" relative bg-gray-100 p-2">
          <div className="flex justify-start  items-center ml-48  mt-56">
        <h1 className="text-3xl text-black font-bold">{ title }</h1>
          </div>

          <ul className="grid grid-cols-2 mt-10 m-72 md:grid-cols-3 gap-2">
            {galleryItems.map((item, index) => (
                <li key={index} className="flex justify-center items-center">
                  <div className="p-2 bg-white ">
                    <a href={item.link} target="_self">
                      <img
                        src={item.imageSrc}
                        width={item.imageWidth}
                        height={item.imageHeight}
                        alt={item.imageAlt}
                        className="p-0"
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
