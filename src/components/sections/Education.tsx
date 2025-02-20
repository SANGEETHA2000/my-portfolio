"use client";

import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      institution: "PSG College Of Technology",
      location: "Coimbatore, India",
      degree: "MSc. Theoretical Computer Science",
      period: "2018 - 2023",
      grade: "CGPA: 8.99/10.00",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Pushpalata Vidya Mandir",
      location: "Tirunelveli, India",
      degree: "XII Grade (CBSE)",
      period: "2018",
      grade: "Score: 94.80%",
      icon: <School className="w-6 h-6" />
    },
    {
      institution: "Shri Maharishi Vidya Mandir",
      location: "Dindigul, India",
      degree: "X Grade (CBSE)",
      period: "2016",
      grade: "CGPA: 10.00/10.00",
      icon: <School className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">Academic journey and achievements</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index !== educationHistory.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              )}
              
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                {edu.icon}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ml-6 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                  <span className="text-blue-600 font-medium">{edu.period}</span>
                </div>
                
                <p className="text-gray-600 mb-2">{edu.location}</p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                  <p className="text-gray-800 font-medium">{edu.degree}</p>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.grade}
                  </span>
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