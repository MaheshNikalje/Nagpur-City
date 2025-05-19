import React, { useState } from 'react'
import { PiOrangeDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <nav className=" border-gray-200 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <PiOrangeDuotone className='text-orange-400 text-5xl' />
          <span className="self-center text-4xl font-extrabold whitespace-nowrap dark:text-white">
            My Nagpur
          </span>
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu items */}
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
          id="navbar-menu"
        >
          <ul className="font-bold text-white flex flex-col md:flex-row md:space-x-8 mt-5 ml-2 rounded-lg  md:mt-0 md:border-0 ">
            <li>
              <Link to="">
              Home
              </Link>
            </li>
            <li>
              <Link to="/spots">
              Spots
              </Link>
            </li>
            <li>
              <Link to="/foods">
              Foods
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar