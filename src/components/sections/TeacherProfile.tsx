import React from 'react';
import { tl1, tl2, PR1, PR2, PR3, tImg1, tImg2 } from "../../constants/home"
function TeacherProfile() {
  return (
<div className="flex flex-col md:flex-row justify-center items-center py-6 md:py-14">
  <div className="teacher-profile-tab w-full md:w-1/2 lg:w-1/3 p-4">
    <div role="tabpanel" className="teacher-desc fade in active bg-white p-4 rounded-lg shadow" id="teamhome-1676">
      <div className="heading-block">
        <h3 className="text-lg md:text-xl font-semibold">{tl1}</h3>
        <p className="text-gray-600">{PR1}</p>
      </div>
      <p>{PR2}</p>
    </div>
    <div role="tabpanel" className="teacher-desc fade in bg-white p-4 rounded-lg shadow" id="teamhome-1662">
      <div className="heading-block">
        <h3 className="text-lg md:text-xl font-semibold">{tl2}</h3>
        <p className="text-gray-600">{PR1}</p>
      </div>
      <p>{PR3}</p>
    </div>
  </div>
  <div className="md:ml-4 mt-4 md:mt-0 flex flex-row md:flex-col">
    <div role="presentation" className="m-0 md:m-4">
      <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
        <img
          src={tImg1}
          alt="leilya"
          className="w-32 md:w-48"
        />
      </a>
    </div>
    <div role="presentation" className="m-0 md:m-4">
      <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
        <img
          src={tImg2}
          alt="leilya"
          className="w-32 md:w-48"
        />
      </a>
    </div>
  </div>
</div>

  );
}

export default TeacherProfile;
