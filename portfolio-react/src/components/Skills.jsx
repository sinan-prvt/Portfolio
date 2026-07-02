import React, { useEffect, useRef, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
    {
        label: 'Backend & AI',
        direction: 'animate-marquee',
        skills: [
            { name: 'Python', icon: '/python.svg' },
            { name: 'Django', icon: '/django.svg' },
            { name: 'FastAPI', icon: 'fastapi' },
            { name: 'DRF', icon: '/django.svg' },
            { name: 'PostgreSQL', icon: '/postgres.svg' },
            { name: 'LangGraph', icon: '/langgraph.svg' },
            { name: 'LangChain', icon: '/langchain.svg' },
            { name: 'Agentic AI', icon: 'ai' },
            { name: 'Groq', icon: '/groq.svg' },
            { name: 'SQLAlchemy', icon: 'python' },
            { name: 'Pydantic', icon: '/pydantic.svg' },
            { name: 'Celery', icon: '/celery.svg' },
            { name: 'Pytest', icon: '/pytest.svg' },
        ],
    },

    {
        label: 'Frontend',
        direction: 'animate-marquee-reverse',
        skills: [
            { name: 'React', icon: 'react' },
            { name: 'Redux', icon: 'redux' },
            { name: 'JavaScript', icon: 'js' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Axios', icon: '/axios.svg' },
            { name: 'Jinja', icon: '/jinja.svg' },
            { name: 'Swagger', icon: '/swagger.svg' },
        ],
    },
    
    {
        label: 'DevOps & Tools',
        direction: 'animate-marquee',
        skills: [
            { name: 'AWS', icon: 'aws' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Kubernetes', icon: 'kubernetes' },
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Nginx', icon: 'nginx' },
            { name: 'Redis', icon: 'redis' },
            { name: 'RabbitMQ', icon: '/rabbitmq.svg' },
            { name: 'Postman', icon: 'postman' },
            { name: 'Vercel', icon: 'vercel' },
            { name: 'Jira', icon: '/jira.svg' },
            { name: 'Vitest', icon: 'vitest' },
            { name: 'Boto3', icon: '/boto3.svg' },
            { name: 'Netlify', icon: '/netlify.svg' },
            { name: 'PythonAnywhere', icon: '/pythonanywhere.svg' },
            { name: 'Render', icon: '/render.svg' },
        ],
    },
];

const DraggableMarquee = ({ items, direction, speed = 1.5 }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    // Use a ref for position to avoid re-renders during animation
    const posRef = useRef(0);

    const actualSpeed = direction === 'animate-marquee-reverse' ? -speed : speed;

    useEffect(() => {
        if (isHovered || isDragging) return;

        let animationId;
        const contentNode = contentRef.current;
        if (!contentNode) return;

        const scroll = () => {
            posRef.current += actualSpeed;
            
            const maxScroll = contentNode.scrollWidth / 2;
            
            if (actualSpeed > 0) {
                if (posRef.current >= maxScroll) posRef.current -= maxScroll;
            } else {
                if (posRef.current <= 0) posRef.current += maxScroll;
            }
            
            contentNode.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isHovered, isDragging, actualSpeed]);

    useEffect(() => {
        if (actualSpeed < 0 && contentRef.current) {
            posRef.current = contentRef.current.scrollWidth / 2;
            contentRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
    }, [actualSpeed]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsHovered(true);
        setStartX(e.pageX + posRef.current);
        if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsHovered(false);
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        posRef.current = startX - x;
        
        const contentNode = contentRef.current;
        if (contentNode) {
            const maxScroll = contentNode.scrollWidth / 2;
            if (posRef.current >= maxScroll) {
                posRef.current -= maxScroll;
                setStartX(startX - maxScroll);
            } else if (posRef.current <= 0) {
                posRef.current += maxScroll;
                setStartX(startX + maxScroll);
            }
            contentNode.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
    };

    // Touch events for mobile dragging
    const [touchStartX, setTouchStartX] = useState(0);
    
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setIsHovered(true);
        setTouchStartX(e.touches[0].clientX + posRef.current);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setIsHovered(false);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        posRef.current = touchStartX - x;

        const contentNode = contentRef.current;
        if (contentNode) {
            const maxScroll = contentNode.scrollWidth / 2;
            if (posRef.current >= maxScroll) {
                posRef.current -= maxScroll;
                setTouchStartX(touchStartX - maxScroll);
            } else if (posRef.current <= 0) {
                posRef.current += maxScroll;
                setTouchStartX(touchStartX + maxScroll);
            }
            contentNode.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
    };

    return (
        <div 
            ref={containerRef}
            className="marquee-container relative flex overflow-hidden py-3 cursor-grab w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <div 
                ref={contentRef} 
                className="flex whitespace-nowrap w-max select-none will-change-transform"
                style={{ transform: `translate3d(${-posRef.current}px, 0, 0)` }}
            >
                {[1, 2, 3, 4].map((group) => (
                    <div key={group} className="flex shrink-0 gap-4 md:gap-5 pr-4 md:pr-5">
                        {items.map((skill, idx) => (
                            <div
                                key={`${skill.name}-${idx}`}
                                className="skill-card group relative flex items-center gap-3.5 bg-white/80 backdrop-blur-sm px-7 py-4 rounded-2xl border border-black/[0.06] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] hover:border-black/[0.12]"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-50/0 via-transparent to-yellow-50/0 group-hover:from-yellow-50/60 group-hover:to-amber-50/40 transition-all duration-500 pointer-events-none" />

                                <div className="relative z-10 w-7 h-7 flex items-center justify-center">
                                    <img
                                        src={
                                            skill.icon.startsWith('/')
                                                ? skill.icon
                                                : `https://skillicons.dev/icons?i=${skill.icon}`
                                        }
                                        alt={skill.name}
                                        className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                                        draggable="false"
                                    />
                                </div>
                                <span className="relative z-10 text-sm font-bold tracking-tight text-black/75 group-hover:text-black transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Skills() {
    const headerRef = useScrollAnimation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset tab when modal closes
            setTimeout(() => setActiveTab(0), 300);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 bg-transparent text-black overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-0 w-[60vw] h-[60vw] bg-[#FEF08A20] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-0 w-[50vw] h-[50vw] bg-slate-100/40 blur-[120px] rounded-full pointer-events-none" />

            {/* Header — editorial style matching Projects */}
            <div className="mx-auto max-w-7xl px-6 mb-20 md:mb-28 relative z-10">
                <div
                    ref={headerRef}
                    className="flex flex-col md:flex-row md:items-end justify-between opacity-0 translate-y-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">
                            Capabilities
                        </span>
                        <h2 className="text-4xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
                            <span className="font-serif italic font-light lowercase">Tech</span>
                            <br />
                            <span className="font-black">Stack</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 text-right flex flex-col items-end">
                        <div className="h-[1px] w-24 bg-black/10 inline-block mb-8 md:block md:ml-auto" />
                        <div className="flex flex-col items-end gap-6">
                            <p className="text-xs font-medium text-black/60 uppercase tracking-widest leading-loose">
                                <span className="text-3xl font-black text-black block mb-1">
                                    30+
                                </span>
                                Technologies
                                <br />& Tools
                            </p>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="group relative px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden rounded-full border border-black/10 bg-white/50 hover:border-black/30 transition-colors duration-300"
                            >
                                <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                                    View All
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill Rows */}
            <div className="space-y-12 md:space-y-16 relative">
                {skillCategories.map((cat, catIdx) => (
                    <ScrollReveal key={cat.label} delay={catIdx * 0.12}>
                        <div className="space-y-4">
                            {/* Category Label */}
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-black/15" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/35">
                                        {cat.label}
                                    </span>
                                </div>
                            </div>

                            <DraggableMarquee items={cat.skills} direction={cat.direction} />
                        </div>
                    </ScrollReveal>
                ))}

                {/* Edge fade gradients */}
                <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#FDFCF6] via-[#FDFCF6]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#FDFCF6] via-[#FDFCF6]/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 mt-10">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    />
                    
                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl bg-[#FDFCF6] rounded-3xl shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto overflow-x-hidden mini-scroll animate-fade-in-up flex flex-col">
                        <div className="sticky top-0 bg-[#FDFCF6]/90 backdrop-blur-md z-10 p-6 sm:p-10 pb-4 sm:pb-6 border-b border-black/5 flex flex-col gap-6 sm:gap-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-black uppercase tracking-tighter">All Skills</h3>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors shrink-0"
                                >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            
                            {/* Tabs */}
                            <div className="flex items-center gap-2 overflow-x-auto mini-scroll pb-2 -mx-2 px-2 sm:mx-0 sm:px-0">
                                {skillCategories.map((cat, idx) => (
                                    <button
                                        key={`tab-${cat.label}`}
                                        onClick={() => setActiveTab(idx)}
                                        className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                                            activeTab === idx 
                                                ? 'bg-black text-white' 
                                                : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-6 sm:p-10 flex-1 flex flex-col">
                            {/* Content based on activeTab */}
                            <div className="flex-1" key={activeTab}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fade-in-up">
                                    {skillCategories[activeTab].skills.map((skill, idx) => (
                                        <div
                                            key={`modal-skill-${skill.name}-${idx}`}
                                            className="flex items-center gap-3 bg-white px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border border-black/5 hover:border-black/15 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                                                <img
                                                    src={
                                                        skill.icon.startsWith('/')
                                                            ? skill.icon
                                                            : `https://skillicons.dev/icons?i=${skill.icon}`
                                                    }
                                                    alt={skill.name}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                                />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold tracking-tight text-black/80">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Navigation Arrows */}
                            <div className="flex justify-between items-center mt-10 sm:mt-16 pt-6 border-t border-black/5">
                                <button 
                                    onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                                    className={`flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 0 ? 'text-black/20 cursor-not-allowed' : 'text-black hover:text-black/60'}`}
                                    disabled={activeTab === 0}
                                >
                                    &larr; Prev
                                </button>
                                <div className="flex gap-1.5 sm:gap-2">
                                    {skillCategories.map((_, idx) => (
                                        <div key={`dot-${idx}`} className={`h-1.5 rounded-full transition-all duration-500 ${activeTab === idx ? 'bg-black w-4 sm:w-6' : 'bg-black/20 w-1.5'}`} />
                                    ))}
                                </div>
                                <button 
                                    onClick={() => setActiveTab(prev => Math.min(skillCategories.length - 1, prev + 1))}
                                    className={`flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === skillCategories.length - 1 ? 'text-black/20 cursor-not-allowed' : 'text-black hover:text-black/60'}`}
                                    disabled={activeTab === skillCategories.length - 1}
                                >
                                    Next &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
