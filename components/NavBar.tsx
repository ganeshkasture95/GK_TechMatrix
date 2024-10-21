import { pages } from "@/data"
import Image from "next/image"

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between fixed top-0 w-full p-2 px-24 backdrop-blur-lg bg-background/30 border-b border-white/10 shadow-lg z-50">
            <div className="flex flex-row justify-center items-center gap-1">
                <Image src={"/assets/images/glogo.png"} alt="logo" width={38} height={38} />
                <p className="text-xl font-extrabold ">K</p>
            </div>

            <div className="flex flex-row gap-4  items-center  ">
                {pages.map((page, index) => (
                    <a key={index} href={`/${page.name}`} className="hover:text-septenary transition-colors duration-500 ease-in-out ">
                        <h1>{page.name}</h1> {/* Capitalizes the page name */}
                    </a>
                ))}
            </div>
            <div>
                <button className="bg-transparent border-[2px] border-quinary hover:bg-quinary hover:text-primaryBackground px-4 p-2 rounded-lg  transition-colors duration-500 ease-in-out">Get Started</button>
            </div>
        </div>
    )
}

export default NavBar