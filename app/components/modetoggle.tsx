"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function ModeToggle(){
  
const {systemTheme,theme,setTheme} = useTheme()
const currentTheme = theme === "system" ? systemTheme : theme
const [mounted,setMounted] = useState(false)
useEffect( () => {
  setMounted(true)
},[])
if(!mounted) return null
 
 return(<div  onClick={()=>setTheme(currentTheme === "light" ? "dark" : "light")}  className="p-2 cursor-pointer bg-neutral-100 w-fit rounded-md shadow-input  dark:bg-neutral-800 transition-all duration-200" >
    {theme === "light" ?  
    <div className=" scale-100 rotate-90 data:rotate-6    text-neutral-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg></div>
     : <div className=" rotate-10 scale-0 dark:scale-100  text-neutral-300 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg> </div>  }
   
   
    </div>)
}