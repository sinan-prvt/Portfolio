const skillRows = [
    {
        direction: 'animate-marquee',
        skills: [
            { name: 'Python', icon: 'python' },
            { name: 'Django', icon: 'django' },
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'Redux', icon: 'redux' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'js' }
        ]
    },
    {
        direction: 'animate-marquee-reverse',
        skills: [
            { name: 'React', icon: 'react' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Postman', icon: 'postman' },
            { name: 'DRF', icon: 'django' },
            { name: 'Axios', icon: 'js' }
        ]
    },
    {
        direction: 'animate-marquee',
        skills: [
            { name: 'AWS', icon: 'aws' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Lambda', icon: 'aws' },
            { name: 'S3', icon: 'aws' }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="relative pt-24 pb-32 bg-transparent text-black overflow-hidden">
            {/* Blending Glows from About to Skills */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#FEF08A20] blur-[150px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 mb-16 relative z-10">
                <div className="animate-fade-in-up">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 block mb-4">Capabilities</span>
                    <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">SKILLS</h2>
                </div>
            </div>

            <div className="space-y-8 relative">
                {skillRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="marquee-container flex overflow-hidden">
                        <div className={`${row.direction} flex whitespace-nowrap gap-6 py-4 px-4`}>
                            {[...row.skills, ...row.skills, ...row.skills].map((skill, idx) => (
                                <div
                                    key={`${skill.name}-${idx}`}
                                    className="flex items-center gap-4 bg-white px-8 py-5 rounded-[20px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-black/5 hover:border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                        alt={skill.name}
                                        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <span className="text-lg font-bold tracking-tight text-black/80">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Glass Overlays for smooth edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FDFCF6] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FDFCF6] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
