import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="relative bg-[#FDFCF6] selection:bg-black selection:text-white overflow-hidden">
      <Cursor />

      {/* Global Blending Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] bg-[#FEF08A10] blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[80vw] h-[80vw] bg-[#FEF08A08] blur-[180px] rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] bg-slate-100/30 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />

          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}

export default App;