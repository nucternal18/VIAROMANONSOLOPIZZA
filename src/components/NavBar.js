import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Striscia from '../assets/img/strisciaNoBG.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <header className='absolute w-full bg-gray-900 text-white text-base font-light font-sans p-6'>
      <nav className='container  mx-auto flex flex-wrap justify-between'>
        <div className='z-50 -my-32 py-2'>
                  <img src={Striscia} alt="via roma non solo pizza logo" style={{  width: '400px'}}/>
        </div>
        <div className='block  z-50 border-none'>
          <div className='block lg:hidden  z-50 border-none'>
            <button
              type='button'
              onClick={(e) => handleToggle(e)}
              className='flex items-center px-3 py-2 text-black-700 hover:text-blue-500 border-none '
            >
              <svg
                className='fill-current h-5 w-5 border-none'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div
            className={
              isOpen
                ? `w-full flex-grow lg:items-center lg:w-auto z-50 border-none`
                : `hidden lg:block lg:items-center lg:w-auto z-50`
            }
          >
            <ul className='text-sm block  lg:flex lg:flex-grow'>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/'>HOME</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/menu'>MENU</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/about'>GALLERY</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/contact'>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;