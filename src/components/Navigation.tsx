import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Topic {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface NavigationProps {
  topics: Topic[];
  activeTopic: string;
  setActiveTopic: (topic: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ topics, activeTopic, setActiveTopic }) => {
  return (
    <nav className="w-64 bg-white p-6 shadow-md">
      <ul>
        {topics.map((topic) => (
          <li key={topic.id} className="mb-2">
            <button
              onClick={() => setActiveTopic(topic.id)}
              className={`w-full text-left p-2 rounded flex items-center ${
                activeTopic === topic.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <topic.icon className="mr-2" size={18} />
              {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;