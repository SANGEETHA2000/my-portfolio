"use client";

import { Github, ExternalLink, Shield, CheckCircle, Bot } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Fortifile",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      description: "A full-stack secure file sharing application with enterprise-grade security features.",
      longDescription: "Built a full-stack application using React, Django, and Docker that enables secure file sharing with multi-factor authentication and role-based access control. Implemented end-to-end encryption using AES-256, client-side encryption with Web Crypto API, and secure shareable links with expiration.",
      techStack: ["React", "Django", "Docker"],
      github: "https://github.com/SANGEETHA2000/secure-file-share",
      live: "https://fortifile-frontend.onrender.com",
      features: [
        "Multi-factor authentication",
        "Role-based access control",
        "End-to-end encryption",
        "Secure shareable links",
        "Link expiration management"
      ]
    },
    {
      title: "Certrac",
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
      description: "An end-to-end certificate management system for tracking SSL certificates.",
      longDescription: "Designed and developed a MERN stack application to store and track SSL certificate details and expiry dates. Implemented automated email reminder system and comprehensive dashboard for certificate lifecycle management.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/SANGEETHA2000/certrac",
      live: "https://certrac.netlify.app/",
      features: [
        "SSL certificate tracking",
        "Automated email reminders",
        "Expiry monitoring",
        "Dashboard analytics",
        "User management"
      ]
    },
    {
      title: "SlackDroid",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      description: "An enterprise Slack chatbot with OpenAI's LLM API integration.",
      longDescription: "Developed an enterprise Slack chatbot featuring stateful conversation management and contextual message history for enhanced AI responses. Integrated with OpenAI's API for intelligent interactions.",
      techStack: ["Django", "OpenAI API"],
      github: "https://github.com/SANGEETHA2000/chatbot-droid",
      live: "https://slack.com/oauth/v2/authorize?client_id=6641507106064.8465228072197&scope=app_mentions:read,calls:write,channels:history,chat:write&user_scope=",
      features: [
        "Stateful conversations",
        "Contextual memory",
        "AI-powered responses",
        "Enterprise integration",
        "Custom commands"
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of my most impactful technical projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/30 rounded-xl p-6 group hover:bg-gray-800/50 
                       transition-all duration-500 backdrop-blur-sm border border-gray-700/50
                       hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 
                           rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-row items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-900/50">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3 h-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm px-3 py-1 rounded-full bg-blue-400/10 
                               text-blue-400 border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}