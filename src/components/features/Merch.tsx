import Image from "next/image"
import shirt from "../../../public/images/shirt.svg"
import { Button } from "../ui/button"

export default function Merch() {

    return (
        <section className=" h-screen">
            <div className="flex mt-10 flex-col text-center gap-1">
                <h2>Merch</h2>
                <p className="text-xl">Gear Up, Innovate, and Represent! Get Your Exclusive Arduino Merch Today!</p>
            </div>
            <div className="flex justify-center relative mt-4">
                <div className="absolute inset-0 z-0">
                    <div className="orange-blur absolute rounded-full top-9 left-[510px]"></div>
                    <div className="yellow-blur absolute rounded-full bottom-36 left-[620px]"></div>
                    <div className="blue-blur absolute rounded-full -bottom-0 right-[550px]"></div>
                </div>
                <div className="z-10">
                    <div className="">
                        <div className="flex items-center">
                            <Image src={shirt} alt="Shirt"/>
                            <Image src={shirt} alt="Shirt"/>
                            <Image src={shirt} alt="Shirt"/>
                        </div>
                        <div className="space-y-0">
                            <h4 className="text-shadow-glow text-center leading-none">BLUE Arduino T-Shirt</h4>
                            <p className="text-shadow-glow font-morganite text-2xl font-medium text-center leading-none text-price">900.00 PHP</p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button className="py-4">BUY NOW</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}