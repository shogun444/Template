import Container from "@/app/Provider/Container";
import { cn } from "@/app/utils/tailwind-clsx";
import Button from "../ui/button";
import Image from "next/image";
import Images from "./Images";
import Logos from "./logo";
import Card, {
  CardSkeleton,
  CardTitle,
  SkeletonBody,
  SkeletonFooter,
  SkeletonHeader,
  SkeletonHeading,
} from "./Card";

export default function Hero() {
  return (
    <>
      <Container>
        <Header>Agents that do the work Approvals that keep you safe.</Header>

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

        <Container className="md:flex md:items-baseline-last">
          <Header className="md:w-3xl">
            Built for Fast Moving Teams That Need Control.
          </Header>
          <SubHeading className="md:w-2xl">
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </Container>
        <div className="my-8 grid  justify-items-center grid-cols-1 md:grid-cols-3">
          <Card className="md:rounded-l-4xl relative overflow-hidden">
            <CardSkeleton className="absolute z-1 perspective-distant transform-3d translate-y-10 -rotate-x-17 rotate-y-15 rotate-z-5">
              <SkeletonHeader>
                <SkeletonHeading className="text-yellow-500 border-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-dashed-check size-5"
                  >
                    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  Risk Analysis
                </SkeletonHeading>
              </SkeletonHeader>
              <SkeletonBody>
                Creates clear, ready-to-use campaign briefs using product info,
                audience data, and past results.
              </SkeletonBody>
              <SkeletonHeader>
                <SkeletonFooter>Google Ads</SkeletonFooter>
                <SkeletonFooter>Saas</SkeletonFooter>
                <SkeletonFooter>Content</SkeletonFooter>
              </SkeletonHeader>
            </CardSkeleton>
            <CardSkeleton className="absolute z-4 perspective-distant transform-3d translate-x-2 translate-y-20 -rotate-x-17 w-90 rotate-y-15 rotate-z-5">
              <SkeletonHeader>
                <SkeletonHeading className="text-green-700 border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-dashed-check size-5"
                  >
                    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  Issue Tracker
                </SkeletonHeading>
              </SkeletonHeader>
              <SkeletonBody>
                Creates clear, ready-to-use campaign briefs using product info,
                audience data, and past results.
              </SkeletonBody>
              <SkeletonHeader>
                <SkeletonFooter>Google Ads</SkeletonFooter>
                <SkeletonFooter>Saas</SkeletonFooter>
                <SkeletonFooter>Content</SkeletonFooter>
              </SkeletonHeader>
            </CardSkeleton>
            <CardSkeleton className="absolute z-4 perspective-distant transform-3d translate-x-4 w-93 translate-y-33 -rotate-x-17 rotate-y-12 rotate-z-5">
              <SkeletonHeader>
                <SkeletonHeading>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-dashed-check size-5"
                  >
                    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  Campaign Planner
                </SkeletonHeading>
              </SkeletonHeader>
              <SkeletonBody>
                Creates clear, ready-to-use campaign briefs using product info,
                audience data, and past results.
              </SkeletonBody>
              <SkeletonHeader>
                <SkeletonFooter>Google Ads</SkeletonFooter>
                <SkeletonFooter>Saas</SkeletonFooter>
                <SkeletonFooter>Content</SkeletonFooter>
              </SkeletonHeader>
            </CardSkeleton>

            <CardTitle className="absolute bottom-5">
              Prebuilt Agents, Tuned to Your Workflows
            </CardTitle>
          </Card>
          <Card className=" relative  overflow-hidden perspective-distant transform-3d">
            <CardSkeleton className="border-2 w-82 border-neutral-100  translate-y-4 translate-x-10  -rotate-z-15 -rotate-y-1 rotate-x-10 mask-b-from-60% pb-15 ">
              <SkeletonHeader className="relative font-medium flex items-center tracking-tighter pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-circle-dashed-check size-4"
                >
                  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                  <path d="M9 12l2 2l4 -4"></path>
                </svg>
                Campaign Planner
              </SkeletonHeader>
              <div
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(315deg , gray 0px , gray 1px, transparent 1px ,  transparent 50%)",
                    backgroundSize : "10px 10px",

                }}
                className=" border-l-2 group hover:border-l-0 transition-all duration-200 mask-b-from-96%  h-42  w-75 border-neutral-100 pl-2  rounded-lg relative"
              >
                <div className=" border-2 absolute inset-x-2 -inset-y-2 transition-all duration-300 group-hover:inset-0 w-75 bg-neutral-300  border-neutral-100 rounded-lg p-2">
                  <CardComponents className="" />
                </div>
              </div>
            </CardSkeleton>

            <CardTitle className="absolute bottom-5 ">
              Automate Handoffs, Reduce Ops Friction
            </CardTitle>
          </Card>
          <Card className="md:rounded-r-2xl">
            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
          </Card>
        </div>
        <Header className="max-w-4xl">
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

export function CardComponents({ className }: { className?: string }) {
  const components = [
    { text: "Fetching Data", time: "10S" },
    { text: "Processing Data", time: "20S" },
    { text: "Performing Action", time: "30S" },
    { text: "Waiting", time: "40S" },
    { text: "Generating Report", time: "50S" },
  ];
  return (
    <>
      {components.map((itm, idx) => (
        <div
          key={idx}
          className={cn(
            "flex  justify-between items-center  space-y-2",
            className,
          )}
        >
          <SkeletonHeader className="font-sans text-sm text-neutral-800 font-medium">
            <span className={`flex justify-center items-center size-4 rounded-full ${  itm.text === "Generating Report"? 'bg-yellow-500' : 'bg-green-500' }`}>
              {itm.text === "Generating Report"? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-loader-2 size-3 text-white animate-spin"><path d="M12 3a9 9 0 1 0 9 9"></path></svg> :  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-check size-3  stroke-white  "
              >
                <path d="M5 12l5 5l10 -10"></path>
              </svg>}
             
              
            </span>

            {itm.text}
          </SkeletonHeader>
          <SkeletonHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-ripple size-4"
            >
              <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"></path>
              <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"></path>
              <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"></path>
            </svg>
            <h1 className="text-xs">{itm.time}</h1>
          </SkeletonHeader>
        </div>
      ))}{" "}
    </>
  );
}
