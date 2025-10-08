import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-neutral-900 hover:text-neutral-950 ${
      isActive ? "text-red-500 font-semibold" : ""
    }`;

  return (
    <header>
      <nav className="bg-neutral-100 container mx-auto px-6 py-3 fixed top-0 z-10 w-full">
        <div className="flex items-center justify-between mx-[5%]">
          <div className="text-neutral-900 font-bold text-xl">
            <NavLink to="/">Logo</NavLink>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClasses}>
                  Chi siamo
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={linkClasses}>
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Bottone hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none text-neutral-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
          <ul className="mt-4 space-y-4">
            <li>
              <NavLink
                to="/"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Chi siamo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
