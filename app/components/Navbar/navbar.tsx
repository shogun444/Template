"use client";
import Link from "next/link";
import ModeToggle from "../modetoggle";
import Image from "next/image";
import Container from "@/app/Provider/Container";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const links = [
    { name: "Features", href: "Features" },
    { name: "Product", href: "/Product" },
    { name: "Socials", href: "/socials" },
    { name: "Pricing", href: "/Pricing" },
  ];
  const [visible, setVisbible] = useState(false);

  return (
    <Container>
      <div className="rounded-lg w-full flex  justify-between items-center  dark:bg-neutral-800 p-2 ">
        <Link href={"/"} className="flex items-center ">
          <Image
            className="h-10  rounded-md "
            src={"/logo.svg"}
            alt="/logo.svg"
            height={100}
            width={100}
          />
        </Link>

        <div
          onClick={() => setVisbible((prev) => !prev)}
          className="flex    items-center md:hidden "
        >
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  backdropFilter: "blur(10px)",
                }}
                onClick={(e) => e.stopPropagation()}
                className="absolute group flex bg-neutral-300/10  flex-col top-0  w-full h-screen overflow-hidden z-10 gap-5  -translate-x-[93%] mx-auto pl-4"
              >
                <div className="flex mt-2 justify-between items-center">
                  <Image
                    className="h-10 rounded-md "
                    src={"/logo.svg"}
                    alt="/logo.svg"
                    height={100}
                    width={100}
                  />
                  <span
                    onClick={() => setVisbible(false)}
                    className="mr-2 hover:cursor-pointer hover:text-neutral-600"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-x "
                    >
                      <path d="M18 6l-12 12"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>{" "}
                  </span>
                </div>

                {links.map((itm, id) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: id * 0.1,
                    }}  key={id}
                  >
                    <Link
                     
                      className=" hover:cursor-pointer transition-all duration-150 hover:text-neutral-600 text-xl font-medium"
                      href={itm.href}
                    >
                      {itm.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                 initial={{ opacity: 0, }}
                    animate={{
                      opacity: 1,
                      
                    }}
                className="flex  h-full m-5 gap-6 items-end justify-end ">
        
          <Link href={"/login"} className="text-lg mb-2 font-medium">
            Login
          </Link>
          <Link
            href={"/signup"}
            className=" bg-neutral-800 dark:bg-white dark:text-neutral-800 font-medium  text-lg text-white rounded-lg p-2"
          >
            Sign Up
          </Link>
        </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-layout-sidebar size-5"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 4l0 16"></path>
          </svg>
        </div>
        <div className="hidden md:flex  items-center gap-10">
          {" "}
          {links.map((itm, id) => (
            <Link
              key={id}
              className=" hover:cursor-pointer hover:text-neutral-700 text-base font-medium"
              href={itm.href}
            >
              {itm.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <ModeToggle />
          <Link href={"/login"} className="text-sm font-medium">
            Login
          </Link>
          <Link
            href={"/signup"}
            className=" bg-neutral-800 dark:bg-white dark:text-neutral-800 font-medium text-sm text-white rounded-lg p-2"
          >
            Sign Up
          </Link>
        </div>
      </div>{" "}
    </Container>
  );
}
