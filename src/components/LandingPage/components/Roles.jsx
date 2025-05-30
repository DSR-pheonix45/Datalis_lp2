import React from 'react';
import TiltedCard from '../../TiltedCard/TiltedCard/TiltedCard';
import ScrollVelocity from '../../ScrollVelocity/ScrollVelocity/ScrollVelocity';
import AnimatedBlock from './AnimatedBlock';

export default function Roles() {
  const topRoles = [
    {
      title: 'Mid-sized Enterprises',
      description: 'Perfect for growing businesses looking to scale their financial operations with AI-powered insights and automated reporting.',
    },
    {
      title: 'Small Business Owners',
      description: 'Streamline your financial decision-making with automated insights and real-time business performance monitoring.',
    },
    {
      title: 'Startups to Mid-size Enterprises',
      description: 'Scale your financial operations efficiently with AI-driven insights and automated compliance checks.',
    }
  ];

  const bottomRoles = [
    {
      title: 'Auditors / Compliance Officers',
      description: 'Enhance audit accuracy and efficiency with AI-powered risk assessment and automated compliance checking.',
    },
    {
      title: 'Accounting Firms',
      description: 'Transform your practice with automated bookkeeping and intelligent financial analysis for your clients.',
    },
    {
      title: 'Startup CFOs / Finance CFOs',
      description: 'Make data-driven decisions with real-time financial insights and predictive analytics.',
    }
  ];

  return (
    <section id="roles" className="px-4 md:px-6 pt-12 md:pt-16 pb-4 md:pb-8 bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        <AnimatedBlock>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-gray-800 px-4 md:px-6 py-2 rounded-full text-sm">
              Tailored Intelligence for Every Role
            </div>
          </div>
        </AnimatedBlock>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          Explore How Dabby Empowers Your Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {topRoles.map((role, index) => (
            <AnimatedBlock key={index} delay={index * 0.1}>
              <TiltedCard 
                tooltipText={role.title}
                scaleOnHover={1.02}
                rotateAmplitude={10}
              >
                <div className="h-full flex flex-col">
                  <div className="mb-6 text-[#00FFD1]">
                    <div className="w-12 h-12 bg-[#00FFD1]/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✦</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{role.title}</h3>
                  <p className="text-sm text-gray-300">{role.description}</p>
                </div>
              </TiltedCard>
            </AnimatedBlock>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomRoles.map((role, index) => (
            <TiltedCard 
              key={index}
              tooltipText={role.title}
              scaleOnHover={1.02}
              rotateAmplitude={10}
            >
              <div className="h-full flex flex-col">
                <div className="mb-6 text-[#00FFD1]">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✦</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{role.title}</h3>
                <p className="text-sm text-gray-300">{role.description}</p>
              </div>
            </TiltedCard>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-[#1A2333] px-6 py-3 rounded-full text-sm text-gray-300">
            Manage Workflows Synchronously in Dabby WITH
          </div>
        </div>
        
        {/* Single ScrollVelocity lane */}
        <div className="w-full mt-12 overflow-hidden">
          <ScrollVelocity
            texts={['Datalis', 'AI-Powered', 'Financial Insights', 'Automation', 'Business Intelligence', 'Real-time Monitoring', 'Predictive Analytics', 'Risk Assessment', 'Datalis']}
            speed="slow"
            direction="left"
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#00FFD1]/80 w-full"
          />
        </div>
      </div>
    </section>
  );
}


