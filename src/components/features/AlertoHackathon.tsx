import React from "react";
import Image from "next/image";

const finalists = [
    "Alab-Hero",
    "Team Uri-Ne",
    "Fire Archers",
    "JSON Deraulo: GIT N RUN",
    "XTEN",
    "Lora The Explorer",
    "Rescuers",
    "Purrgrammers"
  ];

const AlertoHackathon = () => {
	return (
		<div className="relative container grid grid-cols-1 items-center gap-6 md:gap-12 md:grid-cols-1 justify-between w-full">
            <div className="z-[-1]">
				{/* <div className="orange-blur h-[120px] w-[180px] absolute rounded-full bottom-[20%] -left-4 md:right-32 md:h-[300px] md:w-[300px]"></div> */}
				{/* <div className="yellow-blur h-[120px] w-[180px] absolute rounded-full botton-[30%] right-5 md:right-12 md:h-[250px] md:w-[300px]"></div> */}
				<div className="blue-blur h-[150px] w-[180px] absolute rounded-full bottom-[-100px]  right-14 md:right-56 md:h-[760px] md:w-[430px]"></div>
			</div>
			<div className="flex flex-col justify-center items-center">
                <Image 
                    src="svgs/alert.svg" 
                    alt="" 
                    width={500}
                    height={500}
                />
                <p className="mt-8 md:text-xl text-center">
                    Witness the groundbreaking <span className="text-secondary font-bold">first-ever Alertong Arduino Hackathon</span> in the Philippines held by Alerto PH, where participants will develop cutting-edge IoT solutions for Women’s Safety & Fire Prevention. Experience innovation firsthand as technology takes a bold step toward making a real difference.
				</p>
			</div>
			<div className="text md:text-left">
				<h2 className="text-center">
                ALERTONG ARDUINO HACKATHON <span className="text-secondary font-bold">FINALIST</span>
				</h2>
                <div className="list-disc flex justify-center gap-24 mt-5">
                    <div className="flex flex-col">
                        {finalists.slice(0, 4).map((finalist, index) => (
                            <li key={index} className="text-xl md:text-2xl font-morganite">
                                {finalist}
                            </li>
                        ))}
                    </div>
                    <div className="list-disc  flex flex-col">
                        {finalists.slice(4, 9).map((finalist, index) => (
                            <li key={index} className="text-xl md:text-2xl font-morganite">
                                {finalist}
                            </li>
                        ))}
                    </div>
                </div>
			</div>
		</div>
	);
};
export default AlertoHackathon;
