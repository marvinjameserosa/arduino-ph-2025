'use client'
import { useState } from "react"
import { StaticImageData } from "next/image"
import blue_shirt from "../../../public/images/blue_shirt.svg"
import light_blue_shirt from "../../../public/images/light_blue_shirt.svg"
import white_shirt from "../../../public/images/white_shirt.svg"
import { Button } from "../ui/button"
import { Carousel } from "../ui/carousel"

interface Shirt {
    src: StaticImageData;
    alt: string;
    title: string;
    price: string;
}

export default function Merch() {
    const shirts: Shirt[] = [
        {
            src: white_shirt,
            alt: "white_shirt",
            title: "WHITE Arduino T-Shirt",
            price: "900.00"
        },
        {
            src: blue_shirt,
            alt: "blue_shirt",
            title: "BLUE Arduino T-Shirt",
            price: "900.00"
        },
        {
            src: light_blue_shirt,
            alt: "light_blue_shirt",
            title: "Light Blue Arduino T-Shirt",
            price: "900.00"
        }
    ];

    const [currentShirt, setCurrentShirt] = useState(0);

    return (
        <section className="h-screen w-full px-4 md:px-0 mt-12">
            <div className="flex mt-6 flex-col text-center gap-1">
                <h2>Merch</h2>
                <p className="text-[15px] md:text-xl mx-[20px] md:mx-0">Gear Up, Innovate, and Represent! Get Your Exclusive Arduino Merch Today!</p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="z-10 w-full">
                    <Carousel 
                        items={shirts.map(shirt => ({ src: shirt.src, alt: shirt.alt }))} 
                        onSlideChange={setCurrentShirt}
                    />
                    <div className="space-y-0 mt-4">
                        <h4 className="text-shadow-glow text-center leading-none">
                            {shirts[currentShirt].title}
                        </h4>
                        <p className="text-shadow-glow font-morganite text-2xl font-medium text-center leading-none text-price">
                            {shirts[currentShirt].price} PHP
                        </p>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button className="py-4">BUY NOW</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}