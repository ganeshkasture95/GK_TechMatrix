"use client"

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Header = () => {
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const image4 = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttondiv = useRef(null)

    useEffect(() => {
        // Image animation
        const tl = gsap.timeline({
            defaults: { duration: 4, ease: "power1.inOut", repeat: -1, yoyo: true }
        });

        tl.to(image1.current, { y: -10, x: 5, rotate: "10deg" })
          .to(image2.current, { y: 15, x: -10, rotate: "-8deg" }, "<")
          .to(image3.current, { y: -15, x: 8, rotate: "6deg" }, "<")
          .to(image4.current, { y: 10, x: -5, rotate: "-5deg" }, "<");

        // Text animation: Slide in from bottom
        gsap.fromTo(headerRef.current, { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
        });

        gsap.fromTo(paragraphRef.current, { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 1, // Delayed after the h1
        });
        gsap.fromTo(buttondiv.current, { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 1.5, // Delayed after the h1
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="flex flex-col justify-center items-center mt-12">
            <Image src={"/assets/images/code.png"} alt="code" width={100} height={100} className="pt-10" />
            <div className="flex flex-col justify-center items-center mx-100 w-[60%] z-10">
                {/* Animate this header from bottom to top */}
                <h1 ref={headerRef} className="text-6xl font-extrabold text-textPrimary px-10 text-center">
                    Join us & turn your vision into reality
                </h1>

                {/* Animate this paragraph from bottom to top with a slight delay */}
                <p ref={paragraphRef} className="text-2xl font-normal text-textPrimary px-10 text-center mt-5">
                    The best place to Build and Grow
                </p>

                <div ref={buttondiv} className="grid grid-cols-3 grid-flow-row gap-4 p-4 justify-center items-center">
                    <button className="flex flex-row text-quinary gap-2 justify-center bg-transparent col-span-2 border-[2px] border-quinary hover:bg-quinary hover:text-primaryBackground px-8 p-2 rounded-full transition-colors duration-500 ease-in-out">
                        <Image src={"/assets/images/coding.png"} alt="connect" width={24} height={24} />
                        <p>Create</p>
                    </button>
                    <button className="flex text-quaternary flex-row gap-2 bg-transparent px-4 border-[2px] border-quinary hover:bg-quinary hover:text-primaryBackground p-2 rounded-full transition-colors duration-500 ease-in-out">
                        <p>Let's code</p>
                    </button>
                </div>
            </div>

            {/* Animated images */}
            <Image ref={image1} src={"/assets/images/code.png"} alt="code" width={100} height={100} className="absolute left-24 rotate-45" />
            <Image ref={image2} src={"/assets/images/play-store.png"} alt="code" width={100} height={100} className="absolute left-40 bottom-10 rotate-6" />
            <Image ref={image3} src={"/assets/images/code.png"} alt="code" width={100} height={100} className="absolute right-40 bottom-12 rotate-34" />
            <Image ref={image4} src={"/assets/images/app-store.png"} alt="code" width={100} height={100} className="absolute right-10 rotate-45" />

            <p className="absolute text-[600px] top-16 text-septenary font-extrabold z-0 opacity-10 border-quinary">
                GK
            </p>
        </section>
    );
};

export default Header;
