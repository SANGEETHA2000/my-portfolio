"use client";

import React from 'react';
import { Database, Layout, Server, Cloud } from 'lucide-react';

const TechnicalExpertise = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "Angular", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "UI/UX Design", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" }
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
        { name: "Django", level: "Intermediate" },
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
        { name: "Microsoft SQL Server", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-lg text-gray-600">A comprehensive overview of my technical skills and proficiencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border-2 ${category.bgColor} ${category.borderColor} ${category.hoverColor} transition-all duration-300 ease-in-out`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-800">{skill.name}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
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