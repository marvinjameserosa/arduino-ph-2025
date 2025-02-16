"use client";
import React from "react";
import {Timeline} from "../ui/timeline";
import timelineData from "@/data/timeline-data.json";
import {BackgroundGradients} from "../ui/background-gradient";


export default function Agenda() {
    const formattedTimelineData = timelineData.timelineEntries.map(entry => ({
        title: (
            <div className="space-y-[9px] flex-1">
                <h2 className="font-medium text-2xl md:text-5xl lg:w-[269px] xl:w-full md:font-bold">
                    {entry.title}
                </h2>
                <p className="text-sm md:text-xl w-full font-bold text-white-100 font-montserrat md:font-light md:w-[269px] leading-6">
                    {entry.description}
                </p>
            </div>
        ),
        content: (
            <div className="space-y-4 flex-2">
                <h3 className="text-base font-light md:font-bold md:text-xl text-white-100 font-montserrat">{entry.time}</h3>
                <ul className="space-y-0">
                    {entry.details.map((detail, index) => (
                        <li key={index} className=" text-xs md:text-xl flex gap-3
                        md:leading-[23px] text-[19.3px] tracking-[0.005em] text-white font-montserrat
                        ">
                            <span>•</span>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>

            </div>
        )

    }));

    return (
        <div className="relative">
            <div className="absolute inset-0 z-0">
                <BackgroundGradients/>
            </div>
            <div className="container min-h-screen overflow-hidden">
                <div className="relative z-10 py-48 lg:px-20">
                    <div className="md:pb-20 space-y-3 pb-5">
                        <h2 className="md:w-full">AGENDA</h2>
                        <p className="w-[309px] md:text-xl text-white-100 font-montserrat font-light md:w-[269px] leading-6">See
                            the Full Lineup of Talks, Workshop, and Activities!</p>
                    </div>
                    <Timeline data={formattedTimelineData}/>
                </div>
            </div>
        </div>
    );
}