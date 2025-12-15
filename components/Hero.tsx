import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    // Basic countdown implementation targeting 14 days from now on initial load
    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 8,
        minutes: 30,
        seconds: 45
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/60 to-background-dark z-10"></div>
                <div 
                    className="h-full w-full bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFvyFAXl-0qs8IsAX13DjZcSntdLpsTdnzJygkxkh3pNMNxNMPREDhZo_8Q9Z29sq04kHCRfz5M9S9a3-adNam8VO207ym2q__y7YFku2Gs5in3_bVJ_u2rCItbsPLu4CJbdgxMxo4ImiL4Er9ANjZnQSQOA0IFR1mep-q7OjIGRrZwNboId2XqqqjrUJcqzjWN5BgApIAuS7tpnitX_KK656lZniJFDk3c_iLEu_v8_6-7Sn7nUk4vi4m1aKmiG-PftffVcxZ8-8')" }}
                    aria-label="Abstract view of earth from space showing glowing green networks"
                >
                </div>
            </div>
            
            <div className="relative z-10 max-w-[1280px] mx-auto px-4 flex flex-col items-center text-center gap-8 pt-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-surface-border text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Applications Open
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                    Innovate for a <br className="hidden md:block"/> <span className="text-primary">Greener Europe</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                    Join the premier sustainability startup competition. Accelerate your impact with €50k funding, mentorship, and a pan-European network.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                    <button className="h-12 px-8 rounded-full bg-primary text-background-dark font-bold text-base hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        Apply Now
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-surface-dark/40 border border-surface-border backdrop-blur-md w-full max-w-3xl">
                    <div className="grid grid-cols-4 gap-4 text-center divide-x divide-surface-border/50">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white">{formatTime(timeLeft.days)}</span>
                            <span className="text-xs uppercase text-gray-400 mt-1">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white">{formatTime(timeLeft.hours)}</span>
                            <span className="text-xs uppercase text-gray-400 mt-1">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white">{formatTime(timeLeft.minutes)}</span>
                            <span className="text-xs uppercase text-gray-400 mt-1">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white">{formatTime(timeLeft.seconds)}</span>
                            <span className="text-xs uppercase text-gray-400 mt-1">Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;