import { useState, useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ScrollReveal from './ScrollReveal';

const mainProjects = [
    {
        title: 'RESIKO',
        tag: 'AI Resume Optimization Agent — 01',
        desc: 'Resiko is an AI-powered resume optimization system built with LangGraph that automatically analyzes, scores, and iteratively improves resumes to match job descriptions. It features ATS scoring, cover letter generation, a missing skills analyzer, and a full resume builder with 9 HTML templates and LaTeX support — all streamed in real-time via SSE.',
        tech: ['React', 'FastAPI', 'LangGraph', 'Groq AI', 'PostgreSQL', 'WeasyPrint'],
        live: 'https://resiko.app',
        github: 'https://github.com/agenitic-lab/Resume-Agent',
        img: '/assets/resiko.png',
    },
    {
        title: 'AIVENT',
        tag: 'Universal Event Operating System — 02',
        desc: 'Aivent is an AI-powered, microservices-based event management platform that enables end-to-end event planning, vendor coordination, and real-time operations for corporate and personal events. It features intelligent vendor matching, AI-powered event planning via a Hybrid RAG engine, real-time WebSocket chat, integrated payments, and a multi-role dashboard system (Admin, Vendor, Customer).',
        tech: ['React', 'Python', 'Django', 'DRF', 'Docker', 'WebSocket', 'Pika', 'Boto3', 'LangChain', 'Kubernetes'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Aivent_frontend',
        img: '/assets/aivent.jpeg',
    },
    {
        title: 'HOPYFY CART',
        tag: 'Scalable E-Commerce Solution — 03',
        desc: 'A unified e-commerce platform with multi-vendor support, integrated payment systems, and streamlined user experiences.',
        tech: ['React', 'DRF', 'Razorpay'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Hopyfy_Cart',
        img: '/assets/hopyfycart.jpg',
    },
];

const miniProjects = [
    {
        title: 'SM FOOTWEAR',
        tag: 'Premium Digital Footwear Catalog',
        num: '04',
        desc: 'A high-end, mobile-first digital storefront and inventory system for footwear brands. Features advanced multi-image management, real-time search filtering, and seamless WhatsApp deep-linking for instant customer conversion.',
        tech: ['React', 'Django', 'DRF', 'Supabase', 'Cloudinary', 'PostgreSQL'],
        live: 'https://sm-footware-store.vercel.app/',
        github: 'https://github.com/sinan-prvt/SmFootware',
        img: '/assets/smfootware.jpg',
        accent: '#C8A96E',
    },
    {
        title: 'SPEAKWELL',
        tag: 'English Academy Promo Website',
        num: '05',
        desc: 'A fully-responsive single-page promotional website for SpeakWell English Academy, Kerala. Features a 3D tilt profile card, animated stats counters, typewriter role effect, WhatsApp enrollment form integration, and tabbed testimonials — all handcrafted without any CSS framework.',
        tech: ['React 19', 'Vite', 'Vanilla CSS', 'WhatsApp API', 'Google Fonts'],
        live: 'https://speakwellenglish.vercel.app/',
        github: 'https://github.com/sinan-prvt/SpeakWell',
        img: '/assets/speakwell.png ',
        accent: '#4A7C59',
    },
    {
        title: 'TASKIO',
        tag: 'Full-Stack Task Manager',
        num: '06',
        desc: 'A comprehensive task management dashboard built with Django and React. Features JWT authentication, real-time optimistic UI updates, advanced task filtering/sorting, and CSV exports — all wrapped in a modern, responsive interface.',
        tech: ['React', 'Tailwind CSS', 'Django', 'DRF', 'PostgreSQL', 'JWT'],
        live: 'https://taskio-ecru.vercel.app/',
        github: 'https://github.com/sinan-prvt/task-management-system',
        img: '/assets/taskio.png',
        accent: '#4A90E2',
    },
    {
        title: 'SKILLORIA',
        tag: 'Academic Data Ecosystem',
        num: '07',
        desc: 'A mini learning management system (LMS) built with Django. Lets administrators create courses and lessons, while students can sign up, enroll, track lesson completion, and view progress dashboards.',
        tech: ['Python', 'Django', 'PostgreSQL', 'Django Templates', 'Gunicorn', 'Render'],
        live: 'https://student-mgmt-8v8p.onrender.com/',
        github: 'https://github.com/sinan-prvt/Student_Management',
        img: '/assets/student.jpg',
        accent: '#7C9EBE',
    },
    {
        title: 'MEDI SYNC',
        tag: 'Healthcare Data Nexus',
        num: '08',
        desc: 'A Hospital Management Web Application that allows patients to browse hospital information, view available doctors and departments, and book appointments online — with an admin panel for hospital staff.',
        tech: ['Python', 'Django', 'SQLite', 'HTML / CSS', 'Bootstrap', 'Pillow', 'Render'],
        live: 'https://medisync-v8va.onrender.com/',
        github: 'https://github.com/sinan-prvt/MediSync',
        img: '/assets/medisync.jpg',
        accent: '#8ABE9E',
    },
];

export default function Projects() {
    const [showToast, setShowToast] = useState(false);
    const headerRef = useScrollAnimation();
    const miniHeaderRef = useScrollAnimation();
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', updateScrollButtons, { passive: true });
        updateScrollButtons();
        return () => el.removeEventListener('scroll', updateScrollButtons);
    }, []);

    const handleProjectClick = (e, liveUrl) => {
        if (!liveUrl || liveUrl === '#') {
            e.preventDefault();
            setShowToast(true);
        }
    };

    // Drag-to-scroll handlers
    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        scrollRef.current.style.cursor = 'grabbing';
    };
    const onMouseLeave = () => {
        setIsDragging(false);
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    };
    const onMouseUp = () => {
        setIsDragging(false);
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    };
    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollBy = (dir) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir * 480, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[#FDFCF6] text-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">

                {/* ── Section Header ── */}
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 opacity-0 translate-y-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">Archive 2025 — 2026</span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
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

                {/* ── Main Projects ── */}
                <div className="space-y-32 md:space-y-48">
                    {mainProjects.map((p, idx) => (
                        <ScrollReveal key={p.title} delay={idx * 0.1}>
                            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
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
                                        <div className="absolute -bottom-10 -right-6 text-[15vw] font-serif italic text-black/[0.03] select-none pointer-events-none z-0">
                                            0{idx + 1}
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full md:w-2/5 space-y-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-black/20" />
                                            <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em]">{p.tag}</p>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">{p.title}</h3>
                                        <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">{p.desc}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {p.tech.map((t) => (
                                            <span key={t} className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-black/70 bg-black/5 hover:bg-black/10 hover:-translate-y-0.5 rounded-full transition-all duration-300 border border-black/5 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

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
                        </ScrollReveal>
                    ))}
                </div>

                {/* ── Mini Projects Section ── */}
                <div className="mt-40 md:mt-56">
                    {/* Mini header */}
                    <div ref={miniHeaderRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 opacity-0 translate-y-8">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] text-black/30 uppercase mb-3 block">Side Experiments</span>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter uppercase leading-[0.9]">
                                <span className="font-serif italic font-light lowercase">Mini</span>{' '}
                                <span className="font-black">Projects</span>
                            </h2>
                        </div>
                        <div className="mt-6 md:mt-0 flex items-center gap-3">
                            <button
                                onClick={() => scrollBy(-1)}
                                disabled={!canScrollLeft}
                                aria-label="Scroll left"
                                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300
                                    ${canScrollLeft
                                        ? 'border-black/20 hover:bg-black hover:text-white hover:border-black cursor-pointer'
                                        : 'border-black/10 text-black/20 cursor-not-allowed'}`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5m7-7-7 7 7 7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scrollBy(1)}
                                disabled={!canScrollRight}
                                aria-label="Scroll right"
                                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300
                                    ${canScrollRight
                                        ? 'border-black/20 hover:bg-black hover:text-white hover:border-black cursor-pointer'
                                        : 'border-black/10 text-black/20 cursor-not-allowed'}`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </button>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-2">Drag to explore</span>
                        </div>
                    </div>

                    {/* Horizontal scroll track */}
                    <div className="relative">
                        {/* Left fade */}
                        <div className={`hidden md:block absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#FDFCF6] to-transparent pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
                        {/* Right fade */}
                        <div className={`hidden md:block absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FDFCF6] to-transparent pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

                        <div
                            ref={scrollRef}
                            className="mini-scroll flex gap-6 overflow-x-auto pb-6 select-none"
                            style={{
                                cursor: 'grab',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch',
                            }}
                            onMouseDown={onMouseDown}
                            onMouseLeave={onMouseLeave}
                            onMouseUp={onMouseUp}
                            onMouseMove={onMouseMove}
                        >
                            {miniProjects.map((p, idx) => (
                                <div
                                    key={p.title}
                                    className="flex-shrink-0 w-[360px] md:w-[440px] group"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-16px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1">
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <img
                                                src={p.img}
                                                alt={p.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[1.5s]"
                                                draggable={false}
                                            />
                                            {/* Number badge */}
                                            <div
                                                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black tracking-wider text-white shadow-lg"
                                                style={{ backgroundColor: p.accent }}
                                            >
                                                {p.num}
                                            </div>
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 gap-3">
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => handleProjectClick(e, p.live)}
                                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-200 shadow"
                                                    draggable={false}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                                    Live
                                                </a>
                                                <a
                                                    href={p.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-200 border border-white/30"
                                                    draggable={false}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                                    Code
                                                </a>
                                            </div>
                                        </div>

                                        {/* Card body */}
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-black/35 mb-1">{p.tag}</p>
                                                    <h3 className="text-xl font-black tracking-tight uppercase leading-none">{p.title}</h3>
                                                </div>
                                                <div className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: p.accent }}>
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{p.desc}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full border border-black/8 text-black/55 bg-black/[0.03]"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CTA ── */}
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

            {/* Toast */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                <div className="bg-black/80 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Live Link Unavailable</span>
                </div>
            </div>
        </section>
    );
}
