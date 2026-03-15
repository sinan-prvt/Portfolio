import React, { useState, useEffect, useRef } from 'react';

const SKILLS = [
    'python', 'django', 'fastapi', 'drf', 'react', 'postgresql', 'redux', 'tailwind',
    'javascript', 'docker', 'aws', 'redis', 'git', 'github', 'html', 'css', 'kubernetes',
    'celery', 'orm', 'langgraph', 'langchain', 'groq', 'agentic ai', 'sqlalchemy',
    'pydantic', 'pytest', 'vitest', 'rabbitmq', 'websocket', 'boto3', 'nginx',
    'postman', 'vercel', 'render', 'netlify', 'pythonanywhere'
];

const PROJECTS = [
    'resiko', 'aivent', 'hopyfy cart', 'hopyfy', 'skilloria', 'medi sync', 'medisync'
];

const KNOWLEDGE_BASE = [
    {
        category: 'greeting',
        keywords: ['hi', 'hello', 'hey', 'who are you', 'help'],
        response: "Hey there! I'm Sinan's virtual self. Feel free to ask me anything about my personal life, my work, or how we can collaborate. What's on your mind?",
        suggestions: ["Tell me about yourself", "What's your tech stack?", "Show me your projects"]
    },
    {
        category: 'professional_summary',
        keywords: ['professional', 'summary', 'profile', 'engineer', 'developer'],
        response: "I’m a backend-focused Full Stack Developer with hands-on experience in Django, FastAPI, REST APIs, PostgreSQL, and event-driven systems. I build scalable, maintainable products with strong system design, real-time architecture, and production readiness in mind.",
        suggestions: ["What problems do you solve?", "Tell me about your backend experience", "What kind of roles are you looking for?"]
    },
    {
        category: 'personal',
        keywords: ['about', 'who is', 'sinan', 'mohamed', 'yourself', 'bio'],
        response: "My name is Mohamed Sinan. I’m a 19-year-old Full Stack Developer from Malappuram, Kerala. I enjoy building scalable web applications, especially working on backend logic, APIs, and databases. I like turning complex problems into clean, reliable systems and connecting them with simple, user-friendly frontends.",
        suggestions: ["Where did you study?", "How old are you?", "What's your mission?"]
    },
    {
        category: 'age',
        keywords: ['age', 'old', 'born', 'birth', 'dob'],
        response: `I’m currently ${new Date().getFullYear() - 2006 - (new Date() < new Date(new Date().getFullYear(), 7, 18) ? 1 : 0)} years old. I was born on August 18, 2006.`,
        suggestions: ["Where are you from?", "What did you study?", "Tell me about your work"]
    },
    {
        category: 'education',
        keywords: ['education', 'study', 'school', 'college', 'studied', 'pkmmhss'],
        response: "I completed my Higher Secondary education at PKMMHSS Edarikode. It was a great foundation for my journey into tech!",
        suggestions: ["What are your skills?", "Show me your projects", "Where are you based?"]
    },
    {
        category: 'location',
        keywords: ['place', 'location', 'live', 'from', 'kerala', 'malappuram'],
        response: "I'm based in Malappuram, Kerala. It's a beautiful place, and I'm proud to be building global tech from here.",
        suggestions: ["What's your tech stack?", "How can I contact you?", "Are you for hire?"]
    },
    {
        category: 'skills',
        keywords: ['skill', 'tech', 'toolkit', 'language', 'stack', 'know'],
        response: "My core stack is Python (Django/FastAPI), React, and PostgreSQL. I also work with LangGraph/LangChain, Docker, Kubernetes, AWS, Redis, RabbitMQ, and testing tools like Pytest/Vitest to ship robust production-ready systems.",
        suggestions: ["Do you know Django?", "Tell me about Docker", "Show me your projects"]
    },
    {
        category: 'projects',
        keywords: ['project', 'work', 'portfolio', 'build', 'made'],
        response: "Here are my current featured projects:\n1. RESIKO: AI resume optimization agent with ATS scoring, cover-letter generation, and real-time SSE streaming\n2. AIVENT: AI-powered, microservices-based event operating system\n3. HOPYFY CART: Multi-vendor e-commerce platform\n4. SKILLORIA: Django LMS for courses and progress tracking\n5. MEDI SYNC: Hospital management and appointment platform",
        suggestions: ["Tell me about Resiko", "Tell me about Aivent", "How can I see the code?"]
    },
    {
        category: 'backend_expertise',
        keywords: ['backend', 'django', 'api', 'server', 'database'],
        response: "My core strength is backend engineering with Django, DRF, and FastAPI. I’ve built secure auth (JWT/OTP), role-based access, optimized PostgreSQL data models, background workers with Celery, and event-driven services with RabbitMQ and WebSockets.",
        suggestions: ["How do you design APIs?", "Tell me about authentication", "Do you use microservices?"]
    },
    {
        category: 'contact',
        keywords: ['contact', 'email', 'reach', 'hire', 'call', 'message'],
        response: "You can reach me at mohamedsinan9400@gmail.com, connect on LinkedIn (mohamedsinann), or check my GitHub (sinan-prvt). I’m open to projects, collaborations, and opportunities.",
        suggestions: ["Open email", "View LinkedIn profile", "View GitHub profile"]
    },
    {
        category: 'mission',
        keywords: ['mission', 'goal', 'passionate'],
        response: "My mission is simple: I want to deliver high-performance software with clean code. I believe in modern workflows and building things that actually solve real-world problems.",
        suggestions: ["What are your projects?", "Tell me about yourself", "What's your stack?"]
    },
    {
        category: 'problem_solving',
        keywords: ['problem', 'solve', 'challenge', 'what problems'],
        response: "I focus on solving backend and system-level problems like data consistency, API scalability, authentication complexity, and reliable communication between services. I enjoy turning messy requirements into clean, maintainable systems.",
        suggestions: ["How do you approach problems?", "Tell me about system design", "What kind of challenges excite you?"]
    },
    {
        category: 'approach',
        keywords: ['approach', 'how do you solve', 'thinking process'],
        response: "I start by understanding the domain and edge cases, then break the problem into smaller components. I design the data model first, then APIs, and finally implementation—always thinking about failure scenarios and future scalability.",
        suggestions: ["How do you design systems?", "How do you handle edge cases?", "What about performance?"]
    },
    {
        category: 'roles',
        keywords: ['role', 'job', 'looking for', 'hire'],
        response: "I’m currently working as a Python Full Stack Developer Intern at Bridgeon Skillversity LLP, Calicut. I’m open to backend/full stack opportunities where I can contribute to real production systems.",
        suggestions: ["Tell me about your experience", "What stack do you use?", "How can I contact you?"]
    },
    {
        category: 'domains',
        keywords: ['domain', 'domains', 'industry', 'interested in'],
        response: "I’m especially interested in AI-powered apps, scalable SaaS platforms, e-commerce systems, and healthcare workflows where architecture and reliability matter.",
        suggestions: ["Tell me about Resiko", "Tell me about your backend experience", "What role are you in now?"]
    },
    {
        category: 'interests',
        keywords: ['interest', 'interests', 'passion', 'favorite work'],
        response: "I enjoy designing backend-heavy systems, solving architecture challenges, and integrating AI features into products that are practical and user-friendly.",
        suggestions: ["How do you solve problems?", "What technologies do you use?", "Show me your projects"]
    }

];

