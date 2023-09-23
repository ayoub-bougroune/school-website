import React from 'react'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import { title, PA } from "../../constants/register"
const SignUp = () => {
    return (
    <>    
     <div className="flex flex-col h-auto sm:h-96 mt-60 items-center pt-6 sm:pt-0  bg-gray-50">
      <div className="bg-yellow-500 flex flex-col p-6 sm:p-16 mt-4 sm:mt-14 items-center justify-center">
        <h4 className="text-lg sm:text-2xl text-center font-bold">{title}</h4>
        <p className="mt-2 text-sm sm:text-xl sm:mt-5 text-center">{PA}</p>
      </div>
    </div>
        <RegistrationForm />
     </>
  )
}

export default SignUp
