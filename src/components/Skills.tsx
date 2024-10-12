import React from 'react';
import { Code, Cloud, Database, Shield, Briefcase, Cpu, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Artificial Intelligence",
    icon: Brain, // Use an appropriate icon for AI
    skills: [
      "Generative AI Solutions: AI assistants, content creation, and more.",
      "NLP & Computer Vision: Implement chatbots, image recognition, or language models.",
      "Custom Machine Learning Models: Scalable models using AWS SageMaker and Bedrock.",
      "Full Lifecycle Support: From design to deployment, ensuring efficiency and security.",
      "2 years of experience in AI, ML, and cloud platforms like AWS and Azure.",
      "Expertise in Generative AI, Machine Learning, and Computer Vision solutions.",
      "Timely delivery with a focus on quality and clear communication."
    ]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      "Microsoft Azure: App Services, Application Gateway, WAF, MySQL, Azure AI Services, Computer Vision, KeyVault, Load Balancer, Storage, App Insights, DNS, VNET",
      "Amazon Web Services: Elastic Beanstalk, RDB, OpenSearch, Amazon Bedrock, Amazon SageMaker, Amazon Q, CloudWatch, EC2, S3, VPC, Route53, Elastic Cache, Application Load Balancer"
    ]
  },
  {
    title: "Frameworks & Languages",
    icon: Code,
    skills: [".NET Core/Framework", "C#", "WebAPI", "MVC", "ASP.NET", "JavaScript", "Linq", "C++", "Python", "Java", "WCF", "TypeScript", "REST APIs"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MS SQL", "Oracle", "PostgreSQL", "MongoDB", "CouchDB", "Redis", "ElasticSearch"]
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["Encryption", "Access Security - RBAC", "Firewall", "Network Security"]
  },
  {
    title: "Project Management",
    icon: Briefcase,
    skills: ["Agile", "Scrum", "Jira"]
  },
  {
    title: "Miscellaneous",
    icon: Cpu,
    skills: ["PowerShell", "Adobe Flex", "ActionScript 3.0", "Git", "TFS", "SVN"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#181818] p-6 rounded-lg shadow-md">
              <category.icon className="w-12 h-12 text-spotify-green mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-spotify-green rounded-full mr-2 mt-2"></span>
                    <span>{skill}</span>
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

export default Skills;