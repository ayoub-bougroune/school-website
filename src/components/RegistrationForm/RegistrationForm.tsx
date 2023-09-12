import React,{useState} from 'react';

const RegistrationForm = () => {
const [novalidate, setNovalidate] = useState(false)
    return (
        <>
                 <form
              action="/inscription2023/#wpcf7-f2786-p2-o1"
              method="post"
              className="flex flex-col mr-72 ml-72 justify-center "
              aria-label="Formulaire de contact"
              noValidate={novalidate}
              data-status="init"
            >
                <label className="font-semibold">Enfant</label>
                <br />
                <input
                  size={30}
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2  rounded border border-gray-300"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Nom*"
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
                  placeholder="Nom*"
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
                  placeholder="Nom*"
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
                  placeholder="Nom*"
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
                  placeholder="Nom*"
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
                  placeholder="Nom*"
                  value=""
                  type="text"
                  name="child-name"
                />
                <br />                
              {/* <div className="one-half">
                <p>
                  <label>Père</label>
                  <br />
                   <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Nom*"
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
                    placeholder="Nom*"
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
                    placeholder="Nom*"
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
                    placeholder="Nom*"
                    value=""
                    type="text"
                    name="child-name"
                    />
                <br />                    
                </p>
              </div>
              <div className="one-half last">
                <p>
                  <label>Mère</label>
                  <br />
                   <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Nom*"
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
                    placeholder="Nom*"
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
                    placeholder="Nom*"
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
                    placeholder="Nom*"
                    value=""
                    type="text"
                    name="child-name"
                    />
                  <br />                    
                </p>
              </div>
              <p>
                <input
                  className="wpcf7-form-control has-spinner wpcf7-submit submit button-normal green"
                  type="submit"
                  value="Envoyer"
                />
                <span className="wpcf7-spinner"></span>
              </p>
              <div
                className="wpcf7-response-output"
                aria-hidden="true"
              ></div>  */}
     </form>
        </>
  );
};

export default RegistrationForm;
