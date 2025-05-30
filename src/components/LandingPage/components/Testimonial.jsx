import React from 'react';
import Masonry from '../../Masonry/Masonry';
import AnimationWrapper from './AnimationWrapper';
import ShinyText from './ShinyText';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      author: "Ravi Kumar",
      role: "CFO, TechStart Inc.",
      content: "Dabby saves me at least 5 hours a week. I just upload client files, and it generates complete, ready-to-review tax reports in minutes.",
      height: "tall"
    },
    {
      id: 2,
      author: "Priya Desai",
      role: "Partner, Accounting Firm",
      content: "My team handles multiple client books. With Dabby, we standardize reports across formats without losing the details that matter.",
      height: "medium"
    },
    {
      id: 3,
      author: "Neha Mehta",
      role: "Founder, Retail Safe",
      content: "As a small business owner, I don't have time to dig through data. Dabby gives me what's working—and what's not—with zero hassle.",
      height: "medium"
    },
    {
      id: 4,
      author: "Arjun K",
      role: "Finance Manager, AK LLC",
      content: "We connected Dabby to our financial sheets, and suddenly our audit prep went from weeks to days. It's like having a smart analyst at scale.",
      height: "medium"
    },
    {
      id: 5,
      author: "Ananya P",
      role: "Data & Compliance Officer",
      content: "Dabby feels like having a financial co-pilot. I can ask questions and get instant clarity—without touching Excel formulas.",
      height: "short"
    }
  ];

  const testimonialCards = testimonials.map((testimonial, index) => ({
    id: testimonial.id,
    content: (
      <AnimationWrapper delay={index * 0.1}>
        <div className={`bg-gradient-to-br from-[#0B1221] to-[#1A2333] p-4 rounded-xl border border-gray-800/50 
          ${testimonial.height === 'tall' ? 'min-h-[180px]' : 
            testimonial.height === 'medium' ? 'min-h-[160px]' : 'min-h-[140px]'}`}>
          <div className="h-full flex flex-col">
            <div className="flex-1">
              <ShinyText 
                text={`"${testimonial.content}"`}
                disabled={false}
                speed={3}
                className="text-gray-300 text-sm leading-relaxed"
              />
            </div>
            <div className="pt-2 border-t border-gray-800/30">
              <ShinyText 
                text={testimonial.author}
                disabled={false}
                speed={2}
                className="font-semibold text-white text-sm"
              />
              <ShinyText 
                text={testimonial.role}
                disabled={false}
                speed={2}
                className="text-xs text-gray-400"
              />
            </div>
          </div>
        </div>
      </AnimationWrapper>
    )
  }));

  return (
    <section id="testimonial" className="px-4 md:px-6 pt-12 md:pt-16 pb-4 md:pb-8 bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-800 px-4 md:px-6 py-2 rounded-full text-sm mb-4">
            What Our Early Users Are Saying
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by Finance Teams Everywhere
          </h2>
        </div>
        <Masonry data={testimonialCards} />
      </div>
    </section>
  );
}
