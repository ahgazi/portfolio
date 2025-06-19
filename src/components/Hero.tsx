import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative">
            <img
              src="/AH Gazi.png"
              alt="AH Gazi"
              className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg object-cover"
            />
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              AH Gazi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Cloud Solutions Architect & DevOps Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Transforming businesses through innovative cloud solutions and cutting-edge DevOps practices
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github size={24} />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToAbout}
            className="mt-12 p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;