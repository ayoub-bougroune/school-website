import React from 'react';
import { tl1, tl2, PR1, PR2, PR3, tImg1, tImg2 } from "../../constants/home"
function TeacherProfile() {
  return (
    <div className="flex flex-row justify-center items-center py-14">
          <div className="teacher-profile-tab md:w-1/2 lg:w-1/3 p-4 w-52">
            <div
              role="tabpanel"
              className="teacher-desc fade in active bg-white p-4 rounded-lg shadow"
              id="teamhome-1676"
            >
              <div className="heading-block">
            <h3 className="text-xl font-semibold">{ tl1 }</h3>
                <p className="text-gray-600">{ PR1 }</p>
              </div>
              <p>
                { PR2 }
              </p>
            </div>
            <div
              role="tabpanel"
              className="teacher-desc fade in bg-white p-4 rounded-lg shadow"
              id="teamhome-1662"
            >
              <div className="heading-block">
                <h3 className="text-xl font-semibold">{ tl2 }</h3>
                <p className="text-gray-600">{ PR1 }</p>
              </div>
              <p>{ PR3 }</p>
            </div>
          
          </div> 
         <div role="presentation" className="m-0">
                  <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
                    <img
                      src={tImg1}
                      alt="leilya"
                      className=""
                    />
                  </a>
          </div>    
           <div role="presentation" className="opacity-100">
                  <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
                    <img
                      src={tImg2}
                      alt="leilya"
                      className=""
                    />
                  </a>
            </div>                                         
    </div>
  );
}

export default TeacherProfile;
