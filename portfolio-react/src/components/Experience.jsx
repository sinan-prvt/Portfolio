const experiences = [
    {
        year: '2025 — PRESENT',
        role: 'Python Full Stack Developer Intern',
        company: 'Bridgeon Solutions LLP, Calicut',
        desc: 'Engineered scalable REST APIs and responsive UIs using Django & React. Optimized backend performance by ~20%, implemented secure JWT authentication, and integrated payment gateways in an Agile environment.'
    }
];

import useScrollAnimation from '../hooks/useScrollAnimation';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
    const headerRef = useScrollAnimation();

    return (
        <section id="experience" className="relative py-24 md:py-32 bg-[#FDFCF6] text-black overflow-hidden border-t border-black/5">
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <div ref={headerRef} className="mb-20 text-center opacity-0 translate-y-8">
                    <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">Career</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">Experience</h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <ScrollReveal key={exp.company} delay={idx * 0.1}>
                            <div
                                className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                            >
                                <div className="md:w-1/4 pt-2">
                                    <span className="text-xs font-bold text-black/40 uppercase tracking-[0.2em] border-b border-black/10 pb-2">
                                        {exp.year}
                                    </span>
                                </div>
                                <div className="md:w-3/4 space-y-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight">{exp.role}</h3>
                                        <p className="text-sm font-bold text-black/60 uppercase tracking-widest mt-2">{exp.company}</p>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
