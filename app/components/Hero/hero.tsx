import Container from "@/app/Provider/Container";
import { cn } from "@/app/utils/tailwind-clsx";
import Button from "../ui/button";
import Image from "next/image";
import Images from "./Images";

export default function Hero() {
  return <Container><Header>
Agents that do the work
Approvals that keep you safe.
    <SubHeading>
      Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
    </SubHeading>
   
 
    </Header>
      <Button varient="primary">Start your free trial</Button> 
      <Button varient="secondary">View role based demos</Button>
      <Images/>
      
    </Container>;
}

export function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl mb-5 mt-10 md:mt-20 lg:mt-32  text-2xl md:text-4xl lg:text-6xl font-bold font-display", className)}>
      {children}
    </div>
  );
}

export function SubHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("max-w-xl md:text-lg dark:text-neutral-400  text-base font-semiboldbold text-neutral-500 pt-5 font-sans", className)}>{children}</div>;
}
