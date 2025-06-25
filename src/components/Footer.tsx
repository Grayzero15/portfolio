import React from 'react';
import { Heart, Github, Linkedin, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex.chen@cybersec.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Cyber Security Expert specializing in protecting digital assets and building secure, resilient systems 
              for the modern digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                alex.chen@cybersec.com
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                +1 (555) 123-4567
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-600 hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
              <span>© {currentYear} Alex Chen. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Securing the digital world, one system at a time.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;