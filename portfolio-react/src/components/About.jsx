export default function About() {
    return (
        <section id="about" className="relative pb-24 pt-32 bg-transparent text-black">
            {/* Blending Glows */}
            <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-slate-100/30 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FEF08A15] blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
                <div className="space-y-12 animate-reveal">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-gray-300">About Me</span>
                        <div className="h-[1px] w-12 bg-black/10 mx-auto mt-4" />
                    </div>

                    <p className="text-2xl lg:text-3xl font-medium text-black leading-[1.6] tracking-tight">
                        I am Mohamed Sinan, a 19-year-old Full Stack Developer from Kerala, India. My journey in tech is driven by a passion for backend-centric development and system design.
                        With a deep interest in performance and scalability, I specialize in building resilient architectures using Python (Django) and React.
                        I thrive on solving complex architectural challenges and bridging the gap between robust server-side logic and fluid, intuitive user interfaces.
                        My goal is always to create digital experiences that are not only functional but also clean, efficient, and built to last.
                    </p>
                </div>
            </div>
        </section>
    );
}
