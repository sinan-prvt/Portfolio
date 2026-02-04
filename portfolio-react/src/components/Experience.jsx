const experiences = [
    {
        year: '2024 — PRESENT',
        role: 'Full Stack Engineer',
        company: 'Freelance Studio',
        desc: 'Crafting high-end digital experiences and scalable web architectures for global clients, focusing on React and Python ecosystems.'
    },
    {
        year: '2023 — 2024',
        role: 'Frontend Developer',
        company: 'Creative Agency',
        desc: 'Specialized in building pixel-perfect, interactive user interfaces with GSAP animations and modern frontend frameworks.'
    },
    {
        year: '2022 — 2023',
        role: 'Python Developer Intern',
        company: 'Tech Solutions',
        desc: 'Developed robust backend systems and automated workflows using Django and REST APIs.'
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-32 bg-white text-black overflow-hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-24 animate-fade-in-up">
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase mb-4">PROFESSIONAL JOURNEY</h2>
                    <div className="h-1 w-24 bg-black" />
                </div>

                <div className="space-y-0">
                    {experiences.map((exp, idx) => (
                        <div
                            key={exp.company}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 py-16 border-b border-black/5 items-start animate-fade-in-up"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="md:col-span-3">
                                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    {exp.year}
                                </span>
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-bold uppercase leading-tight mb-2">{exp.role}</h3>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{exp.company}</p>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-lg text-gray-500 font-medium leading-relaxed italic border-l border-black/10 pl-8">
                                    "{exp.desc}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
