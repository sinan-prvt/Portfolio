export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen bg-[#FDFCF6] flex flex-col items-center">
            {/* Exact Reference Glows - Warm Sunny Yellow */}
            <div className="absolute top-[10%] left-[-15%] w-[80vw] h-[90vw] bg-[#FEF08A40] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-[5%] right-[-15%] w-[75vw] h-[85vw] bg-[#FEF08A30] blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[50vw] bg-[#FFFBEB30] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[1800px] h-screen px-10">

                {/* 1. "Hey," and "there" Background Layer */}
                <div className="absolute top-[22%] left-0 w-full flex justify-between px-[10%] z-0 pointer-events-none select-none">
                    <h2 className="text-[12vw] lg:text-[15vw] font-serif italic leading-none text-black/90 animate-reveal opacity-0" style={{ animationDelay: '200ms' }}>
                        Hey,
                    </h2>
                    <h2 className="text-[12vw] lg:text-[15vw] font-serif italic leading-none text-black/90 animate-reveal opacity-0" style={{ animationDelay: '400ms' }}>
                        there
                    </h2>
                </div>

                {/* 2. Main Profile Image Layer */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-10 select-none">
                    <div className="relative h-[85vh] w-auto">
                        <img
                            src="/assets/sinan_nobg.png"
                            alt="Mohamed Sinan"
                            className="h-full w-auto object-contain animate-fade-in-up contrast-110"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>

                {/* 3. Foreground Content Layer */}
                <div className="relative h-full w-full z-20 pointer-events-none ">





                    {/* I AM SINAN - Bottom Left */}
                    <div className="absolute left-0 bottom-[12%] animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                        <h1 className="text-[7vw] lg:text-[6vw] font-black leading-[0.8] uppercase tracking-tighter text-black">
                            I AM<br />SINAN
                        </h1>
                    </div>

                    {/* ROLE - Bottom Right */}
                    <div className="absolute right-0 bottom-[12%] text-right animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
                        <h2 className="text-[4vw] lg:text-[3.5vw] font-black uppercase tracking-tighter leading-[0.85] text-black">
                            PYTHON<br />FULL STACK<br />DEVELOPER
                        </h2>
                    </div>

                </div>
            </div>


        </section>
    );
}
