import { cn } from "@/app/utils/tailwind-clsx";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={cn(
          "bg-neutral-200   dark:bg-neutral-800 h-100 w-93  rounded-md  pb-6 md:pb-8 ",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

export function CardTitle({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("px-4 flex text-lg md:text-2xl font-display font-semibold  items-center justify-center", className)}>
      {children}
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="tabler-icon tabler-icon-plus "
      >
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </div>
  );
}


export function CardSkeleton({className,children} : {className ?: string,children : React.ReactNode}){
  return(<div className={cn("rounded-lg  border-2 border-neutral-50 p-2 bg-neutral-300 dark:bg-neutral-800 dark:border-neutral-700",className)}>
    {children}
  </div>)
}

export function SkeletonHeader({children,className}:{children : React.ReactNode,className ? :string}){
  return(<div className={cn("flex gap-2",className)}>{children}</div>)
}
export function SkeletonHeading({children,className}:{children : React.ReactNode,className ? :string}){
  return(<div className="text-base flex items-center gap-2 text-neutral-900 font-semibold font-sans my-2 dark:text-neutral-200">
    {children} 
    <div className={cn("rounded-full flex justify-center items-center gap-1 p-1 border-2 border-red-300 text-red-500",className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-clock size-4"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 7v5l3 3"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-ripple size-4"><path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"></path><path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"></path><path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"></path></svg>
      <h1 className="text-xs">120S</h1>
    </div>
    </div>)
}

export function SkeletonBody({children,className}:{children : React.ReactNode,className ? :string}){
  return(<div className={cn("dark:text-neutral-400  max-w-xs font-sans text-sm md:text-md",className)}>{children}</div>)
}

export function SkeletonFooter({children,className}:{children : React.ReactNode,className ? :string}){
  return(<div className={cn("dark:text-neutral-400 font-semibold my-2 w-fit rounded-lg bg-neutral-200 dark:bg-neutral-700 p-2  font-sans text-sm",className)}>{children}</div>)
}