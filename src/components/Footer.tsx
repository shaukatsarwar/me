import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Shaukat Sarwar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;