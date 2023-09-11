import React from 'react';

function TeacherProfile() {
  return (
    <div className="w-full flex flex-row justify-center items-center py-14">
          <div className="teacher-profile-tab md:w-1/2 lg:w-1/3 p-4 w-52">
            <div
              role="tabpanel"
              className="teacher-desc fade in active bg-white p-4 rounded-lg shadow"
              id="teamhome-1676"
            >
              <div className="heading-block">
                <h3 className="text-xl font-semibold">Mme Leilya Kabbaj</h3>
                <p className="text-gray-600">Position</p>
              </div>
              <p>
                Le Grand Univers est une école à taille humaine porteuse d’un grand projet pédagogique.
              </p>
            </div>
            <div
              role="tabpanel"
              className="teacher-desc fade in bg-white p-4 rounded-lg shadow"
              id="teamhome-1662"
            >
              <div className="heading-block">
                <h3 className="text-xl font-semibold">Mme Hanane FDHIL</h3>
                <p className="text-gray-600">Position</p>
              </div>
              <p>Nos choix pédagogiques sont tournés vers l'enfant, ils s’inspirent des pédagogies efficientes qui lui permettent d’être acteur de son développement conatif, cognitif, émotionnel, physique et social, de vivre ses propres expériences, de construire son savoir et ses compétences.</p>
            </div>
          
          </div> 
         <div role="presentation" className="m-0">
                  <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
                    <img
                      src="https://legrandunivers.ma/wp-content/uploads/2020/01/leilya-1-210x324.jpg"
                      alt="leilya"
                      className=""
                    />
                  </a>
          </div>    
           <div role="presentation" className="opacity-100">
                  <a href="#teamhome-1676" aria-controls="teamhome-1676" role="tab" data-toggle="tab">
                    <img
                      src="https://legrandunivers.ma/wp-content/uploads/2020/01/hanane-1-210x324.jpg"
                      alt="leilya"
                      className=""
                    />
                  </a>
            </div>                                         
    </div>
  );
}

export default TeacherProfile;
