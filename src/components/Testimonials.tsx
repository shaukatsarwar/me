import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    position: "CTO, Tech Innovators Inc.",
    content: "Shaukat's expertise in AI and cloud architecture transformed our asset management system. His leadership and technical skills are truly exceptional."
  },
  {
    name: "Jane Smith",
    position: "Project Manager, Global Telecom",
    content: "Working with Shaukat on our network optimization project was a game-changer. His innovative approaches and deep understanding of telecom infrastructure led to significant improvements."
  },
  {
    name: "Alex Johnson",
    position: "CEO, AI Solutions Co.",
    content: "Shaukat's ability to translate complex AI concepts into practical business solutions is remarkable. His work on our computer vision project exceeded all expectations."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md">
              <Quote className="w-12 h-12 text-spotify-green mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;