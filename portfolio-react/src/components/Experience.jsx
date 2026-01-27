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
        <section id="experience" className="relative py-32 bg-white text-black overflow-hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="hidden lg:flex col-span-1 flex-col items-center pt-2">
                        <span className="text-[10px] font-bold tracking-[1em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">
                            04 — JOURNEY
                        </span>
                        <div className="flex-grow w-px bg-black/10 mt-12" />
                    </div>

                    <div className="col-span-12 lg:col-span-11 lg:pl-20">
                        <div className="mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">
                                PROFESSIONAL <span className="text-gray-400 font-serif italic font-light lowercase">experience</span>
                            </h2>
                        </div>

                        <div className="space-y-24">
                            {items.map((item, idx) => (
                                <div key={idx} className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                    <div className="col-span-12 lg:col-span-4 relative pl-8 border-l border-black/10 lg:border-l-0 lg:pl-0 lg:pr-8 lg:text-right lg:border-r">
                                        <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase block mb-2">
                                            {item.range}
                                        </span>
                                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-black">
                                            {item.place}
                                        </h4>

                                        <div className="absolute left-0 top-0 w-1.5 h-1.5 -translate-x-[3.5px] bg-black rounded-full lg:hidden" />
                                        <div className="absolute right-0 top-2 w-1.5 h-1.5 translate-x-[3.5px] bg-black rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="col-span-12 lg:col-span-8 pl-8 lg:pl-12 space-y-6">
                                        <h3 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-none">
                                            {item.role}
                                        </h3>
                                        <p className="text-lg text-gray-500 font-serif italic leading-relaxed font-light">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
