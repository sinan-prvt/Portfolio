import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ScrollReveal = ({ children, className = "", delay = 0, width = "100%" }) => {
    const ref = useScrollAnimation({ delay });

    return (
        <div ref={ref} className={`opacity-0 translate-y-8 ${className}`} style={{ width }}>
            {children}
        </div>
    );
};

export default ScrollReveal;
