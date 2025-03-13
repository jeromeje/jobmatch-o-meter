
import React, { useState } from 'react';
import AnimatedLayout from '@/components/layout/AnimatedLayout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Check, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Upload: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const { toast } = useToast();

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is PDF or DOCX
    const fileType = file.type;
    if (fileType !== 'application/pdf' && 
        fileType !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file only.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(file);
  };

  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploadComplete(true);
      
      toast({
        title: "Resume uploaded successfully!",
        description: "We'll analyze your resume and match you with relevant jobs.",
      });
    }, 2000);
  };

  const resetUpload = () => {
    setFile(null);
    setUploadComplete(false);
  };

  return (
    <AnimatedLayout>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Upload Your Resume
            </motion.h1>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our intelligent system will analyze your resume and match you with the most suitable job opportunities.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="overflow-hidden">
              <div className="p-8">
                {!file ? (
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      isDragging 
                        ? 'border-apple-blue bg-apple-blue/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-apple-blue/10 flex items-center justify-center mb-4">
                        <Upload size={24} className="text-apple-blue" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Drag and drop your resume
                      </h3>
                      <p className="text-gray-500 mb-4">
                        or click to browse files (PDF or DOCX, max 5MB)
                      </p>
                      <Button
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className="bg-apple-blue hover:bg-blue-600"
                      >
                        Select File
                      </Button>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={handleFileInput}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    {uploadComplete ? (
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <Check size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Upload Complete!
                        </h3>
                        <p className="text-gray-500 mb-6">
                          Your resume has been uploaded and is being analyzed.
                        </p>
                        <Button onClick={resetUpload} variant="outline">
                          Upload Another Resume
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="w-16 h-16 rounded-full bg-apple-blue/10 flex items-center justify-center mb-4">
                          <FileText size={24} className="text-apple-blue" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {file.name}
                        </h3>
                        <p className="text-gray-500 mb-4">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <div className="flex space-x-4">
                          <Button
                            onClick={handleUpload}
                            disabled={uploading}
                            className="bg-apple-blue hover:bg-blue-600"
                          >
                            {uploading ? 'Uploading...' : 'Upload Resume'}
                          </Button>
                          <Button
                            onClick={resetUpload}
                            variant="outline"
                            disabled={uploading}
                          >
                            Cancel
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Resume Tips</CardTitle>
                <CardDescription>
                  Optimize your resume for better matching results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Use clear section headings (Experience, Education, Skills)',
                    'Include relevant keywords from job descriptions',
                    'Quantify your achievements with numbers and metrics',
                    'Keep formatting simple and consistent',
                    'Ensure contact information is up-to-date'
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-apple-blue/10 flex items-center justify-center mt-0.5 mr-3">
                        <Check size={12} className="text-apple-blue" />
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Upload;
