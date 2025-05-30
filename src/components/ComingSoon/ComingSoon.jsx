import { memo, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import Squares from './Squares/Squares';
import TrueFocus from './TextAnimation/TextAnimation';
import TextCursor from './TextCursor';
import '../../styles/cursor.css';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = memo(() => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }
    
    // Open the Razorpay payment link in a new tab
    window.open('https://rzp.io/rzp/BndpXRpu', '_blank');
  };

  return (
    <div className="relative h-screen bg-[#070B14] flex items-center justify-center overflow-hidden">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-20">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-[#0B1221]/70 backdrop-blur-sm rounded-full border border-[#00FFD1]/20 text-[#00FFD1] hover:bg-[#0B1221] transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>
      
      <TextCursor
        delay={0.01}
        spacing={100}
        followMouseDirection={false}
        randomFloat={false}
        exitDuration={0.2}
        removalInterval={30}
        maxPoints={5}
        size={32}
      />
      
      {/* Animated Squares Background */}
      <div className="absolute inset-0 bg-[#070B14]">  
        <Squares 
          speed={1} 
          squareSize={32}
          direction='diagonal'
          borderColor='rgba(0, 255, 209, 0.3)'
          hoverFillColor='rgba(0, 255, 209, 0.1)'
          className="teal-hover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#070B14]/90 via-[#070B14]/80 to-[#070B14]/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto h-full flex flex-col justify-center gap-4">
        {/* Header */}
        <div className="flex items-center justify-center space-x-3">
          <img 
            src="/Datalis1.png"
            alt="Detalis Logo" 
            className="w-25 h-25 md:w-20 md:h-25 object-contain filter drop-shadow-lg"
          />
          <img 
            src="/Datalis.png"
            alt="Detalis Text" 
            className="h-8 md:h-12 object-contain filter drop-shadow-lg"
          />
        </div>

        {/* TrueFocus */}
        <div className="flex justify-center">
          <TrueFocus 
            sentence="Coming Soon"
            manualMode={false}
            blurAmount={5}
            borderColor="rgba(0, 255, 209, 0.5)"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>

        <CountdownTimer 
          initialDays={10}
          initialHours={24}
          initialMinutes={60}
          initialSeconds={60}
        />
        
        <p className="text-gray-300 text-base max-w-xl mx-auto">
          Revolutionizing the way you connect, create, and collaborate. 
          Join us on this exciting journey as we prepare to launch.
        </p>

        {/* Early Bird Offers Section */}
        <div className="bg-[#0B1221]/50 rounded-lg p-4 backdrop-blur-sm border border-[#00FFD1]/20 max-w-sm mx-auto w-full">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
            <span className="mr-2">🎁</span> Early Bird Offers
          </h3>
          
          <div className="space-y-2.5 text-left mb-4">
            <div className="flex items-center text-gray-300 text-sm">
              <svg className="w-4 h-4 text-[#00FFD1] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Access to Auditor & Tax Agents</span>
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              <svg className="w-4 h-4 text-[#00FFD1] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium Access on Launch</span>
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              <svg className="w-4 h-4 text-[#00FFD1] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Exclusive Webinars & Training</span>
            </div>
          </div>
          
          {/* Email input and Razorpay Button */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-[#0B1221]/50 border border-[#00FFD1]/20 
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-[#00FFD1] focus:border-transparent backdrop-blur-sm text-sm"
              required
            />
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-[#00FFD1]/90 to-[#00FFD1] hover:from-[#00FFD1] 
                hover:to-[#00FFD1]/90 text-[#070B14] rounded-lg transition-all duration-300 
                transform hover:scale-[1.02] font-medium text-sm shadow-lg 
                hover:shadow-[#00FFD1]/25 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Claim offer via Razorpay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

ComingSoon.displayName = 'ComingSoon';
export default ComingSoon;






