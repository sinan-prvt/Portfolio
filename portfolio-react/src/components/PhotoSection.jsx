import React from 'react';

const PhotoSection = ({ image = "/assets/me.jpg", caption = "Visual Architecture" }) => {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden bg-black group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')] opacity-20 z-10" />

            <img
                src={image}
                alt="Architectural Visual"
                className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-[2s] ease-out scale-110 group-hover:scale-100 group-hover:brightness-75"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <div className="overflow-hidden">
                    <h2 className="text-[8vw] font-bold tracking-tighter text-white uppercase leading-none opacity-40 mix-blend-overlay animate-pulse">
                        {caption}
                    </h2>
                </div>
                <div className="w-[1px] h-32 bg-white/20 mt-12 overflow-hidden">
                    <div className="w-full h-full bg-white animate-scroll-vertical" />
                </div>
            </div>

            <div className="absolute bottom-12 left-12 z-20 text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase">
                Visual Impact — Architectural Refinement
            </div>
        </section>
    );
};

export default PhotoSection;
