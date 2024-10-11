import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: "Fieldforce Inc.",
    role: "Principal Software Engineer",
    period: "Sept 2023 - Present",
    location: "Remote, Finland",
    description: [
      "Led full-stack development initiatives, ensuring seamless integration of solution architecture and project management for successful product objectives",
      "Actively working on AI services and their deployment using Azure OpenAI, Computer Vision, Amazon Bedrock, Amazon SageMaker, and Amazon Q for AI Powered system",
      "Engineered multi-functional systems using advanced project management methodologies",
      "Architected and deployed solutions on Azure and AWS cloud platforms",
      "Applied Domain Driven Design (DDD) principles to create scalable and maintainable architecture",
      "Implemented Command Query Responsibility Segregation (CQRS) to enhance system performance"
    ]
  },
  {
    company: "Fieldforce Inc.",
    role: "Principal Software Engineer",
    period: "July 2019 - Aug 2023",
    location: "Lahore, Pakistan",
    description: [
      "Ensured AWS standards compliance via the completion of the AWS Foundational Technical Review",
      "Spearheaded a 20+ member agile development team, successfully delivering product value",
      "Utilized Azure services (WebApps, WAF, Application Gateway, KeyVault) and AWS services (Elastic Beanstalk, OpenSearch, S3) for comprehensive cloud solutions",
      "Led large-scale customer integration, enhancing overall service delivery",
      "Orchestrated the migration of a legacy web application to .NET Core 6"
    ]
  },
  {
    company: "TRG - The Resource Group",
    role: "Principal Software Engineer - Full stack",
    period: "July 2017 - June 2019",
    location: "Lahore, Pakistan",
    description: [
      "Successfully deployed and managed Web APIs on the Microsoft Azure cloud platform",
      "Fostered the growth of engineering talent by employing effective mentoring strategies",
      "Formulated technical strategy and roadmap for organizational objectives",
      "Pioneered the development of an asset management system and a corrective & preventive maintenance system for the telecom industry"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-xl text-spotify-green">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300">{exp.period}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-300">
                    <ChevronRight className="mr-2 mt-1 flex-shrink-0 text-spotify-green" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;