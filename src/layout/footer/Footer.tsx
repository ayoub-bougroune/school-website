import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
 
      <footer className="w-full relative bottom-0">
        <div className='flex flex-row justify-evenly items-center bg-red-500'>
          <div className="footer-widget col-span-4 md:col-span-4 m-10">
            <div id="custom_html-2" className="widget-text widget-footer widget_custom_html">
              <h4 className="text-xl m-5 text-white font-semibold">Le Grand Univers Privé</h4>
              <div className="textwidget custom-html-widget"></div>
            </div>
            <div id="media_image-2" className="widget-footer widget_media_image">
              <img width="300" height="158" src="https://legrandunivers.ma/wp-content/uploads/2021/05/Le-Grand-Univers.jpg" className="w-72 m-5 h-auto max-w-full" alt="" decoding="async" loading="lazy" />
            </div>
          </div>
          <div className="footer-widget col-span-4 md:col-span-4">
            <div id="custom_html-3" className="widget-text widget-footer widget_custom_html">
              <h4 className="text-xl text-white font-semibold">Contactez-nous</h4>
              <div className="textwidget custom-html-widget">
                <p className="text-white">Adresse : 71 av Mehdi Ben Barka, Souissi - Rabat</p>
                <p className="text-white">Tél.: +212 537 65 89 39</p>
                <p className="text-white">Mob.: +212 667 79 05 77</p>
                <p className="text-white">Email: contact@legrandunivers.ma</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.821311046369!2d-6.848181884833282!3d33.9714320294318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76cb02b1d4763%3A0xf9712b13f2e239f9!2sGrand+Univers!5e0!3m2!1sen!2s!4v1466423707997"
                  className="w-full"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="h-14 w-full flex flex-row justify-around items-center bg-white ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex items-center justify-center mt-4 md:mt-0">
          <li className="mx-2">
            <Link to="#" className="text-black hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="#" className="text-black hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </Link>
          </li>
        </ul>
       </div>
      </footer>
 
  );
}

export default Footer;
