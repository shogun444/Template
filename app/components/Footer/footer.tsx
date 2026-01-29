import Container from "@/app/Provider/Container";
import Link from "next/link";
import { SubHeading } from "../Hero/hero";
import TextArea from "../ui/text-area";
import Button from "../ui/button";
import Image from "next/image";

export default function Footer() {
  const productlinks = [
    { name: "Agent Simulator", src: "#" },
    { name: "AI Workflows", src: "#" },
    { name: "Agent Builder", src: "#" },
    { name: "Analytics Dashboard", src: "#" },
    { name: "API Integration", src: "#" },
    { name: "Enterprise Solutions", src: "#" },
  ];

  const companylinks = [
    { name: "About Us", src: "#" },
    { name: "Press", src: "#" },
    { name: "Careers", src: "#" },
    { name: "About Contact", src: "#" },
    { name: "Blog", src: "#" },
  ];

  return (
    <footer className="border-t  border-neutral-800 dark:border-neutral-400">
      <Container>
        
        <div className="md:grid md:grid-cols-4 dark:text-neutral-400  p-5 ">
          <div className="col-span-1">
 <Link href={"/"} className="items-center ">
          <Image
            className="h-10  rounded-md "
            src={"/logo.svg"}
            alt="/logo.svg"
            height={100}
            width={100}
          />
        </Link>
           <h1 className="font-display font-semibold text-neutral-700 dark:text-neutral-400 text-md tracking-tight pt-5"> Safe, observable, outcome-driven AI</h1>
           <Button varient="primary">Start a 30-day trial</Button>
          </div>
          <div className="col-span-1 flex flex-col space-y-1">
            <SubHeading>Product</SubHeading>{" "}
            {productlinks.map((itm, idx) => (
              <Link key={idx} href={itm.src}>
                {itm.name}
              </Link>
            ))}
          </div>
          <div className="col-span-1 flex flex-col space-y-1">
            <SubHeading>Company</SubHeading>{" "}
            {companylinks.map((itm, idx) => (
              <Link className="" key={idx} href={itm.src}>
                {itm.name}
              </Link>
            ))}
          </div>
          <div className="col-span-1">
            <div className="flex flex-col">
              <SubHeading>Newsletter</SubHeading>
            <TextArea/>
              <h1 className="font-sans  tracking-tight pt-4 dark:text-neutral-400">
                Get the latest product news and behind the scenes updates.
              </h1>
              
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
