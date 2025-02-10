'use client'
import { useState } from "react"
import shirt from "../../../public/images/shirt.svg"
import { Button } from "../ui/button"
import { Carousel } from "../ui/Carousel"

export default function Merch() {
    const shirts = [
        {
            src: shirt,
            alt: "blue_shirt",
            title: "BLUE Arduino T-Shirt",
            price: "900.00"
        },
        {
            src: shirt,
            alt: "white_shirt",
            title: "WHITE Arduino T-Shirt",
            price: "900.00"
        },
        {
            src: shirt,
            alt: "red_shirt",
            title: "RED Arduino T-Shirt",
            price: "900.00"
        }
    ];

    const [currentShirt, setCurrentShirt] = useState(0);

    return (
        <section className="h-screen">
            <div className="flex mt-6 flex-col text-center gap-1">
                <h2>Merch</h2>
                <p className="text-xl">Gear Up, Innovate, and Represent! Get Your Exclusive Arduino Merch Today!</p>
            </div>
            <div className="flex justify-center relative mt-4">
                <div className="absolute inset-0 z-0">
                    <div className="orange-blur absolute rounded-full top-9 left-[510px]"></div>
                    <div className="yellow-blur absolute rounded-full bottom-64 left-[620px]"></div>
                    <div className="blue-blur absolute rounded-full bottom-32 right-[550px]"></div>
                </div>
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