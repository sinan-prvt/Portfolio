const skills = [
    { name: "Python", slug: "python" },
    { name: "Django", slug: "django" },
    { name: "React", slug: "react" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Redux", slug: "redux" },
    { name: "Tailwind", slug: "tailwindcss" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Docker", slug: "docker" },
    { name: "AWS", slug: "aws", url: "https://icongr.am/simple/amazonaws.svg" },
    { name: "Redis", slug: "redis" },
    { name: "Git", slug: "git" },
    { name: "HTML5", slug: "html5" },
    { name: "CSS3", slug: "css" },
    { name: "Kubernetes", slug: "kubernetes" },
    { name: "Celery", slug: "celery" },
    { name: "ORM", slug: "sqlalchemy" },
];

export default function Skills() {
    const row1 = skills.slice(0, 18);
    const row2 = skills.slice(0, 18);
    const row3 = skills.slice(0, 18);

    return (
        <section id="skills" className="relative py-32 bg-white text-black overflow-hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-start">

                    <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-32">
                        <div className="flex flex-col items-start space-y-8 lg:pr-12">
                            <div className="w-12 h-px bg-black/20" />

                            <div className="space-y-4">
                                <span className="block text-sm font-bold tracking-[0.4em] uppercase text-black">
                                    THE
                                </span>
                                <h2 className="text-6xl lg:text-7xl font-serif italic font-light tracking-tight leading-[0.9] text-gray-400">
                                    toolkit
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg leading-relaxed font-light font-sans max-w-xs">
                                A curated selection of technologies used to build scalable, high-performance digital solutions.
                            </p>

                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-12 lg:pt-8">
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                            <div className="space-y-8">
                                <MarqueeRow items={row1} direction="normal" speed="80s" />

                                <MarqueeRow items={row2} direction="reverse" speed="90s" />

                                <MarqueeRow items={row3} direction="normal" speed="80s" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MarqueeRow({ items, direction = "normal", speed = "40s" }) {
    return (
        <div className="flex overflow-hidden group">
            <div
                className={`flex gap-4 items-center animate-marquee ${direction === 'reverse' ? 'animate-marquee-reverse' : ''} group-hover:pause`}
                style={{ animationDuration: speed }}
            >
                {[...items, ...items, ...items, ...items].map((skill, idx) => (
                    <div
                        key={`${skill.name}-${idx}`}
                        className="flex-shrink-0 flex items-center gap-3 bg-white border border-black/5 rounded-full px-6 py-4 shadow-sm hover:shadow-md hover:border-black/20 transition-all duration-300 cursor-default"
                    >
                        <img
                            src={skill.url || `https://cdn.simpleicons.org/${skill.slug}`}
                            alt={skill.name}
                            className="w-5 h-5 opacity-60"
                        />
                        <span className="text-sm font-bold text-gray-600 tracking-wide uppercase">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
