import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ShieldIllustration } from "./Illustrations";

export function DottedGlowBackgroundDemoSecond() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
        <div className="relative  flex  w-full items-center justify-center h-79 text-center ">
        <ShieldIllustration />
      </div>
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-95% dark:mask-radial-to-70% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-600"
        glowColorLightVar="--color-neutral-400"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

    
    </div>
  );
}
