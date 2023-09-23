import React, { useState } from 'react';
import jsPDF from 'jspdf';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
            childName: '',
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
        
            const doc = new jsPDF();

     
            let yPos = 10;

          
                const addText = (text:string, x = 10, lineHeight = 10) => {
                doc.text(text, x, yPos);
                yPos += lineHeight;
            };

            // Add content to the PDF
            addText(`Child Name: ${formData.childName}`);
            addText(`Child Last Name: ${formData.childLastName}`);
            addText(`Child Date of Birth: ${formData.childDOB}`);
            addText(`Child School Level: ${formData.childSchoolLevel}`);
            addText(`Child Last School: ${formData.childLastSchool}`);
            addText(`Child Registration Level: ${formData.childRegistrationLevel}`);
            addText(`Father Name: ${formData.fatherName}`);
            addText(`Father Last Name: ${formData.fatherLastName}`);
            addText(`Father Date of Birth: ${formData.fatherDOB}`);
            addText(`Father School Level: ${formData.fatherSchoolLevel}`);
            addText(`Mother Name: ${formData.motherName}`);
            addText(`Mother Last Name: ${formData.motherLastName}`);
            addText(`Mother Date of Birth: ${formData.motherDOB}`);
            addText(`Mother School Level: ${formData.motherSchoolLevel}`);

            console.log('Form Data:', formData);
            // Save or display the PDF
            doc.save('registration_form.pdf');

    };

    
    return (
        <main className="relative bg-gray-100 p-2">
          <form
                action="/inscription2023/#wpcf7-f2786-p2-o1"
                method="post"
                className="flex flex-col md:flex-row md:space-x-6 md:ml-2 md:mr-2 md:mt-10 justify-center"
                aria-label="Formulaire de contact"
                //noValidate={true}
                data-status="init"
                onSubmit={handleSubmit}
                >
                <div className="flex flex-col md:w-1/2">
                <label className="font-semibold m-2">Enfant</label>
                <input
                    size={40}
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Nom*"
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                />
                <input
                    size={40}
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Prénom*"
                    type="text"
                    name="childLastName"
                    value={formData.childLastName}
                    onChange={handleChange}
                />
                <input
                    size={40}
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Date de naissance jj/mm/aaaa*"
                    type="text"
                    name="childDOB"
                    value={formData.childDOB}
                    onChange={handleChange}
                />
                <input
                    size={40}
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Niveau scolaire actuel*"
                    type="text"
                    name="childSchoolLevel"
                    value={formData.childSchoolLevel}
                    onChange={handleChange}
                />
                <input
                    size={40}
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Le dernier établissement scolaire fréquenté*"
                    type="text"
                    name="childLastSchool"
                    value={formData.childLastSchool}
                    onChange={handleChange}
                />
                <input
                    size={40}
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Inscription 2023-2024 au niveau*"
                    type="text"
                    name="childRegistrationLevel"
                    value={formData.childRegistrationLevel}
                    onChange={handleChange}
                />
                </div>

                <br />
                    <div className="flex flex-col md:w-1/2">
                        <label className="font-semibold m-2">Père</label>
                        <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2" 
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Nom*"
                            type="text"
                            name="fatherName"
                            value={formData.fatherName} // Bind the value to the state
                            onChange={handleChange}
                        />
                    <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Prénom*"
                            type="text"
                            name="fatherLastName"
                            value={formData.fatherLastName} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Date de naissance jj/mm/aaaa*"
                            type="text"
                            name="fatherDOB"
                            value={formData.fatherDOB} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Niveau scolaire actuel*"
                            type="text"
                            name="fatherSchoolLevel"
                            value={formData.fatherSchoolLevel} // Bind the value to the state
                            onChange={handleChange}
                        />
                     </div>
                     <div className="flex flex-col md:w-1/2">
                        <label className="font-semibold m-2">Mère</label>
                        <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Nom*"
                            type="text"
                            name="motherName"
                            value={formData.motherName} // Bind the value to the state
                            onChange={handleChange}
                        />
                    <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Prénom*"
                            type="text"
                            name="motherLastName"
                            value={formData.motherLastName} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Date de naissance jj/mm/aaaa*"
                            type="text"
                            name="motherDOB"
                            value={formData.motherDOB} // Bind the value to the state
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            size={50}
                            className="w-full p-2 rounded border border-gray-300 mb-2"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Niveau scolaire actuel*"
                            type="text"
                            name="motherSchoolLevel"
                            value={formData.motherSchoolLevel} // Bind the value to the state
                            onChange={handleChange}
                    />
                <button
                        type="submit"
                        className="text-white w-80 bg-blue-500 h-11 rounded-md m-5"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        ENVOYER
                </button>
                    </div>  
                
           
          </form>
        </main>
  );
};

export default RegistrationForm;
