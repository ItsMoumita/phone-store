import { Bookmark, ShoppingCart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mx-auto shadow-sm border-b border-gray-300 bg-white z-50">
      <nav className="flex justify-between items-center px-6 py-4 w-11/12 mx-auto">
        {/* Logo */}
        <div className="font-bold text-xl">
          Flagship<span className="text-black">FaceOff</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-base">
          <NavLink to="/" className={({isActive}) => isActive? 'text-blue-800 font-semibold border-b border-blue-700': 'text-black hover:underline'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive? 'text-blue-800 font-semibold border-b border-blue-700': 'text-black hover:underline'}>About</NavLink>
            <NavLink to="/cart" className={({isActive}) => isActive? 'text-blue-800 font-semibold': 'text-black hover:text-blue-700'}><ShoppingCart size={20} /></NavLink>
            <NavLink to="/favourites" className={({isActive}) => isActive?  'text-blue-800 font-semibold': 'text-black hover:text-blue-700'}> <Bookmark size={20} />
            </NavLink> 
          </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 flex flex-col gap-4">
          <NavLink to="/" className={({isActive}) => isActive? 'text-blue-800 font-semibold underline': 'text-black hover:underline'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive? 'text-blue-800 font-semibold underline': 'text-black hover:underline'}>About</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive? 'text-blue-800 font-semibold': 'text-black hover:text-blue-700'}><ShoppingCart size={20} /></NavLink>
          <NavLink to="/favourites" className={({isActive}) => isActive?  'text-blue-800 font-semibold': 'text-black hover:text-blue-700'}> <Bookmark size={20} />
          </NavLink> 
        </div>
      )}
    </div>
  );
};

export default Navbar;
