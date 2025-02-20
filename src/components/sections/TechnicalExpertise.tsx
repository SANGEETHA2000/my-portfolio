"use client";

import React from 'react';
import { Database, Layout, Server, Cloud } from 'lucide-react';

const TechnicalExpertise = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "Angular", level: "Intermediate" },
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" }
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-300"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "Django", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" }
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-300"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "Microsoft SQL Server", level: "Advanced" },
        { name: "PostgreSQL", level: "Basic" },
        { name: "MySQL", level: "Intermediate" }
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300"
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS (S3, EC2, Elastic Beanstalk)", level: "Intermediate" },
        { name: "Azure", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" }
      ],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-300"
    }
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {skillCategories.map((category, index) => (
    <div
      key={index}
      className="relative bg-gray-800/30 rounded-xl p-6 group hover:bg-gray-800/50 
                 transition-all duration-500 backdrop-blur-sm border border-gray-700/50
                 hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 
                    rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 
                      transition-colors duration-300">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white 
                     transition-colors duration-300">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex} 
              className="flex items-center gap-4 p-2 rounded-lg transition-all duration-300">
            <span className="text-gray-300 font-medium flex-1">{skill.name}</span>
            <span className={`text-sm px-3 py-1 rounded-full transition-all duration-300
              ${skill.level === 'Advanced'
                ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20'
                : skill.level === 'Intermediate'
                  ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                  : 'bg-orange-400/10 text-orange-400 border border-orange-400/20'
              } hover:scale-105`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;