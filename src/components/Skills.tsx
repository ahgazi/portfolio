import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code, Shield, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Oracle Cloud'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Server,
      title: 'DevOps & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI/CD'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Code,
      title: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON', 'Go'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      skills: ['IAM', 'Security Groups', 'SSL/TLS', 'Compliance Frameworks', 'Vulnerability Assessment'],
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'S3', 'Azure Blob'],
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Cpu,
      title: 'Monitoring & Observability',
      skills: ['CloudWatch', 'Azure Monitor', 'Prometheus', 'Grafana', 'ELK Stack'],
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to deliver exceptional cloud solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;