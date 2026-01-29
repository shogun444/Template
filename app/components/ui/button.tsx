import { cn } from "@/app/utils/tailwind-clsx"

interface button  {
 className ? : string ,
  children : React.ReactNode,
  varient : "primary" | "secondary" | "pricing"

}

export default function Button({className , children , varient } : button){
const buttonVarients ={
  primary : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 shadow-button",
  secondary : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 ",
  pricing : "hover:shadow-button bg-neutral-100 text-neutral-800"
} 
  return(<button className={cn(" px-4 cursor-pointer tracking-tight py-2 rounded-md font-display text-[14px] font-semibold ", buttonVarients[varient],className)}>
    {children}
  </button>)
}