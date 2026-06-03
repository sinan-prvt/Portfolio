import useScrollAnimation from '../hooks/useScrollAnimation';

export default function About() {
    const textRef = useScrollAnimation();

    return (
        <section id="about" className="relative pb-16 pt-20 md:pb-24 md:pt-32 bg-transparent text-black" style={{overflow:'hidden'}}>
            {/* Blending Glows */}
            <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-slate-100/30 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-0 w-[40vw] h-[50vw] bg-[#FEF08A15] blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-3xl px-5 relative z-10 text-center">
                <div ref={textRef} className="space-y-8 opacity-0 translate-y-8">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-gray-300">About Me</span>
                        <div className="h-[1px] w-12 bg-black/10 mx-auto mt-4" />
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black leading-[1.8] tracking-tight px-2">
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
