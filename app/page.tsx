import About from "@/components/About";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex  bg-primaryBackground flex-col h-screen  items-center  w-full ">
      <NavBar />
      <Header />
      <About/>
    </div>
  );
}