const DEFAULT_SUGGESTIONS = [
    "Tell me about yourself",
    "Tell me about your tech stack",
    "Show me your projects"
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hey! I'm Sinan's digital twin. Ask me anything about my life or my work!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentSuggestions, setCurrentSuggestions] = useState(DEFAULT_SUGGESTIONS);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (text) => {
        const userMessage = text || input;
        if (!userMessage.trim()) return;

        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsTyping(true);

        const responseObj = getResponse(userMessage);

        const delay = Math.min(3500, Math.max(1500, responseObj.response.length * 20));

        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', content: responseObj.response }]);
            setCurrentSuggestions(responseObj.suggestions || DEFAULT_SUGGESTIONS);
            setIsTyping(false);
        }, delay);
    };

    const handleSuggestionClick = (suggestion) => {
        if (suggestion === "Open email") {
            window.location.href = "mailto:mohamedsinan9400@gmail.com";
            return;
        }
        if (suggestion === "View LinkedIn profile") {
            window.open("https://www.linkedin.com/in/mohamedsinann", "_blank");
            return;
        }
        if (suggestion === "View GitHub profile") {
            window.open("https://github.com/sinan-prvt", "_blank");
            return;
        }
        if (suggestion === "Go to contact form") {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
            return;
        }
        handleSend(suggestion);
    };

    const getResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        const mentionedSkill = SKILLS.find(skill => lowerQuery.includes(skill));
        if (mentionedSkill && (lowerQuery.includes('know') || lowerQuery.includes('skill') || lowerQuery.includes('have') || lowerQuery.includes('use'))) {
            const capitalizedSkill = mentionedSkill.charAt(0).toUpperCase() + mentionedSkill.slice(1);
            return {
                response: `Definitely! I'm very comfortable with ${capitalizedSkill}. I've used it in several projects, like ${mentionedSkill === 'django' ? 'Medi Sync and Skilloria' : mentionedSkill === 'react' ? 'Aivent and Hopyfy Cart' : 'a few of my scalable web apps'}.`,
                suggestions: ["Show me your projects", "Tell me about your experience"]
            };
        }

        const mentionedProject = PROJECTS.find(project => lowerQuery.includes(project));
        if (mentionedProject) {
            if (mentionedProject === 'resiko') return {
                response: "RESIKO is an AI resume optimization agent built with FastAPI + LangGraph. It supports ATS scoring, resume rewriting loops, cover letter generation, missing skills analysis, and real-time streamed updates via SSE.",
                suggestions: ["What tech did you use?", "Show me more projects", "How can I contact you?"]
            };
            if (mentionedProject === 'aivent') return {
                response: "AIVENT is an AI-powered event operating system built with a microservices architecture. It includes intelligent vendor matching, hybrid-RAG event planning, real-time chat, payments, and multi-role dashboards.",
                suggestions: ["What tech did you use?", "Show me more projects", "How can I contact you?"]
            };
            if (mentionedProject === 'medi sync' || mentionedProject === 'medisync') return {
                response: "I built Medi Sync to make healthcare more accessible. It's a platform that helps patients find and book appointments with doctors easily.",
                suggestions: ["What's the tech stack?", "Tell me about Skilloria", "Show me your projects"]
            };
            if (mentionedProject === 'skilloria') return {
                response: "Skilloria is a Django-based LMS I developed. It handles everything from course creation to student progress tracking.",
                suggestions: ["Show me more Django projects", "What are your skills?", "Tell me about yourself"]
            };
            if (mentionedProject === 'hopyfy cart' || mentionedProject === 'hopyfy') return {
                response: "HOPYFY CART is a multi-vendor e-commerce platform with integrated payments and a smooth shopping flow across vendors.",
                suggestions: ["Show me your projects", "What technologies do you use?", "How can I contact you?"]
            };
        }

        for (const entry of KNOWLEDGE_BASE) {
            if (entry.keywords.some(keyword => lowerQuery.includes(keyword))) {
                return {
                    response: entry.response,
                    suggestions: entry.suggestions
                };
            }
        }

        return {
            response: "I'm not exactly sure how to answer that, but I'm probably working on something related! Feel free to ask about my personal details, skills, or projects.",
            suggestions: DEFAULT_SUGGESTIONS
        };
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9999] font-sans">
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[400px] h-[550px] max-h-[80vh] bg-white/95 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-2xl">
                    <div className="p-6 bg-black text-white flex justify-between items-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-sm font-serif font-bold tracking-widest uppercase">Sinan Virtual</h3>
                            <div className="flex items-center gap-2 mt-1.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                <span className="text-[9px] text-white/60 font-medium uppercase tracking-[0.3em]">AI Assistant Online</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>

                    <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-[#FAFAFA]">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`relative max-w-[85%] px-5 py-3.5 text-[13px] leading-relaxed transition-all duration-300 ${msg.role === 'user'
                                    ? 'bg-black text-white rounded-2xl rounded-tr-none shadow-md'
                                    : 'bg-white text-black rounded-2xl rounded-tl-none border border-black/5 shadow-sm'
                                    }`}>
                                    {msg.content.split('\n').map((line, i) => (
                                        <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-black/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                                    <div className="w-1 h-1 bg-black/40 rounded-full animate-bounce [animation-duration:0.6s]" />
                                    <div className="w-1 h-1 bg-black/40 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
                                    <div className="w-1 h-1 bg-black/40 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}
                    </div>

                    {!isTyping && (
                        <div className="px-6 py-4 bg-white flex flex-wrap gap-2 border-t border-black/[0.03]">
                            {currentSuggestions.map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="text-[10px] bg-white hover:bg-black hover:text-white border border-black/10 px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-widest font-bold"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="p-6 bg-white border-t border-black/[0.03]">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Inquire about my work..."
                                className="w-full text-[13px] py-4 pl-4 pr-14 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-black/20 outline-none transition-all duration-300 placeholder:text-gray-400 font-sans"
                            />
                            <button
                                onClick={() => handleSend()}
                                className="absolute right-2 w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-20"
                                disabled={!input.trim()}
                            >
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 group ${isOpen
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black/10'
                    }`}
            >
                {isOpen ? (
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                ) : (
                    <div className="relative">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-black border-2 border-white rounded-full group-hover:animate-ping" />
                    </div>
                )}
            </button>
        </div>
    );
};

export default ChatBot;
