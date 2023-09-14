import React,{ useState }  from 'react'
import { Link } from 'react-router-dom';
import { logo } from "../../constants/home"
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='fixed top-0  left-0 right-0 z-30 h-52 bg-white site-header clearfix'>
      <div className="w-full bg-green-700 p-1"></div>
       <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="logo-image">
            <Link to="/" className="flex items-center"> 
              <img
                src={logo}
                className="image-logo w-full h-40"
                alt="Flowbite Logo"
              />
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
           
          >
          </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white w-full">
            <li className="hover:bg-amber-400 w-20 flex items-center justify-center h-40 hover:text-white">
              <Link
                to="/"
                className=""
                aria-current="page"
              >
                Accueil
              </Link>
            </li>
             <li className="= hover:bg-amber-400 w-20 flex items-center text-gray-900 justify-center h-40 hover:text-white">
                  <Link
                      to="/signUP"
                      className="block"
                    >
                    Inscription
                    </Link>
             </li>
              <li className=" hover:bg-amber-400 w-20 flex items-center text-gray-900 justify-center h-40 hover:text-white">
              <Link
                to="/gallery"
                className="block"
              >
                Photo
              </Link>
             </li>
              <li className=" hover:bg-amber-400 w-40 flex items-center text-gray-900 justify-center h-40 hover:text-white">
                  <Link
                    to="/about"
                    className="block"
                  >
                  Qui sommes-nous?
                  </Link>
              </li>
              <li className="hover:bg-amber-400 w-20 flex items-center text-gray-900 justify-center h-40 hover:text-white">
                <Link
                  to="/contact"
                  className="block"
                >
                  Contact
                </Link>
              </li>
          </ul>
        </div>
      </div>
       </nav>
    </header>
  )
}

export default Header
