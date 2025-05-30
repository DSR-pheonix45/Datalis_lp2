import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const openCalendly = () => {
    window.open('https://calendly.com/datalis/sales-call', '_blank');
  };

  return (
    <section className="px-4 md:px-6 py-16 md:py-24 bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-800 px-4 md:px-6 py-2 rounded-full text-sm mb-4">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Select the perfect plan for your business needs. All plans include core features with different usage limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Base Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#0B1221] border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Base</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">₹999</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Perfect for small businesses and startups.</p>
              <button className="w-full py-3 px-4 bg-[#00FFD1]/10 text-[#00FFD1] rounded-lg border border-[#00FFD1]/20 hover:bg-[#00FFD1]/20 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-t border-gray-800 p-6">
              <ul className="space-y-3">
                <Feature available>Dabby Agent</Feature>
                <Feature available>Basic Analytics</Feature>
                <Feature available>Email Support</Feature>
                <Feature available>File Parsing</Feature>
              </ul>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0B1221] border border-[#00FFD1]/30 rounded-xl overflow-hidden relative transform scale-105 shadow-lg shadow-[#00FFD1]/10"
          >
            <div className="absolute top-0 right-0 bg-[#00FFD1] text-black px-4 py-1 text-sm font-medium">
              Popular
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">₹4999</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 mb-6">For growing businesses with advanced needs.</p>
              <button className="w-full py-3 px-4 bg-[#00FFD1] text-black rounded-lg hover:bg-[#00FFD1]/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-t border-gray-800 p-6">
              <ul className="space-y-3">
                <Feature available>All 3 Agents</Feature>
                <Feature available>Advanced Analytics</Feature>
                <Feature available>Priority Support</Feature>
                <Feature available>File Parsing</Feature>
                <Feature available>Early Access to Cloud</Feature>
              </ul>
            </div>
          </motion.div>

          {/* B2B Custom Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0B1221] border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">B2B Custom</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-gray-400 mb-6">Tailored solutions for enterprise needs.</p>
              <button 
                onClick={openCalendly}
                className="w-full py-3 px-4 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Schedule a Call
              </button>
            </div>
            <div className="border-t border-gray-800 p-6">
              <ul className="space-y-3">
                <Feature available>Everything in Premium</Feature>
                <Feature available>Dedicated Account Manager</Feature>
                <Feature available>Custom AI Training</Feature>
                <Feature available>White-labeling Options</Feature>
                <Feature available>SLA Guarantees</Feature>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Need Help Choosing?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect plan for your business needs.
            Schedule a consultation call with our experts.
          </p>
          <button 
            onClick={openCalendly}
            className="px-8 py-3 bg-[#00FFD1] rounded-full text-black font-medium hover:bg-[#00FFD1]/90 hover:shadow-[0_0_20px_rgba(0,255,209,0.4)]"
          >
            Talk to Sales
          </button>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0B1221] p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold mb-3">What payment methods do you accept?</h4>
              <p className="text-gray-400">We accept all major credit cards, debit cards, and UPI payments. For B2B custom plans, we also offer invoice-based payments.</p>
            </div>
            
            <div className="bg-[#0B1221] p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold mb-3">Can I upgrade or downgrade my plan?</h4>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            
            <div className="bg-[#0B1221] p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold mb-3">Is there a free trial available?</h4>
              <p className="text-gray-400">Yes, we offer a 14-day free trial on our Base and Premium plans. No credit card required to start.</p>
            </div>
            
            <div className="bg-[#0B1221] p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold mb-3">What kind of support is included?</h4>
              <p className="text-gray-400">All plans include email support. Premium plans include priority support with faster response times, while B2B Custom plans include dedicated account managers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature component for consistent styling
function Feature({ children, available }) {
  return (
    <li className="flex items-start">
      {available ? (
        <Check className="h-5 w-5 text-[#00FFD1] flex-shrink-0 mr-2" />
      ) : (
        <X className="h-5 w-5 text-gray-500 flex-shrink-0 mr-2" />
      )}
      <span className={available ? "text-gray-300" : "text-gray-500"}>
        {children}
      </span>
    </li>
  );
}



