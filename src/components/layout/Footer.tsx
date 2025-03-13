
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-apple-gray py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-500">
                ResumeMatcher
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              An intelligent system that matches the best candidates with the right opportunities through advanced resume ranking.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-apple-blue text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-600 hover:text-apple-blue text-sm transition-colors">
                  Upload Resume
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-600 hover:text-apple-blue text-sm transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
              Get Started
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-gray-600 hover:text-apple-blue text-sm transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-apple-blue text-sm transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ResumeMatcher. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
