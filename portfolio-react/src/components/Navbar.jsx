import { useState, useEffect } from 'react';

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Stack' },
    { href: '#projects', label: 'Works' },
    { href: '#experience', label: 'Journey' },
    { href: '#contact', label: 'Talk' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed top-0 inset-x-0 z-[100] transition-all duration-700">
            <div
                className={`mx-auto px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-700 ${scrolled ? 'bg-muted/80 backdrop-blur-2xl py-4 shadow-sm border-b border-black/[0.03]' : 'bg-transparent'
                    }`}
            >
                <a href="#home" className="text-xl font-bold tracking-[0.4em] text-black uppercase">
                    SINAN
                </a>

                <nav className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em]">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-black transition-all duration-300 hover:opacity-40 relative group"
                        >
                            {l.label}
                            <div className="absolute -bottom-2 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center">
                    <a
                        href="/Sinan-CV.pdf"
                        className="group relative text-[10px] font-bold tracking-[0.5em] uppercase border border-black/10 px-6 py-3 hover:bg-black hover:text-white transition-all duration-500"
                    >
                        CV / 2026
                    </a>
                </div>

                {/* Mobile Trigger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-black p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-4 relative flex flex-col justify-between">
                        <div className={`h-0.5 w-full bg-black transition-all duration-500 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <div className={`h-0.5 w-full bg-black transition-all duration-500 ${open ? 'opacity-0' : ''}`} />
                        <div className={`h-0.5 w-full bg-black transition-all duration-500 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-muted z-[90] transition-transform duration-700 md:hidden ${open ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-12 bg-muted">
                    <span className="text-[10px] font-bold tracking-[1em] text-gray-200 uppercase mb-8">NAVIGATION</span>
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-4xl font-bold tracking-tighter uppercase text-black hover:italic transition-all duration-300"
                        >
                            {l.label}
                        </a>
                    ))}
                    <div className="pt-12">
                        <a
                            href="/Sinan-CV.pdf"
                            onClick={() => setOpen(false)}
                            className="text-xs font-bold tracking-[0.5em] border-b-2 border-black pb-2 uppercase"
                        >
                            Download Blueprint
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
