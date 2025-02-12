"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/images/adph-logo.png";
import Cover from "../../assets/images/hero-section-cover.png";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const tiltX =
    ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 60;
  const tiltY =
    ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * -60;

  return (
    <div className="relative max-w-[800px] h-[300px] mx-auto overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={Cover}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `perspective(500px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
          transition: "transform 0.1s ease-out",
          pointerEvents: "none",
        }}
      >
        <Image src={Logo} alt="Logo" width={100} height={50} />
      </div>
    </div>
  );
};
