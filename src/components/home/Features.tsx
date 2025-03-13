
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { FileUp, BarChart3, Users, Shield } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <GlassCard className="h-full p-6 sm:p-8" hoverEffect>
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-apple-lightblue flex items-center justify-center text-apple-blue mb-6">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: 'Smart Resume Upload',
      description: 'Easily upload your resume and our system will automatically extract and analyze your skills and experience.',
      icon: <FileUp size={24} />,
      delay: 0.1,
    },
    {
      title: 'Advanced Analytics',
      description: 'Get detailed insights into how your resume ranks against job requirements with visual analytics.',
      icon: <BarChart3 size={24} />,
      delay: 0.2,
    },
    {
      title: 'Talent Matching',
      description: 'Our intelligent algorithm matches candidates with opportunities based on skills, experience, and cultural fit.',
      icon: <Users size={24} />,
      delay: 0.3,
    },
    {
      title: 'Secure & Private',
      description: 'Your data is encrypted and securely stored. We prioritize your privacy and security at every step.',
      icon: <Shield size={24} />,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-apple-gray to-white opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Features designed with <span className="text-apple-blue">precision</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover how our platform simplifies the hiring process and connects talent with opportunity.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
