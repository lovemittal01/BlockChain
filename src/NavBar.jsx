import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import CloseIcon from "@mui/icons-material";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="hidden md:block bg-white border-gray-200  h-24 bg-cover nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20 pl-56 pr-80">
          <NavLink class="flex items-center" to="/merka" exact>
            <span className="self-center text-4xl font-bold  whitespace-nowrap dark:text-white ">
              Merka
            </span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <div
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  md:dark:bg-transparent w-96 text-lg content-between">
              <li>
                <NavLink
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yeyellow-300 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:text-white md:dark:hover:bg-transparent ml-6"
                  to="/coins"
                  exact
                >
                  Coins
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300  dark:hover:text-white md:dark:hover:bg-transparent ml-6"
                  to="/exchange"
                  exact
                >
                  Exchange
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pl-3 pr-4rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300  dark:hover:text-white md:dark:hover:bg-transparent ml-6"
                  to="/blog"
                  exact
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hamburger Icon */}

      {!showMenu && (
        <div className="md:hidden flex flex-row justify-between px-10 py-8 hover:cursor-pointer">
          <h1 className="text-white text-3xl">Merka</h1>
          <div onClick={() => setShowMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden px-10 py-8 relative">
          <div
            className="absolute top-2 right-5"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-square-rounded-x hover:cursor-pointer"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10l4 4m0 -4l-4 4" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-white text-2xl">Home</div>
            <div className="text-white text-2xl">Coins</div>
            <div className="text-white text-2xl">Exchange</div>
            <div className="text-white text-2xl">Blog</div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
