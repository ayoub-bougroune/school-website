import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf';


const RegistrationForm = () => {
    const form = useRef<any>();
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const doc = new jsPDF();

        emailjs.sendForm(
            'service_m0jd759',
            'template_bg2p7gp',
            form.current,
            'oOGLrjaGmqv8emcJR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // const pdfBlob = doc.output('blob');

        // const serviceId = "service_m0jd759";
        // const userId = "user_m0jd759";
        // const templateId = "template_m0jd759";

        // emailjs.init(userId);

        // const emailParams = {
        //     to_email: "ayoubbougroune18@gmail.com", // Replace with your email
        //     subject: "Registration Form Submission",
        //     message: "Attached is the registration form.",
        // };

        // const attachments = {
        // "registration_form.pdf": pdfBlob,
        // };
        
        // const attachmentsString = JSON.stringify(attachments);
        
        // try {
        //     const response = await emailjs.send(serviceId, templateId, { ...emailParams, attachments: attachmentsString }, userId);
        //     console.log("Email sent successfully", response);
        // } catch (error) {
        // console.error("Error sending email", error);
        // }

        let yPos = 30; // Starting position   

        const addCenteredHeader = (headerText: any , y = 10) => {
            const textWidth = doc.getTextWidth(headerText); // Calculate text width
            const xOffset = (doc.internal.pageSize.width - textWidth) / 2;
            doc.text(headerText, xOffset, y);
        };

        const addText = (text: string | string[], x = 20, lineHeight = 15) => {
                doc.text(text, x, yPos);
                yPos += lineHeight;
        };

        // Add centered header
        addCenteredHeader("Formulaire D'inscription", 20);
        
        // header with title of Enfant
        addText("Enfant", 15, 15);
        addText(`Nom : ${formData.childName}`);
        addText(`Prénom : ${formData.childLastName}`);
        addText(`Date de naissance : ${formData.childDOB}`);
        addText(`Niveau scolaire actuel : ${formData.childSchoolLevel}`);
        addText(`Le dernier établissement scolaire fréquenté : ${formData.childLastSchool}`);
        addText(`Inscription 2023-2024 au niveau : ${formData.childRegistrationLevel}`);
            
        // header with title of Père
        addText("Père", 15, 15);
        addText(`Nom : ${formData.fatherName}`);
        addText(`Prénom : ${formData.fatherLastName}`);
        addText(`Date de naissance : ${formData.fatherDOB}`);
        addText(`Niveau scolaire actuel : ${formData.fatherSchoolLevel}`);
            
        // header with title of Mère
        addText("Mère", 15, 15);
        addText(`Nom : ${formData.motherName}`);
        addText(`Prénom : ${formData.motherLastName}`);
        addText(`Date de naissance : ${formData.motherDOB}`);
        addText(`Niveau scolaire actuel : ${formData.motherSchoolLevel}`);

        // Save or display the PDF
        doc.save('registration_form.pdf');
    };


    
    return (
        <main className="relative bg-gray-100 mb-32 m-5 p-2">
          <form
                action="/inscription2023/#wpcf7-f2786-p2-o1"
                method="post"
                className="flex flex-col md:flex-row md:space-x-6 md:ml-2 md:mr-2 md:mt-0 justify-center"
                aria-label="Formulaire de contact"
                //noValidate={true}
                data-status="init"
                onSubmit={handleSubmit}
                ref={form}
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
                            placeholder="Téléphone*"
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
                            placeholder="Email*"
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
                            placeholder="Téléphone*"
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
                            placeholder="Email*"
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

