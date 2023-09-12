import React,{useState} from 'react';

const RegistrationForm = () => {
const [novalidate, setNovalidate] = useState(false)
    return (
        <>
          <form
                    action="/inscription2023/#wpcf7-f2786-p2-o1"
                    method="post"
                    className="flex flex-col mr-72 ml-72 m-10 justify-center"
                    aria-label="Formulaire de contact"
                    noValidate={novalidate}
                    data-status="init"
                    >
                        <label className="font-semibold">Enfant</label>
                        <br />
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2  rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Nom*"
                            value=""
                            type="text"
                            name="child-level"
                        />
                        <br />
                        <input
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Prénom*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Date de naissance jj/mm/aaaa*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Niveau scolaire actuel*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />      
                        <input
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Le dernier établissement scolaire fréquenté*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Inscription 2023-2024 au niveau*"
                        value=""
                        type="text"
                        name="child-name"
                     />
                    <br />
                    <div className="flex flex-row mr-72 ml-72 m-2 justify-center">
                    <div className="mr-28">
                        <label className="font-semibold m-2">Père</label>
                        <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Nom*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                    <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Prénom*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Date de naissance jj/mm/aaaa*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Niveau scolaire actuel*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                     </div>
                    <div>
                        <label className="font-semibold m-2">Mère</label>
                        <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Nom*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                    <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Prénom*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Date de naissance jj/mm/aaaa*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                        <br />
                        <input
                        size={50}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Niveau scolaire actuel*"
                        value=""
                        type="text"
                        name="child-name"
                        />
                    </div>  
                </div>
                <button
                        type="submit"
                        className=" text-white bg-blue-500  h-11 rounded-md m-5"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        ENVOYER
                </button>
          </form>
      
        </>
  );
};

export default RegistrationForm;
