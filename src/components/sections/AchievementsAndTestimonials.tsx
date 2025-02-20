"use client";

import React, { useState } from 'react';
import { Trophy, Users, Star, MessageSquare } from 'lucide-react';

const AchievementsAndTestimonials = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      title: "Thorogood Star and Passion Awards",
      period: "2021-2024",
      description: "Consistent recipient of multiple awards for delivering high-quality solutions, outstanding project ownership and effective team collaboration.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      color: "bg-yellow-50"
    },
    {
      title: "Quality Assurance Lead - LOGIN 2022",
      description: "Led Quality Assurance team for an international symposium hosting 200+ participants. Ensured exceptional quality from banners to questionnaires, enforcing event success.",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Martial Arts Club Leadership",
      description: "Organized women's self-defense camp within the Martial Arts Club of PSG Tech, demonstrating leadership and community engagement.",
      icon: <Star className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-50"
    }
  ];
  // Will replace these with real ones later
  const testimonials: {
    name: string;
    role: string; 
    content: string;
    avatar: string;
  }[] = [
    // {
    //   name: "",
    //   role: "",
    //   content: "",
    //   avatar: ""
    // }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Leadership</h2>
          <p className="text-lg text-gray-600">Recognition and impact in professional and academic environments</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'achievements'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Achievements & Leadership
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'testimonials'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 ${achievement.color}`}
              >
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-white">
                    {achievement.icon}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                    </div>
                    {achievement.period && (
                      <p className="text-sm text-gray-500 mt-1">{achievement.period}</p>
                    )}
                    <p className="mt-2 text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                        {testimonial.avatar}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-600 italic">"{testimonial.content}"</p>
                      <div className="mt-4">
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Testimonials Coming Soon</h3>
                <p className="text-gray-500 mt-2">Check back later for testimonials from colleagues and collaborators.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsAndTestimonials;