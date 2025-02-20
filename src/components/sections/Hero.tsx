import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I am Sangeetha V D
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Software Development Engineer specializing in Full Stack Development
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/SANGEETHA2000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sangeetha-v-d-6b13471a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sangeetha2000.vd@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="tel:+919487884363"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Phone size={20} />
            <span>Call</span>
          </a>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700">
            Experienced Software Engineer with expertise in full-stack development,
            specializing in React, Angular, Node.js, and cloud technologies.
            Currently working as a Freelance Software Development Engineer in Bangalore,
            with a proven track record of delivering scalable solutions and improving
            system performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;