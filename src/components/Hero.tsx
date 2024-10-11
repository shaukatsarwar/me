import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#1DB954] to-[#1ed760] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Shaukat Sarwar</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Principal Software Engineer</h2>
        <p className="text-xl md:text-2xl mb-8">14+ Years in Full-Stack Development & Cloud Architecture</p>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <div className="flex items-center">
            <MapPin className="mr-2" size={20} />
            <span>Helsinki 00980, Finland</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" size={20} />
            <span>+358 41 724 6309</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" size={20} />
            <span>shaukatsarwar@hotmail.com</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2" size={20} />
            <a href="https://linkedin.com/in/shaukatsarwar" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/shaukatsarwar
            </a>
          </div>
        </div>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Expert in Azure, AWS, and AI Services | Driving Scalable SaaS Solutions with Innovative Cloud & AI Technologies | Proficient in project management and performance optimization
        </p>
      </div>
    </section>
  );
};

export default Hero;