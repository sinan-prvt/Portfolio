const skillRows = [
    {
        direction: 'animate-marquee',
        skills: [
            { name: 'Python', icon: '/python.svg' },
            { name: 'Django', icon: '/django.svg' },
            { name: 'PostgreSQL', icon: '/postgres.svg' },
            { name: 'FastAPI', icon: 'fastapi' },
            { name: 'DRF', icon: '/django.svg' },
            { name: 'LangGraph', icon: '/langgraph.svg' },
            { name: 'Agentic AI', icon: 'ai' },
            { name: 'Groq', icon: '/groq.svg' },
            { name: 'SQLAlchemy', icon: 'python' },
            { name: 'Pydantic', icon: '/pydantic.svg' },
            { name: 'Celery', icon: '/celery.svg' },
            { name: 'LangChain', icon: '/langchain.svg' },
            { name: 'Pytest', icon: '/pytest.svg' }
        ]
    },
    {
        direction: 'animate-marquee-reverse',
        skills: [
            { name: 'React', icon: 'react' },
            { name: 'Redux', icon: 'redux' },
            { name: 'HTML', icon: 'html' },
            { name: 'JavaScript', icon: 'js' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Axios', icon: '/axios.svg' },
            { name: 'Jinja', icon: '/jinja.svg' },
            { name: 'Swagger', icon: '/swagger.svg' },
        ]
    },
    {
        direction: 'animate-marquee',
        skills: [
            { name: 'AWS', icon: 'aws' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Postman', icon: 'postman' },
            { name: 'Vercel', icon: 'vercel' },
            { name: 'Redis', icon: 'redis' },
            { name: 'Jira', icon: '/jira.svg' },
            { name: 'Kubernetes', icon: 'kubernetes' },
            { name: 'Nginx', icon: 'nginx' },
            { name: 'Vitest', icon: 'vitest' },
            { name: 'Boto3', icon: '/boto3.svg' },
            { name: 'RabbitMQ', icon: '/rabbitmq.svg' },
        ]
    }
];

import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
    const headerRef = useScrollAnimation();

    return (
        <section id="skills" className="relative pt-24 pb-32 bg-transparent text-black overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#FEF08A20] blur-[150px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 mb-16 relative z-10">
                <div ref={headerRef} className="opacity-0 translate-y-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 block mb-4">Capabilities</span>
                    <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">SKILLS</h2>
                </div>
            </div>

            <div className="space-y-8 relative">
                {skillRows.map((row, rowIdx) => (
                    <ScrollReveal key={rowIdx} delay={rowIdx * 0.1}>
                        <div className="marquee-container flex overflow-hidden">
                            <div className={`${row.direction} flex whitespace-nowrap gap-6 py-4 px-4`}>
                                {[...row.skills, ...row.skills, ...row.skills].map((skill, idx) => (
                                    <div
                                        key={`${skill.name}-${idx}`}
                                        className="flex items-center gap-4 bg-white px-8 py-5 rounded-[20px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-black/5 hover:border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                                    >
                                        <img
                                            src={skill.icon.startsWith('/') ? skill.icon : `https://skillicons.dev/icons?i=${skill.icon}`}
                                            alt={skill.name}
                                            className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <span className="text-lg font-bold tracking-tight text-black/80">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}

                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FDFCF6] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FDFCF6] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
