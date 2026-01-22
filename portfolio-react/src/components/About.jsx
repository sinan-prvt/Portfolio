export default function About() {
    return (
        <section id="about" className="relative py-editorial bg-muted text-black overflow-hidden border-t border-black/[0.02]">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="editorial-grid items-start gap-y-32">
                    {/* Portrait Side */}
                    <div className="col-span-12 lg:col-span-5 space-y-16">
                        <div className="relative group max-w-sm">
                            <div className="absolute -inset-10 border border-black/5 scale-95 transition-transform duration-1000 group-hover:scale-105" />
                            <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden shadow-[30px_30px_60px_rgba(0,0,0,0.03)]">
                                <img
                                    src="/assets/me.jpg"
                                    alt="Mohamed Sinan Profile"
                                    className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110"
                                />
                            </div>
                            <p className="absolute -bottom-8 -right-12 text-[9px] font-bold tracking-[0.5em] text-gray-300 uppercase [writing-mode:vertical-rl]">
                                FULL STACK DEVELOPER — 2026
                            </p>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="col-span-12 lg:col-span-7 lg:pt-24 space-y-24">
                        <div className="space-y-12 max-w-2xl">
                            <span className="text-[10px] font-bold tracking-[0.5em] text-black/30 uppercase block mb-8">01 — PROFILE</span>
                            <p className="text-xl text-gray-600 leading-relaxed font-light first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-black first-letter:mt-1">
                                Versatile Full Stack Developer skilled in designing and developing end-to-end web applications using React,
                                Python, Django, and PostgreSQL. Experienced in building responsive, user-friendly frontends and robust,
                                secure backend systems with Django REST Framework. Adept at API integration, cloud deployment with AWS,
                                and containerized environments using Docker. Passionate about delivering scalable, high-performance software
                                with clean code and modern workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
