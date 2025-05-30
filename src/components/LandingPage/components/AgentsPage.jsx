import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";

import AnimatedBlock from "./AnimatedBlock";
import ShinyText from './ShinyText';

export default function AgentsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1221] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <ShinyText text="Meet Our AI Agents" className="text-white/90" />
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized AI agents designed to handle specific financial tasks with precision and intelligence
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ConsultantAgent />
          <AuditorAgent />
          <TaxationAgent />
          <AdditionalAgentInfo />
        </motion.div>
      </div>
    </div>
  );
}

function ConsultantAgent() {
  const steps = ['Budgeting', 'Planning', 'Risk Analysis', 'Forecasting'];
  
  return (
    <AnimatedBlock delay={0.1}>
      <div>
        <div className="inline-block bg-gray-800/50 px-4 py-1 rounded-full text-sm mb-6">
          <ShinyText text="Consultant Agent" className="text-white/80" />
        </div>
        <div className="bg-[#070B14] p-8 rounded-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-6">
                <ShinyText 
                  text="From Questions to Strategy —" 
                  className="text-white/90"
                  speed={2}
                />
                <br />
                <ShinyText 
                  text="Faster than Ever." 
                  className="text-white/90"
                  speed={2}
                />
              </h3>
              <ul className="space-y-4 mb-8">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <ShinyText 
                      text={`0${index + 1}`} 
                      className="text-[#00FFD1] font-mono text-sm"
                      speed={1.5}
                    />
                    <ShinyText
                      text={step}
                      className="text-gray-400"
                      speed={1.5}
                    />
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 mb-6">
                Our Consultant Agent combines financial expertise with AI intelligence to help you make informed decisions about your business finances. From budgeting to forecasting, get strategic guidance tailored to your specific needs.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image1} alt="Consultant Agent" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
}

function AuditorAgent() {
  return (
    <AnimatedBlock delay={0.15}>
      <div className="mt-12">
        <div className="inline-block bg-gray-800/50 px-4 py-1 rounded-full text-sm mb-6">
          <ShinyText text="Auditor Agent" className="text-white/80" />
        </div>
        <div className="bg-[#070B14] p-8 rounded-xl border border-gray-800">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">
                <ShinyText 
                  text="From Data to Deductions—Audits Made" 
                  className="text-white/90"
                  speed={2}
                />
                <br />
                <ShinyText 
                  text="Effortless." 
                  className="text-white/90"
                  speed={2}
                />
              </h3>
              <div className="text-sm mb-8">
                <ShinyText 
                  text="Compliant audit generation with smart" 
                  className="text-gray-400"
                  speed={1.5}
                />
                <br />
                <ShinyText 
                  text="checklists for precise auditing" 
                  className="text-gray-400"
                  speed={1.5}
                />
              </div>
              <p className="text-gray-400 mb-6">
                The Auditor Agent meticulously examines financial data to identify inconsistencies, ensure compliance, and streamline audit processes. It applies advanced pattern recognition to detect anomalies that might be overlooked in manual audits.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#0B1221] px-6 py-2 rounded text-sm border border-[#00FFD1]/20 hover:border-[#00FFD1] transition-colors">
                  <ShinyText text="Watch Demo" className="text-[#00FFD1]" speed={1} />
                </button>
                <button className="bg-[#0B1221] px-6 py-2 rounded text-sm border border-[#00FFD1]/20 hover:border-[#00FFD1] transition-colors">
                  <ShinyText text="Sample Report" className="text-[#00FFD1]" speed={1} />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image2} alt="Auditor Agent" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
}

function TaxationAgent() {
  return (
    <AnimatedBlock delay={0.2}>
      <div className="mt-12">
        <div className="inline-block bg-gray-800/50 px-4 py-1 rounded-full text-sm mb-6">
          <ShinyText text="Taxation Agent" className="text-white/80" />
        </div>
        <div className="bg-[#070B14] p-8 rounded-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">
                <ShinyText 
                  text="Simplify Tax. Maximize Compliance." 
                  className="text-white/90"
                  speed={2}
                />
              </h3>
              <h4 className="text-xl mb-4">
                <ShinyText 
                  text="Powered by Dabby" 
                  className="text-gray-400"
                  speed={2}
                />
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#00FFD1] mt-1.5">•</span>
                  <ShinyText 
                    text="AI-Powered Tax Intelligence — Automate tax prep, filings, and reconciliation with smart rule-based reasoning."
                    className="text-gray-400"
                    speed={1.5}
                  />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00FFD1] mt-1.5">•</span>
                  <ShinyText 
                    text="Smart GST & Income Tax Analysis — Detect mismatches, verify returns, and ensure real-time compliance."
                    className="text-gray-400"
                    speed={1.5}
                  />
                </li>
              </ul>
              <p className="text-gray-400 mb-6">
                The Taxation Agent stays updated with the latest tax laws and regulations to help maximize deductions while ensuring full compliance. It simplifies tax preparation and identifies potential savings opportunities specific to your business.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#0B1221] px-6 py-2 rounded text-sm border border-[#00FFD1]/20 hover:border-[#00FFD1] transition-colors">
                  <ShinyText text="Try Now" className="text-[#00FFD1]" speed={1} />
                </button>
                <button className="bg-[#0B1221] px-6 py-2 rounded text-sm border border-[#00FFD1]/20 hover:border-[#00FFD1] transition-colors">
                  <ShinyText text="Sample Report" className="text-[#00FFD1]" speed={1} />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image3} alt="Taxation Agent" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
}

function AdditionalAgentInfo() {
  return (
    <AnimatedBlock delay={0.25}>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">How Our Agents Work Together</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          Dabby's AI agents are designed to work both independently and as a cohesive team, sharing insights and data to provide comprehensive financial intelligence for your business.
        </p>
        <div className="bg-[#070B14] p-8 rounded-xl border border-gray-800 mt-8">
          <h3 className="text-xl font-bold mb-4">Ready to experience the power of AI-driven financial intelligence?</h3>
          <p className="text-gray-400 mb-6">
            Sign up today and transform how you manage your business finances.
          </p>
          <button className="bg-[#00FFD1] text-black px-8 py-3 rounded-full font-medium hover:bg-[#00FFD1]/90 transition-colors">
            Get Started Free
          </button>
        </div>
      </div>
    </AnimatedBlock>
  );
}
