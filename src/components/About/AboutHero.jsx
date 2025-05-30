import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative bg-[#070B14] py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00FFD1]/5 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-[#00FFD1]/10 border border-[#00FFD1]/20 px-6 py-2 rounded-full text-[#00FFD1] text-sm mb-6">
            About Datalis
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Transforming Business<br />With AI Intelligence
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Founded in 2024, Datalis is revolutionizing how businesses handle data analysis 
            and decision-making through advanced AI technologies.
          </p>       
        </motion.div>
      </div>
    </section>
  );
}
