const items = [
    {
        range: 'MAY 2025 — PRESENT',
        role: 'FULL STACK DEVELOPER INTERN',
        place: 'BRIDGEON SOLUTION / CALICUT',
        detail: 'Collaborating with cross-functional teams to design, implement, and test frontend/backend features. Building and maintaining responsive UIs using React, Redux, and Tailwind CSS. Developing REST APIs for seamless communication between systems.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-32 lg:py-48 bg-muted text-black overflow-hidden border-t border-black/[0.02]">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-24">
                    <div className="inline-flex items-center gap-4">
                        <div className="w-12 h-px bg-black" />
                        <span className="text-[10px] font-bold tracking-[0.6em] text-black uppercase">
                            PROFESSIONAL EXPERIENCE
                        </span>
                    </div>
                </div>

                {/* Experience Entry */}
                <div className="space-y-40">
                    {items.map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-20">
                                {/* Role & Company */}
                                <div className="col-span-12 lg:col-span-7">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                                                {item.range}
                                            </span>
                                        </div>
                                        <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight uppercase">
                                            FULL STACK<br />
                                            <span className="italic font-serif font-light text-gray-400">Developer Intern</span>
                                        </h3>
                                        <div className="pt-8">
                                            <p className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
                                                {item.place}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="col-span-12 lg:col-span-5 lg:pt-20">
                                    <div className="relative pl-8 border-l border-black/[0.05]">
                                        <p className="text-xl lg:text-2xl text-gray-500 font-light leading-relaxed font-serif italic selection:bg-black selection:text-white">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-black/[0.03] mt-24" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
