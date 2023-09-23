import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if not already done
import { logo } from "../../constants/home";
import { Colors } from "../../constants/Colors";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-30 bg-white site-header'>
      <div className="p-1" style={{ backgroundColor: Colors.green }}></div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-8">
          <div className="logo-image">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="image-logo w-24 md:w-64 md:h-48 h-28"
                alt="Flowbite Logo"
              />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="p-2 w-10 h-10 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              onClick={toggleMobileMenu}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h-16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={` md:w-auto md:flex ${isOpen ? 'block' : 'hidden'}`} id="navbar-multi-level">
            <ul className="flex flex-col md:flex-row font-medium p-4 mt-4 border md:flex md:space-x-6 md:space-y-0 space-y-2">
              <li className="hover:bg-amber-400 hover:text-white">
                <Link to="/" className="block" aria-current="page">
                  Accueil
                </Link>
              </li>
              <li className="hover:bg-amber-400 hover:text-white">
                <Link to="/signUP" className="block">
                  Inscription
                </Link>
              </li>
              <li className="hover-bg-amber-400 hover:text-white">
                <Link to="/gallery" className="block">
                  Photo
                </Link>
              </li>
              <li className="hover-bg-amber-400 hover:text-white">
                <Link to="/about" className="block">
                  Qui sommes-nous?
                </Link>
              </li>
              <li className="hover-bg-amber-400 hover:text-white">
                <Link to="/contact" className="block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


