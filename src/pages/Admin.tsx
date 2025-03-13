
import React, { useState } from 'react';
import AnimatedLayout from '@/components/layout/AnimatedLayout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, FileText, BarChart2, Download, Search } from 'lucide-react';
import { motion } from 'framer-motion';

type Job = {
  id: string;
  title: string;
  department: string;
  candidates: number;
  datePosted: string;
};

type Candidate = {
  id: string;
  name: string;
  match: number;
  skills: string[];
  resume: string;
};

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  
  // Sample data
  const jobs: Job[] = [
    { id: '1', title: 'Senior Frontend Developer', department: 'Engineering', candidates: 24, datePosted: '2023-06-15' },
    { id: '2', title: 'Product Manager', department: 'Product', candidates: 18, datePosted: '2023-06-12' },
    { id: '3', title: 'UX Designer', department: 'Design', candidates: 31, datePosted: '2023-06-10' },
    { id: '4', title: 'Data Scientist', department: 'Data', candidates: 15, datePosted: '2023-06-08' },
  ];
  
  const candidates: Candidate[] = [
    { id: '1', name: 'Alex Johnson', match: 95, skills: ['React', 'TypeScript', 'CSS'], resume: '/resume1.pdf' },
    { id: '2', name: 'Maria Garcia', match: 88, skills: ['Angular', 'JavaScript', 'HTML'], resume: '/resume2.pdf' },
    { id: '3', name: 'David Chen', match: 82, skills: ['React', 'Node.js', 'MongoDB'], resume: '/resume3.pdf' },
    { id: '4', name: 'Sarah Wilson', match: 78, skills: ['Vue.js', 'CSS', 'Figma'], resume: '/resume4.pdf' },
  ];
  
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  return (
    <AnimatedLayout>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage jobs and candidates</p>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="jobs" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="jobs" className="text-sm">Jobs</TabsTrigger>
              <TabsTrigger value="candidates" className="text-sm">Candidates</TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="jobs" className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search jobs..."
                    className="pl-10 w-full md:w-80"
                  />
                </div>
                <Button className="bg-apple-blue hover:bg-blue-600">
                  <Plus size={18} className="mr-2" />
                  Add New Job
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard 
                      className="p-6 cursor-pointer transition-all"
                      hoverEffect
                      onClick={() => {
                        setSelectedJob(job);
                        setActiveTab('candidates');
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        <span className="bg-apple-blue/10 text-apple-blue text-xs px-2 py-1 rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <span>Posted: {new Date(job.datePosted).toLocaleDateString()}</span>
                        <span>{job.candidates} candidates</span>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="text-xs">
                          <FileText size={14} className="mr-1" />
                          View Details
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Download size={14} className="mr-1" />
                          Export
                        </Button>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="candidates" className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedJob ? `Candidates for ${selectedJob.title}` : 'All Candidates'}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selectedJob ? `${selectedJob.candidates} applications` : 'Showing all candidates'}
                  </p>
                </div>
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  View All Candidates
                </Button>
              </div>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle>Top Ranked Candidates</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      Export CSV
                    </Button>
                  </div>
                  <CardDescription>
                    Ranked by skills match and relevance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {candidates.map((candidate) => (
                      <GlassCard key={candidate.id} className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue font-medium">
                                {candidate.name.charAt(0)}
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="font-medium text-gray-900">{candidate.name}</h4>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {candidate.skills.map((skill, index) => (
                                  <span key={index} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-6 text-right">
                              <div className="text-sm font-medium text-gray-900">Match Score</div>
                              <div className={`text-lg font-bold ${
                                candidate.match >= 90 ? 'text-green-500' : 
                                candidate.match >= 80 ? 'text-blue-500' : 
                                'text-amber-500'
                              }`}>
                                {candidate.match}%
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <FileText size={16} />
                            </Button>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <GlassCard className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Total Jobs</span>
                    <span className="text-3xl font-bold text-gray-900 mt-2">24</span>
                    <span className="text-xs text-green-500 mt-1">↑ 12% from last month</span>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Total Candidates</span>
                    <span className="text-3xl font-bold text-gray-900 mt-2">532</span>
                    <span className="text-xs text-green-500 mt-1">↑ 8% from last month</span>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Avg. Match Score</span>
                    <span className="text-3xl font-bold text-gray-900 mt-2">76%</span>
                    <span className="text-xs text-green-500 mt-1">↑ 3% from last month</span>
                  </div>
                </GlassCard>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Overview</CardTitle>
                  <CardDescription>Job postings and applications over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-gray-500 flex flex-col items-center">
                    <BarChart2 size={48} className="mb-4 text-gray-300" />
                    <p>Analytics visualization will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Admin;
