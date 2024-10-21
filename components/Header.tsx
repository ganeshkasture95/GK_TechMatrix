import Image from "next/image"


const Header = () => {
    return (
        <section className=" flex flex-col justify-center items-center mt-12">
            <Image src={"/assets/images/code.png"} alt="code" width={100} height={100}/>
            <div className=" mx-100 w-[60%]">
                <h1 className="text-6xl font-extrabold text-textPrimary px-10 text-center">Join us & turn your vision into reality</h1>
                <p className="text-2xl font-bold text-textPrimary px-10 text-center mt-5">The best place to Build and Grow</p>
            </div>
        </section>
    )
}

export default Header