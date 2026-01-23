const projects = [
    {
        title: 'EASEMYTRIP CLONE',
        tag: 'Travel Booking Architecture — 01',
        desc: 'This project is a pixel-perfect UI replication of the EaseMyTrip landing page. It focuses on demonstrating high-fidelity frontend development and advanced responsive design techniques.',
        tech: ['HTML5', 'CSS3', 'Media Queries'],
        live: 'https://easemytrip-g0g4.onrender.com',
        github: 'https://github.com/sinan-prvt/EaseMyTrip',
        img: '/assets/easemytrip.jpg',
    },
    {
        title: 'SKILLORIA',
        tag: 'Academic Data Ecosystem — 02',
        desc: 'Skilloria is a mini learning management system (LMS) built with Django. It lets administrators create courses and lessons, while students can sign up, enroll in courses, track lesson completion, and view progress dashboards. The platform includes email verification, profile management, and enrollment filtering/pagination to support a smooth learning experience.',
        tech: ['Python', 'Django', 'PostgreSQL', 'HTML / CSS', 'Bootstrap'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Student_Management',
        img: '/assets/student.jpg',
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
    {
        title: 'MEDI SYNC',
        tag: 'Healthcare Data Nexus — 04',
        desc: 'I built Medi Sync to bridge the gap between patients and healthcare providers. The application features a robust booking engine and a dynamic directory system. Developed with Django, it prioritizes data integrity and user experience. Currently, it utilizes server-side rendering with Bootstrap 5, providing a solid foundation for future expansion into a RESTful API with DRF and a React frontend',
        tech: ['Python', 'Django', 'DRF', 'React'],
        live: 'https://cinaney.pythonanywhere.com/',
        github: 'https://github.com/sinan-prvt/MediSync',
        img: '/assets/medisync.jpeg',
    },
    {
        title: 'AIVENT',
        tag: 'Universal Event Operating System — 05',
        desc: 'An AI-powered universal event operating system for complex event management and architectural vendor coordination.',
        tech: ['React 19', 'DRF', 'Docker'],
        live: '#',
        github: 'https://github.com/sinan-prvt/Aivent_frontend',
        img: '/assets/aivent.jpeg',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 lg:py-60 bg-muted text-black overflow-hidden border-t border-black/5">
            {/* Background Structural Line */}
            <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/[0.03] hidden lg:block" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-12 gap-x-6 mb-40">
                    {/* Vertical Sidebar Label */}
                    <div className="hidden lg:flex col-span-1 flex-col items-center pt-2">
                        <span className="text-[10px] font-bold tracking-[1em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">
                            03 — WORKS
                        </span>
                        <div className="flex-grow w-px bg-black/10 mt-12" />
                    </div>

                    {/* Header Content */}
                    <div className="col-span-12 lg:col-span-11 lg:pl-20 space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-px bg-black" />
                            <span className="text-[11px] font-bold tracking-[0.4em] text-black uppercase">
                                STUDIO GALLERY
                            </span>
                        </div>

                        <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                            CURATED <br />
                            <span className="italic font-serif font-light lowercase text-gray-400">works</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-y-[20rem] lg:gap-y-[30rem]">
                    {projects.map((p, idx) => (
                        <div
                            key={p.title}
                            className={`col-span-12 editorial-grid items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Showcase */}
                            <div className={`col-span-12 lg:col-span-8 ${idx % 2 !== 0 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'}`}>
                                <div className="relative group overflow-hidden bg-white shadow-[0_50px_100px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-[0_80px_150px_rgba(0,0,0,0.07)]">
                                    <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-1000" />
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full aspect-[16/10] object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 right-0 p-10 z-20">
                                        <span className="text-6xl font-bold text-white/20 select-none tracking-tighter uppercase">/ 0{idx + 1}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Panel */}
                            <div className={`col-span-12 lg:col-span-4 space-y-12 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="space-y-6">
                                    <span className="text-[10px] font-bold tracking-[0.6em] text-gray-300 uppercase">{p.tag}</span>
                                    <h3 className="text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-none">{p.title}</h3>
                                </div>

                                <p className="text-xl text-gray-500 font-light leading-relaxed font-serif italic border-l-2 border-black/5 pl-6">
                                    {p.desc}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-[9px] font-bold tracking-[0.5em] text-gray-400 uppercase border border-black/5 px-6 py-3 hover:border-black hover:text-black transition-all duration-500">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-8 pt-12 border-t border-black/5">
                                    <a href={p.live} className="group relative text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-4 overflow-hidden py-3">
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-4">LIVE</span>
                                        <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
                                        <div className="h-px w-8 bg-black/20" />
                                    </a>

                                    <a href={p.github} className="group relative text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-4 overflow-hidden py-3">
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-4">SOURCE</span>
                                        <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
                                        <div className="h-px w-8 bg-black/20" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
