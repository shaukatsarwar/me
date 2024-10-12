import React from 'react';
import { Menu, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#121212] shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#top" className="flex items-center text-gray-300 hover:text-spotify-green"> {/* Add a link to the top */}
          <Home size={24} className="mr-2" /> {/* Add the Home icon */}
          <h1 className="text-2xl font-bold">Shaukat Sarwar</h1>
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#expertise" className="text-gray-300 hover:text-spotify-green">Expertise</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-spotify-green">Projects</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-spotify-green">Skills</a></li>
            <li><a href="#experience" className="text-gray-300 hover:text-spotify-green">Experience</a></li>
            {
            //<li><a href="#certifications" className="text-gray-300 hover:text-spotify-green">Certifications</a></li>
            }
            <li><a href="#testimonials" className="text-gray-300 hover:text-spotify-green">Testimonials</a></li>
            {
              //<li><a href="#blog" className="text-gray-300 hover:text-spotify-green">Blog</a></li>
            }
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