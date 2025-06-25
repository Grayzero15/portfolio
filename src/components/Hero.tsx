import React from 'react';
import { Shield, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-cyan-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-20 animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 3D Shield Icon */}
        <div className="mb-8 inline-block transform-gpu perspective-1000">
          <div className="w-32 h-32 mx-auto mb-8 relative transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl shadow-2xl shadow-cyan-500/25 transform rotate-3"></div>
            <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <Shield className="h-16 w-16 text-cyan-500" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Alex Chen
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
          Cyber Security Expert & Ethical Hacker
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Protecting digital assets through advanced threat detection, penetration testing, and security architecture. 
          Passionate about building secure systems that defend against tomorrow's threats.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
            <ArrowDown className="inline ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;