import React,{useEffect} from 'react'
import ContactSection from '../../components/contactSection/ContactSection'

const Contact = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <ContactSection/>  
     <main className="w-full min-h-screen flex flex-col mb-28 sm:mt-24 h-screen">
       <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15339.73016834697!2d7.268165847343975!3d43.52734534661836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd8bcb3f1b5df%3A0x771d9a69d0e37533!2sCannes%2C%20France!5e0!3m2!1sen!2sfr!4v1601138221085!5m2!1sen!2sfr"
                className=" w-full h-screen"
                aria-hidden="false"
                style={{ border: 0 }}
        ></iframe>
     </main>
   
    </>
  )
}

export default Contact
