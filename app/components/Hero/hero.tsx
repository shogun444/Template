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

            <CardTitle className="absolute bottom-5">Prebuilt Agents, Tuned to Your Workflows</CardTitle>
          </Card>
          <Card>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
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
