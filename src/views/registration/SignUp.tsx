import React from 'react'
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
const SignUp = () => {
    return (
    <>    
     <div className="flex flex-col h-96 mt-16 items-center  pt-6  sm:justify-center sm:pt-0 bg-gray-50">
                <div className="bg-yellow-500 flex flex-col p-16 mt-14 items-center justify-center">
                  <h4 className="text-xl text-center font-bold">Pour vous inscrire, il vous suffit de remplir ce formulaire (2minutes environ).</h4>
                   <p className="mt-5 text-center">Vous serez contacté par un membre de notre équipe dans les plus brefs délais.</p>
              </div>
     </div>
    <RegistrationForm />
     </>
  )
}

export default SignUp
