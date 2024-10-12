import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import CoreExpertise from './components/CoreExpertise';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main>
        <Introduction />
        <CoreExpertise />
        <Projects />
        <Skills />
        <Experience />
        {/*<Certifications />*/}
        <Testimonials />
        {/*<Blog />*/}
      </main>
      <Footer />
    </div>
  );
}

export default App;