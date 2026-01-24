export default function Footer() {
  return (
    <footer className="py-12 bg-white text-black border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">

          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter uppercase">SINAN</h3>
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase max-w-xs leading-relaxed">
              Crafting digital experiences with a focus on structural integrity and details.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-black/60">
              <a href="https://github.com/sinan-prvt" className="hover:text-black transition-colors">Github</a>
              <a href="https://linkedin.com/in/mohamed-sinan-75107a364" className="hover:text-black transition-colors">Linkedin</a>
              <a href="mailto:mohamedsinan9400@gmail.com" className="hover:text-black transition-colors">Mail</a>
            </div>
            <span className="text-[9px] font-bold tracking-[0.2em] text-gray-300 uppercase">
              &copy; 2026 MOHAMED SINAN — ALL RIGHTS RESERVED
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}