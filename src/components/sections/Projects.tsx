"use client";

import React from 'react';
import { Github, ExternalLink, Shield, CheckCircle, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fortifile",
      description: "A full-stack secure file sharing application with enterprise-grade security features.",
      technologies: ["React", "Django", "Docker"],
      features: [
        "Multi-factor authentication",
        "Role-based access control",
        "End-to-end encryption (AES-256)",
        "Client-side encryption with Web Crypto API",
        "Secure shareable links with expiration"
      ],
      icon: <Shield className="w-6 h-6" />,
      github: "https://github.com/SANGEETHA2000/secure-file-share",
      live: "https://fortifile-frontend.onrender.com",
      color: "blue"
    },
    {
      title: "Certrac",
      description: "An end-to-end certificate management system for tracking SSL certificates.",
      technologies: ["MERN Stack"],
      features: [
        "SSL certificate tracking",
        "Expiry date monitoring",
        "Email notification system",
        "Dashboard analytics",
        "Automated reminders"
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      github: "https://github.com/SANGEETHA2000/certrac",
      live: "https://certrac.netlify.app/",
      color: "green"
    },
    {
      title: "SlackDroid",
      description: "An enterprise Slack chatbot powered by OpenAI's LLM API.",
      technologies: ["Node.js", "OpenAI API", "Slack API"],
      features: [
        "Stateful conversation management",
        "Contextual message history",
        "Enhanced AI responses",
        "Enterprise integration",
        "Custom command handling"
      ],
      icon: <Bot className="w-6 h-6" />,
      github: "https://github.com/SANGEETHA2000/chatbot-droid",
      live: "https://slack.com/oauth/v2/authorize?client_id=6641507106064.8465228072197&scope=app_mentions:read,calls:write,channels:history,chat:write&user_scope=",
      color: "purple"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">A selection of my most impactful technical projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <div className={`p-6 ${
                project.color === 'blue' ? 'bg-blue-50' :
                project.color === 'green' ? 'bg-green-50' :
                'bg-purple-50'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {project.icon}
                    <h3 className="text-xl font-bold ml-2">{project.title}</h3>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        project.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        project.color === 'green' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;