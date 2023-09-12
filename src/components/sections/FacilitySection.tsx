import React, { useState, useEffect } from 'react';

const FacilitySection = () => {
  const [countdown0, setCountdown0] = useState(320);
  const [countdown1, setCountdown1] = useState(18);
  const [countdown2, setCountdown2] = useState(45);
  const [countdown3, setCountdown3] = useState(65);

    useEffect(() => {
    const interval = setInterval(() => {
      if (countdown0 > 0) {
        setCountdown0(countdown0 - 1);
      }else if (countdown1 > 0)
        setCountdown1(countdown1 - 1);
      else if (countdown2 > 0) {
         setCountdown2(countdown2 - 1);
      } else if (countdown3 > 0) {
          setCountdown3(countdown3 - 1);
      }
       else {
        clearInterval(interval); // Stop the countdown when it reaches 0
      }
    }, 10); 

    return () => {
      clearInterval(interval); 
    };
  }, [countdown0, countdown1, countdown2, countdown3]);
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
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">{countdown0}</h2>
            </div>
            <h4 className="font-bold">Elèves</h4>
          </div>

          <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.4s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">{countdown1}</h2>
            </div>
            <h4 className="font-bold">Classes</h4>
          </div>

          <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.6s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">{countdown2}</h2>
            </div>
            <h4 className="font-bold">Corps pédagogique</h4>
          </div>

          <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.8s">
            <div className="w-40 h-40 bg-slate-300 rounded-full bg-opacity-25 m-10 flex items-center justify-center">
              <h2 className="w-20 h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-3xl">{countdown3}</h2>
            </div>
            <h4 className="font-bold">Effectif total</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySection;
