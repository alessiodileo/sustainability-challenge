import React from 'react';

const Mission: React.FC = () => {
    return (
        <section className="py-20 bg-background-dark" id="mission">
            <div className="max-w-[1280px] mx-auto px-4 pl-8 md:pl-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Mission</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Empowering the next generation of climate-tech.</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            The European Sustainability Startup Arena is more than a competition. It's a movement to scale solutions that matter. We connect the brightest minds in clean energy, circular economy, and agritech with the capital and connections they need to thrive.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">forest</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Carbon Neutrality</h4>
                                    <p className="text-gray-400 text-sm">Focusing on ventures that actively reduce carbon footprints.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">public</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Pan-European Scale</h4>
                                    <p className="text-gray-400 text-sm">Connecting hubs from Berlin to Stockholm to Paris.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">memory</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Deep-Tech Innovation</h4>
                                    <p className="text-gray-400 text-sm">Supporting R&D-heavy solutions for complex problems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-lg overflow-hidden border border-surface-border group">
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                        <img 
                            alt="Close up of green leaves with water droplets in dark lighting" 
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsaBHMc8Xo5KPmnY5ql3vIC2uOxh0atA03f-cr-3l1JMen564tz1GiAZTzBoHQ9d4F6X3Ezqu31KoKARryHGeZZYUW6l8wQ4wHoihk7jXKeS3T0FPO4787PZ5nEzYBFV7H0NN2UlFeVcB4bPV3dX0FX9n1jY35NdBjbpuIb91eOLFow7yG2KMl0SCdiWiYvioUSUZIhXBYSTXoq3F560vXbcgyyxjqgnvqamTaYR9VOWRnahkd2z40IeBtGPVIjzIb-xF168f58nk"
                        />
                        <div className="absolute bottom-6 left-6 z-20 max-w-xs">
                            <p className="text-white font-bold text-xl">"Innovation is the only way we solve the climate crisis."</p>
                            <p className="text-primary text-sm mt-2">- Arena Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;