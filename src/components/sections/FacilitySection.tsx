import React, { useState, useEffect } from 'react';
import { bgImg, Elèves, Classes, CorpsPédagogique, EffectifTotal, nb1, nb2, nb3, nb4} from '../../constants/home';

const FacilitySection = () => {
  const [countdown0, setCountdown0] = useState(0);
  const [countdown1, setCountdown1] = useState(0);
  const [countdown2, setCountdown2] = useState(0);
  const [countdown3, setCountdown3] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      if (countdown0 < nb1) {
        setCountdown0(countdown0 + 1);
      } if (countdown1 < nb2)
        setCountdown1(countdown1 + 1);
       if (countdown2 < nb3) {
         setCountdown2(countdown2 + 1);
      } if (countdown3 < nb4) {
          setCountdown3(countdown3 + 1);
      }
       else {
        clearInterval(interval); // Stop the countdown when it reaches 0
      }
    }, 50); 

    return () => {
      clearInterval(interval); 
    };
  }, [countdown0, countdown1, countdown2, countdown3]);
  return (
<div className="our-facility with-bg-image w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImg})`,
  }}>
  <div className="container">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="facility-item col-md-3 text-center text-white wow fadeIn mb-4 md:mb-0" data-wow-delay="0.2s">
        <div className="w-24 h-24 md:w-40 md:h-40 bg-slate-300 rounded-full bg-opacity-25 mx-auto md:mx-10 flex items-center justify-center">
          <h2 className="w-12 h-12 md:w-20 md:h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-xl md:text-3xl">{countdown0}</h2>
        </div>
        <h4 className="font-bold">{Elèves}</h4>
      </div>

      <div className="facility-item col-md-3 text-center text-white wow fadeIn mb-4 md:mb-0" data-wow-delay="0.4s">
        <div className="w-24 h-24 md:w-40 md:h-40 bg-slate-300 rounded-full bg-opacity-25 mx-auto md:mx-10 flex items-center justify-center">
          <h2 className="w-12 h-12 md:w-20 md:h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-xl md:text-3xl">{countdown1}</h2>
        </div>
        <h4 className="font-bold">{Classes}</h4>
      </div>

      <div className="facility-item col-md-3 text-center text-white wow fadeIn mb-4 md:mb-0" data-wow-delay="0.6s">
        <div className="w-24 h-24 md:w-40 md:h-40 bg-slate-300 rounded-full bg-opacity-25 mx-auto md:mx-10 flex items-center justify-center">
          <h2 className="w-12 h-12 md:w-20 md:h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-xl md:text-3xl">{countdown2}</h2>
        </div>
        <h4 className="font-bold">{CorpsPédagogique}</h4>
      </div>

      <div className="facility-item col-md-3 text-center text-white wow fadeIn" data-wow-delay="0.8s">
        <div className="w-24 h-24 md:w-40 md:h-40 bg-slate-300 rounded-full bg-opacity-25 mx-auto md:mx-10 flex items-center justify-center">
          <h2 className="w-12 h-12 md:w-20 md:h-20 text-white font-semibold flex bg-opacity-25 justify-center items-center rounded-full bg-slate-400 text-xl md:text-3xl">{countdown3}</h2>
        </div>
        <h4 className="font-bold">{EffectifTotal}</h4>
      </div>
    </div>
  </div>
</div>

  );
};

export default FacilitySection;
