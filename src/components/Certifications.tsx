import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect – Professional',
      provider: 'Amazon Web Services',
      image: '/AWS Certified Solutions Architect – Professional.png',
      level: 'Professional'
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      provider: 'Amazon Web Services',
      image: '/AWS Certified DevOps Engineer – Professional.png',
      level: 'Professional'
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      provider: 'Amazon Web Services',
      image: '/AWS Certified Solutions Architect – Associate.png',
      level: 'Associate'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      image: '/AWS Certified Cloud Practitioner.png',
      level: 'Foundational'
    },
    {
      name: 'Microsoft Certified: Azure Solutions Architect Expert',
      provider: 'Microsoft',
      image: '/Microsoft Certified- Azure Solutions Architect Expert.png',
      level: 'Expert'
    },
    {
      name: 'Microsoft Certified: DevOps Engineer Expert',
      provider: 'Microsoft',
      image: '/Microsoft Certified- DevOps Engineer Expert.png',
      level: 'Expert'
    },
    {
      name: 'Microsoft Certified: Cybersecurity Architect Expert',
      provider: 'Microsoft',
      image: '/Microsoft Certified- Cybersecurity Architect Expert.png',
      level: 'Expert'
    },
    {
      name: 'Microsoft 365 Certified: Enterprise Administrator Expert',
      provider: 'Microsoft',
      image: '/Microsoft 365 Certified- Enterprise Administrator Expert.png',
      level: 'Expert'
    },
    {
      name: 'Microsoft Certified: Azure Administrator Associate',
      provider: 'Microsoft',
      image: '/Microsoft Certified Azure Administrator Associate.png',
      level: 'Associate'
    },
    {
      name: 'Microsoft Certified: Identity and Access Administrator Associate',
      provider: 'Microsoft',
      image: '/Microsoft Certified Identity and Access Administrator Associate.png',
      level: 'Associate'
    },
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      provider: 'Microsoft',
      image: '/Microsoft Certified Security, Compliance, and Identity Fundamentals.png',
      level: 'Fundamentals'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      provider: 'Microsoft',
      image: '/Microsoft Certified- Azure Fundamentals.png',
      level: 'Fundamentals'
    },
    {
      name: 'Professional Cloud Architect Certification',
      provider: 'Google Cloud',
      image: '/Professional Cloud Architect Certification.png',
      level: 'Professional'
    },
    {
      name: 'Professional Cloud DevOps Engineer Certification',
      provider: 'Google Cloud',
      image: '/Professional Cloud DevOps Engineer Certification.png',
      level: 'Professional'
    },
    {
      name: 'Professional Google Workspace Administrator Certification',
      provider: 'Google Cloud',
      image: '/Professional Google Workspace Administrator Certification.png',
      level: 'Professional'
    },
    {
      name: 'Associate Cloud Engineer Certification',
      provider: 'Google Cloud',
      image: '/Associate Cloud Engineer Certification.png',
      level: 'Associate'
    },
    {
      name: 'Cloud Digital Leader Certification',
      provider: 'Google Cloud',
      image: '/Cloud Digital Leader Certification.png',
      level: 'Foundational'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional':
      case 'Expert':
        return 'bg-red-100 text-red-800';
      case 'Associate':
        return 'bg-blue-100 text-blue-800';
      case 'Foundational':
      case 'Fundamentals':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise across major cloud platforms and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.provider}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
            <span className="text-sm font-medium">View all certifications</span>
            <ExternalLink size={16} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;