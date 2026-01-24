export default function About() {
    return (
        <section id="about" className="relative py-24 lg:py-48 bg-white text-black overflow-hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Vertical Label (Desktop only) */}
                    <div className="hidden md:flex md:col-span-1 flex-col items-center pt-2 h-full justify-start">
                        <span className="text-[10px] font-bold tracking-[1em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">
                            01 — PROFILE
                        </span>
                        <div className="h-32 w-px bg-black/10 mt-12" />
                    </div>

                    {/* Image Side */}
                    <div className="col-span-12 md:col-span-5 relative group mt-8 md:mt-0">
                        {/* Mobile-safe layered design */}

                        {/* 1. Backdrop Frame (Desktop only) */}
                        <div className="absolute top-6 -right-6 w-full h-full border-2 border-black/5 hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />

                        {/* 2. Accent Block (Adjusted for mobile to avoid overflow) */}
                        <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-3/4 h-3/4 bg-gray-50 -z-10" />

                        {/* 3. Main Image */}
                        <div className="relative z-10 shadow-xl overflow-hidden bg-white">
                            <img
                                src="/assets/me.jpg"
                                alt="Mohamed Sinan Profile"
                                className="w-full aspect-[3/4] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Text Content - Redesigned Typography */}
                    <div className="col-span-12 md:col-span-6 space-y-10">
                        <div>
                            {/* Name Headline */}
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-black mb-4">
                                I am <br /> Mohamed Sinan.
                            </h2>
                            {/* Location Meta */}
                            <div className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
                                <div className="w-8 h-px bg-black/20" />
                                <span>Malappuram, Kerala</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Lead Paragraph */}
                            <p className="text-xl lg:text-2xl leading-relaxed font-serif italic text-black font-light">
                                As a versatile Full Stack Developer, I specialize in architecting scalable digital solutions that bridge complex backend logic with intuitive frontend experiences.
                            </p>

                            {/* Secondary Paragraph */}
                            <p className="text-base lg:text-lg leading-relaxed font-light text-gray-600">
                                My expertise lies in building robust systems using <strong className="text-black font-medium">Python (Django)</strong> and <strong className="text-black font-medium">React</strong>. Beyond the code, I am deeply focused on modern DevOps practices, leveraging <strong className="text-black font-medium">Docker</strong> and <strong className="text-black font-medium">AWS</strong> to deploy resilient infrastructure.
                            </p>

                            {/* Passion Block */}
                            <div className="bg-gray-50 p-6 border-l-2 border-black">
                                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 mb-3">
                                    MY MISSION
                                </span>
                                <p className="text-lg font-light text-gray-800 italic">
                                    "Passionate about delivering scalable, high-performance software with clean code and modern workflows."
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a href="#contact" className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:opacity-50 transition-opacity">
                                <span>Let's collaborate</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
