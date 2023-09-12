import React from 'react';


const Features = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full bg-gray-50 w-full  md:px-24 lg:px-8 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">&nbsp;&nbsp;</span>
          </span>{'  CE QUI NOUS CARACTÉRISE'}
        
        </h2>

      </div>
      <div className="grid grid-cols-1 m-10 md:grid-cols-2 mt-48 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-row justify-between m-3 md:col-span-2 lg:col-span-1 xl:col-span-1 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-green-500 border-4 w-64 mr-5 h-36 border-green-300 rounded-full p-5">
                  <img src="https://legrandunivers.ma/wp-content/uploads/2020/01/academix.png" alt="feat-icon" className="icon"/>
              </div>
              <div className="mt-4">
                  <h4 className="text-lg font-semibold">Pédagogie moderne centrée sur l’enfant</h4>
                  <p>Des choix pédagogiques respectant l’enfant dans son rythme et son unicité.</p>
              </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-row justify-between m-3 lg:col-span-1 xl:col-span-1 wow fadeIn" data-wow-delay="0.2s">
              <div className="bg-purple-500 border-4 w-64 mr-5 h-36 border-purple-700 rounded-full p-5">
                  <img src="https://legrandunivers.ma/wp-content/uploads/2015/08/Earth_grid_select_language_button_256.png" alt="feat-icon" className="icon"/>
              </div>
              <div className="mt-4">
                  <h4 className="text-lg font-semibold">Développement global de l’enfant et suivi personnalisé</h4>
                  <p>A travers la mise en valeur de son potentiel créatif, cognitif, émotionnel et social.</p>
              </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-row m-3 justify-between lg:col-span-1 xl:col-span-1 wow fadeIn" data-wow-delay="0.2s">
              <div className="bg-green-500 border-4 w-64 mr-5 h-36 border-green-800 rounded-full p-5">
                  <img src="https://legrandunivers.ma/wp-content/uploads/2020/01/THINK.png" alt="feat-icon" className="icon" />
              </div>
              <div className="mt-4">
                  <h4 className="text-lg font-semibold">Enseignement ouvert sur son environnement extérieur</h4>
                  <p>Activités et apprentissage pensés pour mieux intégrer l’enfant dans son environnement.</p>
              </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-row m-3 justify-between lg:col-span-1 xl:col-span-1 wow fadeIn" data-wow-delay="0.2s">
              <div className="bg-pink-500 border-4 w-64 mr-5 h-36 border-pink-900 rounded-full p-5">
                  <img src="https://legrandunivers.ma/wp-content/uploads/2020/01/teachers.png" alt="feat-icon" className="icon"/>
              </div>
              <div className="mt-4">
                  <h4 className="text-lg font-semibold">Équipe qualifiée formée et motivée</h4>
                  <p>Une équipe ouverte et compétente prête à relever les défis du projet pédagogique.</p>
              </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-row m-3 justify-between lg:col-span-1 xl:col-span-1 wow fadeIn" data-wow-delay="0.2s">
              <div className="bg-yellow-400 border-4 w-64 mr-5 h-36 border-yellow-600 rounded-full p-5">
                  <img src="https://legrandunivers.ma/wp-content/uploads/2015/09/bars2.png" alt="feat-icon" className="icon"/>
              </div>
              <div className="mt-4">
                  <h4 className="text-lg font-semibold">Infrastructure adaptée</h4>
                  <p>Des espaces équipés et bien agencés favorisant l’épanouissement de l’enfant.</p>
              </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-row m-3 justify-between lg:col-span-1 xl:col-span-1 wow fadeIn" data-wow-delay="0.2s">
              <div className="bg-red-700 border-4 w-64 mr-5 h-36 border-red-900 rounded-full p-5">
                  <img src="https://legrandunivers.ma/wp-content/uploads/2020/02/hand-blanc.png" alt="feat-icon" className="icon"/>
              </div>
              <div className="mt-4">
                  <h4 className="text-lg font-semibold">Partenariat privilégié avec les parents d’élèves</h4>
                  <p>Basé sur une relation de bienveillance, d’écoute et d’ouverture toujours en faveur de l’enfant.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Features;
