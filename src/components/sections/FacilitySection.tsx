import React from 'react';

const FacilitySection = () => {
  return (
      <div className="our-facility with-bg-image w-full h-screen flex flex-row justify-center items-center"
          style={{
              backgroundImage: 'url(https://legrandunivers.ma/wp-content/uploads/2020/02/bg_counter.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
          }}>
      <div className="container">
        <div className="flex flex-row items-center justify-around">
          <div className="facility-item col-md-3 text-center  text-white wow fadeIn" data-wow-delay="0.2s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">320</h2>
            </div>
            <h4 className="font-bold">Elèves</h4>
          </div>

          <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.4s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">18</h2>
            </div>
            <h4 className="font-bold">Classes</h4>
          </div>

          <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.6s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">45</h2>
            </div>
            <h4 className="font-bold">Corps pédagogique</h4>
          </div>

          <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.8s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">65</h2>
            </div>
            <h4 className="font-bold">Effectif total</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySection;
