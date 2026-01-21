export default function Contact() {
    return (
        <section id="contact" className="relative py-editorial bg-black text-white overflow-hidden">
            {/* Background Graphic Element */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold tracking-tighter uppercase select-none">
                    SINAN
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
                <div className="space-y-20">
                    <div className="space-y-8">
                        <div className="flex justify-center items-center gap-6">
                            <div className="h-px w-10 bg-white/20" />
                            <span className="text-[11px] font-bold tracking-[0.6em] text-gray-500 uppercase">05 — PARTNERSHIP</span>
                            <div className="h-px w-10 bg-white/20" />
                        </div>
                        <h2 className="text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] uppercase">
                            LET'S COMMENCE<br />
                            <span className="italic font-serif font-light lowercase text-gray-500 pr-4">the</span> DIALOGUE
                        </h2>
                    </div>

                    <p className="text-2xl lg:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed font-serif italic pt-10 selection:bg-white selection:text-black">
                        "Professional excellence is the result of intention, sincere effort, and intelligent execution."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-16 pt-24">
                        <a
                            href="mailto:mohamedsinan9400@gmail.com"
                            className="group relative px-20 py-10 bg-white text-black overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(255,255,255,0.05)]"
                        >
                            <span className="relative z-10 font-bold tracking-[0.6em] text-xs uppercase">INITIATE PROJECTS</span>
                            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                            <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-bold tracking-[0.6em] text-xs uppercase">SEND TRANSMISSION</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/mohamed-sinan-75107a364"
                            className="text-[11px] font-bold tracking-[0.6em] uppercase border-b border-white/20 hover:border-white pb-4 transition-all duration-500"
                        >
                            LINKEDIN BLUEPRINT
                        </a>
                    </div>

                    {/* Social / Info Footer */}
                    <div className="pt-48 flex flex-col items-center gap-12">
                        <div className="h-32 w-px bg-white/10" />
                        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
                            <a href="https://github.com/sinan-prvt" className="hover:text-white transition-colors">GITHUB ARCHIVE</a>
                            <a href="https://linkedin.com/in/mohamed-sinan-75107a364" className="hover:text-white transition-colors">LINKEDIN PROFILE</a>
                            <span className="text-gray-800 hidden sm:block">/</span>
                            <span>EST. KERALA, INDIA</span>
                        </div>
                        <div className="text-[10px] font-bold tracking-[0.8em] text-gray-700 uppercase">
                            &copy; 2026 MOHAMED SINAN — STRUCTURAL INTEGRITY
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
