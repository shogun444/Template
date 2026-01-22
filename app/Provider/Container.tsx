import { cn } from "../utils/tailwind-clsx";

export default function Container({children , className} : { children : React.ReactNode ,  className? : string}){
  return (<div className={cn("max-w-7xl mx-auto   ",className)}>
    {children}
  </div>)
}