import React,{ useEffect } from 'react'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import { title } from "../../constants/register"
const SignUp = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
    <>    
     <div className="flex flex-col h-auto sm:h-60 mt-48 items-center pt-5 sm:pt-0  bg-gray-50">
      <div className="bg-yellow-500 flex flex-col p-2 sm:p-7 mt-4 sm:mt-14 items-center justify-center">
        <h4 className="text-lg sm:text-lg text-center font-bold">{title}</h4>
      </div>
    </div>
        <RegistrationForm />
     </>
  )
}

export default SignUp
