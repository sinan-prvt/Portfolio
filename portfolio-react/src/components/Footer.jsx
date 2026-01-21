export default function Footer() {
  return (
    <footer className="py-20 bg-white text-black border-t border-black/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-[0.3em] uppercase">SINAN</h3>
            <p className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">Built for Structural Integrity & Digital Elegance</p>
          </div>

          <div className="flex gap-12 text-[10px] font-bold tracking-[0.4em] uppercase">
            <a href="https://github.com/sinan-prvt" className="hover:opacity-50 transition-opacity">GITHUB ARCHIVE</a>
            <a href="https://linkedin.com/in/mohamed-sinan-75107a364" className="hover:opacity-50 transition-opacity">LINKEDIN BLUEPRINT</a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[9px] font-bold text-gray-300 tracking-[0.2em uppercase]">© 2026 MOHAMED SINAN — ALL RIGHTS RESERVED</span>
          <span className="text-[9px] font-bold text-gray-300 tracking-[0.2em uppercase]">EST. KERALA, IN</span>
        </div>
      </div>
    </footer>
  );
}