import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Certifications', value: '15+' },
    { icon: Users, label: 'Projects Delivered', value: '50+' },
    { icon: Zap, label: 'Years Experience', value: '8+' },
    { icon: Target, label: 'Success Rate', value: '99%' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Cloud Solutions Architect and DevOps Engineer with over 8 years of experience 
              in designing and implementing scalable cloud infrastructure solutions. My expertise spans across 
              multiple cloud platforms including AWS, Azure, and Google Cloud Platform.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in automating deployment pipelines, optimizing cloud costs, and ensuring high 
              availability and security for enterprise applications. My approach combines technical excellence 
              with business acumen to deliver solutions that drive real value.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Cloud Architecture', 'DevOps', 'Infrastructure as Code', 'CI/CD', 'Security'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;