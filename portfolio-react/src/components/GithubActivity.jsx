import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ScrollReveal from './ScrollReveal';

// Skeleton row for loading fallback
const SkeletonRow = () => (
    <div className="flex gap-[5px]">
        {Array.from({ length: 52 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-[5px]">
                {Array.from({ length: 7 }).map((_, j) => (
                    <div
                        key={j}
                        className="w-[14px] h-[14px] rounded-sm bg-gray-100 animate-pulse"
                        style={{ animationDelay: `${(i * 7 + j) * 5}ms` }}
                    />
                ))}
            </div>
        ))}
    </div>
);

// Shown when the API fails
const ErrorFallback = () => (
    <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/30">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        </div>
        <div>
            <p className="text-sm font-bold text-black/40 uppercase tracking-widest">Contribution data unavailable</p>
            <p className="text-xs text-black/25 mt-1">Visit <a href="https://github.com/sinan-prvt" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/50 transition-colors">github.com/sinan-prvt</a> to see activity</p>
        </div>
    </div>
);

export default function GithubActivity() {
    const headerRef = useScrollAnimation();
    const [hasError, setHasError] = useState(false);

    return (
        <section id="github-activity" className="relative py-24 md:py-32 bg-[#FDFCF6] text-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 opacity-0 translate-y-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">Open Source — Code</span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
                            <span className="font-serif italic font-light lowercase">GitHub</span><br />
                            <span className="font-black">Activity</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="h-[1px] w-24 bg-black/10 inline-block mb-8 md:block md:ml-auto" />
                        <p className="text-xs font-medium text-black/60 uppercase tracking-widest leading-loose">
                            Consistent<br />Commits
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full">
                    <ScrollReveal delay={0.2}>
                        <div
                            className="w-full py-10 px-4 md:px-12 rounded-[2rem] bg-white shadow-[20px_20px_60px_#e3e2db,-20px_-20px_60px_#ffffff] border border-black/5"
                            style={{ overflow: 'hidden' }}
                        >
                            {hasError ? (
                                <ErrorFallback />
                            ) : (
                                <div style={{ overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px', maxWidth: '100%', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="mini-scroll">
                                    <GitHubCalendar
                                        username="sinan-prvt"
                                        colorScheme="light"
                                        blockSize={14}
                                        blockMargin={5}
                                        fontSize={14}
                                        theme={{
                                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                        }}
                                        renderError={() => {
                                            setHasError(true);
                                            return null;
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
