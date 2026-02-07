import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const roleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. "Hey," and "there" text reveal
            tl.fromTo([text1Ref.current, text2Ref.current],
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
            )
                // 2. Profile Image reveal
                .fromTo(imageRef.current,
                    { y: 100, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
                    "-=0.8"
                )
                // 3. "I AM SINAN" and Role reveal
                .fromTo([titleRef.current, roleRef.current],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" },
                    "-=1"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="home" className="relative min-h-screen bg-[#FDFCF6] flex flex-col items-center overflow-hidden">
            {/* Exact Reference Glows - Warm Sunny Yellow */}
            <div className="absolute top-[10%] left-[-15%] w-[80vw] h-[90vw] bg-[#FEF08A40] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-[5%] right-[-15%] w-[75vw] h-[85vw] bg-[#FEF08A30] blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[50vw] bg-[#FFFBEB30] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[1800px] h-screen px-10">

                {/* 1. "Hey," and "there" Background Layer */}
                <div className="absolute top-[20%] md:top-[22%] left-0 w-full flex justify-between px-[6%] md:px-[10%] z-0 pointer-events-none select-none">
                    <h2
                        ref={text1Ref}
                        className="text-[14vw] md:text-[15vw] font-serif italic leading-none text-black/90 transition-transform duration-500 hover:scale-110 pointer-events-auto cursor-none"
                        data-cursor="text"
                    >
                        Hey,
                    </h2>
                    <h2
                        ref={text2Ref}
                        className="text-[14vw] md:text-[15vw] font-serif italic leading-none text-black/90 transition-transform duration-500 hover:scale-110 pointer-events-auto cursor-none"
                        data-cursor="text"
                    >
                        there
                    </h2>
                </div>

                {/* 2. Main Profile Image Layer */}
                <div className="absolute bottom-0 left-[53%] md:left-1/2 -translate-x-1/2 w-full flex justify-center z-10 select-none pointer-events-none">
                    <div className="relative h-[85vh] md:h-[85vh] w-auto">
                        <img
                            ref={imageRef}
                            src="/assets/sinan_nobg.png"
                            alt="Mohamed Sinan"
                            className="h-full w-auto object-contain contrast-110"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                            }}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#FDFCF6] via-[#FDFCF6]/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFCF6] to-transparent" />
                    </div>
                </div>

                {/* 3. Foreground Content Layer */}
                <div className="relative h-full w-full z-20 pointer-events-none ">

                    {/* I AM SINAN - Bottom Left */}
                    <div ref={titleRef} className="absolute left-0 bottom-[18%] md:bottom-[12%]">
                        <h1
                            className="text-[10vw] md:text-[6vw] font-black leading-[0.8] uppercase tracking-tighter text-black transition-transform duration-500 hover:scale-105 origin-bottom-left pointer-events-auto cursor-none"
                            data-cursor="text"
                        >
                            I AM<br />SINAN
                        </h1>
                    </div>

                    {/* ROLE - Bottom Right */}
                    <div ref={roleRef} className="absolute right-0 bottom-[19%] md:bottom-[12%] text-right">
                        <h2
                            className="text-[4vw] md:text-[3.5vw] font-black uppercase tracking-tighter leading-[0.85] text-black transition-transform duration-500 hover:scale-105 origin-bottom-right pointer-events-auto cursor-none"
                            data-cursor="text"
                        >
                            PYTHON<br />FULL STACK<br />DEVELOPER
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    );
}
