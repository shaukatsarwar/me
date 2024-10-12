import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import photo from '../assets/photo.png';

const Introduction: React.FC = () => {
  return (
    <section className="bg-[#282828] text-[#1DB954] py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 mb-8 md:mb-0">
          <img src={photo} alt="Shaukat Sarwar" className="rounded-full w-64 h-64 object-cover mx-auto" />
        </div>
        <div className="md:w-3/4 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shaukat Sarwar</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">AI Enthusiast and Technology Leader Empowering Teams to Build Scalable, Intelligent Systems</h2>
          <p className="text-xl mb-6 text-white">
          <em>As an AI Enthusiast and Cloud Solutions Specialist, I bring over 14 years of experience in developing scalable, SaaS-based applications and working within dynamic startup environments. My passion lies in leveraging AI and cloud technologies to solve complex industry challenges, driving innovation and efficiency across projects. Having led teams in fast-paced settings, I excel at designing intelligent solutions that meet business needs while ensuring adaptability and performance in cloud-native environments.
          </em>
          </p>
          <div className="flex flex-wrap gap-4 ">
            <a href="https://linkedin.com/in/shaukatsarwar" target="_blank" rel="noopener noreferrer" className="flex items-center pills-spotify-green px-4 py-2 rounded-full  transition-colors">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
            
            <a href="mailto:shaukatsarwar@hotmail.com" className="flex items-center pills-spotify-green  px-4 py-2 rounded-full  transition-colors">
              <Mail className="mr-2" size={20} />
              Email
            </a>
            <div className="flex items-center pills-spotify-green px-4 py-2 rounded-full transition-colors">
              <MapPin className="mr-2" size={20} />
              Helsinki
            </div>
            <a href="tel:+358417246309" className="flex items-center bg-white text-blue-600 px-4 py-2 pills-spotify-green rounded-full transition-colors">
              <Phone className="mr-2" size={20} />
              +358 41 724 6309
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;