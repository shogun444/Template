import Image from "next/image";
import ModeToggle from "./components/modetoggle";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";

export default function Home() {
  return (<div className="min-h-screen w-full  mx-auto ">
    <Navbar/>
    <Hero/>
  </div>
  
  );
}
