import React, { useState } from 'react';
import jsPDF from 'jspdf';


const RegistrationForm = () => {
    const [novalidate, setNovalidate] = useState(false)
    const [formData, setFormData] = useState<{
            childName: null | string ;
            childLastName: string ;
            childDOB: string ;
            childSchoolLevel: string ;
            childLastSchool: string ;
            childRegistrationLevel: string ;
            fatherName: string ;
            fatherLastName: string ;
            fatherDOB: string ;
            fatherSchoolLevel: string ;
            motherName: string ;
            motherLastName: string ;
            motherDOB: string ;
            motherSchoolLevel: string ;
    }>({
            childName: null || '',
            childLastName: '',
            childDOB: '',
            childSchoolLevel: '',
            childLastSchool: '',
            childRegistrationLevel: '',
            fatherName: '',
            fatherLastName: '',
            fatherDOB: '',
            fatherSchoolLevel: '',
            motherName: '',
            motherLastName: '',
            motherDOB: '',
            motherSchoolLevel: '',
    });

      const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

        const handleSubmit = (e: { preventDefault: () => void; }) => {
            e.preventDefault();

            // Create a new jsPDF instance
            const doc = new jsPDF();

            // Add content to the PDF
            doc.text(`Child Name: ${formData.childName}`, 10, 10);
            doc.text(`Child Last Name: ${formData.childLastName}`, 10, 20);
            doc.text(`Child Date of Birth: ${formData.childDOB}`, 10, 30);
            doc.text(`Child School Level: ${formData.childSchoolLevel}`, 10, 40);
            doc.text(`Child Last School: ${formData.childLastSchool}`, 10, 50);
            doc.text(`Child Registration Level: ${formData.childRegistrationLevel}`, 10, 60);
            doc.text(`Father Name: ${formData.fatherName}`, 10, 70);
            doc.text(`Father Last Name: ${formData.fatherLastName}`, 10, 80);
            doc.text(`Father Date of Birth: ${formData.fatherDOB}`, 10, 90);
            doc.text(`Father School Level: ${formData.fatherSchoolLevel}`, 10, 100);
            doc.text(`Mother Name: ${formData.motherName}`, 10, 110);
            doc.text(`Mother Last Name: ${formData.motherLastName}`, 10, 120);
            doc.text(`Mother Date of Birth: ${formData.motherDOB}`, 10, 130);
            doc.text(`Mother School Level: ${formData.motherSchoolLevel}`, 10, 140);

            // Save or display the PDF
            doc.save('registration_form.pdf');
    };
    
    return (
        <>
          <form
                action="/inscription2023/#wpcf7-f2786-p2-o1"
                method="post"
                className="flex flex-col mr-72 ml-72 m-10 justify-center"
                aria-label="Formulaire de contact"
                noValidate={novalidate}
                data-status="init"
                onSubmit={handleSubmit}
                >
                        <label className="font-semibold">Enfant</label>
                        <br />
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2  rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Nom*"
                            type="text"
                            name="child-name"
                            // value={formData.childName || ''} 
                             onChange={handleChange}
                        />
                        <br />
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Prénom*"
                            type="text"
                            name="child-lastName"
                            value={formData.childLastName} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Date de naissance jj/mm/aaaa*"
                            type="text"
                            name="child-DOB"
                            value={formData.childDOB} 
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Niveau scolaire actuel*"
                            type="text"
                            name="child-schoolLevel"
                            value={formData.childSchoolLevel} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />      
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Le dernier établissement scolaire fréquenté*"
                            type="text"
                            name="child-lastSchool"
                            value={formData.childLastSchool} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Inscription 2023-2024 au niveau*"
                            type="text"
                            name="child-registrationLevel"
                            value={formData.childRegistrationLevel} // Bind the value to the state
                            onChange={handleChange}
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
                            type="text"
                            name="child-fatherName"
                            value={formData.fatherName} // Bind the value to the state
                            onChange={handleChange}
                        />
                    <br />
                        <input
                            size={50}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Prénom*"
                            type="text"
                            name="child-fatherLastName"
                            value={formData.fatherLastName} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Date de naissance jj/mm/aaaa*"
                            type="text"
                            name="child-atherDOB"
                            value={formData.fatherDOB} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Niveau scolaire actuel*"
                            type="text"
                            name="child-fatherSchoolLevel"
                            value={formData.fatherSchoolLevel} // Bind the value to the state
                            onChange={handleChange}
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
                            type="text"
                            name="child-motherName"
                            value={formData.motherName} // Bind the value to the state
                            onChange={handleChange}
                        />
                    <br />
                        <input
                            size={50}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Prénom*"
                            type="text"
                            name="child-motherLastName"
                            value={formData.motherLastName} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Date de naissance jj/mm/aaaa*"
                            type="text"
                            name="child-motherDOB"
                            value={formData.motherDOB} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required p-2 m-2 rounded border border-gray-300"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Niveau scolaire actuel*"
                            type="text"
                            name="child-name"
                            value={formData.motherSchoolLevel} // Bind the value to the state
                            onChange={handleChange}
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
