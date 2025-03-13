
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedLayout from '@/components/layout/AnimatedLayout';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatedLayout>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <GlassCard className="max-w-md p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-apple-lightblue flex items-center justify-center">
              <span className="text-4xl font-bold text-apple-blue">404</span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Page not found
            </h1>
            
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/">
              <AnimatedButton className="mx-auto">
                Return to Home
              </AnimatedButton>
            </Link>
          </motion.div>
        </GlassCard>
      </div>
    </AnimatedLayout>
  );
};

export default NotFound;
