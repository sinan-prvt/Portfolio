import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (config = {}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Default animation settings
        const defaults = {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0,
            threshold: 0.1 // 10% of element visible
        };

        const settings = { ...defaults, ...config };

        const anim = gsap.fromTo(
            element,
            {
                y: settings.y,
                opacity: settings.opacity,
            },
            {
                y: 0,
                opacity: 1,
                duration: settings.duration,
                ease: settings.ease,
                delay: settings.delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Animation starts when top of element hits 85% of viewport height
                    toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
                }
            }
        );

        return () => {
            anim.kill();
            ScrollTrigger.getAll().forEach(t => t.kill()); // Cleanup might be too aggressive if multiple instances, but safe for now
        };
    }, [config]);

    return elementRef;
};

export default useScrollAnimation;
