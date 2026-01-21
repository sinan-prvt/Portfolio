const items = [
    {
        range: 'MAY 2025 — PRESENT',
        role: 'FULL STACK DEVELOPER INTERN',
        place: 'BRIDGEON SOLUTION / CALICUT',
        detail: 'Collaborating with cross-functional teams to design, implement, and test frontend/backend features. Building and maintaining responsive UIs using React, Redux, and Tailwind CSS. Developing REST APIs for seamless communication between systems.',
    },
    {
        range: '2023 — 2024',
        role: 'SYSTEMS APPRENTICE',
        place: 'TECH SOLUTIONS LTD.',
        detail: 'Optimized complex system logic and maintained data structure integrity for enterprise-level applications.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-editorial bg-white text-black overflow-hidden border-t border-black/[0.03]">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="editorial-grid gap-y-24">
                    {/* Section Header */}
                    <div className="col-span-12 lg:col-span-4 space-y-12">
                        <span className="section-label">03 — CHRONOLOGY</span>
                        <h2 className="text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase">
                            PROFESSIONAL<br />
                            <span className="italic font-serif font-light lowercase text-gray-400">journey</span>
                        </h2>
                        <div className="h-60 w-px bg-black/5 hidden lg:block" />
                    </div>

                    {/* Timeline Entries */}
                    <div className="col-span-12 lg:col-span-8 space-y-32 lg:pt-32">
                        {items.map((item, idx) => (
                            <div key={idx} className="group relative editorial-grid gap-y-10">
                                <div className="col-span-12 lg:col-span-3">
                                    <div className="space-y-2">
                                        <span className="text-[11px] font-bold tracking-[0.5em] text-gray-300 group-hover:text-black transition-colors duration-700">
                                            {item.range}
                                        </span>
                                        <div className="h-px w-12 bg-black/5 group-hover:w-full transition-all duration-1000" />
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-9 space-y-8">
                                    <div className="space-y-3">
                                        <h4 className="text-4xl lg:text-5xl font-bold tracking-tight uppercase group-hover:italic transition-all duration-700">
                                            {item.role}
                                        </h4>
                                        <p className="text-[11px] font-bold tracking-[0.4em] text-gray-400">{item.place.toUpperCase()}</p>
                                    </div>
                                    <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl font-serif italic selection:bg-black selection:text-white">
                                        {item.detail}
                                    </p>
                                    <div className="w-full h-px bg-black/[0.03] group-hover:bg-black/10 transition-colors duration-1000" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
