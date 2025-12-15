import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section className="py-20 bg-surface-dark/20" id="faq">
            <div className="max-w-[720px] mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                    <details className="group bg-surface-dark border border-surface-border rounded-lg overflow-hidden transition-all duration-300 open:border-primary/50">
                        <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                            <span>Who can apply?</span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-400">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-surface-border/50 pt-4">
                            We welcome early-stage startups (Pre-seed to Series A) based in Europe (EU27 + UK, Norway, Switzerland) with a clear focus on environmental sustainability.
                        </div>
                    </details>
                    
                    <details className="group bg-surface-dark border border-surface-border rounded-lg overflow-hidden transition-all duration-300 open:border-primary/50">
                        <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                            <span>Is there an application fee?</span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-400">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-surface-border/50 pt-4">
                            No, applying to the European Sustainability Startup Arena is completely free. We believe in removing barriers to innovation.
                        </div>
                    </details>
                    
                    <details className="group bg-surface-dark border border-surface-border rounded-lg overflow-hidden transition-all duration-300 open:border-primary/50">
                        <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                            <span>Do you take equity?</span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-400">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-surface-border/50 pt-4">
                            No. The €50k prize is a cash grant. Any subsequent investment opportunities from our partners may involve equity discussions, but the competition prize itself is equity-free.
                        </div>
                    </details>
                    
                    <details className="group bg-surface-dark border border-surface-border rounded-lg overflow-hidden transition-all duration-300 open:border-primary/50">
                        <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                            <span>Can I apply if I just have an idea?</span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-400">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-surface-border/50 pt-4">
                            Ideally, we are looking for startups with at least a Minimum Viable Product (MVP) or prototype. However, compelling deep-tech research with strong commercial potential will also be considered.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;