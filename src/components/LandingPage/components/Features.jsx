import React from 'react';
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { FaDatabase, FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import AnimatedBlock from './AnimatedBlock';

export default function Features() {
  const features = [
    {
      title: "Data Everywhere",
      description: "Insights Nowhere",
      Icon: FaDatabase,
      className: "scale-110", // Slightly larger scale for first icon
      iconColor: "#00FFD1"
    },
    {
      title: "Manual Audits",
      description: "and Financial planning are slow",
      Icon: FaFileInvoiceDollar,
      className: "", // Default size for second icon
      iconColor: "#00FFD1"
    },
    {
      title: "Tax Saving",
      description: "require expert knowledge",
      Icon: MdOutlineQueryStats,
      className: "rotate-0 hover:rotate-3 transition-transform duration-300", // Hover effect for third icon
      iconColor: "#00FFD1"
    }
  ];

  const solutions = [
    {
      title: "Data Integration",
      description: "Real-time data from multiple sources",
      Icon: IoAnalyticsSharp
    },
    {
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms for insights",
      Icon: GiBrain
    },
    {
      title: "Custom Reports",
      description: "Tailored reports for your needs",
      Icon: TbReportSearch
    }
  ];

  return (
    <section className="relative px-4 md:px-6 pt-12 md:pt-16 pb-4 md:pb-8 bg-[#070B14] overflow-hidden">
      {/* Add an overlay to ensure content remains visible */}
      <div className="absolute inset-0 bg-[#070B14]/80"></div>
      
      {/* Make content relative to appear above the background */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedBlock>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-white">
            Why SMEs & CAs Struggle with<br className="hidden md:block" />Financial Intelligence
          </h2>
        </AnimatedBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedBlock key={index} delay={index * 0.1}>
              <div className="min-h-[200px] flex flex-col items-center justify-center text-center space-y-4">
                <div className={`w-32 h-32 flex items-center justify-center relative ${feature.className} bg-[#0B1221] rounded-full p-6 border border-[#00FFD1]/20`}>
                  <feature.Icon className="w-full h-full" style={{ color: feature.iconColor }} />
                </div>
                <p className="text-gray-400">
                  {feature.title},<br/>
                  {feature.description}
                </p>
              </div>
            </AnimatedBlock>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-[#00FFD1]/10 text-[#00FFD1] px-8 py-3 rounded-full text-sm mb-12">
            Dabby makes Finance insightfully Autonomous
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#0B1221] p-8 rounded-xl border border-gray-800">
              <div className="w-16 h-16 mb-6 bg-[#00FFD1]/10 rounded-xl flex items-center justify-center">
                <solution.Icon className="w-8 h-8 text-[#00FFD1]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
              <div className="mt-4 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#00FFD1] rounded-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
