import { useState, useEffect } from 'react';

const projects = [
    {
        title: 'AIVENT',
        tag: 'Universal Event Operating System — 01',
        desc: 'An AI-powered universal event operating system for complex event management and architectural vendor coordination.',
        tech: ['React 19', 'DRF', 'Docker'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Aivent_frontend',
        img: '/assets/aivent.jpeg',
    },
    {
        title: 'HOPYFY CART',
        tag: 'Scalable E-Commerce Solution — 02',
        desc: 'A unified e-commerce platform with multi-vendor support, integrated payment systems, and streamlined user experiences.',
        tech: ['React', 'DRF', 'Razorpay'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Hopyfy_Cart',
        img: '/assets/hopyfycart.jpg',
    },
    {
        title: 'SKILLORIA',
        tag: 'Academic Data Ecosystem — 03',
        desc: 'Skilloria is a mini learning management system (LMS) built with Django. It lets administrators create courses and lessons, while students can sign up, enroll in courses, track lesson completion, and view progress dashboards.',
        tech: ['Python', 'Django', 'PostgreSQL', 'HTML / CSS'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Student_Management',
        img: '/assets/student.jpg',
    },
    {
        title: 'MEDI SYNC',
        tag: 'Healthcare Data Nexus — 04',
        desc: 'Built to bridge the gap between patients and healthcare providers. Features a robust booking engine and a dynamic directory system developed with Django, prioritizing data integrity.',
        tech: ['Python', 'Django', 'DRF', 'React'],
        live: 'https://cinaney.pythonanywhere.com/',
        github: 'https://github.com/sinan-prvt/MediSync',
        img: '/assets/medisync.jpeg',
    },
];

export default function Projects() {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleProjectClick = (e, liveUrl) => {
        if (!liveUrl || liveUrl === '#') {
            e.preventDefault();
            setShowToast(true);
        }
    };

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[#FDFCF6] text-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">Archive 2024 — 2025</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
                            <span className="font-serif italic font-light lowercase">Selected</span><br />
                            <span className="font-black">Works</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="h-[1px] w-24 bg-black/10 inline-block mb-8 md:block md:ml-auto" />
                        <p className="text-xs font-medium text-black/60 uppercase tracking-widest leading-loose">
                            Design Driven<br />Development
                        </p>
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-32 md:space-y-48">
                    {projects.map((p, idx) => (
                        <div
                            key={p.title}
                            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 animate-fade-in-up`}
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-3/5 group">
                                <a
                                    href={p.live}
                                    onClick={(e) => handleProjectClick(e, p.live)}
                                    target={!p.live || p.live === '#' ? undefined : "_blank"}
                                    rel={!p.live || p.live === '#' ? undefined : "noopener noreferrer"}
                                    className={`block relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 shadow-[20px_20px_60px_#e3e2db,-20px_-20px_60px_#ffffff] transition-all duration-700 ${!p.live || p.live === '#' ? 'cursor-default' : ''}`}
                                >
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] scale-105 group-hover:scale-100 grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                        </div>
                                    </div>
                                    {/* Project Number Background */}
                                    <div className="absolute -bottom-10 -right-6 text-[15vw] font-serif italic text-black/[0.03] select-none pointer-events-none z-0">
                                        0{idx + 1}
                                    </div>
                                </a>
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-2/5 space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-[1px] bg-black/20" />
                                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em]">{p.tag}</p>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">{p.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                        {p.desc}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    {p.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-black/60 border-b border-black/10 pb-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <div className="pt-4">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] hover:text-black/60 transition-colors"
                                    >
                                        Explore Source Code
                                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-black/10 group-hover/link:bg-black group-hover/link:text-white transition-all duration-300">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 group-hover/link:rotate-0 transition-transform duration-500">
                                                <path d="M5 12h14m-7-7 7 7-7 7" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Footer Call to action */}
                <div className="mt-32 pt-24 border-t border-black/5 text-center">
                    <p className="font-serif italic text-2xl mb-8">Want to see more?</p>
                    <a
                        href="https://github.com/sinan-prvt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-6 px-12 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-colors shadow-2xl"
                    >
                        View Full Archive
                    </a>
                </div>
            </div>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                <div className="bg-black/80 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Live Link Unavailable</span>
                </div>
            </div>
        </section>
    );
}
