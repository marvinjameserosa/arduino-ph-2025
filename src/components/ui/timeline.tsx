"use client";
import React, {useRef} from "react";
import {Flag} from 'lucide-react';

interface TimelineEntry {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const Timeline = ({data}: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="w-full bg-white font-sans"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index}>
                        <div
                            className="flex justify-start pt-0 md:gap-10 h-full">
                            <div
                                className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-[612px] md:w-full">
                                <div className="relative flex items-start w-full">

                                    <div className="relative">
                                        {/*circle  with gradient border*/}
                                        <div
                                            className={`w-[25px] h-[25px] md:w-[60px] md:h-[60px] absolute mt-1 
                                                        ${index % 2 === 0 ? 'border-gradient-primary' : 'border-gradient-secondary'}`}/>

                                        {/*flag container*/}
                                        <div
                                            className="absolute mt-1 w-[25px] h-[25px] md:w-[60px] md:h-[60px] flex items-center justify-center">
                                            <Flag className="w-[12px] h-[12px] stroke-[3px] md:h-[25px] md:w-[25px] z-10"/>
                                        </div>

                                        {/*vertical line connects the flags*/}
                                        {index < data.length - 1 && (
                                            <div
                                                className={`absolute left-[12px] top-[29px] md:left-[29px] md:top-[63px] w-[1px] h-[200px] md:h-[350px] xl:h-[265px]
                                                            bg-gradient-to-b 
                                                            ${index === 0 ? 'from-secondary' : 'from-primary'} 
                                                            via-white-50 to-transparent`}
                                            />
                                        )}
                                    </div>

                                    <h2 className="hidden md:block text-xl md:pl-20 md:text-5xl">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="relative pl-10 pr-4 md:pl-4 w-full">
                                <h2 className="md:hidden block text-2xl mb-4 text-left">
                                    {item.title}
                                </h2>
                                {item.content}
                            </div>
                        </div>

                        {/*div line*/}
                        <div className="relative w-full pt-14 md:pt-16 md:h-[200px] h-[10px]">
                            <div className="absolute bottom-1/2 right-[5%] w-[85%] lg:w-[90%] h-[1px] bg-gray-200/20 " />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};