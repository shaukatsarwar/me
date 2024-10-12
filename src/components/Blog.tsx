import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of AI in Asset Management",
    excerpt: "Exploring how AI and machine learning are revolutionizing asset management across industries.",
    date: "2023-05-15",
    link: "#"
  },
  {
    title: "Building Scalable Cloud Architectures",
    excerpt: "Best practices for designing and implementing cloud-native applications that can handle massive growth.",
    date: "2023-04-02",
    link: "#"
  },
  {
    title: "The Role of Digital Twins in Modern Engineering",
    excerpt: "How digital twin technology is transforming product development and maintenance in various sectors.",
    date: "2023-03-10",
    link: "#"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-spotify-green">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <a href={post.link} className="inline-flex items-center text-spotify-green hover:underline">
                Read more <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center bg-spotify-green text-white px-6 py-3 rounded-full hover:bg-spotify-green-dark transition-colors">
            View all posts <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;