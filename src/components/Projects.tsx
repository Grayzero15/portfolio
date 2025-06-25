import React from 'react';
import { ExternalLink, Github, Shield, Lock, Eye, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise Security Assessment Platform',
      description: 'Comprehensive security assessment tool that automates vulnerability scanning, penetration testing, and compliance reporting for enterprise networks.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      tags: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
      icon: Shield,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['500+ vulnerability checks', 'Real-time monitoring', 'Compliance automation']
    },
    {
      title: 'Zero Trust Network Architecture',
      description: 'Designed and implemented zero-trust security model for a Fortune 500 company, reducing security incidents by 85%.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
      tags: ['Network Security', 'Azure AD', 'Conditional Access', 'MFA'],
      icon: Lock,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['85% incident reduction', '10,000+ users', 'Multi-cloud deployment']
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning system that analyzes network traffic patterns to detect advanced persistent threats and zero-day attacks.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tags: ['Python', 'TensorFlow', 'Elasticsearch', 'Kibana', 'AWS'],
      icon: Eye,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['99.2% accuracy', 'Real-time analysis', 'False positive reduction']
    },
    {
      title: 'Cloud Security Automation Suite',
      description: 'Automated security configuration and monitoring tools for AWS, Azure, and GCP environments with policy-as-code implementation.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      tags: ['Terraform', 'AWS', 'Azure', 'GCP', 'Kubernetes'],
      icon: Terminal,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['Multi-cloud support', 'Policy automation', 'Cost optimization']
    },
    {
      title: 'Incident Response Orchestration',
      description: 'SOAR platform that automates incident response workflows, reducing mean time to resolution from hours to minutes.',
      image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg',
      tags: ['Python', 'FastAPI', 'React', 'MongoDB', 'Docker'],
      icon: Shield,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['75% faster response', 'Automated playbooks', 'Integration APIs']
    },
    {
      title: 'Secure Development Framework',
      description: 'DevSecOps pipeline integration with automated security testing, code analysis, and vulnerability management.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      tags: ['Jenkins', 'SonarQube', 'OWASP ZAP', 'GitLab CI', 'Kubernetes'],
      icon: Lock,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['Shift-left security', 'Automated testing', 'Developer-friendly']
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase of security solutions that have protected organizations and enhanced their cybersecurity posture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg">
                  <project.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs text-cyan-600 dark:text-cyan-400">
                      <div className="w-1 h-1 bg-current rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;