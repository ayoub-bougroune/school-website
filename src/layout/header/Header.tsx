import React,{ useState }  from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDoubleDropdown = () => {
    setDoubleDropdownOpen(!isDoubleDropdownOpen);
  };
  return (
    <header className='fixed top-0  left-0 right-0 z-30 h-52 bg-white site-header clearfix'>
      <div className="w-full bg-green-700 p-1"></div>
       <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="logo-image">
            <Link to="/" className="flex items-center"> 
              <img
                src="https://legrandunivers.ma/wp-content/uploads/2021/05/Le-Grand-Univers.jpg"
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
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
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
            <li className="block hover:bg-amber-400 w-20 flex items-center text-gray-900 justify-center h-40 hover:text-white">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDoubleDropdown}  
                data-dropdown-toggle="dropdownNavbar"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 border-b  md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto md:dark:hover:text-white  dark:border-white dark:hover:bg-orange-500 md:dark:hover-bg-transparent ${isDoubleDropdownOpen ? 'bg-text-gray-900' : ''}`}>
                Inscription
              </button>
              {/* Dropdown menu */}
              <div
                  id="dropdownNavbar"
                  className={`z-10 ${isDoubleDropdownOpen ? 'block' : 'hidden'} divide-y text-gray-900 divide-gray-900 rounded-lg shadow w-44 dark:bg-white`}
              >
                <ul
                  className="py-2 text-sm text-gray-900 dark:text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Dashboard
                    </Link>
                  </li>
              
                  <li>
                    <Link
                      to="/earnings"
                      className="block px-4 py-2  text-gray-900"
                    >
                      Earnings
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" hover:bg-amber-400 w-20 flex items-center text-gray-900 justify-center h-40 hover:text-white">
              <Link
                to="/services"
                className="block"
              >
                L&#8217;école
              </Link>
            </li>
            <li className=" hover:bg-amber-400 w-20 flex items-center text-gray-900 justify-center h-40 hover:text-white">
              <Link
                to="/pricing"
                className="block "
              >
                Photo
              </Link>
            </li>
            <li className="hover:bg-amber-400 w-24 flex items-center text-gray-900 justify-center h-40 hover:text-white">
                <Link
                  to="/contact"
                  className="block"
                >
                  Bon A Savoir
                </Link>
              </li>
             <li className="hover:bg-amber-400 w-20 flex text-gray-900 items-center justify-center h-40 hover:text-white">
                <Link
                  to="/contact"
                  className="block"
                >
                  Actualites
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
