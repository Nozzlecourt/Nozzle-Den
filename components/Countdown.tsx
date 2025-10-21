
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: number): TimeLeft | null => {
  const difference = targetDate - new Date().getTime();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div>
      <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wider mb-4">Aftellen tot Kick-off</h3>
      {timeLeft ? (
        <div id="countdown" className="grid grid-cols-4 gap-3 sm:gap-4 text-center max-w-md mx-auto">
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
            <div className="text-4xl sm:text-5xl font-black text-white">{format(timeLeft.days)}</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest">Dagen</div>
          </div>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
            <div className="text-4xl sm:text-5xl font-black text-white">{format(timeLeft.hours)}</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest">Uren</div>
          </div>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
            <div className="text-4xl sm:text-5xl font-black text-white">{format(timeLeft.minutes)}</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest">Minuten</div>
          </div>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
            <div className="text-4xl sm:text-5xl font-black text-white">{format(timeLeft.seconds)}</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest">Seconden</div>
          </div>
        </div>
      ) : (
        <div id="match-live" className="mt-4 bg-green-500/10 border border-green-500 text-green-300 px-4 py-3 rounded-lg max-w-md mx-auto" role="alert">
          <strong className="font-bold">De wedstrijd is nu live!</strong>
        </div>
      )}
    </div>
  );
};

export default Countdown;
