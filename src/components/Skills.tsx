import React from 'react';
import { Shield, Lock, Eye, Terminal, Cloud, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Penetration Testing',
      icon: Terminal,
      skills: [
        { name: 'OWASP Top 10', level: 95 },
        { name: 'Network Penetration', level: 90 },
        { name: 'Web Application Security', level: 92 },
        { name: 'Mobile App Testing', level: 85 },
      ],
    },
    {
      title: 'Security Architecture',
      icon: Shield,
      skills: [
        { name: 'Zero Trust Design', level: 88 },
        { name: 'Risk Assessment', level: 92 },
        { name: 'Compliance (SOC2, HIPAA)', level: 90 },
        { name: 'Security Frameworks', level: 87 },
      ],
    },
    {
      title: 'Cloud Security',
      icon: Cloud,
      skills: [
        { name: 'AWS Security', level: 90 },
        { name: 'Azure Security', level: 85 },
        { name: 'GCP Security', level: 82 },
        { name: 'Container Security', level: 88 },
      ],
    },
    {
      title: 'Incident Response',
      icon: Eye,
      skills: [
        { name: 'Forensic Analysis', level: 90 },
        { name: 'Malware Analysis', level: 87 },
        { name: 'Threat Hunting', level: 92 },
        { name: 'SIEM Management', level: 89 },
      ],
    },
    {
      title: 'Cryptography',
      icon: Lock,
      skills: [
        { name: 'PKI Implementation', level: 88 },
        { name: 'Encryption Protocols', level: 90 },
        { name: 'Key Management', level: 85 },
        { name: 'Digital Signatures', level: 87 },
      ],
    },
    {
      title: 'Database Security',
      icon: Database,
      skills: [
        { name: 'SQL Injection Prevention', level: 93 },
        { name: 'Database Hardening', level: 90 },
        { name: 'Data Classification', level: 88 },
        { name: 'Access Control', level: 91 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive security skills across multiple domains, from offensive security to defensive strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-400/50"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'CISSP', 'CEH', 'OSCP', 'CISM', 'CISA', 'GCIH', 
              'AWS Security', 'Azure Security', 'CompTIA Security+', 'SANS GIAC'
            ].map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-cyan-200/50 dark:border-cyan-700/50 hover:shadow-lg transition-all duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;