import React, {useState, useRef, useEffect} from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    "title": "AI-Driven Asset Management Platform",
    "company": "Fieldforce Inc.",
    "overview": "Developed a cutting-edge, comprehensive asset management solution leveraging artificial intelligence and machine learning technologies. The platform was designed to revolutionize how large-scale industrial clients monitor, maintain, and optimize their critical assets across multiple locations.",
    "solution": [
      "Architected a highly scalable and resilient platform using a microservices architecture, ensuring modularity and ease of future enhancements.",
      "Integrated advanced computer vision algorithms for real-time asset identification and condition assessment, significantly reducing manual inspection needs.",
      "Implemented sophisticated predictive maintenance models using machine learning, incorporating historical data, IoT sensor inputs, and environmental factors to forecast potential equipment failures.",
      "Designed a user-friendly dashboard for real-time monitoring and actionable insights, enabling proactive decision-making.",
      "Utilized AWS services for cloud infrastructure, ensuring high availability and scalability."
    ],
    "results": [
      "Reduced asset downtime by 30%, translating to millions in saved revenue for clients.",
      "Improved maintenance efficiency by 25%, optimizing resource allocation and reducing unnecessary maintenance activities.",
      "Increased asset lifespan by an average of 15% through timely interventions and optimized usage patterns.",
      "Achieved a 99.99% uptime for the platform, ensuring consistent access to critical asset data."
    ],
    "technologies": ["AWS (EC2, S3, Lambda)", "TensorFlow", "Python", "Kubernetes", "Docker", "Redis", "PostgreSQL"]
  },
  {
    "title": "Safety Gear Detection System",
    "company": "Fieldforce Inc.",
    "overview": "Created an innovative AI-powered system to detect and ensure proper use of safety gear in high-risk industrial environments. This solution addressed the critical challenge of maintaining workplace safety compliance in real-time, potentially saving lives and reducing workplace injuries.",
    "solution": [
      "Implemented a state-of-the-art real-time computer vision model using deep learning techniques, capable of identifying multiple types of safety gear (helmets, goggles, gloves, etc.) with high accuracy.",
      "Developed a custom-trained convolutional neural network (CNN) that could operate effectively in various lighting conditions and angles.",
      "Deployed the system on edge devices strategically placed throughout industrial facilities, enabling real-time processing without network latency.",
      "Integrated an alert system that could instantly notify safety officers of non-compliance events via mobile apps and control room dashboards.",
      "Implemented a data analytics module to track compliance trends and identify areas for safety improvements."
    ],
    "results": [
      "Increased workplace safety compliance by 40%, significantly reducing the risk of accidents and potential legal liabilities.",
      "Reduced accident rates by 15% within the first six months of deployment, directly contributing to a safer work environment.",
      "Achieved a 98% accuracy rate in safety gear detection across various industrial settings.",
      "Decreased manual safety checks by 60%, allowing safety officers to focus on more strategic safety initiatives.",
      "Generated comprehensive safety reports, facilitating data-driven decision-making for safety protocols and training programs."
    ],
    "technologies": ["Azure AI", "PyTorch", "OpenCV", "Edge Computing (NVIDIA Jetson)", "React Native (for mobile alerts)", "Power BI (for analytics dashboard)"]
  },
  {
    "title": "Telecom Network Optimization",
    "company": "Global Telecom Provider",
    "overview": "Optimized network performance and asset utilization for a major telecom provider serving over 50 million customers. The project aimed to enhance network reliability, reduce operational costs, and improve customer satisfaction in an increasingly competitive market.",
    "solution": [
      "Developed a sophisticated AI model for predictive maintenance, leveraging machine learning algorithms to analyze vast amounts of network data and identify potential failures before they occur.",
      "Created a dynamic network load balancing system that uses real-time data and historical patterns to optimize traffic distribution across the network.",
      "Integrated the AI solutions seamlessly with existing telecom infrastructure, ensuring minimal disruption to ongoing operations.",
      "Implemented a scalable data pipeline using Apache Spark to process and analyze terabytes of network data in near real-time.",
      "Utilized AWS SageMaker for model training and deployment, enabling rapid iteration and improvement of AI models."
    ],
    "results": [
      "Improved network reliability by 20%, significantly enhancing customer experience and reducing churn rate.",
      "Reduced operational costs by 15% through more efficient resource allocation and preventive maintenance.",
      "Increased network capacity utilization by 25% without additional hardware investments.",
      "Decreased average problem resolution time by 30% due to early detection and precise diagnostics.",
      "Enabled the launch of new 5G services with 99.999% reliability, positioning the company as a market leader."
    ],
    "technologies": ["AWS SageMaker", "Scala", "Apache Spark", "5G Technologies", "Kafka", "Elasticsearch", "Grafana (for visualizations)"]
  },
  {
    "title": "SaaS Based Digital Signage Web Application",
    "company": "Intagleo",
    "overview": "Developed a cutting-edge Software-as-a-Service (SaaS) digital signage web application, revolutionizing out-of-home advertising by enabling dynamic content management and display across a network of electronic screens. This solution allowed businesses to deliver targeted messages to specific locations at precise times, enhancing engagement and advertising effectiveness.",
    "solution": [
      "Architected a robust, scalable platform leveraging Amazon Web Services (AWS) for hosting, ensuring high availability and performance.",
      "Implemented a hybrid cloud storage solution, utilizing Azure S3 for content storage, providing redundancy and fast content delivery.",
      "Designed an intuitive main interface using Adobe Flex, offering a rich, responsive user experience for content management.",
      "Developed a powerful backend using RESTful WCF services in C# and .NET Framework 4.0, enabling seamless communication between the front-end and server.",
      "Utilized MySQL Server 5.1 for efficient data management and LLBLGen Pro for object-relational mapping, optimizing database operations.",
      "Incorporated SMIL (Synchronized Multimedia Integration Language) for creating and managing interactive multimedia presentations."
    ],
    "results": [
      "Enabled clients to deliver highly targeted messages to specific locations at optimal times, increasing advertising effectiveness by up to 40%.",
      "Reduced content update time by 75%, allowing for near real-time modifications across the entire signage network.",
      "Achieved a 99.9% uptime, ensuring consistent content delivery and minimizing revenue loss from screen downtime.",
      "Increased client base by 150% within the first year of launch due to the platform's ease of use and powerful features.",
      "Facilitated a 30% increase in average viewer engagement time, as reported by client feedback and analytics."
    ],
    "technologies": ["AWS", "Azure S3", "Adobe Flex", "C#", ".NET Framework 4.0", "MySQL Server 5.1", "LLBLGen Pro", "RESTful WCF", "SMIL"]
  },
  {
    "title": "SaaS Based Digital Signage Application for Cloud Computing",
    "company": "Intagleo",
    "overview": "Developed an advanced SaaS-based digital signage application optimized for cloud computing environments, specifically leveraging Microsoft Azure. This solution addressed the growing need for scalable, reliable, and efficient content management and synchronization in the digital signage industry.",
    "solution": [
      "Leveraged Azure cloud services to host the application, ensuring high availability, scalability, and global reach.",
      "Implemented a sophisticated content storage system using Azure Blob storage, providing a cost-effective and scalable solution for managing large volumes of multimedia content.",
      "Utilized Microsoft Sync Framework 2.0 to develop a robust synchronization mechanism, ensuring seamless content updates across both client and server storage systems.",
      "Designed and implemented a high-performance backend using C# and Microsoft SQL Server 2008 R2, optimizing data management and retrieval.",
      "Integrated SMIL for creating dynamic and interactive content presentations, enhancing the visual appeal and effectiveness of digital signage displays.",
      "Developed a responsive and intuitive user interface using Telerik ASP.NET Ajax Controls, providing a smooth user experience for content managers."
    ],
    "results": [
      "Achieved near real-time content synchronization across diverse platforms, reducing update latency by 90% compared to traditional methods.",
      "Increased system reliability to 99.99%, minimizing content delivery disruptions and enhancing client satisfaction.",
      "Reduced infrastructure costs for clients by 40% through efficient use of cloud resources and optimized content delivery.",
      "Enabled seamless scaling of the platform, supporting a 300% increase in client base without performance degradation.",
      "Improved content manager productivity by 50% through the intuitive UI and efficient synchronization processes."
    ],
    "technologies": ["Azure", "Microsoft Sync Framework 2.0", "Microsoft SQL Server 2008 R2", "C#", "SMIL", "Telerik ASP.NET Ajax Controls"]
  },
  {
    "title": "Digital Signage (Web Application)",
    "company": "Intagleo",
    "overview": "Developed a streamlined and interactive web-based digital signage application, hosted on Amazon EC2. This project aimed to provide a user-friendly, yet powerful solution for businesses looking to manage and deploy digital signage content across various displays efficiently.",
    "solution": [
      "Leveraged Amazon EC2 for hosting, ensuring scalability and reliability of the application.",
      "Developed an engaging and intuitive web UI using Adobe Flex and Adobe Flash Catalyst, providing a rich interactive experience for content managers.",
      "Created a robust player-side application using Adobe AIR, enabling smooth content playback across various devices and platforms.",
      "Implemented a secure and efficient backend using ADO.NET and SQL Server 2005, ensuring fast data retrieval and content management.",
      "Designed a RESTful API to facilitate seamless communication between the web interface, backend services, and player applications."
    ],
    "results": [
      "Reduced content deployment time by 60%, allowing for rapid updates across all connected displays.",
      "Increased user adoption rate by 40% due to the intuitive and interactive UI design.",
      "Achieved a 25% reduction in training time for new users compared to competitor solutions.",
      "Enabled clients to manage up to 500 displays from a single interface without performance degradation.",
      "Facilitated a 30% increase in audience engagement through interactive content capabilities."
    ],
    "technologies": ["Amazon EC2", "Adobe Flex", "Adobe Flash Catalyst", "Adobe AIR", "ADO.NET", "SQL Server 2005"]
  },
  {
    "title": "Digital Signage (Desktop Application)",
    "company": "Intagleo",
    "overview": "Developed a powerful desktop application for managing digital signage content, catering to businesses requiring a robust, offline-capable solution for content creation, scheduling, and management.",
    "solution": [
      "Designed and implemented a feature-rich desktop application using C# and VB.NET, providing a responsive and intuitive user interface.",
      "Utilized ADO.NET for efficient data access and management, ensuring smooth interaction with the underlying SQL Server 2005 database.",
      "Implemented advanced content scheduling algorithms, allowing for complex, time-based content rotation and targeting.",
      "Developed a local caching mechanism to enable offline content creation and management, with seamless synchronization once network connectivity is restored.",
      "Integrated support for various media formats, including videos, images, and real-time data feeds, expanding the versatility of content creation."
    ],
    "results": [
      "Increased content management efficiency by 45% through intuitive UI design and streamlined workflows.",
      "Reduced downtime due to network issues by 80% with the offline capability feature.",
      "Enabled clients to manage 50% more displays per content manager compared to previous solutions.",
      "Achieved a 99% client retention rate due to the application's reliability and feature set.",
      "Facilitated a 35% increase in content variety and freshness, as reported by client feedback."
    ],
    "technologies": ["ADO.NET", "SQL Server 2005", "C#", "VB.NET"]
  },
  {
    "title": "Composer (Desktop Application)",
    "company": "Intagleo",
    "overview": "Developed a specialized desktop application called 'Composer' that provides unprecedented creative control over digital signage content layout and screen segmentation. This tool was designed to empower content creators and marketers to design complex, multi-zone layouts for various digital signage scenarios.",
    "solution": [
      "Engineered a powerful and intuitive desktop application using C# and VB.NET, focusing on user experience and creative flexibility.",
      "Implemented a drag-and-drop interface for easy screen segmentation and content placement.",
      "Developed a robust rendering engine capable of previewing complex layouts in real-time.",
      "Utilized ADO.NET for efficient data management and SQL Server 2005 for secure storage of layouts and content metadata.",
      "Integrated support for dynamic content sources, allowing users to incorporate live data feeds, social media streams, and RSS feeds into their layouts.",
      "Implemented an advanced scheduling system, enabling time-based layout changes and content rotation."
    ],
    "results": [
      "Reduced layout design time by 60%, allowing for rapid creation and iteration of complex digital signage layouts.",
      "Increased the average number of content zones per display by 40%, maximizing screen real estate utilization.",
      "Enabled clients to create 30% more engaging content, as measured by viewer interaction and recall rates.",
      "Facilitated a 25% increase in advertising revenue for clients due to more effective use of screen space.",
      "Achieved a 95% user satisfaction rate among content designers and marketing teams."
    ],
    "technologies": ["ADO.NET", "SQL Server 2005", "C#", "VB.NET", "DirectX (for advanced rendering)"]
  },
  {
    "title": "Web Application for Digital Signage (Silverlight)",
    "company": "Intagleo",
    "overview": "Developed a cutting-edge web application for digital signage management using Microsoft Silverlight, providing a rich, interactive interface accessible through web browsers. This project aimed to combine the power of desktop applications with the accessibility of web-based solutions.",
    "solution": [
      "Leveraged Silverlight 2.0 to create a feature-rich, cross-browser compatible web application with near-native performance.",
      "Utilized Expression Blend 2 for designing an intuitive and visually appealing user interface, enhancing user experience and productivity.",
      "Implemented the application using C# and VB.NET within the Microsoft .NET Framework 3.X, ensuring robust backend functionality and scalability.",
      "Developed a custom content preview engine, allowing users to see real-time representations of their digital signage layouts.",
      "Integrated advanced data binding and asynchronous communication techniques to ensure responsive performance even with large datasets.",
      "Implemented a plugin architecture, allowing for easy extension of functionality and integration with various content sources and display technologies."
    ],
    "results": [
      "Achieved a 50% reduction in client onboarding time due to the familiar web-based interface and intuitive design.",
      "Increased remote management capabilities by 100%, allowing content updates from any location with internet access.",
      "Reduced infrastructure costs for clients by 30% by eliminating the need for specialized software installation.",
      "Enabled seamless collaboration between team members, increasing content approval efficiency by 40%.",
      "Facilitated a 25% increase in content update frequency, leading to more dynamic and engaging digital signage displays."
    ],
    "technologies": ["Silverlight 2.0", "Expression Blend 2", "Microsoft .NET Framework 3.X", "C#", "VB.NET"]
  }
];

const Projects: React.FC = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleProjectDetails = (index: number) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = expandedProjectIndex === index ? `${ref.scrollHeight}px` : '0px';
        ref.style.overflow = 'hidden'; // Ensure content doesn't overflow
      }
    });
  }, [expandedProjectIndex]);

  return (
    <section id="projects" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Featured Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-white cursor-pointer" onClick={() => toggleProjectDetails(index)}>
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.company}</p>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-all duration-300 ease-in-out ${expandedProjectIndex === index ? 'expanded' : 'collapsed'}`}
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-spotify-green">Overview:</h4>
                  <p className="text-gray-300">{project.overview}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-spotify-green">Solution:</h4>
                  <ul className="text-gray-300 list-disc pl-5">
                    {project.solution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-spotify-green">Results:</h4>
                  <ul className="text-gray-300 list-disc pl-5">
                    {project.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-spotify-green">Technologies:</h4>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="bg-[#4353ff] text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;