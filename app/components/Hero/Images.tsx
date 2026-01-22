"use client";
import { motion } from "motion/react";
import Image from "next/image";
export default function Images() {
  return (
    <div className="relative  md:w-full min-h-1 pt-50 md:pt-20 perspective-[4000px] transform-3d">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <Image
          className="shadow-input w-100  md:w-5xl absolute inset-0 rotate-x-20 rotate-y-5 -rotate-z-17 md:translate-x-15 translate-x-9 -translate-y-10 rounded-xl mask-b-from-10% mask-r-from-1%"
          src="/agenforce-demo-2.jpg"
          alt="/agenforce-demo-2.jpg"
          height={100}
          width={1170}
        ></Image>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <Image
        className="shadow-input w-100 md:w-5xl absolute inset-0 rotate-x-20 rotate-y-5 -rotate-z-17 translate-x-10  md:translate-x-35 -translate-y-38 rounded-xl mask-b-from-80% mask-r-from-70%"
        src="/agenforce-demo-1.jpg"
        alt="/agenforce-demo-1.jpg"
        height={100}
        width={1170}
      ></Image>
      </motion.div>
    </div>
  );
}
