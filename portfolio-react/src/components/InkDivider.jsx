import React from 'react';

const InkDivider = ({ color = "black", position = "bottom", className = "" }) => {
    const isBottom = position === "bottom";

    return (
        <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${isBottom ? 'bottom-0' : 'top-0 rotate-180'} ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-[calc(100%+1.3px)] h-[80px]"
                fill={color}
                style={{ filter: "url(#rough-edge)" }}
            >
                <path d="M0,0V15.63C151.43,65,304.3,27.32,455.83,52.57c37-3.64,159.21,10.51,209.06,5.48,44.41-10.46,136.33,25.33,194.87,1.6,36.79-16.29,77.43,4.93,119.11-7.53,60.41-15.25,113.11,11.7,221.13-16.25V0Z"></path>
            </svg>

            <svg className="hidden">
                <defs>
                    <filter id="rough-edge">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default InkDivider;
