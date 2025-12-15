import React from 'react';

const Timeline: React.FC = () => {
    return (
        <section className="py-20 bg-background-dark border-t border-surface-border" id="timeline">
            <div className="max-w-[960px] mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Timeline</h2>
                <div className="relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-surface-border -translate-y-1/2 rounded-full z-0"></div>
                    {/* Vertical Line (Mobile) */}
                    <div className="md:hidden absolute left-8 top-0 h-full w-1 bg-surface-border rounded-full z-0"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="flex md:flex-col items-center gap-6 md:gap-4">
                            <div className="w-16 h-16 rounded-full bg-primary border-4 border-background-dark flex items-center justify-center text-background-dark font-bold text-lg shrink-0 shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">flag</span>
                            </div>
                            <div className="md:text-center pt-2 md:pt-4">
                                <div className="text-primary font-bold text-sm uppercase tracking-wide mb-1">Sep 1</div>
                                <h3 className="text-white font-bold text-lg">Applications Open</h3>
                            </div>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="flex md:flex-col items-center gap-6 md:gap-4">
                            <div className="w-16 h-16 rounded-full bg-surface-dark border-4 border-surface-border md:border-background-dark flex items-center justify-center text-gray-400 font-bold text-lg shrink-0">
                                <span className="material-symbols-outlined">event</span>
                            </div>
                            <div className="md:text-center pt-2 md:pt-4">
                                <div className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-1">Oct 15</div>
                                <h3 className="text-white font-bold text-lg">Deadline</h3>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex md:flex-col items-center gap-6 md:gap-4">
                            <div className="w-16 h-16 rounded-full bg-surface-dark border-4 border-surface-border md:border-background-dark flex items-center justify-center text-gray-400 font-bold text-lg shrink-0">
                                <span className="material-symbols-outlined">video_camera_front</span>
                            </div>
                            <div className="md:text-center pt-2 md:pt-4">
                                <div className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-1">Nov 10</div>
                                <h3 className="text-white font-bold text-lg">Virtual Pitches</h3>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex md:flex-col items-center gap-6 md:gap-4">
                            <div className="w-16 h-16 rounded-full bg-surface-dark border-4 border-surface-border md:border-background-dark flex items-center justify-center text-gray-400 font-bold text-lg shrink-0">
                                <span className="material-symbols-outlined">celebration</span>
                            </div>
                            <div className="md:text-center pt-2 md:pt-4">
                                <div className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-1">Dec 05</div>
                                <h3 className="text-white font-bold text-lg">Finals Gala</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;