import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialDays, initialHours, initialMinutes, initialSeconds }) => {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center bg-[#0B1221]/40 rounded-xl p-6 
      min-w-[120px] shadow-lg border border-[#00FFD1]/20 backdrop-blur-sm
      transition-all duration-300 hover:border-[#00FFD1]/30 hover:bg-[#0B1221]/50
      md:min-w-[100px] md:p-4 sm:min-w-[80px] sm:p-3">
      <div className="text-5xl font-bold text-[#00FFD1] mb-2 
        animate-[pulse_2s_ease-in-out_infinite]
        [text-shadow:0_0_20px_rgba(0,255,209,0.5)]
        md:text-4xl sm:text-3xl">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm font-medium text-[#00FFD1]/80 tracking-wider
        md:text-xs sm:text-[0.7rem]">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-6 my-12 mx-auto
      md:gap-4 sm:gap-2">
      <TimeBlock value={days} label="DAYS" />
      <TimeBlock value={hours} label="HOURS" />
      <TimeBlock value={minutes} label="MINUTES" />
      <TimeBlock value={seconds} label="SECONDS" />
    </div>
  );
};

export default CountdownTimer;

