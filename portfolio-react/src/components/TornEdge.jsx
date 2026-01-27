import React from 'react';

const TornEdge = ({ color = "white", position = "bottom", className = "" }) => {
    const isBottom = position === "bottom";

    return (
        <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${isBottom ? 'bottom-0' : 'top-0 rotate-180'} ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-[calc(100%+1.3px)] h-[60px]"
                fill={color}
            >
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,149.21-9.51,189.06,5.48,54.41,20.46,126.33,55.33,184.87,41.6,26.79-6.29,67.43-34.93,109.11-47.53,50.41-15.25,123.11,31.7,241.13-36.25V0Z"></path>
                <path opacity="0.5" d="M0,0V15.63C151.43,65,304.3,27.32,455.83,52.57c37-3.64,159.21,10.51,209.06,5.48,44.41-10.46,136.33,25.33,194.87,1.6,36.79-16.29,77.43,4.93,119.11-7.53,60.41-15.25,113.11,11.7,221.13-16.25V0Z"></path>
            </svg>
        </div>
    );
};

export default TornEdge;
