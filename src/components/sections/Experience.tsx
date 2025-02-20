"use client";

import React from 'react';
import { Building2, BriefcaseIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Software Development Engineer",
      company: "Self-Employed",
      location: "Bangalore, India",
      period: "Dec 2024 - Present",
      projects: [
        {
          name: "1Checkout",
          description: "Building a scalable one-place secure payment checkout gateway using Next.js, Express, and MongoDB, featuring dynamic currency handling (USD/INR) and integration with 5+ payment providers."
        },
        {
          name: "BoxBuilder Pro",
          description: "Developing a comprehensive MERN stack application for a formwork manufacturing company. Implemented dynamic pricing system based on material specifications, and automated quote generation system, reducing manual calculation and quote preparation time by 80%."
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "Thorogood Associates",
      location: "Bangalore, India",
      period: "Jun 2023 - Sep 2024",
      projects: [
        {
          name: "Management Information & Planning System",
          description: "Led successful migration of a web app from Angular 7 to 15, vital for consultants' adept management and planning, improving performance by 40% and reducing load time by 2 seconds. Architected and implemented a dynamic form processing system using Angular and Django, reducing form creation time by 60% and supporting 10+ unique form field types."
        },
        {
          name: "Unified Data Platform",
          description: "Developed a user-friendly data governance product using Python for a world-leading consumer healthcare firm. Streamlined processes by allowing inputs via Excel sheets and implemented automated testing suite with PyTest, achieving 90% code coverage."
        }
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "Thorogood Associates",
      location: "Bangalore, India",
      period: "Dec 2022 - May 2023 | Jun 2022 - Jul 2022 | Jun 2021 - Dec 2021",
      achievements: [
        "Architected and implemented data ingestion frameworks for multiple Fortune 500 clients, resulting in 100% accurate datasets and a 25% revenue surplus through early project completion.",
        "Led complex data transformation initiatives across Thai and Indonesian markets, developing automated validation pipelines that improved ROI by 10% through advanced business metrics analysis."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">My journey in software development so far!</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="mt-1 text-gray-500">
                    <BriefcaseIcon className="w-4 h-4 inline mr-2" />
                    {exp.period}
                  </div>
                </div>
              </div>

              {exp.projects && (
                <div className="space-y-4 mt-4">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-gray-50 p-4 rounded-md">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                        {project.name}
                      </h4>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {exp.achievements && (
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;