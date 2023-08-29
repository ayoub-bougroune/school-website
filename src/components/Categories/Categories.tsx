/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function CardComponent() {
    const posts = [
        {
            title: "React Tailwind Card with Grid 1",
            img: "https://bloximages.chicago2.vip.townnews.com/thetimestribune.com/content/tncms/assets/v3/editorial/2/ed/2edbebde-ec11-11ea-9a29-17cf173ad57d/5f4dd76e4af8c.image.jpg?resize=400%2C266",
            content: "BACK TO SCHOOL 2023-2024 - DATES TO REMEMBER "
        },
        {
            title: "React Tailwind Card with Grid 2",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0xAVZpG4yf99sNRSecwaMHzBKKIe--6UTLgxGylz92DlrHjepxEwf-NgtD5V1yyVh5U&usqp=CAU",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 3",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz43DQssXqZGXYtooBcODZCIiBcEvmFjAscXje3nAngKI2mFvbITrzAsWV_F2TzV0JPw&usqp=CAU",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },

    ];
    return (
      <>
         <h4 className="text-2xl font-bold text-center m-10 flex items-center justify-center  dark:text-black pb-2 md:hover:text-blue-700">News</h4>
          <div className="grid grid-cols-1 sm:grid-cols-1  hover:shadow-xl md:grid-cols-3 h-auto lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {posts.map((items, key) => (
               <div className="rounded overflow-hidden hover:shadow-xl"  key={key}>
                    <img
                      className="w-full"
                      src={items.img}
                      alt="image"
                      
              />
                  <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2"></div>
                        <p className="text-gray-700 text-base">
                                  {items.content}
                      </p>
                  </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>      
              </div>
          ))}
          </div>
        </>
    );
}