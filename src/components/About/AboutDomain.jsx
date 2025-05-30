import React from 'react';
import { motion } from 'framer-motion';

export default function AboutDomain() {
  const visionPoints = [
    {
      icon: "👁️",
      title: "To empower every SME and accountant",
      description: "To empower every SME and accountant in India with a virtual data team that turns cluttered data into clarity and actionable insights.",
      gradient: "from-blue-500/20 to-blue-600/20",
      borderGradient: "from-blue-500/20 via-blue-400/10 to-transparent"
    },
    {
      icon: "🎯",
      title: "To build India's first intelligent platform",
      description: "To build India's first intelligent, and modular data platform that simplifies ETL, automates insights, and personalizes decision support for SMBs.",
      gradient: "from-purple-500/20 to-purple-600/20",
      borderGradient: "from-purple-500/20 via-purple-400/10 to-transparent"
    }
  ];

  const domains = [
    {
      title: "Financial Analytics",
      description: "Advanced AI-powered analysis of financial data, forecasting, and risk assessment for informed decision-making.",
      icon: "📊",
      features: [
        "Real-time financial monitoring",
        "Predictive analytics",
        "Risk assessment models",
        "Performance tracking"
      ]
    },
    {
      title: "Business Intelligence",
      description: "Transform raw business data into actionable insights with our AI-driven BI tools and visualizations.",
      icon: "💡",
      features: [
        "Data visualization",
        "Market trend analysis",
        "Competitive insights",
        "Growth opportunities"
      ]
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation of repetitive tasks and workflow optimization.",
      icon: "⚙️",
      features: [
        "Workflow automation",
        "Task optimization",
        "Resource management",
        "Efficiency tracking"
      ]
    }
  ];

  return (
    <section className="bg-[#0B1221] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision & Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block bg-[#00FFD1]/10 border border-[#00FFD1]/20 px-6 py-2 rounded-full text-[#00FFD1] text-sm mb-6">
            What Drives Us
          </div>
          <h2 className="text-4xl font-bold mb-16">Vision & Mission</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${point.gradient} border border-t-2 border-l-2 backdrop-blur-sm
                  border-gradient-to-r ${point.borderGradient} relative group`}
              >
                <div className="text-6xl mb-6">{point.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B1221]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Domain Excellence Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#00FFD1]/10 border border-[#00FFD1]/20 px-6 py-2 rounded-full text-[#00FFD1] text-sm mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl font-bold mb-6">Domain Excellence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in transforming complex business challenges into 
            streamlined solutions through our core domains of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#070B14] p-8 rounded-xl border border-gray-800 hover:border-[#00FFD1] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{domain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{domain.title}</h3>
              <p className="text-gray-400 mb-6">{domain.description}</p>
              <ul className="space-y-2">
                {domain.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#00FFD1] text-sm">•</span>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
