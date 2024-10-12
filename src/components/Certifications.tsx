import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2022"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2021"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2020"
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Certifications and Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-spotify-green mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{cert.name}</h3>
              <p className="text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Cloud Consultation Services</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.fiverr.com/shaukatsarwar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-spotify-green text-white px-4 py-2 rounded hover:bg-spotify-green-dark transition-colors">
              Fiverr Profile <ExternalLink className="ml-2" size={16} />
            </a>
            <a href="https://www.upwork.com/freelancers/~01234567890123456" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#6fda44] text-white px-4 py-2 rounded hover:bg-[#5dc33b] transition-colors">
              Upwork Profile <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;