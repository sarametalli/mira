import { useState } from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  {/* due classi perché nella versione desktop deve colorare la pagina selezionata, nella mobile deve farla sparire*/}
const desktopLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `relative flex items-center justify-center h-full px-4 text-cblack hover:text-hoverblack transition-all duration-200 text-p
   ${isActive ? "font-semibold nav-active" : ""}`;

  
  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 bg-darkneutral text-cblack hover:hoverblack rounded ${
      isActive ? "hidden" : ""
    }`;

  return (
    <header>
<nav className="bg-neutral w-full px-6 py-3 sticky top-0 z-10 shadow-md">
  <div className="flex items-center justify-between w-full">
    <div className="overflow-hidden h-[4rem] w-[9rem] flex items-center">
            <NavLink to="/"><img src="/logo-light1.svg" alt="Logo" className="object-contain w-full h-auto translate-y-[0.5rem]" />
            </NavLink>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 text-p">
              <li>
                <NavLink to="/" className={desktopLinkClasses}>
                  Eventi
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={desktopLinkClasses}>
                  Chi siamo
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={desktopLinkClasses}>
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Bottone hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none text-cblack"
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
          <ul className="mt-4 space-y-4 text-p">
            <li>
              <NavLink
                to="/"
                className={mobileLinkClasses} 
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={mobileLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Chi siamo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={mobileLinkClasses}
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
