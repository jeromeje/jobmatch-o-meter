
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedLayout from '@/components/layout/AnimatedLayout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      if (email === 'admin@example.com' && password === 'password') {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in",
        });
        navigate('/admin');
      } else if (email === 'user@example.com' && password === 'password') {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in",
        });
        navigate('/upload');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
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
              Welcome back
            </h1>
            <p className="text-gray-600 mt-2">
              Sign in to your account to continue
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        to="#" 
                        className="text-sm text-apple-blue hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-apple-blue hover:bg-blue-600"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-1 text-sm">
                    <span className="text-gray-600">Don't have an account?</span>
                    <Link 
                      to="/register" 
                      className="text-apple-blue hover:underline font-medium"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      Demo accounts
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
                  <div className="rounded-md border border-gray-200 px-3 py-2">
                    <p className="font-medium text-gray-900">Admin</p>
                    <p className="text-gray-500 text-xs mt-1">admin@example.com</p>
                    <p className="text-gray-500 text-xs">password</p>
                  </div>
                  <div className="rounded-md border border-gray-200 px-3 py-2">
                    <p className="font-medium text-gray-900">User</p>
                    <p className="text-gray-500 text-xs mt-1">user@example.com</p>
                    <p className="text-gray-500 text-xs">password</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Login;
