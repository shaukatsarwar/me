import React, {useState} from 'react';
import ExpertiseModal from './Modal'

import { 
  Brain, Code, Cloud, Radio, Users, 
  Bot, Camera, Database, Server, Globe,
  Layers, Workflow, Cpu,
  LayoutGrid, Shield, Key, Network, HardDrive, BarChart,
  CloudCog, Box, Search, Clock, Container,
  Trello
} from 'lucide-react';

const serviceIcons = {
  // AI and Machine Learning
  "Azure OpenAI": Bot,
  "Computer Vision": Camera,
  "AWS Bedrock": Database,
  "AWS SageMaker": Server,
  "Amazon Q": Globe,
  "Deployment of AI-powered systems": Cpu,

  // Software Architecture
  "Domain Driven Design (DDD)": Layers,
  "Clean Architecture": Code,
  "Command Query Responsibility Segregation (CQRS)": Workflow,

  // Cloud and DevOps
  "Microsoft Azure": Cloud,
  "App Services": LayoutGrid,
  "Azure AI Services": Bot,
  "Application Gateway": Shield,
  "WAF": Shield,
  "KeyVault": Key,
  "VNET": Network,
  "Load Balancer": HardDrive,
  "Storage": Database,
  "App Insights": BarChart,
  "AWS": CloudCog,
  "Elastic Beanstalk": Box,
  "EC2": Server,
  "S3": Database,
  "OpenSearch": Search,
  "VPC": Network,
  "Route 53": Globe,
  "CloudWatch": Clock,
  "Elastic Cache": Database,
  "RDB": Database,

  // Leadership & Team Management
  "Agile": Workflow,
  "Scrum": Users,
  "Jira": Trello,

  // Default icon for unmatched services
  "default": Container
};

const expertiseCategories = [
  {
    title: "AI and Machine Learning",
    icon: Brain,
    description: "Expertise in developing AI models for safety gear detection, asset management, and digital twins.",
    link: "#ai-projects",
    details: {
      "AI Services": [
        "Azure OpenAI", "Computer Vision", "AWS Bedrock", "AWS SageMaker", "Amazon Q", "Deployment of AI-powered systems"
      ]
    },
    detailsIcons: [serviceIcons['Azure AI Services'], 
                    serviceIcons['Computer Vision'],
                    serviceIcons['AWS Bedrock'], serviceIcons['AWS SageMaker'],
                    serviceIcons['Amazon Q'], serviceIcons['Deployment of AI-powered systems']
                  ]
  },
  {
    title: "Software Architecture",
    icon: Code,
    description: "Led the design and implementation of a multi-quarter AI-driven asset management platform.",
    link: "#architecture-projects",
    details: {
      "Architectural & Design Principles": [
        "Domain Driven Design (DDD)", "Clean Architecture", "Command Query Responsibility Segregation (CQRS)"
      ]
    },
    detailsIcons: [serviceIcons['Clean Architecture'], serviceIcons['Domain Driven Design (DDD)'],
                    serviceIcons['Command Query Responsibility Segregation (CQRS)']]
  },
  {
    title: "Cloud and DevOps",
    icon: Cloud,
    description: "AWS cloud consultation services, expertise in Docker, Kubernetes, EKS, and CI/CD pipelines.",
    link: "#cloud-projects",
    details: {
      "Microsoft Azure": [
        "App Services", "Azure AI Services", "Application Gateway", "WAF", "KeyVault", "VNET", "Load Balancer", "Storage", "App Insights"
      ],
      "AWS": [
        "Amazon Bedrock", "SageMaker", "Q", "Elastic Beanstalk", "EC2", "S3", "OpenSearch", "VPC", "Route 53", "CloudWatch", "Elastic Cache", "RDB"
      ]
    },
    detailsIcons: [serviceIcons['Azure AI Services'], serviceIcons['Microsoft Azure'],
                    serviceIcons['App Services'], serviceIcons['Azure AI Services'],
                    serviceIcons['Application Gateway'], serviceIcons.WAF,
                    serviceIcons.KeyVault, serviceIcons.VNET, serviceIcons['Load Balancer'], 
                    serviceIcons['App Insights'], serviceIcons.Storage,
                    serviceIcons.AWS, serviceIcons['AWS Bedrock'], serviceIcons['AWS SageMaker'],
                    serviceIcons['Amazon Q'], serviceIcons['Elastic Beanstalk'], serviceIcons.EC2,
                    serviceIcons.S3, serviceIcons.OpenSearch, serviceIcons.VPC, serviceIcons['Route 53'],
                    serviceIcons.CloudWatch, serviceIcons['Elastic Cache'], serviceIcons.RDB
                  
                  ]
  },
  {
    title: "Telecom Industry Experience",
    icon: Radio,
    description: "Developed asset tracking systems and collaborated with field engineers for network optimization.",
    link: "#telecom-projects",
    details: {
      "Details about telecom industry experience": [
        "Domain Driven Design (DDD)", "Clean Architecture", "Command Query Responsibility Segregation (CQRS)"
      ]
    },
    detailsIcons: [serviceIcons.AWS, serviceIcons['Microsoft Azure']]
  },
  {
    title: "Leadership & Team Management",
    icon: Users,
    description: "Managed a 5-year AI-experienced team, mentored junior developers, and scaled engineering teams.",
    link: "#leadership",
    details: {
      "Project Management": [
        "Agile", "Scrum", "Jira"
      ]
    },    
    detailsIcons: [serviceIcons.Jira, serviceIcons.Scrum, serviceIcons.Agile]
  }
];

const CoreExpertise: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="expertise" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCategories.map((category, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <category.icon className="w-12 h-12 text-spotify-green mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <button onClick={() => openModal(category)} className="text-spotify-green hover:underline">Learn more</button>
            </div>
          ))}
        </div>
      </div>
      {selectedCategory && (
        <ExpertiseModal
          isOpen={!!selectedCategory}
          onClose={closeModal}
          title={selectedCategory.title}
          icon={selectedCategory.icon}
          description={selectedCategory.description}
          details={selectedCategory.details}
          detailsIcons={selectedCategory.detailsIcons}
          renderDetails={() => (
            <div>
              {Object.entries(selectedCategory.details).map(([section, items], index) => (
                <div key={index} className="mt-4">
                  <h5 className="text-md font-semibold text-white">{section}:</h5>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {items.map((item, idx) => (
                      <span key={idx} className="bg-spotify-green text-black px-2 py-1 rounded-full text-sm">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      )}
    </section>
  );
};

export default CoreExpertise;