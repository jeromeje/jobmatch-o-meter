
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedLayout from '@/components/layout/AnimatedLayout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    accountType: 'candidate',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, accountType: value }));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email) {
        toast({
          title: "Missing information",
          description: "Please fill out all fields to continue",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.password) {
      toast({
        title: "Missing password",
        description: "Please enter a password to continue",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Registration successful!",
        description: "Your account has been created. You can now log in.",
      });
      
      navigate('/login');
    }, 1500);
  };

  return (
    <AnimatedLayout>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900">
              Create your account
            </h1>
            <p className="text-gray-600 mt-2">
              Join our platform to find the perfect match
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      currentStep >= 1 ? 'bg-apple-blue text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > 1 ? <CheckCircle size={16} /> : 1}
                    </div>
                    <div className="ml-2 text-sm font-medium text-gray-900">Account</div>
                  </div>
                  <div className="w-12 h-0.5 bg-gray-200"></div>
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      currentStep >= 2 ? 'bg-apple-blue text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > 2 ? <CheckCircle size={16} /> : 2}
                    </div>
                    <div className="ml-2 text-sm font-medium text-gray-900">Password</div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Account Type</Label>
                      <RadioGroup 
                        value={formData.accountType} 
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="candidate" id="candidate" />
                          <Label htmlFor="candidate" className="cursor-pointer">
                            I'm looking for jobs
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="employer" id="employer" />
                          <Label htmlFor="employer" className="cursor-pointer">
                            I'm hiring for my company
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Button 
                      type="button"
                      className="w-full bg-apple-blue hover:bg-blue-600"
                      onClick={handleNextStep}
                    >
                      Continue
                    </Button>
                  </motion.div>
                )}
                
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon size={18} />
                          ) : (
                            <EyeIcon size={18} />
                          )}
                        </button>
                      </div>
                      <div className="mt-2 space-y-2">
                        <p className="text-xs text-gray-500">Password must include:</p>
                        <ul className="space-y-1">
                          {['At least 8 characters', 'One uppercase letter', 'One number'].map((req, index) => (
                            <li key={index} className="flex items-center text-xs">
                              <div className="w-4 h-4 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-apple-blue"></div>
                              </div>
                              <span className="ml-2 text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={handlePrevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="flex-1 bg-apple-blue hover:bg-blue-600"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Creating account...' : 'Create account'}
                      </Button>
                    </div>
                  </motion.div>
                )}
                
                <div className="mt-6 text-center text-sm">
                  <span className="text-gray-600">Already have an account?</span>{' '}
                  <Link 
                    to="/login" 
                    className="text-apple-blue hover:underline font-medium"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Register;
