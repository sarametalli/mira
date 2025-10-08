import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-neutral-100 container mx-auto px-6 py-3 fixed top-0 z-10">
        <div className="flex items-center justify-between mx-[5%] ">
          <div className="text-neutral-900 font-bold text-xl">
            <a href="#">Logo</a>
          </div>

          {/* Menu desktop (visibile da un certo breakpoint in su) */}
          {/* lg:block => visibile solo da 'lg' in su; nascosto su mobile */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#" className="text-neutral-900 hover:text-neutral-950">Home</a></li>
              <li><a href="#" className="text-neutral-900 hover:text-neutral-950">Chi siamo</a></li>
              <li><a href="#" className="text-neutral-900 hover:text-neutral-950">Contatti</a></li>
            </ul>
          </div>

          {/* Bottone hamburger (visibile solo su mobile/tablet) */}
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

        {/* Menu mobile (mostrato solo se isOpen è true e siamo sotto lg) */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="block px-4 py-2 bg-neutral-100 text-neutral-900 hover:text-neutral-950 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 bg-neutral-100 text-neutral-900 hover:text-neutral-950 rounded">
                Chi siamo
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 bg-neutral-100 text-neutral-900 hover:text-neutral-950 rounded">
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;