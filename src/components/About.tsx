import React from 'react';
import { User, Award, BookOpen, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Target, label: 'Projects Completed', value: '150+' },
    { icon: BookOpen, label: 'Certifications', value: '12' },
    { icon: User, label: 'Clients Served', value: '50+' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* 3D Frame Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl transform rotate-3 shadow-2xl"></div>
              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center">
                  <User className="h-32 w-32 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 8 years of experience in cybersecurity, I specialize in protecting organizations 
                from evolving digital threats. My expertise spans penetration testing, security architecture, 
                incident response, and vulnerability assessment.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I hold multiple industry certifications including CISSP, CEH, and OSCP, and have successfully 
                secured infrastructure for Fortune 500 companies across various industries including finance, 
                healthcare, and technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not hunting for vulnerabilities, you'll find me contributing to open-source security 
                tools, speaking at conferences, or mentoring the next generation of cybersecurity professionals.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-purple-50 dark:hover:from-cyan-900/20 dark:hover:to-purple-900/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;