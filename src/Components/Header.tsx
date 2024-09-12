'use client'

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.gif";

const Header = () => {
  // State to manage the dropdown menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 bg-transparent">
      <div className="container mx-auto">
        <nav className="bg-transparent">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <a href="#" className="">
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </a>

            {/* Burger button for mobile view */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="mobile-menu-2"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className={`${menuOpen ? "hidden" : "block"} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* Close icon */}
                <svg
                  className={`${menuOpen ? "block" : "hidden"} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Navigation menu */}
            <div
              className={`${
                menuOpen
                  ? "max-h-screen translate-y-0 border-b-2  border-white rounded-b-3xl"
                  : "max-h-0  translate-y-0"
              } transition-all duration-500 ease-in-out overflow-hidden transform bg-[#350b2d] shadow-inner  lg:border-none lg:rounded-none lg:bg-transparent lg:opacity-100 lg:max-h-full lg:flex justify-between items-center w-full lg:w-auto`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 p-4 lg:p-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-3 lg:py-2 border-b text-lg uppercase tracking-wider  lg:border-none border-slate-700 text-white hover:text-slate-400 duration-100 transition-all lg:text-primary-700"
                    aria-current="page"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 lg:py-2 border-b text-lg uppercase tracking-wider  lg:border-none border-slate-700 text-white hover:text-slate-400 duration-100 transition-all hover:text-primary-700"
                  >
                    Key features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 lg:py-2 border-b text-lg uppercase tracking-wider  lg:border-none border-slate-700 text-white hover:text-slate-400 duration-100 transition-all hover:text-primary-700"
                  >
                    roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 lg:py-2 border-b text-lg uppercase tracking-wider  lg:border-none border-slate-700 text-white hover:text-slate-400 duration-100 transition-all hover:text-primary-700"
                  >
                    tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 lg:py-2 border-b text-lg uppercase tracking-wider  lg:border-none border-slate-700 text-white hover:text-slate-400 duration-100 transition-all hover:text-primary-700"
                  >
                    nft
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 lg:py-2 pr-4 pl-3  text-lg uppercase tracking-wider text-white hover:text-slate-400 00 transition-all hover:text-primary-700"
                  >
                    media kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
