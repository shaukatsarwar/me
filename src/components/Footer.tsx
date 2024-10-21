import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-spotify-green">Shaukat Sarwar</h2>
            <p>AI Enthusiast and Cloud Specialist</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/shaukatsarwar" target="_blank" rel="noopener noreferrer" className="hover:text-spotify-green">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/shaukatsarwar" target="_blank" rel="noopener noreferrer" className="hover:text-spotify-green">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/shaukatplusplus" target="_blank" rel="noopener noreferrer" className="hover:text-spotify-green">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shaukat Sarwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;