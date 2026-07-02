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
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="h-[1px] w-24 bg-black/10 inline-block mb-8 md:block md:ml-auto" />
                        <p className="text-xs font-medium text-black/60 uppercase tracking-widest leading-loose">
                            <span className="text-3xl font-black text-black block mb-1">
                                30+
                            </span>
                            Technologies
                            <br />& Tools
                        </p>
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
        </section>
    );
}
