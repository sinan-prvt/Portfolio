import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ScrollReveal from './ScrollReveal';

export default function GithubActivity() {
    const headerRef = useScrollAnimation();

    return (
        <section id="github-activity" className="relative py-24 md:py-32 bg-[#FDFCF6] text-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 opacity-0 translate-y-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">Open Source — Code</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
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
                        <div className="w-full flex justify-center py-12 px-2 md:px-12 rounded-[2rem] bg-white shadow-[20px_20px_60px_#e3e2db,-20px_-20px_60px_#ffffff] border border-black/5 overflow-hidden">
                            <div className="overflow-x-auto pb-4 max-w-full custom-scrollbar">
                                <div className="min-w-max pr-4">
                                    <GitHubCalendar
                                        username="sinan-prvt"
                                        colorScheme="light"
                                        blockSize={14}
                                        blockMargin={5}
                                        fontSize={14}
                                        theme={{
                                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
