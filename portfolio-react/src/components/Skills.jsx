const skills = [
    { name: "Python", localImg: "/assets/python.png" },
    { name: "Django", localImg: "/assets/django.png" },
    { name: "React", localImg: "/assets/react.png" },
    { name: "DRF", localImg: "/assets/drf.png" },
    { name: "PostgreSQL", localImg: "/assets/postgre.png" },
    { name: "Redux", slug: "redux" },
    { name: "Tailwind", localImg: "/assets/tailwind.png" },
    { name: "JavaScript", localImg: "/assets/js.png" },
    { name: "Docker", slug: "docker" },
    { name: "AWS", externalImg: "https://skillicons.dev/icons?i=aws" },
    { name: "Redis", slug: "redis" },
    { name: "RabbitMQ", slug: "rabbitmq" },
    { name: "Postman", slug: "postman" },
    { name: "HTML5", localImg: "/assets/html.png" },
    { name: "CSS3", localImg: "/assets/css.png" },
];

export default function Skills() {
    return (
        <section id="stack" className="relative py-24 bg-white overflow-hidden border-t border-black/5">
            <div className="flex flex-col gap-16">
                <div className="flex items-center gap-6 px-12">
                    <div className="h-px w-12 bg-black/10" />
                    <span className="text-[10px] font-bold tracking-[0.5em] text-black/40 uppercase">02 — TECHNICAL FACULTY</span>
                </div>

                <div className="marquee-container relative flex overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex py-10 items-center">
                        {/* Use triple set for super smooth infinite loop */}
                        {[...skills, ...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex items-center mx-12 md:mx-20 group">
                                <div className="relative flex flex-col items-center gap-4 transition-all duration-700 hover:scale-110">
                                    <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                                        <img
                                            src={skill.localImg || skill.externalImg || `https://cdn.simpleicons.org/${skill.slug}`}
                                            alt={skill.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-black/20 group-hover:text-black transition-all duration-700 uppercase">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className="mx-12 md:mx-20 w-1.5 h-1.5 bg-black/5 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
