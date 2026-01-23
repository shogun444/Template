"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Logos() {
  const logos = [
    { src: "/OpenAI.svg" },
    { src: "/proline.svg" },
    { src: "/granola.svg" },
    { src: "/linktree.svg" },
    { src: "/oracle.svg" },
    { src: "/vercel.svg" },
  ];
  return (
    <>
      {logos.map((itm, idx) => (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.2,
            delay: idx * 0.1,
          }}
          key={idx}
        >
          <Image
            className="size-20"
            height={100}
            width={100}
            alt={itm.src}
            src={itm.src}
          ></Image>
        </motion.div>
      ))}
      ;
    </>
  );
}
