import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#181818] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-spotify-green">Shaukat Sarwar</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#experience" className="text-gray-300 hover:text-spotify-green">Experience</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-spotify-green">Skills</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-spotify-green">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;