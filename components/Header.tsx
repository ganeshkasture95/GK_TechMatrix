import Image from "next/image"

const Header = () => {
    return (
        <div className='  h-[90%] flex flex-row   justify-center gap-x-10 '>

            <div className="flex  w-full">
                <div className=" py-24 px-4 sm:px-6 lg:px-10">
                    <div className="">
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Turning</span>
                            <span className="block text-primary xl:inline"> innovative</span>
                        </h1>
                        <h2 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                            <span className="block xl:inline">ideas into</span>
                            <span className="block text-blue-900 xl:inline"> amazing</span>
                        </h2>
                        <p className="mt-6 text-lg leading-7 text-white">
                            Unlocking the Power of Innovation: Transforming Ideas into Extraordinary
                            Solutions
                        </p>
                        <div className="mt-10">
                            <a
                                href="#"
                                className="inline-block bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Our Solution
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full">
                
                <Image src={"/assets/images/hero.jpg"} alt="hero image" width={100} height={100} className="w-full h-[80%] rounded-lg" />
        
            </div>


        </div>
    )
}

export default Header