import Link from "next/link"
import ModeToggle from "../modetoggle"
import Image from "next/image"

export default function Navbar(){
  const links = [{name : "Features" , href : "Features"} , {name : "Product" , href : "/Product"} , {name : "Socials" , href : "/socials"} , {name : "Pricing" , href : "/Pricing"}


]
  return(<div className="rounded-lg max-w-5xl flex  justify-between items-center  dark:bg-neutral-800 p-2 ">
    <div className="flex items-center ">
      <Image className="h-10  rounded-md " src={"/logo.svg"} alt="/logo.svg" height={100} width={100}/>
      
  </div>
    
  {links.map((itm,id)=>(<Link className=" hover:cursor-pointer hover:text-neutral-700 text-sm font-medium"  href={itm.href}>{itm.name}</Link>))}
  
  <div className="flex gap-8">
    <ModeToggle/>
    <button className="text-sm font-medium">Login</button>
  <button className="bg-neutral-800 dark:bg-white dark:text-neutral-800 font-medium text-sm text-white rounded-lg p-2">Sign Up</button>
  </div>
  
  </div>)
}