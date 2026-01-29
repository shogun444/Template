import Button from "./button";


export default function TextArea(){
  return(<div>
    <input className="relative w-md md:w-52 dark:text-neutral-400 border border-neutral-700 dark:bg-neutral-800 rounded-md p-2" type="text" placeholder="Your email" />
    <Button className="absolute inset-x-0 w-fit  " varient="primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-send text-white size-4"><path d="M10 14l11 -11"></path><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path></svg></Button>
  </div>)
}