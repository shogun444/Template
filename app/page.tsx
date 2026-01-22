import Image from "next/image";
import ModeToggle from "./components/modetoggle";
import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (<div className="min-h-screen w-full  mx-auto ">
    <Navbar/>
   <h1 className="text-center text-3xl">Hey this is the font text</h1>
  </div>
  
  );
}
