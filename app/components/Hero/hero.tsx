import Container from "@/app/Provider/Container";
import { cn } from "@/app/utils/tailwind-clsx";
import Button from "../ui/button";
import Image from "next/image";
import Images from "./Images";
import Logos from "./logo";

export default function Hero() {
  return (
    <>
      <Container>
        <Header>
          Agents that do the work Approvals that keep you safe.
        </Header>

        <SubHeading>
            Deploy AI agents that plan, act through your tools, and report
            outcomes—without changing how your teams work.
          </SubHeading>
        <Button varient="primary">Start your free trial</Button>
        <Button varient="secondary">View role based demos</Button>
        {/* <Images /> */}
      </Container>
      <Container className="my-32">
        <SubHeading className=" max-w-sm mx-auto text-center">
          Trusted by modern operators across industries. From pilot to scale
          without chaos.
        </SubHeading>
        <div className="mx-30  grid grid-cols-3 gap-7 justify-items-center">
          <Logos />
        </div>

        <Container className="flex items-baseline-last">
          <Header className="w-3xl" >Built for Fast Moving  Teams That Need Control.</Header>
          <SubHeading className="w-2xl"> 
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </Container>

        <Header className="max-w-2xl">
          Built for Speed Designed for Scale
         
        </Header>
         <SubHeading>
            Deploy AI agents that plan, act through your tools, and report
            outcomes—without changing how your teams work.
          </SubHeading>
      </Container>
    </>
  );
}

export function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl mb-5 pt-8 md:mt-20 lg:mt-32  text-2xl md:text-4xl lg:text-6xl font-bold font-display",
        className,
      )}
    >
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
  return (
    <div
      className={cn(
        "max-w-xl md:text-lg dark:text-neutral-400  text-base font-semibold text-neutral-500 mb-8  font-sans",
        className,
      )}
    >
      {children}
    </div>
  );
}
