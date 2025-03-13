
import React from 'react';
import AnimatedLayout from '@/components/layout/AnimatedLayout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  const howItWorks = [
    {
      step: '01',
      title: 'Create an account',
      description: 'Register as a candidate or an employer to access our platform features.',
    },
    {
      step: '02',
      title: 'Upload your resume',
      description: 'Submit your resume in various formats and our system will analyze it.',
    },
    {
      step: '03',
      title: 'Match with opportunities',
      description: 'Our algorithm matches your profile with the most suitable job openings.',
    },
    {
      step: '04',
      title: 'Track your progress',
      description: 'Monitor application status and ranking in real-time on your dashboard.',
    },
  ];

  return (
    <AnimatedLayout>
      <Hero />
      
      <Features />
      
      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              How it <span className="text-apple-blue">works</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A simple four-step process to connect talent with opportunity
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="text-7xl font-bold text-gray-100 absolute -top-6 -left-2 select-none">
                    {item.step}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-apple-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-apple-blue to-blue-700 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to find your perfect match?
                </h3>
                <p className="mb-8 text-white/90">
                  Join thousands of candidates and employers already using our platform to connect talent with opportunity.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Advanced resume analysis', 'Intelligent matching algorithm', 'Real-time ranking updates'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 bg-white/20 rounded-full p-1">
                        <Check size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Get started in minutes
                </h4>
                <div className="flex flex-col space-y-4">
                  <Link to="/register" className="w-full">
                    <AnimatedButton className="w-full">
                      Create an Account
                    </AnimatedButton>
                  </Link>
                  <Link to="/login" className="w-full">
                    <AnimatedButton variant="outline" className="w-full">
                      Sign In
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </AnimatedLayout>
  );
};

export default Index;
