import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "AI-Driven Asset Management Platform",
    company: "Fieldforce Inc.",
    overview: "Developed a comprehensive asset management solution leveraging AI and machine learning.",
    solution: "Architected a scalable platform using microservices, integrating computer vision for asset identification and predictive maintenance models.",
    results: "Reduced asset downtime by 30% and improved maintenance efficiency by 25%.",
    technologies: ["AWS", "TensorFlow", "Python", "Kubernetes"]
  },
  {
    title: "Safety Gear Detection System",
    company: "Industrial Safety Solutions",
    overview: "Created an AI-powered system to detect proper use of safety gear in industrial settings.",
    solution: "Implemented a real-time computer vision model using deep learning, deployed on edge devices.",
    results: "Increased workplace safety compliance by 40% and reduced accident rates by 15%.",
    technologies: ["Azure AI", "PyTorch", "OpenCV", "Edge Computing"]
  },
  {
    title: "Telecom Network Optimization",
    company: "Global Telecom Provider",
    overview: "Optimized network performance and asset utilization for a major telecom provider.",
    solution: "Developed an AI model for predictive maintenance and network load balancing, integrated with existing telecom infrastructure.",
    results: "Improved network reliability by 20% and reduced operational costs by 15%.",
    technologies: ["AWS SageMaker", "Scala", "Apache Spark", "5G Technologies"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Featured Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.company}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-spotify-green">Overview:</h4>
                <p className="text-gray-300">{project.overview}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-spotify-green">Solution:</h4>
                <p className="text-gray-300">{project.solution}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-spotify-green">Results:</h4>
                <p className="text-gray-300">{project.results}</p>
              </div>
              <div>
                <h4 className="font-semibold text-spotify-green">Technologies:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="bg-[#1DB954] text-black px-3 py-1 rounded-full text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              {/*<a href="#" className="inline-flex items-center mt-4 text-spotify-green hover:underline">
                View Case Study <ArrowRight className="ml-2" size={16} />
              </a>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;