import { cn } from "../utils/tailwind-clsx";

export default function Container({children , className} : { children : React.ReactNode ,  className? : string}){
  return (<div className={cn("md:max-w-7xl  md:mx-auto mx-2    ",className)}>
    {children}
  </div>)
}