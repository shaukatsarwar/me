import React from 'react';
import { Award } from 'lucide-react';

const achievements = [
  "Designed hybrid and multi-cloud architectures on Azure and AWS, reducing operational costs by up to 30% and enhancing scalability and reliability for SaaS and startup clients",
  "Attained AWS Partner status by ensuring AWS standards compliance via the completion of the AWS Foundational Technical Review and implementation of Well-Architected principles, resulting in enhanced system reliability and security",
  "Enhanced cost efficiency of cloud resources by approximately 20%, resulting in annual savings of $20,000",
  "Led large-scale customer integration, increasing overall service delivery satisfaction by 25% based on client feedback",
  "Orchestrated the migration of a legacy web application to .NET Core and containerization, reducing response times by 30%, improving user experience, and enhancing deployment efficiency",
  "Awarded Best Employee of the Year five times, recognizing outstanding performance, leadership, and consistent excellence across multiple projects"
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md flex items-start glow-effect">
              <Award className="w-8 h-8 text-spotify-green mr-4 flex-shrink-0 mt-1" />
              <p className="text-gray-300">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;