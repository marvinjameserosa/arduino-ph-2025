// SponsorsPage.tsx
import React from 'react';
import { sponsors } from "@/data/index";


// types.ts
interface Sponsor {
    name: string;
    logo: string;
  }
  
interface SponsorsData {
platinum: Sponsor[];
gold: Sponsor[];
silver: Sponsor[];
community: Sponsor[];
}

interface SectionDividerProps {
title: string;
}

// for the section divider
const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
    return (
        <div className="relative w-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative">
            <span className="bg-black px-6 text-lg text-gray-300">
            {title}
            </span>
        </div>
        </div>
    );
};
  

const Sponsors: React.FC = () => {
const sponsorsData: SponsorsData = sponsors;

return (
    // Added a margin top to the div so it doesn't overlap with the speakers section, feel free to adjust the value
    <div className="relative h-[1341px] bg-black text-white px-[152px] mt-32">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className='flex justify-center items-center mb-9'>
                <h2>
                    Special Thanks To Our <span className="text-orange-500">Sponsors And Partners</span>
                </h2>
            </div>

            {/* Platinum Sponsors */}
            <div className="relative">
                <SectionDivider title="Platinum Sponsors" />
                <div className="h-[292px] flex flex-wrap justify-center">
                    <div className="relative flex justify-center items-center gap-16 w-full">
                        {/* Iacademy */}
                        <div className="
                            absolute 
                            top-[41px] left-[133px] 
                            w-[195px] h-[210px] 
                            px-[33px] py-[15px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.platinum[0].logo}
                            alt={sponsorsData.platinum[0].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* packetworxs */}
                        <div className="
                            absolute 
                            top-[41px] left-[328px] 
                            w-[327px] h-[100px] 
                            px-[23px] py-[13px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.platinum[1].logo}
                            alt={sponsorsData.platinum[1].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* super team */}
                        <div className="
                            absolute 
                            top-[41px] left-[656px] 
                            w-[349px] h-[100px] 
                            px-[12px] py-[17px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.platinum[2].logo}
                            alt={sponsorsData.platinum[2].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* solana */}
                        <div className="
                            absolute 
                            top-[137px] left-[340px] 
                            w-[327px] h-[89px] 
                            px-[18px] py-[23px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.platinum[3].logo}
                            alt={sponsorsData.platinum[3].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* block */}
                        <div className="
                            absolute 
                            top-[138px] left-[668px] 
                            w-[200px] h-[90] 
                            px-[17px] py-[15px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.platinum[4].logo}
                            alt={sponsorsData.platinum[4].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gold Sponsors */}
            <div className="relative">
                <SectionDivider title="Gold Sponsors" />
                <div className="h-[280px] flex flex-wrap justify-center">
                    <div className="relative flex justify-center items-center gap-16 w-full">
                        {/* PLDT */}
                        <div className="
                            absolute 
                            top-[113] left-[271px] 
                            w-[130px] h-[45px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.gold[0].logo}
                            alt={sponsorsData.gold[0].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* anonimouse */}
                        <div className="
                            absolute 
                            top-[75px] left-[455px] 
                            w-[73px] h-[73px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.gold[1].logo}
                            alt={sponsorsData.gold[1].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* Alert */}
                        <div className="
                            absolute 
                            top-[80px] left-[542px] 
                            w-[119px] h-[33px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.gold[2].logo}
                            alt={sponsorsData.gold[2].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* DICT */}
                        <div className="
                            absolute 
                            top-[72px] left-[773px] 
                            w-[75px] h-[110px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.gold[3].logo}
                            alt={sponsorsData.gold[3].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* Electrogics */}
                        <div className="
                            absolute 
                            top-[145px] left-[470px] 
                            w-[52px] h-[52px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.gold[4].logo}
                            alt={sponsorsData.gold[4].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* Appkademiya */}
                        <div className="
                            absolute 
                            top-[140px] left-[530px] 
                            w-[155px] h-[26px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.gold[5].logo}
                            alt={sponsorsData.gold[5].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Silver Sponsors */}
            {sponsorsData.silver.length > 0 && (
                <div className="relative">
                    <SectionDivider title="Silver Sponsors" />
                    <div className="h-[292px] flex flex-wrap justify-center">
                        <div className="relative flex justify-center items-center gap-16 w-full">
                            {sponsorsData.silver.map((sponsor: Sponsor, index: number) => (
                                <div 
                                    key={sponsor.name}
                                    className="absolute w-[195px] h-[100px] px-[33px] py-[15px] flex items-center justify-center"
                                    style={{
                                        top: index < 3 ? '41px' : '137px',
                                        left: `${133 + (index % 3) * 295}px`
                                    }}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Community Partners */}
            <div className="relative">
                <SectionDivider title="Community Sponsors" />
                <div className="h-[280px] flex flex-wrap justify-center">
                    <div className="relative flex justify-center items-center gap-16 w-full">
                        {/* Community Partner 1 */}
                        <div className="
                            absolute 
                            top-[60px] left-[355px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.community[0].logo}
                            alt={sponsorsData.community[0].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Community Partner 2 */}
                        <div className="
                            absolute 
                            top-[73px] left-[596px] 
                            px-[0px] py-[0px] 
                            flex items-center justify-center
                        ">
                            <img
                            src={sponsorsData.community[1].logo}
                            alt={sponsorsData.community[1].name}
                            className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};
  
  export default Sponsors;