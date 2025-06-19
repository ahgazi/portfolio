import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:contact@ahgazi.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="/Logo.svg" alt="Logo" className="h-8 w-auto filter invert" />
            <span className="text-lg font-semibold">AH Gazi</span>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} AH Gazi. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;