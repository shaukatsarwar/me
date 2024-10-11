import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-spotify-green">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <a href="tel:+358417246309" className="flex items-center text-gray-300 hover:text-spotify-green">
            <Phone className="mr-2" size={20} />
            +358 41 724 6309
          </a>
          <a href="mailto:shaukatsarwar@hotmail.com" className="flex items-center text-gray-300 hover:text-spotify-green">
            <Mail className="mr-2" size={20} />
            shaukatsarwar@hotmail.com
          </a>
          <a href="https://www.linkedin.com/in/shaukatsarwar" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-spotify-green">
            <Linkedin className="mr-2" size={20} />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;