import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Andrew Walsh",
    position: "Director, Dynamax Technical Services Ltd",
    content: "Shaukat`s provided excellent service with great organisation of projects and tasks. He had a great attention to detail to ensure that software projects where fully tested prior to release maintaining Excellent quality control. Working with Shaukat on a daily business, he provided excellent ideas and intelligent feedback on product design and architecture. His knowledge of software technologies and technics where vital to ensuring that Dynamax had a robust and feature rich product"
  },
  {
    name: "Waqar Ahmad",
    position: "Development Manager at Arrow Labs FZC - LLC",
    content: "Shaukat is an excellent resource for all challenges in development and designing. He has put his all efforts to develop a product according to the requirement. His solutions are technically strong to develop the project"
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