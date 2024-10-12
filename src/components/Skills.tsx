import React from 'react';
import { Code, Cloud, Database, Cpu, GitBranch, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C#", "SQL"]
  },
  {
    title: "AI/ML Frameworks",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud Platform"]
  },
  {
    title: "DevOps Tools",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "Jenkins", "Git", "Terraform"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    title: "Methodologies",
    icon: Cpu,
    skills: ["Agile", "Scrum", "DevOps", "CI/CD", "Microservices"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md">
              <category.icon className="w-12 h-12 text-spotify-green mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-spotify-green rounded-full mr-2"></span>
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