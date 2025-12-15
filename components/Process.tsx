import React from 'react';

const Process: React.FC = () => {
    return (
        <section className="py-20 bg-surface-dark/30 border-y border-surface-border" id="process">
            <div className="max-w-[1280px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">A simple, transparent process designed to get you from application to acceleration in three steps.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-background-dark p-8 rounded-2xl border border-surface-border hover:border-primary/50 transition-colors group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background-dark font-bold text-xl shadow-lg shadow-primary/20">1</div>
                        <div className="mt-4 flex flex-col items-center">
                            <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-4 transition-colors">edit_document</span>
                            <h3 className="text-white font-bold text-xl mb-2">Apply Online</h3>
                            <p className="text-gray-400 text-sm">Submit your pitch deck and impact metrics before the deadline. It takes less than 20 minutes.</p>
                        </div>
                    </div>
                    <div className="bg-background-dark p-8 rounded-2xl border border-surface-border hover:border-primary/50 transition-colors group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-surface-border text-white rounded-full flex items-center justify-center font-bold text-xl border border-surface-border group-hover:bg-primary group-hover:text-background-dark transition-colors">2</div>
                        <div className="mt-4 flex flex-col items-center">
                            <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-4 transition-colors">groups</span>
                            <h3 className="text-white font-bold text-xl mb-2">Semi-Finals</h3>
                            <p className="text-gray-400 text-sm">Selected startups pitch virtually to our panel of regional experts and investors.</p>
                        </div>
                    </div>
                    <div className="bg-background-dark p-8 rounded-2xl border border-surface-border hover:border-primary/50 transition-colors group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-surface-border text-white rounded-full flex items-center justify-center font-bold text-xl border border-surface-border group-hover:bg-primary group-hover:text-background-dark transition-colors">3</div>
                        <div className="mt-4 flex flex-col items-center">
                            <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-4 transition-colors">trophy</span>
                            <h3 className="text-white font-bold text-xl mb-2">The Grand Finale</h3>
                            <p className="text-gray-400 text-sm">Top 10 finalists fly to Brussels to pitch for the €50k prize and partnership deals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;