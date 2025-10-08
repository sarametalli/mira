import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-pink-100 shadow-md">
      {/* TODO inserire logo */}
      <h1 className="text-2xl font-serif text-pink-700">Mira Eventi</h1>

      {/* nav links — visibili solo su pc - se la pagina non è rimpicciolita */}

      {/* hamburger — visibile solo su mobile/tablet o quando su pc si rimpicciolisce la pagina */}
    
      {/* contenuto hamburger */}
    </nav>
  );
}
