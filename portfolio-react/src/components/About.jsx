export default function About() {
    return (
        <section id="about" className="relative py-32 lg:py-48 bg-white text-black overflow-hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Vertical Label (Mobile hidden, Desktop visible) */}
                    <div className="hidden md:flex md:col-span-1 flex-col items-center pt-2 h-full justify-start">
                        <span className="text-[10px] font-bold tracking-[1em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">
                            01 — PROFILE
                        </span>
                        <div className="h-32 w-px bg-black/10 mt-12" />
                    </div>

                    {/* Image Side - Layered Architectural Style */}
                    <div className="col-span-12 md:col-span-5 relative group">
                        {/* 1. Structural Backdrop Frame */}
                        <div className="absolute top-8 -right-8 w-full h-full border-2 border-black/5 hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />

                        {/* 2. Solid Accent Block */}
                        <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-gray-50 -z-10" />

                        {/* 3. Main Image Container */}
                        <div className="relative z-10 shadow-2xl overflow-hidden bg-white">
                            <img
                                src="/assets/me.jpg"
                                alt="Mohamed Sinan Profile"
                                className="w-full aspect-[3/4] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            {/* Inner Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="col-span-12 md:col-span-6 space-y-12">
                        <div className="space-y-8">
                            {/* Big visual separator */}
                            <div className="w-20 h-1.5 bg-black" />

                            {/* Profile Summary */}
                            <p className="text-xl lg:text-3xl leading-tight font-light text-black">
                                I am <span className="font-semibold">Mohamed Sinan</span> from Malappuram, Kerala.
                            </p>
                            <p className="text-lg lg:text-xl leading-relaxed font-light text-gray-600 mt-6">
                                As a versatile Full Stack Developer, I specialize in architecting scalable digital solutions that bridge complex backend logic with intuitive frontend experiences. My expertise lies in building robust systems using <span className="font-serif italic text-gray-400">Python (Django)</span> and <span className="font-serif italic text-gray-400">React</span>, ensuring every application is performance-optimized and secure.
                            </p>
                            <p className="text-lg lg:text-xl leading-relaxed font-light text-gray-600 mt-6">
                                Beyond the code, I am deeply focused on modern DevOps practices and cloud-native architectures, leveraging tools like <span className="text-black/70 font-medium">Docker</span> and <span className="text-black/70 font-medium">AWS</span> to deploy resilient software infrastructure.
                            </p>

                            {/* Passion Section */}
                            <div className="space-y-4 pt-4">
                                <span className="block text-xs font-bold tracking-[0.2em] uppercase text-black/40">
                                    MY PASSION
                                </span>
                                <p className="text-lg leading-relaxed font-light text-gray-600 font-serif italic border-l-2 border-black/5 pl-6">
                                    "Passionate about delivering scalable, high-performance software with clean code and modern workflows."
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a href="#contact" className="group inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-black">
                                <span className="border-b border-black/30 pb-1 group-hover:border-black transition-colors">Start a conversation</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
