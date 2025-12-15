import React from 'react';

const Supporters: React.FC = () => {
    return (
        <div className="w-full bg-background-dark border-y border-surface-border overflow-hidden py-8">
            <div className="max-w-[1280px] mx-auto px-4">
                <p className="text-center text-sm text-gray-500 mb-6 font-medium uppercase tracking-widest">Supported by leading hubs in</p>
                <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-white">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">location_city</span>
                        <span className="font-bold text-xl">BERLIN</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">location_city</span>
                        <span className="font-bold text-xl">PARIS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">location_city</span>
                        <span className="font-bold text-xl">STOCKHOLM</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">location_city</span>
                        <span className="font-bold text-xl">AMSTERDAM</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">location_city</span>
                        <span className="font-bold text-xl">MADRID</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supporters;