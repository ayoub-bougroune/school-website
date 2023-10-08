import React from 'react';
import { tl1, tl2, PR1, PR2, PR3, tImg1, tImg2 } from "../../constants/home"
function TeacherProfile() {
  return (
    <>
      <div className="text-center font-bold text-lg  md:text-3xl mt-16 m-10">
          <h2>Mot de la directrice</h2>
      </div>
      <div className="max-w-md mx-auto bg-white m-5 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0 m-8 md:m-0">
            <img className="h-56 w-full object-fill md:h-full md:w-48" src={tImg1} alt="Modern building architecture"/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
    </div>
      {/* <div className="flex flex-col md:flex-row justify-center items-center py-6 md:py-14">  
          <div className="teacher-profile-tab md:w-1/2 lg:w-1/3 p-4">
          <div role="tabpanel" className="teacher-desc fade in bg-white p-4 rounded-lg shadow" id="teamhome-1662">
              <div role="presentation" className="m-0 md:m-4">
                <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
                  <img
                    src={tImg1}
                    alt="leilya"
                    className="w-48 md:shrink-0 lg:w-48"
                  />
                </a>
              </div>
              <div className="heading-block">
                <h3 className="text-lg md:text-xl font-semibold">{tl2}</h3>
                <p className="text-gray-600">{PR1}</p>
              </div>
              <p>{PR3}</p>
            </div>
          </div>
      
      </div> */}
    </>

  );
}

export default TeacherProfile;
