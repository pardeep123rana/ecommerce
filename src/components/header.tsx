import React, { useState } from "react";
import { FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`static top-0 h-auto w-full bg-white py-5 md:px-20 px-[25px] flex justify-between items-center shadow-2xl mb-0 ${
          isMenuOpen ? " fixed top-0 z-50" : "sticky top-0 z-40"
        }`}
      >
        <div>
          <h1 className="md:text-5xl text-3xl sm:text-4xl font-semibold text-green-600">
            Zay
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-10 text-lg font-light justify-center w-full">
          <ul className="flex gap-[8%] justify-center w-full">
            <li>
              <Link
                to="/"
                className="hover:cursor-pointer hover:text-green-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:cursor-pointer hover:text-green-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Shop"
                className="hover:cursor-pointer hover:text-green-600"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/Content"
                className="hover:cursor-pointer hover:text-green-600"
              >
                Contect
              </Link>
            </li>
          </ul>
          <div className="flex space-x-7">
            <Link to="/Search">
              <FaSearch className="text-xl cursor-pointer" />
            </Link>
            <FaCartArrowDown className="text-xl cursor-pointer" />
            <FaUser className="text-xl cursor-pointer" />
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed top-20 left-0 h-screen w-full bg-white shadow-md p-4 flex flex-col items-start gap-4 text-[23px] z-50  ">
            <ul className="flex flex-col items-start gap-4 w-full">
              <li>
                <Link
                  to="/"
                  className="hover:cursor-pointer hover:text-green-600 w-full text-left ml-[10%]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:cursor-pointer hover:text-green-600 w-full text-left ml-[10%]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className="hover:cursor-pointer hover:text-green-600 w-full text-left ml-[10%]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/Content"
                  className="hover:cursor-pointer hover:text-green-600 w-full text-left ml-[10%]"
                >
                  Contect
                </Link>
              </li>
            </ul>
            <div className="flex md:flex-row flex-col ml-[10%] space-x-4">
              <div className="flex space-x-7 mt-2">
                <FaSearch className="text-xl cursor-pointer" />

                <FaCartArrowDown className="text-xl cursor-pointer" />

                <FaUser className="text-xl cursor-pointer" />
              </div>
              <div>
                <div className="flex border-2 mt-4 text-left w-full">
                  <input
                    className="flex-1 px-4 py-1 text-base border-none outline-none"
                    type="text"
                    placeholder="search........."
                  />
                  <div className="p-2 bg-gray-200 rounded-r-md">
                    <FaSearch className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
