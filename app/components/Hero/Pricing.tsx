import Button from "../ui/button"

export default function PricingCard({children ,  className} : {children : React.ReactNode, className ? : string}){
  return <div className="bg-neutral-400 m-4 grid items-center justify-center p-5 grid-cols-2 dark:bg-neutral-700 h-70 w-lg rounded-2xl">
  {children}
  </div>
}


export function CardLeft({className , children,pricing,text} : {className ? : string , children : React.ReactNode,pricing : string,text : string}){
  return(<div className="col-span-1">
 <h1 className="max-w-4xl    text-2xl md:text-4xl lg:text-6xl font-bold font-display">{pricing} <span className="font-display text-neutral-600">/mo</span></h1>
<h1 className="max-w-xs md:text-lg dark:text-neutral-400  text-base font-semibold text-neutral-500 mb-8  font-sans">{text}</h1>
{children}
  </div>)
}

export function CardRight({className , children} : {className ? : string , children : React.ReactNode}){
  return(<div className="col-span-1 flex flex-col">
  {children}
  </div>)
}

export function Svg({className , children} : {className ? : string , children : React.ReactNode}){
  return(<div className="flex ">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled size-5 text-neutral-500"><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path></svg>
    <h1 className="text-sm md:text-base font-sans">{children}</h1>

  </div>)
}