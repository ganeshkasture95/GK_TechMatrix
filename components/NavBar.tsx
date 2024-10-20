import { pages } from "@/data"

const NavBar = () => {
    return (
        <div className="flex flex-row w-full p-5 bg-gradient-to-r from-neutral-950 to-black h-fit justify-between px-24  ">
            <div>
                <h1 className="text-2xl font-bold ">
                    GK Logo
                </h1>
            </div>

            <div className="flex flex-row gap-4  items-center  ">
                {pages.map((page, index) => (
                    <a key={index} href={`/${page.name}`} className="hover:text-blue-900 transition">
                        <h1>{page.name}</h1> {/* Capitalizes the page name */}
                    </a>
                ))}
            </div>
            <div>
                <button className="bg-blue-900 hover:bg-black hover:border-blue-900 transition border-2 border-black hover:border-primary text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>

        </div>
    )
}

export default NavBar