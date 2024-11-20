import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between px-4 lg:px-8 py-3 bg-blue-500 text-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/image/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-lg"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            GitHub
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
