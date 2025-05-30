import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Globe, Briefcase, AlertTriangle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
  }
};

export default function CareerPage() {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleApply = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Hide alert after 5 seconds
  };

  return (
    <div className="min-h-screen bg-[#0B1221] text-white pt-24 pb-16">
      {/* Alert */}
      {showAlert && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
        >
          <AlertTriangle className="mr-2" size={20} />
          <span>This job has been taken by AI. Please try again later.</span>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="text-center mb-16">
          <div className="inline-block bg-[#00FFD1]/10 border border-[#00FFD1]/20 px-6 py-2 rounded-full text-[#00FFD1] text-sm mb-6">
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build the Future of Business Intelligence
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At Datalis, we're revolutionizing how businesses leverage data through AI-powered insights and analytics.
          </p>
        </div>
      </motion.div>

      {/* Company Overview */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Datalis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#070B14] p-8 rounded-xl border border-gray-800 mb-6"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-[#00FFD1]/10 rounded-lg flex items-center justify-center text-[#00FFD1] mb-6">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To empower every SME and accountant in India with a virtual data team that turns cluttered data into clarity and actionable insights.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#070B14] p-8 rounded-xl border border-gray-800 mb-6"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-[#00FFD1]/10 rounded-lg flex items-center justify-center text-[#00FFD1] mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-400">
                We're a diverse team of engineers, data scientists, designers, and business experts united by our passion for AI and data analytics.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#070B14] p-8 rounded-xl border border-gray-800 mb-6"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-[#00FFD1]/10 rounded-lg flex items-center justify-center text-[#00FFD1] mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <p className="text-gray-400">
                We're building India's first intelligent, modular data platform that simplifies ETL, automates insights, and personalizes decision support for SMBs.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <JobCard 
              title="Senior Frontend Developer"
              type="Full-time"
              onApply={handleApply}
            />
            
            <JobCard 
              title="AI/ML Engineer"
              type="Full-time"
              onApply={handleApply}
            />
            
            <JobCard 
              title="Product Designer"
              type="Full-time"
              onApply={handleApply}
            />
            
            <JobCard 
              title="Data Scientist"
              type="Full-time"
              onApply={handleApply}
            />
          </div>
          
          {/* No positions available fallback */}
          <div className="bg-[#070B14] p-8 rounded-xl border border-gray-800 text-center">
            <div className="w-16 h-16 bg-[#00FFD1]/10 rounded-full flex items-center justify-center text-[#00FFD1] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Don't see a role that fits?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <button 
              onClick={handleApply}
              className="px-6 py-3 bg-[#00FFD1]/10 text-[#00FFD1] rounded-lg border border-[#00FFD1]/20 hover:bg-[#00FFD1]/20 transition-colors"
            >
              Submit General Application
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function JobCard({ title, type, onApply }) {
  return (
    <div className="bg-[#070B14] p-6 rounded-xl border border-gray-800 hover:border-[#00FFD1]/30 transition-colors">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-center text-gray-400 mb-4">
        <span className="px-2 py-1 bg-[#00FFD1]/10 text-[#00FFD1] text-xs rounded-full">
          {type}
        </span>
      </div>
      <button 
        onClick={onApply}
        className="flex items-center text-[#00FFD1] hover:text-[#00FFD1]/80 transition-colors"
      >
        Apply Now <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
}

