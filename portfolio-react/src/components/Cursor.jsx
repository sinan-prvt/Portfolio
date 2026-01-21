import { useEffect, useState } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-black/40 pointer-events-none z-[9999] transition-all duration-300 -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${isHovering ? 'scale-[2] bg-white border-transparent' : 'scale-100'
                    } hidden md:block`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
}
