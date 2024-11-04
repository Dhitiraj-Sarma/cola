import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full ">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:px-8">
        <NavLink to="/" aria-label="homepage">
          <img src="/logo.svg" alt="logo" className="h-5 md:h-8 w-auto" />
        </NavLink>

        <ul className="hidden md:flex gap-6 items-center space-x-6">
          <li>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-sm font-semibold border-b-2 border-red-500"
                  : "text-gray-700 text-sm hover:text-red-500 font-semibold"
              }
            >
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-sm font-semibold border-b-2 border-red-500"
                  : "text-gray-700 text-sm hover:text-red-500 font-semibold"
              }
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/impact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-sm font-semibold border-b-2 border-red-500"
                  : "text-gray-700 text-sm hover:text-red-500 font-semibold"
              }
            >
              Impact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-sm font-semibold border-b-2 border-red-500"
                  : "text-gray-700 text-sm hover:text-red-500 font-semibold"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white border-l border-gray-200 transition-transform transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-end px-4 pt-5">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <LiaTimesSolid size={24} />
          </button>
        </div>
        <ul className="flex flex-col  justify-start gap-6 px-40 pt-14">
          <li>
            <NavLink
              to="/"
              aria-label="homepage"
              onClick={() => setIsOpen(false)}
            >
              <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className="text-3xl font-bold"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className="text-3xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/impact"
              className="text-3xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="text-3xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
