"use client";

import React, { useState } from 'react';
import { Trophy, Users, Star, MessageSquare } from 'lucide-react';

export default function AchievementsAndTestimonials() {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      title: "Thorogood Star and Passion Awards",
      period: "2021-2024",
      description: "Consistent recipient of multiple awards for delivering high-quality solutions, outstanding project ownership and effective team collaboration.",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-400/10 to-yellow-400/5"
    },
    {
      title: "Quality Assurance Lead - LOGIN 2022",
      description: "Led Quality Assurance team for an international symposium hosting 200+ participants. Ensured exceptional quality from banners to questionnaires, enforcing event success.",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      color: "from-blue-400/10 to-blue-400/5"
    },
    {
      title: "Martial Arts Club Leadership",
      description: "Organized women's self-defense camp within the Martial Arts Club of PSG Tech, demonstrating leadership and community engagement.",
      icon: <Star className="w-6 h-6 text-purple-400" />,
      color: "from-purple-400/10 to-purple-400/5"
    }
  ];
  const testimonials: {
    name: string;
    role: string;
    content: string;
    avatar: string;
    colorScheme: string;
  }[] = [];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Achievements & Leadership
          </h2>
          <p className="text-gray-400 text-lg">
            Recognition and impact in professional and academic environments
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-800/30 p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'achievements'
                  ? 'bg-gradient-to-r from-blue-400/10 to-emerald-400/10 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Achievements & Leadership
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-to-r from-blue-400/10 to-emerald-400/10 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-300'
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
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/50 
                         transition-all duration-500 backdrop-blur-sm border border-gray-700/50
                         hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10
                         relative group"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 
                             rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gray-900/50">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    {achievement.period && (
                      <p className="text-sm text-gray-400 mb-2">{achievement.period}</p>
                    )}
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'testimonials' && (
        <div className="space-y-12">
            {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
                <div 
                key={index}
                className="bg-gray-800/30 rounded-xl p-8 hover:bg-gray-800/50 
                        transition-all duration-500 backdrop-blur-sm border border-gray-700/50
                        hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10
                        relative group"
                >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 
                            rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.colorScheme} 
                                flex items-center justify-center text-white text-xl font-semibold
                                shadow-lg`}>
                        {testimonial.avatar}
                    </div>
                    <div className="mt-4 text-center md:text-left">
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                    </div>

                    <div className="flex-1">
                    <div className="relative">
                        <svg
                        className="absolute -top-4 -left-4 h-8 w-8 text-gray-600 transform -rotate-6"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        
                        <p className="text-gray-300 leading-relaxed italic relative z-10 pl-6">
                        &quot;{testimonial.content}&quot;
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            ))
            ) : (
            <div className="col-span-full text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white">Testimonials Coming Soon</h3>
                <p className="text-gray-400 mt-2">
                Check back later for testimonials from colleagues and collaborators.
                </p>
            </div>
            )}
        </div>
)}
      </div>
    </section>
  );
}