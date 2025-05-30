import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTeam() {
  const team = [
    {
      name: "Chirayu",
      role: "Frontend Developer & UI/UX Lead",
      contribution: "Crafting beautiful, intuitive user interfaces and ensuring seamless user experiences",
      linkedin: "https://www.linkedin.com/in/chirayu-profile"
    },
    {
      name: "Medhansh",
      role: "Backend Architect",
      contribution: "Building robust, scalable backend systems and optimizing data processing pipelines",
      linkedin: "https://www.linkedin.com/in/medhansh-profile"
    },
    {
      name: "Suyash",
      role: "DevOps & Infrastructure Lead",
      contribution: "Managing cloud infrastructure and ensuring reliable, secure deployment pipelines",
      linkedin: "https://www.linkedin.com/in/suyash-profile"
    },
    {
      name: "Parth",
      role: "AI/ML Engineer",
      contribution: "Developing and implementing cutting-edge AI models for data analysis",
      linkedin: "https://www.linkedin.com/in/parth-profile"
    }
  ];

  return (
    <section className="bg-[#070B14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#00FFD1]/10 border border-[#00FFD1]/20 px-6 py-2 rounded-full text-[#00FFD1] text-sm mb-6">
            Our Team
          </div>
          <h2 className="text-4xl font-bold mb-6">Meet the Innovators</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our diverse team of experts is passionate about creating cutting-edge solutions 
            that drive business success through AI innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#0B1221] to-[#1A2333] p-8 rounded-xl border border-gray-800 hover:border-[#00FFD1] transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
                <p className="text-[#00FFD1] text-sm text-center">{member.role}</p>
                <p className="text-gray-400 text-sm text-center">{member.contribution}</p>
                <div className="flex justify-center pt-4">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#00FFD1] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
