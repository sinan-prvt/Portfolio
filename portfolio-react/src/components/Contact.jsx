export default function Contact() {
    return (
        <section id="contact" className="relative py-32 lg:py-60 bg-muted text-black overflow-hidden border-t border-black/5">
            {/* Background Structural Line */}
            <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/[0.03] hidden lg:block" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-12 gap-x-6">
                    {/* Vertical Sidebar Label */}
                    <div className="hidden lg:flex col-span-1 flex-col items-center pt-2">
                        <span className="text-[10px] font-bold tracking-[1em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">
                            05 — PARTNERSHIP
                        </span>
                        <div className="flex-grow w-px bg-black/10 mt-12" />
                    </div>

                    {/* Content */}
                    <div className="col-span-12 lg:col-span-11 lg:pl-20 space-y-20">
                        <div className="space-y-12">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-px bg-black" />
                                <span className="text-[11px] font-bold tracking-[0.4em] text-black uppercase">
                                    CONTACT
                                </span>
                            </div>

                            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                                LET'S COMMENCE<br />
                                <span className="italic font-serif font-light lowercase text-gray-400">the dialogue</span>
                            </h2>
                        </div>

                        <p className="text-2xl lg:text-3xl text-gray-400 font-light max-w-3xl leading-relaxed font-serif italic border-l-2 border-black/5 pl-10">
                            "Professional excellence is the result of intention, sincere effort, and intelligent execution."
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-16 pt-10">
                            <a
                                href="mailto:mohamedsinan9400@gmail.com"
                                className="group relative px-16 py-8 bg-black text-white overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                            >
                                <span className="relative z-10 font-bold tracking-[0.6em] text-xs uppercase">INITIATE PROJECTS</span>
                                <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </a>
                            <a
                                href="https://linkedin.com/in/mohamed-sinan-75107a364"
                                className="group relative text-[11px] font-bold tracking-[0.6em] uppercase flex items-center gap-4 overflow-hidden py-3"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-black/50 px-4">LINKEDIN BLUEPRINT</span>
                                <div className="absolute inset-0 bg-black/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
                                <div className="h-px w-8 bg-black/20" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
