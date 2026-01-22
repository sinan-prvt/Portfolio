import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Clean Code', 'Full Stack Development', 'System Architecture'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            cursorChar: '_',
        });
        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center bg-muted overflow-hidden pt-32 lg:pt-48">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 pointer-events-none z-1" />

            <div className="mx-auto max-w-7xl px-6 w-full relative z-10 text-center">
                <div className="flex flex-col items-center space-y-12 animate-reveal">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <div className="relative inline-block">
                            <h1 className="text-[10vw] lg:text-[7vw] font-bold leading-[0.85] text-black uppercase tracking-tighter">
                                MOHAMED<br />
                                <span className="italic font-serif font-light lowercase text-gray-400">sinan</span>
                            </h1>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.8em] text-black/40 uppercase whitespace-nowrap">
                                FULL STACK DEVELOPER
                            </div>
                        </div>
                    </div>

                    {/* Typing Logic & Subtext */}
                    <div className="space-y-12 max-w-4xl mx-auto">
                        <p className="text-lg lg:text-2xl text-gray-400 font-light leading-snug font-serif italic">
                            "Designing invisible structures with <br className="hidden sm:block" />
                            <span ref={typedRef} className="text-black italic font-serif" />"
                        </p>

                        <div className="flex flex-col items-center gap-10 pt-8">
                            <a href="#projects" className="group relative overflow-hidden bg-black text-white px-16 py-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                <span className="relative z-10 text-[11px] font-bold tracking-[0.6em] uppercase">VIEW REPOSITORY</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[11px] font-bold tracking-[0.6em] uppercase">EXPLORE</span>
                            </a>

                            <div className="flex items-center gap-6 opacity-30">
                                <div className="h-px w-12 bg-black" />
                                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">SOFTWARE CRAFTSMAN</span>
                                <div className="h-px w-12 bg-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Icon Instead of Text */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center gap-4 animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/20">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
}
