export default function Footer() {
  return (
    <footer className="py-12 bg-transparent text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif italic font-bold">Sinan.</span>
            <div className="w-1 h-1 bg-black rounded-full" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Full Stack Development</span>
          </div>

          <div className="flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="https://github.com/sinan-prvt" className="hover:text-black transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/mohamed-sinan-75107a364" className="hover:text-black transition-colors">LinkedIn</a>
          </div>

          <span className="text-[9px] font-bold tracking-[0.2em] text-gray-300 uppercase">
            &copy; 2026 — ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
}