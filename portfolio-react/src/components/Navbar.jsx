import { useState, useEffect } from 'react';

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Works' },
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
        <header className="fixed top-0 inset-x-0 z-[100]">
            <div
                className={`mx-auto px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-[#FDFCF6]/90 backdrop-blur-md py-4' : 'bg-transparent'
                    }`}
            >
                <a href="#home" className="flex items-center z-[1100]">
                    <span className="text-2xl font-serif italic font-bold tracking-tighter">Sinan.</span>
                </a>

                <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-10 text-[11px] font-medium uppercase tracking-[0.2em]">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-black/80 hover:text-black transition-colors duration-300"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center">
                    <a
                        href="#contact"
                        className="text-[11px] font-bold tracking-[0.2em] uppercase bg-black text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/10"
                    >
                        Contact
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-black focus:outline-none z-[110]"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <div className={`w-8 h-px bg-black transition-transform duration-500 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`w-8 h-px bg-black transition-opacity duration-500 ${open ? 'opacity-0' : ''}`} />
                        <div className={`w-8 h-px bg-black transition-transform duration-500 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-700 md:hidden flex flex-col items-center justify-center ${open ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="flex flex-col items-center space-y-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-4xl font-bold tracking-tighter uppercase text-black hover:text-gray-500 transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <div className="w-12 h-px bg-black/10 my-8" />
                    <a
                        href="/Mohamed-Sinan-FullStack.pdf"
                        download
                        onClick={() => setOpen(false)}
                        className="text-xs font-bold tracking-[0.4em] uppercase"
                    >
                        DOWNLOAD CV
                    </a>
                </nav>
            </div>
        </header>
    );
}
