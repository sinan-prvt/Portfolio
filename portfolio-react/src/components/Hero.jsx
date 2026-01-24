import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['System Architecture', 'Full Stack Engineering', 'Digital Experiences'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: false,
        });
        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center bg-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Top Label */}
                    <div className="flex items-center gap-4 animate-fade-in-up delay-100">
                        <div className="h-px w-12 bg-black/20" />
                        <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
                            PORTFOLIO 2026
                        </span>
                        <div className="h-px w-12 bg-black/20" />
                    </div>

                    {/* Main Title */}
                    <h1 className="text-[12vw] lg:text-[10vw] font-bold leading-[0.8] text-black uppercase tracking-tighter animate-fade-in-up delay-200">
                        MOHAMED<br />
                        <span className="text-gray-300">SINAN</span>
                    </h1>

                    {/* Subtext */}
                    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up delay-300">
                        <p className="text-xl lg:text-2xl text-gray-600 font-serif italic leading-relaxed">
                            "Specializing in{' '}
                            <span ref={typedRef} className="text-black not-italic font-sans font-medium" />"
                        </p>
                    </div>

                    {/* Action */}
                    <div className="pt-8 animate-fade-in-up delay-400">
                        <a href="#projects" className="group relative inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-black hover:text-black/60 transition-colors">
                            <span className="border-b border-black pb-1 group-hover:border-black/60 transition-colors">EXPLORE WORKS</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[9px] font-bold tracking-[0.3em] text-black/30 uppercase">SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-black/30 to-transparent" />
            </div>
        </section>
    );
}
