import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBlock from './AnimatedBlock';
import ShinyText from './ShinyText';
import image1 from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import { useTheme } from '../../../context/ThemeContext';

export default function Agents() {
  const { isDark } = useTheme();
  
  return (
    <section id="agents" className="px-6 pt-12 md:pt-16 pb-4 md:pb-8 bg-[#0B1221] relative transition-colors duration-300">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00FFD1]/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <ConsultantAgent />
        <AuditorAgent />
        <TaxationAgent />
      </div>
    </section>
  );
}

function ConsultantAgent() {
  const { isDark } = useTheme();
  const steps = ['Budgeting', 'Planning', 'Risk Analysis', 'Forecasting'];
  
  return (
    <AnimatedBlock delay={0.1}>
      <div>
        <div className="inline-block bg-gray-800/50 px-4 py-1 rounded-full text-sm mb-6">
          <ShinyText text="Consultant Agent" className="text-white/80" />
        </div>
        <motion.div 
          className="bg-[#070B14] p-8 rounded-xl border border-gray-800 overflow-hidden relative transition-all duration-300"
          whileHover={{ 
            boxShadow: '0 0 30px rgba(0, 255, 209, 0.2)',
            scale: 1.02
          }}
        >
          {/* Border animation - keeping only this animation */}
          <motion.div 
            className="absolute inset-0 rounded-xl border-2 border-[#00FFD1]/0 z-20 pointer-events-none"
            animate={{ 
              borderColor: ['rgba(0, 255, 209, 0)', 'rgba(0, 255, 209, 0.3)', 'rgba(0, 255, 209, 0)']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="flex items-center gap-12 relative z-10">
            <div className="w-2/3">
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
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-4"
                    whileHover={{ x: 8, color: "#00FFD1" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ShinyText 
                      text={`0${index + 1}`} 
                      className="text-[#00FFD1]" 
                      font-mono text-sm
                      speed={1.5}
                    />
                    <ShinyText
                      text={step}
                      className="text-gray-400"
                      speed={1.5}
                    />
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="h-0.5 w-0 bg-gradient-to-r from-[#00FFD1]/50 to-transparent mb-6"
                whileInView={{ width: "70%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className="w-1/3">
              <img 
                src={image1} 
                alt="Consultant Agent" 
                className="w-full h-auto rounded-lg relative z-10 shadow-lg border border-[#00FFD1]/20" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedBlock>
  );
}

function AuditorAgent() {
  const { isDark } = useTheme();
  
  return (
    <AnimatedBlock delay={0.15}>
      <div className="mt-12">
        <div className="inline-block bg-gray-800/50 px-4 py-1 rounded-full text-sm mb-6">
          <ShinyText text="Auditor Agent" className="text-white/80" />
        </div>
        <motion.div 
          className="bg-[#070B14] p-8 rounded-xl border border-gray-800 overflow-hidden relative transition-all duration-300"
          whileHover={{ 
            boxShadow: '0 0 30px rgba(0, 255, 209, 0.2)',
            scale: 1.02
          }}
        >
          {/* Border animation - keeping only this animation */}
          <motion.div 
            className="absolute inset-0 rounded-xl border-2 border-[#00FFD1]/0 z-20 pointer-events-none"
            animate={{ 
              borderColor: ['rgba(0, 255, 209, 0)', 'rgba(0, 255, 209, 0.3)', 'rgba(0, 255, 209, 0)']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          <div className="flex items-center gap-12 flex-row-reverse relative z-10">
            <div className="w-2/3">
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
              <motion.div 
                className="h-0.5 w-0 bg-gradient-to-r from-[#00FFD1]/50 to-transparent mb-6"
                whileInView={{ width: "70%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className="flex gap-4">
                <motion.button 
                  className="bg-[#0B1221] border-[#00FFD1]/20 hover:border-[#00FFD1] px-6 py-2 rounded text-sm border transition-colors"
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 255, 209, 0.1)' }}
                  whileTap={{ y: 0 }}
                >
                  <ShinyText text="Watch Now" className="text-[#00FFD1]" speed={1} />
                </motion.button>
                <motion.button 
                  className="bg-[#0B1221] border-[#00FFD1]/20 hover:border-[#00FFD1] px-6 py-2 rounded text-sm border transition-colors"
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 255, 209, 0.1)' }}
                  whileTap={{ y: 0 }}
                >
                  <ShinyText text="Check Report" className="text-[#00FFD1]" speed={1} />
                </motion.button>
              </div>
            </div>
            <div className="w-1/3">
              <img 
                src={image2} 
                alt="Auditor Agent" 
                className="w-full h-auto rounded-lg relative z-10 shadow-lg border border-[#00FFD1]/20" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedBlock>
  );
}

function TaxationAgent() {
  const { isDark } = useTheme();
  
  return (
    <AnimatedBlock delay={0.2}>
      <div className="mt-12">
        <div className="inline-block bg-gray-800/50 px-4 py-1 rounded-full text-sm mb-6">
          <ShinyText text="Taxation Agent" className="text-white/80" />
        </div>
        <motion.div 
          className="bg-[#070B14] p-8 rounded-xl border border-gray-800 overflow-hidden relative transition-all duration-300"
          whileHover={{ 
            boxShadow: '0 0 30px rgba(0, 255, 209, 0.2)',
            scale: 1.02
          }}
        >
          {/* Border animation - keeping only this animation */}
          <motion.div 
            className="absolute inset-0 rounded-xl border-2 border-[#00FFD1]/0 z-20 pointer-events-none"
            animate={{ 
              borderColor: ['rgba(0, 255, 209, 0)', 'rgba(0, 255, 209, 0.3)', 'rgba(0, 255, 209, 0)']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
          
          <div className="flex items-center gap-12 relative z-10">
            <div className="w-2/3">
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
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className={isDark ? "text-[#00FFD1] mt-1.5" : "text-emerald-500 mt-1.5"}>•</span>
                  <ShinyText 
                    text="AI-Powered Tax Intelligence — Automate tax prep, filings, and reconciliation with smart rule-based reasoning."
                    className={isDark ? "text-gray-400" : "text-gray-600"}
                    speed={1.5}
                  />
                </motion.li>
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className={isDark ? "text-[#00FFD1] mt-1.5" : "text-emerald-500 mt-1.5"}>•</span>
                  <ShinyText 
                    text="Smart GST & Income Tax Analysis — Detect mismatches, verify returns, and ensure real-time compliance."
                    className={isDark ? "text-gray-400" : "text-gray-600"}
                    speed={1.5}
                  />
                </motion.li>
              </ul>
              <div className="flex gap-4">
                <motion.button 
                  className="bg-[#070B14] border-[#00FFD1]/20 hover:border-[#00FFD1] px-6 py-2 rounded text-sm border transition-colors"
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 255, 209, 0.1)' }}
                  whileTap={{ y: 0 }}
                >
                  <ShinyText text="Check Now" className="text-[#00FFD1]" speed={1} />
                </motion.button>
                <motion.button 
                  className="bg-[#070B14] border-[#00FFD1]/20 hover:border-[#00FFD1] px-6 py-2 rounded text-sm border transition-colors"
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 255, 209, 0.1)' }}
                  whileTap={{ y: 0 }}
                >
                  <ShinyText text="Check Report" className="text-[#00FFD1]" speed={1} />
                </motion.button>
              </div>
            </div>
            <div className="w-1/3">
              <img 
                src={image3} 
                alt="Taxation Agent" 
                className="w-full h-auto rounded-lg relative z-10 shadow-lg border border-[#00FFD1]/20" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedBlock>
  );
}




