import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-surface-border bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-3xl">eco</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight hidden sm:block">Euro Sustainability Arena</span>
                        <span className="text-lg font-bold tracking-tight sm:hidden">ESA</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Mission', 'Process', 'Benefits', 'Timeline', 'FAQ'].map((item) => (
                            <a 
                                key={item}
                                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" 
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-primary hover:bg-green-400 text-background-dark text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(54,226,123,0.3)] hover:shadow-[0_0_25px_rgba(54,226,123,0.5)]">
                            Apply Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-background-dark border-b border-surface-border absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
                        {['Mission', 'Process', 'Benefits', 'Timeline', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-surface-dark transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <div className="pt-4">
                            <button className="w-full bg-primary hover:bg-green-400 text-background-dark text-sm font-bold px-5 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(54,226,123,0.3)]">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;