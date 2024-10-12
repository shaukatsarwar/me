import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { FaReact, FaNodeJs, FaAws, FaDatabase } from 'react-icons/fa';

const experiences = [
  {
    company: "Fieldforce Inc.",
    role: "Principal Software Engineer",
    url: "https://getfieldforce.com",
    period: "Sept 2023 - Present",
    location: "Remote, Finland",
    description: [
      "Led full-stack development initiatives, ensuring seamless integration of solution architecture and project management for successful product objectives",
      "Actively working on AI services and their deployment using Azure OpenAI, Computer Vision, Amazon Bedrock, Amazon SageMaker, and Amazon Q for AI Powered system",
      "Engineered multi-functional systems using advanced project management methodologies",
      "Architected and deployed solutions on Azure and AWS cloud platforms",
      "Applied Domain Driven Design (DDD) principles to create scalable and maintainable architecture",
      "Implemented Command Query Responsibility Segregation (CQRS) to enhance system performance"
    ],
    icons: [<FaReact />, <FaNodeJs />, <FaAws />, <FaDatabase /> ]
  },
  {
    company: "Fieldforce Inc.",
    role: "Principal Software Engineer",
    url: "https://getfieldforce.com",
    period: "July 2019 - Aug 2023",
    location: "Lahore, Pakistan",
    description: [
      "Ensured AWS standards compliance via the completion of the AWS Foundational Technical Review",
      "Spearheaded a 20+ member agile development team, successfully delivering product value",
      "Utilized Azure services (WebApps, WAF, Application Gateway, KeyVault) and AWS services (Elastic Beanstalk, OpenSearch, S3) for comprehensive cloud solutions",
      "Led large-scale customer integration, enhancing overall service delivery",
      "Orchestrated the migration of a legacy web application to .NET Core 6"
    ],
    icons: [<FaReact />, <FaNodeJs />, <FaAws />, <FaDatabase />]
  },
  {
    company: "TRG - The Resource Group",
    role: "Principal Software Engineer - Full stack",
    url: "https://trgworld.com",
    period: "July 2017 - June 2019",
    location: "Lahore, Pakistan",
    description: [
      "Successfully deployed and managed Web APIs on the Microsoft Azure cloud platform",
      "Fostered the growth of engineering talent by employing effective mentoring strategies",
      "Formulated technical strategy and roadmap for organizational objectives",
      "Pioneered the development of an asset management system and a corrective & preventive maintenance system for the telecom industry"
    ],
    icons: [<FaReact />, <FaNodeJs />, <FaAws />, <FaDatabase />]
  },
  {
    company: "TRG – The Resource Group",
    url: "http://www.trgworld.com",
    role: "Senior Software Engineer – Full stack",
    period: "Oct 2014 – June 2017",
    location: "Lahore, Pakistan",
    description: [
      "Engineered a web application to automate field processes within the telecom industry",
      "Designed and developed numerous WCF Services catering to both mobile and web applications",
      "Implemented master-master replication among MySQL servers and structured the code for efficient load balancing",
      "Successfully hosted the application on the Microsoft Azure Cloud"
    ],
    icons: [<FaReact />, <FaNodeJs />, <FaAws />, <FaDatabase />]
  },
  {
    company: "Intagleo Systems",
    role: "Senior Software Engineer",
    url: "https://intagleo.co.uk",
    period: "Jan 2013 – May 2014",
    location: "Lahore, Pakistan",
    description: [
      "Handled multiple clients of digitalsignage",
      "Architected major modules of digitalsignage (Player, Layout Designer, Android Application)",
      "Created web version of an existing desktop application in Adobe Flex",
      "Created Android player in Adobe AIR",
      "Created a composer, it provides creative control over content layout, allowing screening segmentation and the ability to show multiple media on one screen",
      "Deployed and was responsible for application launch"
    ],
    icons: [<FaReact />, <FaNodeJs />, <FaAws />, <FaDatabase />]
  },
  {
    company: "Intagleo Systems",
    role: "Software Engineer",
    url: "https://intagleo.co.uk",
    period: "Dec 2009 – Dec 2012",
    location: "Lahore, Pakistan",
    description: [
      "Developed a web interface for a digitalsignage application using ASP.NET",
      "Designed a desktop-based application for digitalsignage, facilitating the management of displayed content and messages on electronic screens",
      "Engineered a playlist composer to enhance content organization",
      "Deployed and published the application on Microsoft Azure for seamless accessibility"
    ],
    icons: [<FaReact />, <FaNodeJs />, <FaAws />, <FaDatabase />]
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
                  
                  <p className="text-xl text-spotify-green">
                    <a href={exp.url} target="_blank" rel="noopener noreferrer">
                      {exp.company}
                    </a>
                  </p>
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
              <div className="flex space-x-2 mt-4">
                {exp.icons.map((Icon, iconIndex) => (
                  <span key={iconIndex} className="text-spotify-green">
                    {Icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;