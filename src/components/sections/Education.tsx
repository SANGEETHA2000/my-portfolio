"use client";

import React from 'react';
import { Award, Calendar, GraduationCap, MapPin, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "PSG College Of Technology",
      location: "Coimbatore, India",
      degree: "MSc. Theoretical Computer Science",
      period: "2018 - 2023",
      grade: "CGPA: 8.99/10.00",
      icon: <GraduationCap className="w-6 h-6 text-violet-400" />
    },
    {
      institution: "Pushpalata Vidya Mandir",
      location: "Tirunelveli, India",
      degree: "XII Grade (CBSE)",
      period: "2018",
      grade: "Score: 94.80%",
      icon: <School className="w-6 h-6 text-emerald-400" />
    },
    {
      institution: "Shri Maharishi Vidya Mandir",
      location: "Dindigul, India",
      degree: "X Grade (CBSE)",
      period: "2016",
      grade: "CGPA: 10.00/10.00",
      icon: <School className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with gradient text for visual consistency */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            Academic journey and achievements
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-700"></div>
              )}
              
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-gray-800/50 
                            border-2 border-blue-400 flex items-center justify-center">
                {edu.icon}
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 ml-6 hover:bg-gray-800/50 
                            transition-all duration-300 border border-gray-700/50 
                            hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10
                            relative group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r 
                              from-blue-400 to-emerald-400 rounded-t-xl opacity-50 
                              group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col md:flex-row md:items-center 
                              md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-200 font-medium mt-1">
                      {edu.degree}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-blue-400/10 text-blue-400 
                                px-4 py-2 rounded-full border border-blue-400/20">
                    <Award size={18} />
                    <span className="font-medium">{edu.grade}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-gray-400 mt-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
};

export default Education;