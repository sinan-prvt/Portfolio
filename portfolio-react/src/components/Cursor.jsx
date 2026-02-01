import { useEffect, useRef } from 'react';

export default function Cursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const isHovering = useRef(false);
    const isClicking = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;

        if (!cursor || !dot) return;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e) => {
            const hovering = e.target.closest('a, button, input, textarea, [role="button"]');
            isHovering.current = !!hovering;

            if (hovering) {
                cursor.style.width = '64px';
                cursor.style.height = '64px';
                cursor.style.borderColor = 'rgba(0, 0, 0, 0.3)';
                dot.style.width = '4px';
                dot.style.height = '4px';
                dot.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            } else if (!isClicking.current) {
                cursor.style.width = '48px';
                cursor.style.height = '48px';
                cursor.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                dot.style.width = '6px';
                dot.style.height = '6px';
                dot.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            }
        };

        const handleMouseDown = () => {
            isClicking.current = true;
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderColor = 'rgba(0, 0, 0, 0.5)';
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        };

        const handleMouseUp = () => {
            isClicking.current = false;
            if (isHovering.current) {
                cursor.style.width = '64px';
                cursor.style.height = '64px';
                cursor.style.borderColor = 'rgba(0, 0, 0, 0.3)';
                dot.style.width = '4px';
                dot.style.height = '4px';
                dot.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            } else {
                cursor.style.width = '48px';
                cursor.style.height = '48px';
                cursor.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                dot.style.width = '6px';
                dot.style.height = '6px';
                dot.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            }
        };

        let animationFrameId;
        const animate = () => {
            const dx = mousePos.current.x - cursorPos.current.x;
            const dy = mousePos.current.y - cursorPos.current.y;

            cursorPos.current.x += dx * 0.15;
            cursorPos.current.y += dy * 0.15;

            cursor.style.left = `${cursorPos.current.x}px`;
            cursor.style.top = `${cursorPos.current.y}px`;

            dot.style.left = `${mousePos.current.x}px`;
            dot.style.top = `${mousePos.current.y}px`;

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block border-2"
                style={{
                    width: '48px',
                    height: '48px',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
                }}
            />

            <div
                ref={dotRef}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
                }}
            />
        </>
    );
}
