import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (config = {}) => {
    const elementRef = useRef(null);

    // Destructure config to ensure stable dependencies
    const {
        y = 50,
        opacity = 0,
        duration = 1,
        ease = "power3.out",
        delay = 0,
        threshold = 0.1
    } = config;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const anim = gsap.fromTo(
            element,
            { y, opacity },
            {
                y: 0,
                opacity: 1,
                duration,
                ease,
                delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        return () => {
            if (anim.scrollTrigger) anim.scrollTrigger.kill();
            anim.kill();
        };
    }, [y, opacity, duration, ease, delay, threshold]);

    return elementRef;
};

export default useScrollAnimation;
