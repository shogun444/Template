import Link from "next/link"
import ModeToggle from "../modetoggle"
import Image from "next/image"
import Container from "@/app/Provider/Container"

export default function Navbar(){
  const links = [{name : "Features" , href : "Features"} , {name : "Product" , href : "/Product"} , {name : "Socials" , href : "/socials"} , {name : "Pricing" , href : "/Pricing"}


]
  return(
  <Container>
  <div className="rounded-lg w-full flex  justify-between items-center  dark:bg-neutral-800 p-2 ">
    <Link href={'/'} className="flex items-center ">
      <Image className="h-10  rounded-md " src={"/logo.svg"} alt="/logo.svg" height={100} width={100}/>
      
  </Link>
    
  {links.map((itm,id)=>(<Link key={id} className=" hover:cursor-pointer hover:text-neutral-700 text-sm font-medium"  href={itm.href}>{itm.name}</Link>))}
  
  <div className="flex gap-8 items-center">
    <ModeToggle/>
    <Link href={'/login'} className="text-sm font-medium">Login</Link>
  <Link href={'/signup'} className=" bg-neutral-800 dark:bg-white dark:text-neutral-800 font-medium text-sm text-white rounded-lg p-2">Sign Up</Link >
  </div>
  
  </div> </Container>)
}