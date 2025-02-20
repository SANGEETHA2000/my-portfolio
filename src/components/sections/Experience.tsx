"use client";

import { Building2, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Software Development Engineer",
      company: "Self-Employed",
      location: "Bangalore, India",
      period: "Dec 2024 - Present",
      projects: [
        {
          name: "1Checkout",
          description: "Building a scalable one-place secure payment checkout gateway using Next.js, Express, and MongoDB, featuring dynamic currency handling (USD/INR) and integration with 5+ payment providers.",
          tech: ["Next.js", "Express", "MongoDB"]
        },
        {
          name: "BoxBuilder Pro",
          description: "Developing a comprehensive MERN stack application for a formwork manufacturing company. Implemented dynamic pricing system based on material specifications, and automated quote generation system, reducing manual calculation and quote preparation time by 80%.",
          tech: ["React", "Node.js", "Express", "MongoDB"]
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
          description: "Led successful migration of a web app from Angular 7 to 15, vital for consultants' adept management and planning, improving performance by 40% and reducing load time by 2 seconds. Architected and implemented a dynamic form processing system using Angular and Django.",
          tech: ["Angular", "Django", "Microsoft SSMS", "CI/CD Pipelines"]
        },
        {
          name: "Unified Data Platform",
          description: "Developed a user-friendly data governance product using Python for a world-leading consumer healthcare firm. Streamlined processes and implemented automated testing suite with PyTest, achieving 90% code coverage.",
          tech: ["Python", "PyTest", "Azure"]
        }
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "Thorogood Associates",
      location: "Bangalore, India",
      period: "Dec 2022 - May 2023 | Jun 2022 - Jul 2022 | Jun 2021 - Dec 2021",
      projects: [
        {
          name: "ETL Systems",
          description: "Architected and implemented data ingestion frameworks for multiple Fortune 500 clients, resulting in 100% accurate datasets and a 25% revenue surplus through early project completion. Led complex data transformation initiatives across Thai and Indonesian markets, developing automated validation pipelines that improved ROI by 10% through advanced business metrics analysis.",
          tech: ["PySpark", "SQL", "ADF", "ADB", "PBI"]  
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey in software development engineering
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative bg-gray-800/30 rounded-xl p-8 group hover:bg-gray-800/50 
                        transition-all duration-500 backdrop-blur-sm border border-gray-700/50
                        hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 
                           rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {experience.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 
                             transition-all duration-300 group/project"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-gray-200 flex items-center gap-2">
                        {project.name}
                      </h4>
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}