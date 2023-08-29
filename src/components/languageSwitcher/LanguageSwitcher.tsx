import React from 'react';
//import  MaFlag  from '../../assets/ma.svg';
// import  EnglishFlag  from '../../assets/sh.svg';


const LanguageSwitcher = () => {

  return (
    <>
      <button >
        {/* <EnglishFlag /> */}
        <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-sh" viewBox="0 0 640 480">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
        </svg>
      </button>
      <button >
        <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ma" viewBox="0 0 640 480">
          <path fill="#c1272d" d="M640 0H0v480h640z"/>
          <path fill="none" stroke="#006233" stroke-width="11.7" d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"/>
        </svg>
        {/* <MaFlag /> */}
      </button>
    </>
  );
}

export default LanguageSwitcher;
