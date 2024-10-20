import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  h-screen w-full  ">
      <NavBar/>
     
     <div className="flex-1 w-[80%]">
      <Header/>

     </div>
     
    </div>
  );
}
