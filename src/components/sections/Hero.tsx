"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 py-20 md:py-0" id="home">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-3">
          <p className="text-gray-300 text-lg">Hello!! This is</p>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 pb-1">
            Sangeetha V D
          </h1>
          
          <h2 className="text-xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r text-gray-300">
            Software Development Engineer
          </h2>

          <p className="text-gray-400 text-md md:text-lg max-w-xl text-justify">
          Full Stack Developer with a strong foundation in Computer Science, specializing in crafting innovative web solutions.
          Transitioned from a data engineering background to discover my true passion in software development, where I thrive in
          crafting elegant, scalable, and secure applications that solve real-world challenges. Known for my commitment to quality,
          problem-solving mindset, and a relentless drive for continuous learning and growth.
          </p>

          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com/SANGEETHA2000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github size={24} className="text-gray-300 hover:text-blue-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sangeetha-v-d-6b13471a1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={24} className="text-gray-300 hover:text-blue-400" />
            </a>
            <a 
              href="mailto:sangeetha2000.vd@gmail.com"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail size={24} className="text-gray-300 hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400 to-emerald-400 p-1">
              <div className="absolute inset-[2px] rounded-full bg-gray-900"></div>
            </div>
            
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image
                src="/profile.png" 
                alt="Sangeetha V D"
                fill
                className="object-cover"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}