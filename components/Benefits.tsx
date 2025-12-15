import React from 'react';

const Benefits: React.FC = () => {
    return (
        <section className="py-20 bg-background-dark" id="benefits">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Winner Benefits</h2>
                        <p className="text-gray-400">Unlock the resources you need to scale.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
                    <div className="bg-surface-dark rounded-lg border border-surface-border p-6 flex flex-col justify-between hover:border-gray-600 transition-colors">
                        <div className="bg-gray-700/30 w-fit p-3 rounded-full text-white">
                            <span className="material-symbols-outlined text-2xl">school</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Expert Mentorship</h3>
                            <p className="text-gray-400 text-sm">1-on-1 sessions with industry veterans.</p>
                        </div>
                    </div>
                    <div className="bg-surface-dark rounded-lg border border-surface-border p-6 flex flex-col justify-between hover:border-gray-600 transition-colors">
                        <div className="bg-gray-700/30 w-fit p-3 rounded-full text-white">
                            <span className="material-symbols-outlined text-2xl">hub</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Pan-EU Network</h3>
                            <p className="text-gray-400 text-sm">Access to 50+ corporate partners.</p>
                        </div>
                    </div>
                    <div className="md:col-span-1 bg-surface-dark rounded-lg border border-surface-border p-6 flex flex-col justify-between hover:border-gray-600 transition-colors overflow-hidden relative">
                        <div className="absolute right-0 top-0 opacity-10">
                            <span className="material-symbols-outlined text-9xl">podium</span>
                        </div>
                        <div className="bg-gray-700/30 w-fit p-3 rounded-full text-white z-10 relative">
                            <span className="material-symbols-outlined text-2xl">campaign</span>
                        </div>
                        <div className="z-10 relative">
                            <h3 className="text-xl font-bold text-white mb-1">Media Exposure</h3>
                            <p className="text-gray-400 text-sm">Featured in top tech publications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;