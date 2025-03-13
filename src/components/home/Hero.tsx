
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../ui/AnimatedButton';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-apple-gray opacity-80" />
      
      {/* Moving gradient */}
      <div 
        className="absolute inset-0 opacity-20 transition-opacity duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle 800px at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(20, 126, 251, 0.15), transparent 40%)',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDdFRkIiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC0xMGg0djFoLTR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="flex-1 text-center lg:text-left lg:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="block mb-2">Match the perfect</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-600">
                talent with precision
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              An intelligent resume ranking system that bridges the gap between exceptional talent and the right opportunities.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/register">
                <AnimatedButton size="lg" className="w-full sm:w-auto">
                  Get Started
                </AnimatedButton>
              </Link>
              <Link to="/upload">
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Upload Your Resume
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto lg:mr-0 lg:ml-auto max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-apple-lightblue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
              
              {/* Illustration frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100 aspect-square flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-80" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-apple-blue/10 flex items-center justify-center mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#147EFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="space-y-3 w-full max-w-[240px]">
                    <div className="h-3 bg-gray-200 rounded-full w-full" />
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mx-auto" />
                    <div className="h-3 bg-gray-200 rounded-full w-4/6 mx-auto" />
                  </div>
                  
                  <div className="mt-6 w-full space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-apple-blue mr-2" />
                      <div className="h-2 bg-gray-200 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                      <div className="h-2 bg-gray-200 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2" />
                      <div className="h-2 bg-gray-200 rounded-full flex-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
